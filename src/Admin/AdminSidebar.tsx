import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const navItems = [
  { label: 'Dashboard', path: '/admin-dashboard' },
  { label: 'Bookings', path: '/admin-bookings' },
  { label: 'Manage Events', path: '/admin-manage-events' },
  { label: 'Interest Options', path: '/admin-interests' },
  { label: 'Accommodation Combos', path: '/admin-accommodations' },
  { label: 'Abstract Submissions', path: '/admin-abstract-submissions' },

];

const AdminSidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/admin-login');
  };

  return (
    <aside className="w-64 bg-gray-900 p-6 flex flex-col justify-between min-h-screen border-r border-yellow-700">
      <div>
        <h2 className="text-2xl font-bold text-yellow-400 mb-6">Admin Panel</h2>
        <nav className="space-y-2">
          {navItems.map(({ label, path }) => (
            <button
              key={path}
              className={`block w-full text-left py-2 px-3 rounded-lg font-medium ${
                location.pathname === path
                  ? 'bg-yellow-600 text-black'
                  : 'text-white hover:bg-yellow-500 hover:text-black'
              }`}
              onClick={() => navigate(path)}
            >
              {label}
            </button>
          ))}
        </nav>
      </div>

      <button
        onClick={handleLogout}
        className="mt-10 py-2 px-4 bg-red-600 text-white rounded hover:bg-red-700"
      >
        Logout
      </button>
    </aside>
  );
};

export default AdminSidebar;
