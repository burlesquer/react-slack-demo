import React, { useState, useMemo } from 'react';
import { generateMockData, sortData, filterData, formatCurrency, formatDate } from '../../utils/helpers';
import './DataTable.css';

const DataTable = () => {
  const [data] = useState(() => generateMockData(10));
  const [sortConfig, setSortConfig] = useState({ key: 'id', direction: 'asc' });
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRows, setSelectedRows] = useState([]);

  const filteredAndSortedData = useMemo(() => {
    let result = filterData(data, searchTerm, ['name', 'email', 'status']);
    result = sortData(result, sortConfig.key, sortConfig.direction);
    return result;
  }, [data, searchTerm, sortConfig]);

  const handleSort = (key) => {
    setSortConfig(prev => ({
      key,
      direction: prev.key === key && prev.direction === 'asc' ? 'desc' : 'asc',
    }));
  };

  const handleSelectAll = () => {
    if (selectedRows.length === filteredAndSortedData.length) {
      setSelectedRows([]);
    } else {
      setSelectedRows(filteredAndSortedData.map(row => row.id));
    }
  };

  const handleSelectRow = (id) => {
    setSelectedRows(prev =>
      prev.includes(id) ? prev.filter(rowId => rowId !== id) : [...prev, id]
    );
  };

  const getStatusBadge = (status) => {
    const statusMap = {
      Active: 'badge-success',
      Pending: 'badge-warning',
      Completed: 'badge-info',
      Cancelled: 'badge-danger',
    };
    return `badge ${statusMap[status] || ''}`;
  };

  const SortIcon = ({ column }) => {
    if (sortConfig.key !== column) {
      return <span className="sort-icon">⇅</span>;
    }
    return <span className="sort-icon active">{sortConfig.direction === 'asc' ? '↑' : '↓'}</span>;
  };

  return (
    <div className="data-table-container">
      <div className="table-toolbar">
        <div className="search-input">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="11" cy="11" r="8" />
            <path d="M21 21l-4.35-4.35" />
          </svg>
          <input
            type="text"
            placeholder="Search transactions..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        {selectedRows.length > 0 && (
          <span className="selected-count">{selectedRows.length} selected</span>
        )}
      </div>

      <div className="table-wrapper">
        <table className="data-table">
          <thead>
            <tr>
              <th className="checkbox-cell">
                <input
                  type="checkbox"
                  checked={selectedRows.length === filteredAndSortedData.length && filteredAndSortedData.length > 0}
                  onChange={handleSelectAll}
                />
              </th>
              <th onClick={() => handleSort('id')}>
                ID <SortIcon column="id" />
              </th>
              <th onClick={() => handleSort('name')}>
                Name <SortIcon column="name" />
              </th>
              <th onClick={() => handleSort('email')}>
                Email <SortIcon column="email" />
              </th>
              <th onClick={() => handleSort('amount')}>
                Amount <SortIcon column="amount" />
              </th>
              <th onClick={() => handleSort('status')}>
                Status <SortIcon column="status" />
              </th>
              <th onClick={() => handleSort('date')}>
                Date <SortIcon column="date" />
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredAndSortedData.map(row => (
              <tr
                key={row.id}
                className={selectedRows.includes(row.id) ? 'selected' : ''}
              >
                <td className="checkbox-cell">
                  <input
                    type="checkbox"
                    checked={selectedRows.includes(row.id)}
                    onChange={() => handleSelectRow(row.id)}
                  />
                </td>
                <td>#{row.id}</td>
                <td>
                  <div className="user-cell">
                    <img
                      src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${row.name}`}
                      alt=""
                      className="user-avatar-small"
                    />
                    {row.name}
                  </div>
                </td>
                <td>{row.email}</td>
                <td className="amount-cell">{formatCurrency(row.amount)}</td>
                <td><span className={getStatusBadge(row.status)}>{row.status}</span></td>
                <td>{formatDate(row.date)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {filteredAndSortedData.length === 0 && (
        <div className="empty-state">
          <p>No transactions found</p>
        </div>
      )}
    </div>
  );
};

export default DataTable;
