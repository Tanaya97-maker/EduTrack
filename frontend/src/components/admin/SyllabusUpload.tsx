import React, { useState, useEffect } from 'react';
import { Department, UploadedSyllabus } from '../../types';
import { Upload, FileText, CheckCircle, X, Loader2, AlertCircle, RefreshCw, ExternalLink } from 'lucide-react';
import { apiService } from '../../services/apiService';
import { supabase } from '../../supabaseClient';

interface Props {
    departments: Department[];
}

const SyllabusUpload: React.FC<Props> = ({ departments }) => {
    const [file, setFile] = useState<File | null>(null);
    const [selectedDept, setSelectedDept] = useState<number>(departments[0]?.dept_id || 0);
    const [semester, setSemester] = useState<number>(1);
    const [isUploading, setIsUploading] = useState(false);
    const [uploads, setUploads] = useState<UploadedSyllabus[]>([]);
    const [status, setStatus] = useState<{ type: 'success' | 'error', message: string } | null>(null);

    useEffect(() => {
        fetchUploads();
    }, []);

    const fetchUploads = async () => {
        const data = await apiService.getSyllabusUploads();
        setUploads(data);
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setFile(e.target.files[0]);
        }
    };

    const handleUpload = async () => {
        if (!file || !selectedDept) return;

        setIsUploading(true);
        setStatus(null);

        try {
            const fileName = `${Date.now()}_${file.name.replace(/\s+/g, '_')}`;
            const filePath = `syllabus/${selectedDept}/${semester}/${fileName}`;
            const bucketName = 'EduTrack';

            // 1. Upload to Supabase Storage
            const { error: uploadError } = await supabase.storage
                .from(bucketName)
                .upload(filePath, file, {
                    cacheControl: '3600',
                    upsert: true
                });

            if (uploadError) throw new Error(`Storage error: ${uploadError.message}`);

            // 2. Get Public URL
            const { data: { publicUrl } } = supabase.storage
                .from(bucketName)
                .getPublicUrl(filePath);

            // 3. Notify Backend (Async Zapier Trigger)
            const result = await apiService.uploadSyllabus({
                dept_id: selectedDept,
                semester: semester.toString(),
                file_url: publicUrl
            });

            if (result.message) {
                setStatus({ type: 'success', message: result.message });
                setFile(null);
                fetchUploads();
            } else {
                setStatus({ type: 'error', message: result.error || 'Failed to start processing' });
            }
        } catch (e: any) {
            setStatus({ type: 'error', message: e.message || 'An unexpected error occurred' });
        } finally {
            setIsUploading(false);
        }
    };

    const handleRetry = async (packageId: number) => {
        const result = await apiService.retrySyllabusUpload(packageId);
        if (result.message) {
            fetchUploads();
        } else {
            alert(result.error || "Retry failed");
        }
    };

    return (
        <div className="space-y-6">
            <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden p-6">
                <div className="flex items-center gap-3 mb-6">
                    <div className="p-2.5 bg-indigo-50 rounded-xl text-indigo-600">
                        <Upload className="w-5 h-5" />
                    </div>
                    <div>
                        <h3 className="text-base font-black text-slate-800 tracking-tight">Upload Syllabus</h3>
                        <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Select Department & Semester</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    <div className="space-y-1">
                        <label className="text-[8px] font-black text-slate-400 uppercase tracking-widest ml-1">Department</label>
                        <select
                            className="w-full p-2.5 rounded-lg bg-slate-50 border border-slate-200 focus:border-indigo-400 transition-all font-bold text-xs outline-none"
                            value={selectedDept}
                            onChange={(e) => setSelectedDept(Number(e.target.value))}
                        >
                            <option value="">Select Dept</option>
                            {departments.map(d => <option key={d.dept_id} value={d.dept_id}>{d.dept_name}</option>)}
                        </select>
                    </div>
                    <div className="space-y-1">
                        <label className="text-[8px] font-black text-slate-400 uppercase tracking-widest ml-1">Semester</label>
                        <select
                            className="w-full p-2.5 rounded-lg bg-slate-50 border border-slate-200 focus:border-indigo-400 transition-all font-bold text-xs outline-none"
                            value={semester}
                            onChange={(e) => setSemester(Number(e.target.value))}
                        >
                            {[1, 2, 3, 4, 5, 6, 7, 8].map(s => <option key={s} value={s}>Semester {s}</option>)}
                        </select>
                    </div>
                    <div className="flex items-end">
                        <button
                            disabled={!file || !selectedDept || isUploading}
                            onClick={handleUpload}
                            className={`w-full p-2.5 rounded-lg font-black text-[10px] uppercase tracking-widest transition-all flex items-center justify-center gap-2 ${!file || !selectedDept || isUploading ? 'bg-slate-100 text-slate-400 cursor-not-allowed' : 'bg-indigo-600 text-white hover:bg-indigo-700 shadow-indigo-100'}`}
                        >
                            {isUploading ? <Loader2 className="w-3 h-3 animate-spin" /> : <Upload className="w-3 h-3" />}
                            {isUploading ? 'Preparing...' : 'Publish Syllabus'}
                        </button>
                    </div>
                </div>

                <div className="mb-4">
                    <label className="group flex items-center justify-between w-full h-14 px-4 border-2 border-dashed border-indigo-100 rounded-xl hover:border-indigo-400 transition-all cursor-pointer bg-slate-50/50">
                        <input type="file" className="hidden" onChange={handleFileChange} accept=".pdf,image/*" />
                        {file ? (
                            <div className="flex items-center gap-3 w-full">
                                <FileText className="w-5 h-5 text-indigo-600" />
                                <div className="flex-1 min-w-0">
                                    <p className="font-semibold text-slate-700 text-sm truncate">{file.name}</p>
                                    <p className="text-[10px] text-slate-400">{(file.size / 1024).toFixed(1)} KB</p>
                                </div>
                                <button onClick={(e) => { e.preventDefault(); setFile(null); }} className="p-1 hover:bg-slate-200 rounded-full">
                                    <X className="w-4 h-4 text-slate-400" />
                                </button>
                            </div>
                        ) : (
                            <div className="flex items-center gap-3 w-full">
                                <Upload className="w-5 h-5 text-indigo-400" />
                                <p className="font-semibold text-indigo-900 text-sm">Choose Syllabus File (PDF/Image)</p>
                                <p className="text-[10px] text-slate-400 ml-auto uppercase tracking-tighter">Max 10MB</p>
                            </div>
                        )}
                    </label>
                </div>

                {status && (
                    <div className={`p-3 rounded-lg flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest border ${status.type === 'success' ? 'bg-emerald-50 text-emerald-700 border-emerald-100' : 'bg-rose-50 text-rose-700 border-rose-100'}`}>
                        {status.type === 'success' ? <CheckCircle className="w-4 h-4" /> : <X className="w-4 h-4" />}
                        {status.message}
                    </div>
                )}
            </div>

            {/* List of Recent Uploads */}
            <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
                <div className="px-6 py-4 border-b border-slate-100 bg-slate-50/50">
                    <h3 className="text-sm font-black text-slate-800 uppercase tracking-widest">Syllabus Processing History</h3>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead className="bg-slate-50 border-b border-slate-100">
                            <tr>
                                <th className="px-6 py-3 text-[10px] font-black text-slate-400 uppercase tracking-widest">Dept & Sem</th>
                                <th className="px-6 py-3 text-[10px] font-black text-slate-400 uppercase tracking-widest">Status</th>
                                <th className="px-6 py-3 text-[10px] font-black text-slate-400 uppercase tracking-widest">Upload Date</th>
                                <th className="px-6 py-3 text-[10px] font-black text-slate-400 uppercase tracking-widest text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-50 font-bold text-xs">
                            {uploads.length > 0 ? (
                                uploads.map((u) => (
                                    <tr key={u.package_id} className="hover:bg-slate-50/50 transition-colors">
                                        <td className="px-6 py-4">
                                            <div className="flex flex-col">
                                                <span className="text-slate-800">{u.departments?.dept_name}</span>
                                                <span className="text-[10px] text-indigo-500 uppercase tracking-tighter">Semester {u.semester}</span>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[9px] uppercase tracking-widest ${u.status === 'completed' ? 'bg-emerald-50 text-emerald-700' :
                                                u.status === 'failed' ? 'bg-rose-50 text-rose-700' :
                                                    'bg-amber-50 text-amber-700'
                                                }`}>
                                                {u.status === 'processing' && <Loader2 className="w-2.5 h-2.5 animate-spin" />}
                                                {u.status === 'completed' && <CheckCircle className="w-2.5 h-2.5" />}
                                                {u.status === 'failed' && <AlertCircle className="w-2.5 h-2.5" />}
                                                {u.status}
                                            </div>
                                            {u.error_msg && <p className="text-[8px] text-rose-500 mt-1 max-w-[200px] truncate" title={u.error_msg}>{u.error_msg}</p>}
                                        </td>
                                        <td className="px-6 py-4 text-slate-500">
                                            {u.uploaded_at ? new Date(u.uploaded_at).toLocaleString() : 'N/A'}
                                        </td>
                                        <td className="px-6 py-4 text-right">
                                            <div className="flex items-center justify-end gap-2">
                                                <a href={u.file_url} target="_blank" rel="noopener noreferrer" className="p-2 text-slate-400 hover:text-indigo-600 transition-colors">
                                                    <ExternalLink className="w-4 h-4" />
                                                </a>
                                                {u.status === 'failed' && (
                                                    <button onClick={() => handleRetry(u.package_id)} className="p-2 text-amber-600 hover:bg-amber-50 rounded-lg transition-all" title="Retry Processing">
                                                        <RefreshCw className="w-4 h-4" />
                                                    </button>
                                                )}
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan={4} className="px-6 py-12 text-center text-slate-400">
                                        <div className="flex flex-col items-center">
                                            <FileText className="w-12 h-12 mb-2 opacity-10" />
                                            <p className="font-bold">No uploads found</p>
                                        </div>
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default SyllabusUpload;
