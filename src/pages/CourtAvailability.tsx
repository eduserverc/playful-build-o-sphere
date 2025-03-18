
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { RefreshCw, Calendar, ChevronLeft, ChevronRight } from 'lucide-react';
import CourtTimeSlot from '@/components/CourtTimeSlot';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { useToast } from '@/components/ui/use-toast';
import { TimeSlot } from '@/lib/types';
import CourtMap from '@/components/CourtMap';

const CourtAvailability = () => {
  const { toast } = useToast();
  const [notifyWhenAvailable, setNotifyWhenAvailable] = useState(false);
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<string | null>(null);
  const [isRefreshing, setIsRefreshing] = useState(false);

  // Sample time slots data
  const timeSlots: TimeSlot[] = [
    { id: '1', time: '9:00 AM', status: 'available' },
    { id: '2', time: '10:00 AM', status: 'booked' },
    { id: '3', time: '11:00 AM', status: 'available' },
    { id: '4', time: '12:00 PM', status: 'booked' },
    { id: '5', time: '1:00 PM', status: 'available' },
    { id: '6', time: '2:00 PM', status: 'booked' },
    { id: '7', time: '3:00 PM', status: 'available' },
  ];

  const handlePreviousDay = () => {
    const newDate = new Date(currentDate);
    newDate.setDate(currentDate.getDate() - 1);
    setCurrentDate(newDate);
  };

  const handleNextDay = () => {
    const newDate = new Date(currentDate);
    newDate.setDate(currentDate.getDate() + 1);
    setCurrentDate(newDate);
  };

  const handleRefresh = () => {
    setIsRefreshing(true);
    // Simulate refresh delay
    setTimeout(() => {
      setIsRefreshing(false);
      toast({
        title: "Court availability refreshed",
        description: "The latest availability information has been loaded.",
      });
    }, 1000);
  };

  const handleTimeSlotClick = (timeSlot: TimeSlot) => {
    if (timeSlot.status === 'available') {
      setSelectedTimeSlot(timeSlot.id);
      toast({
        title: "Time slot selected",
        description: `You selected ${timeSlot.time}. Proceed to booking.`,
        variant: "default",
      });
    } else {
      toast({
        title: "Time slot unavailable",
        description: `The ${timeSlot.time} slot is already booked.`,
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen pt-24 pb-16 px-6 md:px-10">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8"
          >
            <div>
              <h1 className="text-3xl font-bold">Court Availability</h1>
              <p className="text-gray-600 dark:text-gray-300 mt-1">Find and book available badminton courts</p>
            </div>
            
            <Button
              onClick={handleRefresh}
              className="self-start md:self-auto"
              disabled={isRefreshing}
            >
              <RefreshCw className={`h-4 w-4 mr-2 ${isRefreshing ? 'animate-spin' : ''}`} />
              Refresh
            </Button>
          </motion.div>
          
          {/* Map View */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-10"
          >
            <CourtMap />
          </motion.div>

          {/* Date Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center justify-between mb-8"
          >
            <Button variant="outline" size="icon" onClick={handlePreviousDay} className="rounded-full">
              <ChevronLeft className="h-4 w-4" />
            </Button>
            
            <div className="flex items-center gap-2">
              <Calendar className="h-5 w-5 text-badminton-purple-600" />
              <span className="font-medium">
                {currentDate.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}
              </span>
            </div>
            
            <Button variant="outline" size="icon" onClick={handleNextDay} className="rounded-full">
              <ChevronRight className="h-4 w-4" />
            </Button>
          </motion.div>
          
          {/* Time Slots */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4 mb-10"
          >
            {timeSlots.map((slot) => (
              <CourtTimeSlot 
                key={slot.id} 
                timeSlot={slot} 
                onClick={() => handleTimeSlotClick(slot)} 
              />
            ))}
          </motion.div>
          
          {/* Notification Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6"
          >
            <h3 className="text-lg font-medium mb-4">Notification</h3>
            <div className="flex items-center space-x-2">
              <Switch 
                id="notify" 
                checked={notifyWhenAvailable}
                onCheckedChange={setNotifyWhenAvailable}
                className="data-[state=checked]:bg-badminton-purple-600"
              />
              <Label htmlFor="notify">Notify me when a slot becomes available</Label>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default CourtAvailability;
