import React, { useState, useCallback } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import Modal from './components/Modal';
import { ToastContainer } from './components/common';
import './styles/global.css';

const App = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('dashboard');
  const [modalOpen, setModalOpen] = useState(false);
  const [toasts, setToasts] = useState([]);

  const addToast = useCallback((message, type = 'info') => {
    const id = Date.now();
    setToasts(prev => [...prev, { id, message, type }]);
  }, []);

  const removeToast = useCallback((id) => {
    setToasts(prev => prev.filter(toast => toast.id !== id));
  }, []);

  const handleMenuClick = () => {
    setSidebarOpen(prev => !prev);
  };

  const handleSidebarItemClick = (item) => {
    setActiveSection(item);
    setSidebarOpen(false);
    addToast(`Navigated to ${item}`, 'info');
  };

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleFormSubmit = (data) => {
    console.log('Form submitted:', data);
    setModalOpen(false);
    addToast(`Transaction for ${data.name} added successfully!`, 'success');
  };

  return (
    <ThemeProvider>
      <div className="app-container">
        <Sidebar
          isOpen={sidebarOpen}
          activeItem={activeSection}
          onItemClick={handleSidebarItemClick}
        />

        <div className="main-content">
          <Header onMenuClick={handleMenuClick} />

          <main className="content-area">
            {activeSection === 'dashboard' && (
              <Dashboard onOpenModal={handleOpenModal} />
            )}
            {activeSection === 'analytics' && (
              <div className="card fade-in">
                <h2>Analytics</h2>
                <p style={{ marginTop: 16, color: 'var(--text-secondary)' }}>
                  Analytics page content would go here.
                </p>
              </div>
            )}
            {activeSection === 'users' && (
              <div className="card fade-in">
                <h2>Users</h2>
                <p style={{ marginTop: 16, color: 'var(--text-secondary)' }}>
                  Users management page content would go here.
                </p>
              </div>
            )}
            {activeSection === 'settings' && (
              <div className="card fade-in">
                <h2>Settings</h2>
                <p style={{ marginTop: 16, color: 'var(--text-secondary)' }}>
                  Settings page content would go here.
                </p>
              </div>
            )}
          </main>
        </div>

        <Modal
          isOpen={modalOpen}
          onClose={handleCloseModal}
          onSubmit={handleFormSubmit}
        />

        <ToastContainer toasts={toasts} removeToast={removeToast} />
      </div>
    </ThemeProvider>
  );
};

export default App;
