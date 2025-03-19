
import React, { useState } from 'react';
import AdminSidebar from '@/components/AdminSidebar';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import NotificationDialog from '@/components/NotificationDialog';

const AdminNotifications = () => {
  const [dialogOpen, setDialogOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-gray-100">
      <AdminSidebar />
      
      <div className="flex-1">
        <div className="bg-lavender-100 p-6 h-full">
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-sm p-6">
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-2xl font-bold text-gray-800">Notification Management</h1>
              <Button 
                onClick={() => setDialogOpen(true)}
                className="bg-purple-700 hover:bg-purple-800"
              >
                <Plus className="mr-2 h-4 w-4" /> Create Notification
              </Button>
            </div>
            
            <div className="bg-lavender-50 rounded-lg p-8 text-center text-gray-600">
              <p>Create a notification to inform users about court availability, maintenance, or announcements.</p>
              <Button 
                onClick={() => setDialogOpen(true)}
                variant="outline" 
                className="mt-4 border-purple-300 text-purple-700 hover:bg-purple-50"
              >
                <Plus className="mr-2 h-4 w-4" /> Send New Notification
              </Button>
            </div>
          </div>
        </div>
      </div>

      <NotificationDialog 
        open={dialogOpen} 
        onOpenChange={setDialogOpen} 
      />
    </div>
  );
};

export default AdminNotifications;
