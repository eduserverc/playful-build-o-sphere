
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Settings, Bell, Grid, LogOut } from 'lucide-react';

const AdminSidebar = () => {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <div className="w-64 bg-purple-700 min-h-screen flex flex-col text-white">
      <div className="p-4 flex items-center gap-2 border-b border-purple-600">
        <Settings className="h-6 w-6" />
        <h1 className="text-xl font-bold">AdminControlPanel</h1>
      </div>
      
      <div className="flex-grow">
        <nav className="p-4">
          <ul className="space-y-2">
            <li>
              <Link 
                to="/admin/notifications" 
                className={`flex items-center gap-2 p-2 rounded-md hover:bg-purple-600 transition-colors ${
                  isActive('/admin/notifications') ? 'bg-purple-800' : ''
                }`}
              >
                <Bell className="h-5 w-5" />
                <span>Notifications</span>
              </Link>
            </li>
            <li>
              <Link 
                to="/admin/seat-allocation" 
                className={`flex items-center gap-2 p-2 rounded-md hover:bg-purple-600 transition-colors ${
                  isActive('/admin/seat-allocation') ? 'bg-purple-800' : ''
                }`}
              >
                <Grid className="h-5 w-5" />
                <span>Seat Allocation</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      
      <div className="p-4 border-t border-purple-600">
        <Link to="/login" className="flex items-center gap-2 p-2 rounded-md hover:bg-purple-600 transition-colors">
          <LogOut className="h-5 w-5" />
          <span>Sign out</span>
        </Link>
      </div>
    </div>
  );
};

export default AdminSidebar;
