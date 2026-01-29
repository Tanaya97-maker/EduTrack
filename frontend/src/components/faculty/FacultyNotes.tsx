
import React from 'react';
import { Faculty } from '../../types';
import { FileText, Plus, Edit2, Trash2, Save, X } from 'lucide-react';

interface Props {
    faculty: Faculty;
    notes: any[];
    onAddNote: (n: any) => Promise<void>;
    onEditNote: (n: any) => Promise<void>;
    onDeleteNote: (id: number) => Promise<void>;
}

const FacultyNotes: React.FC<Props> = ({
    faculty,
    notes,
    onAddNote,
    onEditNote,
    onDeleteNote
}) => {
    const [showNoteModal, setShowNoteModal] = React.useState(false);
    const [noteContent, setNoteContent] = React.useState({ title: '', content: '' });
    const [editingNote, setEditingNote] = React.useState<number | null>(null);

    const handleAddNoteInternal = async () => {
        if (editingNote) {
            await onEditNote({ note_id: editingNote, ...noteContent });
            setEditingNote(null);
        } else {
            await onAddNote({ faculty_id: faculty.faculty_id, ...noteContent });
        }
        setNoteContent({ title: '', content: '' });
        setShowNoteModal(false);
    };

    return (
        <>
            <div className="bg-white rounded-[2.5rem] shadow-xl border border-slate-100 overflow-hidden flex flex-col">
                <div className="p-8 border-b border-slate-50 flex items-center justify-between bg-emerald-50/30">
                    <h3 className="text-xl font-black text-slate-800 flex items-center gap-3">
                        <FileText className="w-6 h-6 text-emerald-600" />
                        Notes Library
                    </h3>
                    <button
                        onClick={() => {
                            setEditingNote(null);
                            setNoteContent({ title: '', content: '' });
                            setShowNoteModal(true);
                        }}
                        className="flex items-center gap-2 px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-black rounded-xl transition-all text-xs uppercase tracking-widest shadow-lg shadow-emerald-100"
                    >
                        <Plus className="w-4 h-4" />
                        New Note
                    </button>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead>
                            <tr className="bg-slate-50/50">
                                <th className="px-8 py-4 text-[10px] font-black uppercase tracking-widest text-slate-400">Note Details</th>
                                <th className="px-8 py-4 text-[10px] font-black uppercase tracking-widest text-slate-400">Date Created</th>
                                <th className="px-8 py-4 text-[10px] font-black uppercase tracking-widest text-slate-400 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-50">
                            {notes.map((item, idx) => (
                                <tr key={idx} className="hover:bg-slate-50/50 transition-colors">
                                    <td className="px-8 py-6">
                                        <p className="text-base font-bold text-slate-800 mb-1">{item.title}</p>
                                        <p className="text-xs text-slate-400 line-clamp-2 max-w-md leading-relaxed">{item.content}</p>
                                    </td>
                                    <td className="px-8 py-6 text-xs font-bold text-slate-500 whitespace-nowrap">
                                        {item.created_at ? new Date(item.created_at).toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' }) : 'N/A'}
                                    </td>
                                    <td className="px-8 py-6 text-right">
                                        <div className="flex justify-end gap-3">
                                            <button
                                                onClick={() => {
                                                    setEditingNote(item.note_id);
                                                    setNoteContent({ title: item.title, content: item.content });
                                                    setShowNoteModal(true);
                                                }}
                                                className="p-2.5 bg-slate-50 text-slate-400 hover:text-emerald-600 hover:bg-emerald-50 rounded-xl transition-all"
                                            >
                                                <Edit2 className="w-4 h-4" />
                                            </button>
                                            <button
                                                onClick={async () => {
                                                    if (confirm('Are you sure you want to delete this note?')) {
                                                        await onDeleteNote(item.note_id);
                                                    }
                                                }}
                                                className="p-2.5 bg-slate-50 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-xl transition-all"
                                            >
                                                <Trash2 className="w-4 h-4" />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                            {notes.length === 0 && (
                                <tr>
                                    <td colSpan={3} className="px-8 py-16 text-center">
                                        <div className="flex flex-col items-center gap-3">
                                            <div className="p-4 bg-slate-50 rounded-full text-slate-200">
                                                <FileText className="w-12 h-12" />
                                            </div>
                                            <p className="text-slate-400 font-bold uppercase tracking-widest text-xs">No notes found. Start by creating one!</p>
                                        </div>
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>

            {showNoteModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md">
                    <div className="bg-white w-full max-w-md rounded-[2.5rem] shadow-2xl overflow-hidden animate-in zoom-in duration-200">
                        <div className="p-8 border-b border-slate-50 flex justify-between items-center bg-emerald-600 text-white">
                            <h3 className="text-2xl font-black tracking-tight flex items-center gap-3">
                                <FileText className="w-6 h-6" />
                                {editingNote ? 'Edit Note' : 'Create New Note'}
                            </h3>
                            <button
                                onClick={() => setShowNoteModal(false)}
                                className="p-2 hover:bg-white/10 rounded-xl transition-colors"
                            >
                                <X className="w-6 h-6" />
                            </button>
                        </div>

                        <div className="p-8 space-y-6">
                            <div className="space-y-2">
                                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Note Title</label>
                                <input
                                    value={noteContent.title}
                                    onChange={e => setNoteContent(prev => ({ ...prev, title: e.target.value }))}
                                    placeholder="e.g., Weekly Lecture Plan"
                                    className="w-full p-4 bg-slate-50 rounded-2xl border-2 border-transparent focus:border-emerald-100 focus:bg-white outline-none font-bold text-sm transition-all"
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Detailed Content</label>
                                <textarea
                                    value={noteContent.content}
                                    onChange={e => setNoteContent(prev => ({ ...prev, content: e.target.value }))}
                                    placeholder="Type your notes here..."
                                    className="w-full p-4 bg-slate-50 rounded-2xl border-2 border-transparent focus:border-emerald-100 focus:bg-white outline-none font-bold text-sm transition-all h-48 resize-none"
                                />
                            </div>

                            <button
                                onClick={handleAddNoteInternal}
                                className="w-full py-4 bg-emerald-600 text-white font-black rounded-2xl shadow-xl shadow-emerald-100 hover:bg-emerald-700 active:scale-95 transition-all flex items-center justify-center gap-2 uppercase tracking-widest text-xs"
                            >
                                <Save className="w-4 h-4" />
                                {editingNote ? 'Update Note' : 'Save Note'}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default FacultyNotes;
