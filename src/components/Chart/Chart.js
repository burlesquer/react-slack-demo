import React, { useState } from 'react';
import './Chart.css';

const monthlyData = [
  { month: 'Jan', revenue: 4000, expenses: 2400 },
  { month: 'Feb', revenue: 3000, expenses: 1398 },
  { month: 'Mar', revenue: 5000, expenses: 3800 },
  { month: 'Apr', revenue: 4500, expenses: 3908 },
  { month: 'May', revenue: 6000, expenses: 4800 },
  { month: 'Jun', revenue: 5500, expenses: 3800 },
  { month: 'Jul', revenue: 7000, expenses: 4300 },
];

const Chart = () => {
  const [activeView, setActiveView] = useState('revenue');
  const maxValue = Math.max(...monthlyData.map(d => Math.max(d.revenue, d.expenses)));

  return (
    <div className="chart-container">
      <div className="chart-controls">
        <button
          className={`chart-btn ${activeView === 'revenue' ? 'active' : ''}`}
          onClick={() => setActiveView('revenue')}
        >
          Revenue
        </button>
        <button
          className={`chart-btn ${activeView === 'expenses' ? 'active' : ''}`}
          onClick={() => setActiveView('expenses')}
        >
          Expenses
        </button>
        <button
          className={`chart-btn ${activeView === 'both' ? 'active' : ''}`}
          onClick={() => setActiveView('both')}
        >
          Both
        </button>
      </div>

      <div className="chart-area">
        <div className="chart-y-axis">
          {[...Array(5)].map((_, i) => (
            <span key={i}>${((maxValue / 4) * (4 - i) / 1000).toFixed(0)}k</span>
          ))}
        </div>

        <div className="chart-bars">
          {monthlyData.map((data, index) => (
            <div key={data.month} className="chart-bar-group">
              {(activeView === 'revenue' || activeView === 'both') && (
                <div
                  className="chart-bar revenue"
                  style={{
                    height: `${(data.revenue / maxValue) * 100}%`,
                    animationDelay: `${index * 0.1}s`,
                  }}
                >
                  <span className="bar-tooltip">${data.revenue.toLocaleString()}</span>
                </div>
              )}
              {(activeView === 'expenses' || activeView === 'both') && (
                <div
                  className="chart-bar expenses"
                  style={{
                    height: `${(data.expenses / maxValue) * 100}%`,
                    animationDelay: `${index * 0.1}s`,
                  }}
                >
                  <span className="bar-tooltip">${data.expenses.toLocaleString()}</span>
                </div>
              )}
              <span className="chart-label">{data.month}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="chart-legend">
        {(activeView === 'revenue' || activeView === 'both') && (
          <div className="legend-item">
            <span className="legend-color revenue"></span>
            Revenue
          </div>
        )}
        {(activeView === 'expenses' || activeView === 'both') && (
          <div className="legend-item">
            <span className="legend-color expenses"></span>
            Expenses
          </div>
        )}
      </div>
    </div>
  );
};

export default Chart;
