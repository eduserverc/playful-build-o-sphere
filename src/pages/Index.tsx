
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Bell } from 'lucide-react';
import CourtMap from '@/components/CourtMap';
import NotificationBadge from '@/components/NotificationBadge';

const Index = () => {
  // Mock data for the home page
  const playerData = {
    name: "Alex Johnson",
    description: "Tennis Enthusiast, Level: Intermediate",
    photoUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
  };

  const notification = {
    id: "1",
    title: "New Slot Available!",
    message: "Court 5 is now open for booking from 3 PM to 4 PM.",
    timestamp: new Date(),
    read: false,
    type: "court"
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Find Players Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm"
        >
          <h2 className="text-2xl font-semibold mb-6">Find Players</h2>
          
          <div className="flex flex-col items-center">
            <Avatar className="h-24 w-24 mb-4">
              <AvatarImage src={playerData.photoUrl} alt={playerData.name} />
              <AvatarFallback>{playerData.name.charAt(0)}</AvatarFallback>
            </Avatar>
            
            <h3 className="text-xl font-medium">{playerData.name}</h3>
            <p className="text-gray-500 dark:text-gray-400 text-sm mt-1 text-center">
              {playerData.description}
            </p>
            
            <Button
              className="mt-4 bg-badminton-purple-600 hover:bg-badminton-purple-700"
            >
              Connect
            </Button>
          </div>
        </motion.div>

        {/* Court Availability Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
          className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm md:col-span-1"
        >
          <h2 className="text-2xl font-semibold mb-6">Court Availability</h2>
          
          <div className="mb-4">
            <CourtMap />
          </div>
          
          <div className="mt-4">
            <h3 className="text-lg font-medium mb-2">Available Courts</h3>
            <p className="text-gray-500 dark:text-gray-400 text-sm">
              Select a court to see available slots and book your playtime.
            </p>
          </div>
        </motion.div>

        {/* Notifications Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
          className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm"
        >
          <div className="flex items-center mb-6">
            <h2 className="text-2xl font-semibold">Notifications</h2>
            <div className="ml-2 relative">
              <Bell className="h-5 w-5 text-badminton-purple-500" />
              <span className="absolute -top-1 -right-1 h-3 w-3 rounded-full bg-red-500"></span>
            </div>
          </div>
          
          <div className="space-y-4">
            <NotificationBadge notification={notification} />
            
            {/* You can add more notification badges here */}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Index;
