import React, { useState, useMemo, useRef, useEffect } from 'react';
import { Search, Download, Upload, ChevronUp, ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react';

interface Column<T> {
    header: string;
    key: string;
    render?: (item: T) => React.ReactNode;
    align?: 'left' | 'right' | 'center';
    sortable?: boolean;
}

interface DataTableProps<T> {
    title: string;
    data: T[];
    columns: Column<T>[];
    onImport?: (file: File) => void;
    onExport?: () => void;
    searchPlaceholder?: string;
    departments?: { dept_id: number; dept_name: string }[];
    initialDeptId?: number;
}

const DataTable = <T extends Record<string, any>>({
    title,
    data,
    columns,
    onImport,
    onExport,
    searchPlaceholder = "Search...",
    departments,
    initialDeptId,
}: DataTableProps<T>) => {
    const [deptId, setDeptId] = useState<number | undefined>(initialDeptId);

    useEffect(() => {
        if (initialDeptId !== undefined) {
            setDeptId(initialDeptId);
        }
    }, [initialDeptId]);
    const [currentPage, setCurrentPage] = useState(1);
    const [rowsPerPage, setRowsPerPage] = useState(6);
    const [searchQuery, setSearchQuery] = useState('');
    const [sortConfig, setSortConfig] = useState<{ key: string; direction: 'asc' | 'desc' } | null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleSort = (key: string) => {
        let direction: 'asc' | 'desc' = 'asc';
        if (sortConfig && sortConfig.key === key && sortConfig.direction === 'asc') {
            direction = 'desc';
        }
        setSortConfig({ key, direction });
    };

    const handleImportClick = () => {
        fileInputRef.current?.click();
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file && onImport) {
            onImport(file);
        }
        // Reset the value so the same file can be imported again if needed
        e.target.value = '';
    };

    const processedData = useMemo(() => {
        let result = [...data];

        // Department Filter
        if (deptId !== undefined && departments) {
            result = result.filter(item => item.dept_id === deptId);
        }

        // Search
        if (searchQuery) {
            const query = searchQuery.toLowerCase();
            result = result.filter((item) =>
                Object.values(item).some((val) =>
                    String(val).toLowerCase().includes(query)
                )
            );
        }

        // Sort
        if (sortConfig) {
            result.sort((a, b) => {
                const aValue = a[sortConfig.key];
                const bValue = b[sortConfig.key];

                if (aValue < bValue) return sortConfig.direction === 'asc' ? -1 : 1;
                if (aValue > bValue) return sortConfig.direction === 'asc' ? 1 : -1;
                return 0;
            });
        }

        return result;
    }, [data, searchQuery, sortConfig, deptId, departments]);

    // Pagination Logic
    const totalPages = Math.ceil(processedData.length / rowsPerPage);
    const paginatedData = useMemo(() => {
        const start = (currentPage - 1) * rowsPerPage;
        return processedData.slice(start, start + rowsPerPage);
    }, [processedData, currentPage, rowsPerPage]);

    useEffect(() => {
        setCurrentPage(1);
    }, [searchQuery, deptId]);

    return (
        <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden flex flex-col">
            {/* Table Header */}
            <div className="px-6 py-4 border-b border-slate-100 flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h3 className="text-lg font-bold text-slate-800 tracking-tight">{title}</h3>
                </div>

                <div className="flex flex-1 items-center gap-3 max-w-2xl justify-end">
                    <div className="relative flex-1 max-w-xs flex gap-3">
                        {departments && (
                            <select
                                className="pl-3 pr-8 py-2 bg-white border border-slate-200 rounded-lg text-xs font-bold text-slate-700 outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all appearance-none cursor-pointer"
                                style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' fill=\'none\' viewBox=\'0 0 24 24\' stroke=\'%2364748b\'%3E%3Cpath stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'2\' d=\'M19 9l-7 7-7-7\'%3E%3C/path%3E%3C/svg%3E")', backgroundRepeat: 'no-repeat', backgroundPosition: 'right 0.75rem center', backgroundSize: '1rem' }}
                                value={deptId}
                                onChange={(e) => setDeptId(Number(e.target.value))}
                            >
                                {departments.map(d => (
                                    <option key={d.dept_id} value={d.dept_id}>{d.dept_name.toUpperCase()}</option>
                                ))}
                            </select>
                        )}
                        <div className="relative flex-1">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                            <input
                                type="text"
                                placeholder={searchPlaceholder}
                                className="w-full pl-9 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all font-medium"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="flex items-center gap-2">
                        {onImport && (
                            <>
                                <input
                                    type="file"
                                    ref={fileInputRef}
                                    className="hidden"
                                    accept=".xlsx, .xls"
                                    onChange={handleFileChange}
                                />
                                <button
                                    onClick={handleImportClick}
                                    className="flex items-center gap-2 px-3 py-2 text-slate-600 border border-slate-200 rounded-lg text-xs font-bold hover:bg-slate-50 hover:text-slate-900 transition-all"
                                >
                                    <Download className="w-3.5 h-3.5" /> Import
                                </button>
                            </>
                        )}
                        {onExport && (
                            <button
                                onClick={onExport}
                                className="flex items-center gap-2 px-3 py-2 text-slate-600 border border-slate-200 rounded-lg text-xs font-bold hover:bg-slate-50 hover:text-slate-900 transition-all"
                            >
                                <Upload className="w-3.5 h-3.5" /> Export
                            </button>
                        )}
                    </div>
                </div>
            </div>

            {/* Table Body */}
            <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                    <thead className="sticky top-0 z-10">
                        <tr className="bg-slate-50/80 backdrop-blur-sm border-b border-slate-100">
                            {columns.map((column) => (
                                <th
                                    key={column.key}
                                    className={`px-6 py-3 text-[10px] font-black uppercase tracking-widest text-slate-500 ${column.align === 'right' ? 'text-right' : column.align === 'center' ? 'text-center' : 'text-left'
                                        }`}
                                >
                                    <div className={`flex items-center gap-1.5 ${column.sortable !== false ? 'cursor-pointer hover:text-slate-800' : ''} ${column.align === 'right' ? 'justify-end' : column.align === 'center' ? 'justify-center' : 'justify-start'
                                        }`}
                                        onClick={() => column.sortable !== false && handleSort(column.key)}
                                    >
                                        <span>{column.header}</span>
                                        {column.sortable !== false && (
                                            <div className="flex flex-col">
                                                <ChevronUp className={`w-2.5 h-2.5 -mb-0.5 ${sortConfig?.key === column.key && sortConfig.direction === 'asc' ? 'text-indigo-600' : 'text-slate-300'}`} />
                                                <ChevronDown className={`w-2.5 h-2.5 -mt-0.5 ${sortConfig?.key === column.key && sortConfig.direction === 'desc' ? 'text-indigo-600' : 'text-slate-300'}`} />
                                            </div>
                                        )}
                                    </div>
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                        {paginatedData.map((item, idx) => (
                            <tr
                                key={idx}
                                className="hover:bg-indigo-50/30 transition-colors group"
                            >
                                {columns.map((column) => (
                                    <td
                                        key={column.key}
                                        className={`px-6 py-3 text-sm font-medium ${column.align === 'right' ? 'text-right' : column.align === 'center' ? 'text-center' : 'text-left'
                                            } ${column.align === 'right' ? 'text-slate-600 tabular-nums' : 'text-slate-700'}`}
                                    >
                                        {column.render ? column.render(item) : item[column.key]}
                                    </td>
                                ))}
                            </tr>
                        ))}
                        {paginatedData.length === 0 && (
                            <tr>
                                <td colSpan={columns.length} className="px-6 py-12 text-center text-slate-400 font-medium italic">
                                    No records found matching your search.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

            {/* Pagination Controls */}
            <div className="px-6 py-3 border-t border-slate-100 bg-slate-50/50 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-4 text-xs font-bold text-slate-500">
                    <div className="flex items-center gap-2">
                        <span className="whitespace-nowrap">Rows per page:</span>
                        <select
                            value={rowsPerPage}
                            onChange={(e) => setRowsPerPage(Number(e.target.value))}
                            className="bg-white border border-slate-200 rounded-md px-1 py-0.5 outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all cursor-pointer"
                        >
                            {[6, 10, 20, 50, 100].map(size => (
                                <option key={size} value={size}>{size}</option>
                            ))}
                        </select>
                    </div>
                    <span>
                        Showing {processedData.length > 0 ? (currentPage - 1) * rowsPerPage + 1 : 0} to {Math.min(currentPage * rowsPerPage, processedData.length)} of {processedData.length}
                    </span>
                </div>

                <div className="flex items-center gap-1">
                    <button
                        onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                        disabled={currentPage === 1}
                        className={`px-3 py-1.5 rounded-lg text-xs font-black uppercase tracking-widest transition-all ${currentPage === 1
                            ? 'text-slate-300 cursor-not-allowed'
                            : 'text-slate-600 hover:bg-white hover:text-indigo-600 border border-transparent hover:border-slate-200 shadow-sm'
                            }`}
                    >
                        <ChevronLeft className="w-4 h-4 md:w-6 md:h-6" />
                    </button>

                    <div className="flex items-center gap-1">
                        {[...Array(totalPages)].map((_, i) => {
                            const pageNum = i + 1;
                            // Show first page, last page, and pages around current page
                            if (
                                pageNum === 1 ||
                                pageNum === totalPages ||
                                (pageNum >= currentPage - 1 && pageNum <= currentPage + 1)
                            ) {
                                return (
                                    <button
                                        key={pageNum}
                                        onClick={() => setCurrentPage(pageNum)}
                                        className={`w-8 h-8 rounded-lg text-xs font-black transition-all ${currentPage === pageNum
                                            ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-100'
                                            : 'text-slate-600 hover:bg-white border border-transparent hover:border-slate-200'
                                            }`}
                                    >
                                        {pageNum}
                                    </button>
                                );
                            } else if (
                                pageNum === currentPage - 2 ||
                                pageNum === currentPage + 2
                            ) {
                                return <span key={pageNum} className="px-1 text-slate-400 text-xs">...</span>;
                            }
                            return null;
                        })}
                    </div>

                    <button
                        onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                        disabled={currentPage === totalPages || totalPages === 0}
                        className={`px-3 py-1.5 rounded-lg text-xs font-black uppercase tracking-widest transition-all ${currentPage === totalPages || totalPages === 0
                            ? 'text-slate-300 cursor-not-allowed'
                            : 'text-slate-600 hover:bg-white hover:text-indigo-600 border border-transparent hover:border-slate-200 shadow-sm'
                            }`}
                    >
                        <ChevronRight className="w-4 h-4 md:w-6 md:h-6" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default DataTable;
