
import React from 'react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { TimeSlot } from '@/lib/types';

interface CourtTimeSlotProps {
  timeSlot: TimeSlot;
  onClick?: () => void;
}

const CourtTimeSlot: React.FC<CourtTimeSlotProps> = ({ timeSlot, onClick }) => {
  const isAvailable = timeSlot.status === 'available';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      onClick={onClick}
      className={cn(
        'rounded-full py-4 px-6 cursor-pointer transition-all duration-300 flex flex-col items-center justify-center',
        isAvailable 
          ? 'bg-badminton-purple-100 hover:bg-badminton-purple-200' 
          : 'bg-badminton-purple-600 text-white'
      )}
    >
      <span className="text-md font-medium">{timeSlot.time}</span>
      <span className={cn(
        'text-sm mt-1',
        isAvailable ? 'text-badminton-purple-800' : 'text-badminton-purple-200'
      )}>
        {isAvailable ? 'Available' : 'Booked'}
      </span>
    </motion.div>
  );
};

export default CourtTimeSlot;
