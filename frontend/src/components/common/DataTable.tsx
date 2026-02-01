
import React, { useState, useMemo } from 'react';
import { Search, Download, Upload, ChevronUp, ChevronDown } from 'lucide-react';

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
    onImport?: () => void;
    onExport?: () => void;
    searchPlaceholder?: string;
}

const DataTable = <T extends Record<string, any>>({
    title,
    data,
    columns,
    onImport,
    onExport,
    searchPlaceholder = "Search...",
}: DataTableProps<T>) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [sortConfig, setSortConfig] = useState<{ key: string; direction: 'asc' | 'desc' } | null>(null);

    const handleSort = (key: string) => {
        let direction: 'asc' | 'desc' = 'asc';
        if (sortConfig && sortConfig.key === key && sortConfig.direction === 'asc') {
            direction = 'desc';
        }
        setSortConfig({ key, direction });
    };

    const filteredAndSortedData = useMemo(() => {
        let result = [...data];

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
    }, [data, searchQuery, sortConfig]);

    return (
        <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
            {/* Table Header */}
            <div className="px-6 py-4 border-b border-slate-100 flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h3 className="text-lg font-bold text-slate-800 tracking-tight">{title}</h3>
                </div>

                <div className="flex flex-1 items-center gap-3 max-w-2xl justify-end">
                    <div className="relative flex-1 max-w-xs">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                        <input
                            type="text"
                            placeholder={searchPlaceholder}
                            className="w-full pl-9 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all font-medium"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>

                    <div className="flex items-center gap-2">
                        {onImport && (
                            <button
                                onClick={onImport}
                                className="flex items-center gap-2 px-3 py-2 text-slate-600 border border-slate-200 rounded-lg text-xs font-bold hover:bg-slate-50 hover:text-slate-900 transition-all"
                            >
                                <Download className="w-3.5 h-3.5" /> Import
                            </button>
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
                        {filteredAndSortedData.map((item, idx) => (
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
                        {filteredAndSortedData.length === 0 && (
                            <tr>
                                <td colSpan={columns.length} className="px-6 py-12 text-center text-slate-400 font-medium italic">
                                    No records found matching your search.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default DataTable;
