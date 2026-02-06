import React from 'react';
import Chart from '../Chart';
import DataTable from '../DataTable';
import './Dashboard.css';

const statsCards = [
  { id: 1, title: 'Total Revenue', value: '$48,234', change: '+12.5%', isPositive: true, icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z' },
  { id: 2, title: 'Active Users', value: '2,345', change: '+8.2%', isPositive: true, icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z' },
  { id: 3, title: 'Conversion Rate', value: '3.24%', change: '-2.1%', isPositive: false, icon: 'M13 7h8m0 0v8m0-8l-8 8-4-4-6 6' },
  { id: 4, title: 'Avg. Session', value: '4m 32s', change: '+18.7%', isPositive: true, icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z' },
];

const Dashboard = ({ onOpenModal }) => {
  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <div>
          <h2>Dashboard</h2>
          <p>Welcome back! Here's what's happening today.</p>
        </div>
        <button className="btn btn-primary" onClick={onOpenModal}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 5v14M5 12h14" />
          </svg>
          Add New
        </button>
      </div>

      <div className="stats-grid">
        {statsCards.map(card => (
          <div key={card.id} className="stat-card card">
            <div className="stat-card-header">
              <div className="stat-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d={card.icon} />
                </svg>
              </div>
              <span className={`stat-change ${card.isPositive ? 'positive' : 'negative'}`}>
                {card.change}
              </span>
            </div>
            <div className="stat-card-body">
              <h3 className="stat-value">{card.value}</h3>
              <p className="stat-title">{card.title}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="dashboard-grid">
        <div className="chart-section card">
          <h3>Revenue Overview</h3>
          <Chart />
        </div>

        <div className="activity-section card">
          <div className="section-header">
            <h3>Recent Activity</h3>
            <button className="btn-link">View All</button>
          </div>
          <div className="activity-list">
            {[1, 2, 3, 4, 5].map(i => (
              <div key={i} className="activity-item">
                <div className="activity-avatar">
                  <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=user${i}`} alt="" />
                </div>
                <div className="activity-content">
                  <p><strong>User {i}</strong> completed a task</p>
                  <span>{i * 5} minutes ago</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="table-section card">
        <h3>Recent Transactions</h3>
        <DataTable />
      </div>
    </div>
  );
};

export default Dashboard;
