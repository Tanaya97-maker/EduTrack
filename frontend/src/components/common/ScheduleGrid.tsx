import React, { useState, useEffect } from 'react';
import { Calendar, Image as ImageIcon, Loader2 } from 'lucide-react';
import { Department } from '../../types';
import { supabase } from '../../supabaseClient';

interface UploadedSchedule {
    schedule_id: number;
    dept_id: number;
    semester: string;
    division: string;
    file_url: string;
    uploaded_by: number;
    created_at: string;
    is_active: boolean;
}

interface Props {
    departments: Department[];
    uploadedSchedules?: UploadedSchedule[]; // Still passing but will move away from it
    studentInfo?: {
        dept_id: number;
        semester: string;
        division: string;
    };
}

interface TimetableFile {
    name: string;
    url: string;
    semester: string;
    division: string;
    created_at: string;
}

const ScheduleGrid: React.FC<Props> = ({ departments, uploadedSchedules = [], studentInfo }) => {
    const [activeTab, setActiveTab] = useState<'schedule' | 'holidays'>('schedule');
    const [timetables, setTimetables] = useState<TimetableFile[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        if (studentInfo) {
            fetchStorageTimetables();
        }
    }, [studentInfo]);

    const fetchStorageTimetables = async () => {
        if (!studentInfo) return;
        setIsLoading(true);

        try {
            const dept = departments.find(d => d.dept_id === studentInfo.dept_id);
            if (!dept) return;

            const deptName = dept.dept_name; // Use raw name (e.g., "Computer")
            const results: TimetableFile[] = [];

            if (studentInfo.semester) {
                // Student View: Look in specific sem/div folder
                const semText = studentInfo.semester.toLowerCase().startsWith('sem')
                    ? studentInfo.semester.toLowerCase()
                    : `sem${studentInfo.semester}`;

                const divText = `div${studentInfo.division.toUpperCase()}`;

                const folderPath = `timetable/student/${deptName}/${semText}/${divText}`;
                const { data, error } = await supabase.storage.from('EduTrack').list(folderPath);

                if (data) {
                    // Filter out system files like .emptyFolderPlaceholder
                    const validFiles = data.filter(f => !f.name.startsWith('.'));

                    for (const file of validFiles) {
                        const { data: { publicUrl } } = supabase.storage.from('EduTrack').getPublicUrl(`${folderPath}/${file.name}`);
                        results.push({
                            name: file.name,
                            url: publicUrl,
                            semester: semText.replace('sem', ''),
                            division: studentInfo.division,
                            created_at: file.created_at
                        });
                    }
                }
            } else {
                // Faculty View: Look through all semesters (1-8) and divisions (A-D)
                const sems = ['sem1', 'sem2', 'sem3', 'sem4', 'sem5', 'sem6', 'sem7', 'sem8'];
                const divs = ['divA', 'divB', 'divC', 'divD'];

                for (const sem of sems) {
                    for (const div of divs) {
                        const folderPath = `timetable/student/${deptName}/${sem}/${div}`;
                        const { data, error } = await supabase.storage.from('EduTrack').list(folderPath);

                        if (data && data.length > 0) {
                            const validFiles = data.filter(f => !f.name.startsWith('.'));

                            for (const file of validFiles) {
                                const { data: { publicUrl } } = supabase.storage.from('EduTrack').getPublicUrl(`${folderPath}/${file.name}`);

                                results.push({
                                    name: file.name,
                                    url: publicUrl,
                                    semester: sem.replace('sem', ''),
                                    division: div.replace('div', ''),
                                    created_at: file.created_at
                                });
                            }
                        }
                    }
                }
            }

            setTimetables(results);
        } catch (error) {
            console.error("Error fetching storage timetables:", error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
            {/* Header with Tabs */}
            <div className="px-6 py-4 border-b border-slate-100">
                <div className="flex items-center gap-4">
                    <button
                        onClick={() => setActiveTab('schedule')}
                        className={`px-4 py-2 text-sm font-bold rounded-lg transition-all ${activeTab === 'schedule'
                            ? 'bg-indigo-600 text-white shadow-sm'
                            : 'bg-slate-50 text-slate-600 hover:bg-slate-100'
                            }`}
                    >
                        <div className="flex items-center gap-2">
                            <ImageIcon className="w-4 h-4" />
                            Schedule
                        </div>
                    </button>
                    <button
                        onClick={() => setActiveTab('holidays')}
                        className={`px-4 py-2 text-sm font-bold rounded-lg transition-all ${activeTab === 'holidays'
                            ? 'bg-indigo-600 text-white shadow-sm'
                            : 'bg-slate-50 text-slate-600 hover:bg-slate-100'
                            }`}
                    >
                        <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4" />
                            Holidays
                        </div>
                    </button>
                </div>
            </div>

            {/* Content */}
            <div className="p-6">
                {activeTab === 'schedule' ? (
                    <div>
                        {isLoading ? (
                            <div className="flex flex-col items-center justify-center py-24 text-indigo-400">
                                <Loader2 className="w-12 h-12 animate-spin mb-4" />
                                <p className="text-sm font-black uppercase tracking-widest">Scanning Storage...</p>
                            </div>
                        ) : timetables.length > 0 ? (
                            <div className="space-y-8">
                                {timetables.map((schedule, index) => (
                                    <div key={index} className="space-y-4">
                                        <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                                            <h4 className="text-sm font-black text-slate-700 uppercase tracking-widest">
                                                Timetable: Sem {schedule.semester} {schedule.division ? `- Div ${schedule.division}` : ''}
                                            </h4>
                                        </div>
                                        <div className="border border-slate-200 rounded-2xl overflow-hidden bg-slate-50 shadow-inner">
                                            <img
                                                src={schedule.url}
                                                alt={`Timetable Sem ${schedule.semester} Div ${schedule.division}`}
                                                className="w-full h-auto"
                                                onError={(e) => {
                                                    const target = e.target as HTMLImageElement;
                                                    target.style.display = 'none';
                                                    const parent = target.parentElement;
                                                    if (parent) {
                                                        parent.innerHTML = `
                                                            <div class="flex items-center justify-center p-12 text-slate-500">
                                                                <div class="text-center">
                                                                    <ImageIcon class="w-12 h-12 mx-auto mb-2 opacity-30" />
                                                                    <p class="text-sm font-bold">Failed to load direct storage image</p>
                                                                    <p class="text-xs mt-1">Path: timetable/student/...</p>
                                                                </div>
                                                            </div>
                                                        `;
                                                    }
                                                }}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="flex flex-col items-center justify-center py-12 text-slate-500">
                                <ImageIcon className="w-16 h-16 mb-4 opacity-30" />
                                <p className="text-sm font-bold mb-1">No Timetable Available</p>
                                <p className="text-xs text-center max-w-md">
                                    Your timetable has not been uploaded yet. Please contact your timetable incharge.
                                </p>
                            </div>
                        )}
                    </div>
                ) : (
                    <div className="flex flex-col items-center justify-center py-12 text-slate-500">
                        <Calendar className="w-16 h-16 mb-4 opacity-30" />
                        <p className="text-sm font-bold mb-1">Holidays Section</p>
                        <p className="text-xs text-center max-w-md">
                            This section will be implemented later to show holiday information.
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ScheduleGrid;
