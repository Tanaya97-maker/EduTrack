import React, { useState } from 'react';
import { Faculty, UploadedSchedule, Department } from '../../types';
import { Upload, FileText, CheckCircle, X, Loader2 } from 'lucide-react';
import { apiService } from '../../services/apiService';
import { supabase } from '../../supabaseClient';

interface Props {
    faculty: Faculty;
    departments: Department[];
    onUploadSuccess: () => void;
}

const TimetableUpload: React.FC<Props> = ({ faculty, departments, onUploadSuccess }) => {
    const [file, setFile] = useState<File | null>(null);
    const [semester, setSemester] = useState<number>(1);
    const [division, setDivision] = useState<string>('A');
    const [isUploading, setIsUploading] = useState(false);
    const [status, setStatus] = useState<{ type: 'success' | 'error', message: string } | null>(null);

    const [isPreviewOpen, setIsPreviewOpen] = useState(false);

    if (!faculty.is_timetable_admin) return null;

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setFile(e.target.files[0]);
        }
    };

    const handleUpload = async () => {
        if (!file) return;

        setIsUploading(true);
        setStatus(null);
        setIsPreviewOpen(false);

        try {
            // Use loose comparison to handle string/number mismatch
            const deptObj = departments.find(d => String(d.dept_id) === String(faculty.dept_id));
            const deptName = deptObj ? deptObj.dept_name.split(' ')[0] : 'dept';

            if (!deptObj) {
                console.warn('Department not found for faculty:', faculty.dept_id);
            }

            const fileName = file.name.replace(/\s+/g, '_'); // Replace spaces with underscores
            const filePath = `timetable/student/${deptName}/sem${semester}/div${division}/${fileName}`;
            const bucketName = 'EduTrack';

            // 1. Upload file to Supabase Storage
            const { error: uploadError } = await supabase.storage
                .from(bucketName)
                .upload(filePath, file, {
                    cacheControl: '3600',
                    upsert: true
                });

            if (uploadError) {
                console.error('Supabase upload error:', uploadError);
                throw new Error(`Storage upload failed: ${uploadError.message}`);
            }

            // 2. Get Public URL
            const { data: publicUrlData } = supabase.storage
                .from(bucketName)
                .getPublicUrl(filePath);

            const fileUrl = publicUrlData.publicUrl;

            const payload = {
                faculty_id: faculty.faculty_id,
                dept_id: faculty.dept_id,
                semester: semester,
                division: division.toUpperCase(),
                file_url: fileUrl
            };

            const result = await apiService.uploadSchedule(payload);

            if (result.success) {
                setStatus({ type: 'success', message: 'Timetable uploaded successfully!' });
                setFile(null);
                onUploadSuccess();
            } else {
                setStatus({ type: 'error', message: result.error || 'Failed to upload' });
            }
        } catch (e) {
            setStatus({ type: 'error', message: 'An unexpected error occurred' });
        } finally {
            setIsUploading(false);
        }
    };

    return (
        <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden flex flex-col relative">
            {/* Preview Modal */}
            {isPreviewOpen && file && (
                <div className="fixed inset-0 z-[100] bg-slate-900/40 backdrop-blur-sm flex items-center justify-center p-8 animate-in fade-in duration-300">
                    <div className="bg-white rounded-3xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col animate-in zoom-in duration-300">
                        <div className="p-4 border-b border-slate-100 flex justify-between items-center bg-indigo-50/50">
                            <div>
                                <h4 className="font-bold text-slate-800">Timetable Preview</h4>
                                <p className="text-[10px] font-black text-indigo-500 uppercase tracking-widest">Sem {semester} - Div {division}</p>
                            </div>
                            <button
                                onClick={() => setIsPreviewOpen(false)}
                                className="p-2 hover:bg-white rounded-xl text-slate-400 transition-colors"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>
                        <div className="flex-1 overflow-auto p-6 bg-slate-50 flex items-center justify-center">
                            {file.type.startsWith('image/') ? (
                                <img
                                    src={URL.createObjectURL(file)}
                                    alt="Preview"
                                    className="max-w-full rounded-xl shadow-lg"
                                />
                            ) : (
                                <div className="p-12 text-center text-slate-400">
                                    <FileText className="w-16 h-16 mx-auto mb-4 opacity-20" />
                                    <p className="text-lg font-bold">PDF Preview Not Available</p>
                                    <p className="text-sm">Please publish to view PDF content</p>
                                </div>
                            )}
                        </div>
                        <div className="p-4 border-t border-slate-100 bg-white flex justify-end gap-3">
                            <button
                                onClick={() => setIsPreviewOpen(false)}
                                className="px-6 py-2.5 rounded-xl font-bold text-xs text-slate-500 hover:bg-slate-100 transition-colors"
                            >
                                Back to Edit
                            </button>
                            <button
                                onClick={handleUpload}
                                disabled={isUploading}
                                className="px-8 py-2.5 bg-indigo-600 text-white rounded-xl font-black text-[10px] uppercase tracking-widest hover:bg-indigo-700 shadow-lg shadow-indigo-100 transition-all flex items-center gap-2"
                            >
                                {isUploading ? <Loader2 className="w-3 h-3 animate-spin" /> : <Upload className="w-3 h-3" />}
                                Publish Now
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Top Right Toast-style Success Popup */}
            {status && status.type === 'success' && (
                <div className="absolute -top-4 -right-4 z-50 bg-emerald-600 text-white px-4 py-2 rounded-xl shadow-xl flex items-center gap-2 animate-in slide-in-from-top-4 duration-300">
                    <CheckCircle className="w-4 h-4" />
                    <span className="text-[10px] font-black uppercase tracking-widest">{status.message}</span>
                    <button onClick={() => setStatus(null)} className="ml-2 hover:bg-white/20 rounded-full p-0.5 transition-colors">
                        <X className="w-3 h-3" />
                    </button>
                </div>
            )}

            <div className="px-6 py-4">
                <div className="flex items-center gap-3 mb-5">
                    <div className="p-2.5 bg-indigo-50 rounded-xl text-indigo-600">
                        <Upload className="w-5 h-5" />
                    </div>
                    <div>
                        <h3 className="text-base font-black text-slate-800 tracking-tight">Timetable Upload</h3>
                        <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Authorized Faculty Only</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-3 mb-5">
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
                    <div className="space-y-1">
                        <label className="text-[8px] font-black text-slate-400 uppercase tracking-widest ml-1">Division</label>
                        <select
                            className="w-full p-2.5 rounded-lg bg-slate-50 border border-slate-200 focus:border-indigo-400 transition-all font-bold text-xs outline-none uppercase"
                            value={division}
                            onChange={(e) => setDivision(e.target.value)}
                        >
                            {['A', 'B', 'C', 'D'].map(d => <option key={d} value={d}>{d}</option>)}
                        </select>
                    </div>
                    <div className="flex items-end">
                        <button
                            disabled={!file || isUploading}
                            onClick={() => setIsPreviewOpen(true)}
                            className={`w-full p-2.5 rounded-lg font-black text-[10px] uppercase tracking-widest transition-all flex items-center justify-center gap-2 border-2 ${!file || isUploading ? 'border-slate-100 text-slate-400 cursor-not-allowed' : 'border-indigo-100 text-indigo-600 hover:bg-indigo-50 active:scale-[0.98]'}`}
                        >
                            <FileText className="w-3 h-3" />
                            Preview
                        </button>
                    </div>
                    <div className="flex items-end">
                        <button
                            disabled={!file || isUploading}
                            onClick={handleUpload}
                            className={`w-full p-2.5 rounded-lg font-black text-[10px] uppercase tracking-widest transition-all flex items-center justify-center gap-2  ${!file || isUploading ? 'bg-slate-100 text-slate-400 cursor-not-allowed' : 'bg-indigo-600 text-white hover:bg-indigo-700 shadow-indigo-100 active:scale-[0.98]'}`}
                        >
                            {isUploading ? <Loader2 className="w-3 h-3 animate-spin" /> : <Upload className="w-3 h-3" />}
                            {isUploading ? 'Uploading...' : 'Publish'}
                        </button>
                    </div>
                </div>

                <div>
                    <label
                        className="group flex items-center justify-between w-full h-12 px-4 border-2 border-dashed border-indigo-100 rounded-xl hover:border-indigo-400 transition-all cursor-pointer bg-slate-50/50"
                    >
                        <input
                            type="file"
                            className="hidden"
                            onChange={handleFileChange}
                            accept=".pdf,image/*"
                        />

                        {file ? (
                            <div className="flex items-center gap-3 w-full">
                                <FileText className="w-5 h-5 text-indigo-600 group-hover:scale-110 transition-transform" />
                                <p className="font-semibold text-slate-700 text-sm truncate flex-1">
                                    {file.name}
                                </p>
                                <p className="text-xs text-slate-400 font-semibold">
                                    {(file.size / 1024).toFixed(1)} KB
                                </p>
                            </div>
                        ) : (
                            <div className="flex items-center gap-3 w-full">
                                <Upload className="w-5 h-5 text-indigo-400 group-hover:scale-110 transition-transform" />
                                <p className="font-semibold text-indigo-900 text-sm">
                                    Choose Timetable
                                </p>
                                <p className="text-xs text-slate-400 ml-auto">
                                    PDF or Images
                                </p>
                            </div>
                        )}
                    </label>
                </div>
            </div>

            {status && status.type === 'error' && (
                <div className="mb-5 p-3 rounded-xl flex items-center gap-2 bg-rose-50 text-rose-700 border border-rose-100 animate-in fade-in">
                    <X className="w-4 h-4" />
                    <p className="text-[10px] font-bold uppercase tracking-widest">{status.message}</p>
                </div>
            )}
        </div>
    );
};

export default TimetableUpload;
