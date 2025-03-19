
import React from 'react';
import AdminSidebar from '@/components/AdminSidebar';

const AdminSeatAllocation = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <AdminSidebar />
      
      <div className="flex-1">
        <div className="bg-lavender-100 p-6 h-full">
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-sm p-6">
            <h1 className="text-2xl font-bold text-gray-800 mb-6">Seat Allocation</h1>
            <p className="text-gray-600">
              Seat allocation page will be implemented in the future. This page will allow administrators 
              to manage court seats and allocate them to users.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminSeatAllocation;
