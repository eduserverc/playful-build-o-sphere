
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, CheckCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from '@/components/ui/accordion';
import { useToast } from '@/components/ui/use-toast';

interface RentalItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  available: boolean;
}

const Rentals = () => {
  const { toast } = useToast();
  const [selectedItems, setSelectedItems] = useState<string[]>([]);

  // Sample rental items
  const rentalItems: RentalItem[] = [
    {
      id: '1',
      name: 'Professional Racket',
      description: 'High-quality badminton racket for advanced players',
      price: 8,
      image: 'https://images.unsplash.com/photo-1612296727716-d6c69d2a2cbb?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGJhZG1pbnRvbiUyMHJhY2tldHxlbnwwfHwwfHx8MA%3D%3D',
      available: true
    },
    {
      id: '2',
      name: 'Beginner Racket Set',
      description: 'Set of 2 rackets ideal for beginners',
      price: 5,
      image: 'https://images.unsplash.com/photo-1521805103424-d8f8430e8933?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YmFkbWludG9uJTIwcmFja2V0fGVufDB8fDB8fHww',
      available: true
    },
    {
      id: '3',
      name: 'Court Shoes',
      description: 'Comfortable shoes with grip for badminton courts',
      price: 6,
      image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c3BvcnQlMjBzaG9lc3xlbnwwfHwwfHx8MA%3D%3D',
      available: true
    },
    {
      id: '4',
      name: 'Shuttlecock Tube',
      description: 'Tube of 10 feather shuttlecocks',
      price: 12,
      image: 'https://images.unsplash.com/photo-1617142689941-9d45017c7ea8?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YmFkbWludG9ufGVufDB8fDB8fHww',
      available: false
    },
    {
      id: '5',
      name: 'Sports Bag',
      description: 'Spacious bag to carry all your badminton equipment',
      price: 4,
      image: 'https://images.unsplash.com/photo-1575844264771-892081089af5?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHNwb3J0JTIwYmFnfGVufDB8fDB8fHww',
      available: true
    },
  ];

  const handleToggleItem = (itemId: string) => {
    setSelectedItems(prev => {
      if (prev.includes(itemId)) {
        return prev.filter(id => id !== itemId);
      } else {
        return [...prev, itemId];
      }
    });
  };

  const handleRent = () => {
    if (selectedItems.length === 0) {
      toast({
        title: "No items selected",
        description: "Please select at least one item to rent",
        variant: "destructive"
      });
      return;
    }

    const selectedItemNames = selectedItems.map(id => 
      rentalItems.find(item => item.id === id)?.name
    ).join(', ');

    toast({
      title: "Rental confirmed",
      description: `You've successfully rented: ${selectedItemNames}`,
      variant: "default"
    });
  };

  const totalPrice = selectedItems.reduce((sum, id) => {
    const item = rentalItems.find(item => item.id === id);
    return sum + (item?.price || 0);
  }, 0);

  return (
    <div className="min-h-screen pt-24 pb-16 px-6 md:px-10">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8"
        >
          <div>
            <h1 className="text-3xl font-bold">Equipment Rentals</h1>
            <p className="text-gray-600 dark:text-gray-300 mt-1">Rent badminton equipment for your games</p>
          </div>
        </motion.div>
        
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Rental Items */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex-1"
          >
            <div className="grid grid-cols-1 gap-6">
              {rentalItems.map((item) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className={`bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-soft ${
                    !item.available ? 'opacity-60' : ''
                  }`}
                >
                  <div className="flex flex-col sm:flex-row">
                    <div className="sm:w-1/3 h-48 sm:h-auto">
                      <img 
                        src={item.image} 
                        alt={item.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="sm:w-2/3 p-6 flex flex-col justify-between">
                      <div>
                        <div className="flex justify-between items-start">
                          <h3 className="text-xl font-semibold">{item.name}</h3>
                          <div className="text-lg font-bold text-badminton-purple-600">${item.price}/day</div>
                        </div>
                        <p className="text-gray-600 dark:text-gray-300 mt-2">{item.description}</p>
                      </div>
                      
                      <div className="mt-4 flex justify-between items-center">
                        <div className="text-sm font-medium">
                          {item.available ? (
                            <span className="text-green-600 flex items-center">
                              <CheckCircle className="h-4 w-4 mr-1" /> In Stock
                            </span>
                          ) : (
                            <span className="text-red-500">Currently Unavailable</span>
                          )}
                        </div>
                        
                        <Button
                          onClick={() => handleToggleItem(item.id)}
                          disabled={!item.available}
                          variant={selectedItems.includes(item.id) ? "default" : "outline"}
                          className={selectedItems.includes(item.id) ? "bg-badminton-purple-600 hover:bg-badminton-purple-700" : ""}
                        >
                          {selectedItems.includes(item.id) ? "Selected" : "Select"}
                        </Button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          {/* Rental Summary */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:w-1/3"
          >
            <div className="sticky top-28 bg-white dark:bg-gray-800 rounded-xl p-6 shadow-soft">
              <h3 className="text-xl font-semibold mb-6">Rental Summary</h3>
              
              {selectedItems.length > 0 ? (
                <div className="space-y-4">
                  {selectedItems.map(id => {
                    const item = rentalItems.find(item => item.id === id);
                    if (!item) return null;
                    
                    return (
                      <div key={id} className="flex justify-between items-center">
                        <div className="flex-1">
                          <h4 className="font-medium">{item.name}</h4>
                          <p className="text-sm text-gray-500 dark:text-gray-400">1 day rental</p>
                        </div>
                        <div className="font-semibold">${item.price}</div>
                      </div>
                    );
                  })}
                  
                  <div className="border-t pt-4 mt-6">
                    <div className="flex justify-between items-center font-bold">
                      <span>Total</span>
                      <span>${totalPrice}</span>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="text-center py-8 text-gray-500 dark:text-gray-400">
                  <p>No items selected yet</p>
                  <p className="text-sm mt-1">Select equipment to see the summary</p>
                </div>
              )}
              
              <Button
                onClick={handleRent}
                disabled={selectedItems.length === 0}
                className="w-full mt-6 bg-badminton-purple-600 hover:bg-badminton-purple-700"
              >
                {selectedItems.length > 0 ? `Rent Selected Items (${selectedItems.length})` : 'Select Items to Rent'}
              </Button>
              
              <div className="mt-6">
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="rental-info" className="border-b-0">
                    <AccordionTrigger className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:no-underline">
                      Rental Information
                    </AccordionTrigger>
                    <AccordionContent className="text-sm text-gray-500 dark:text-gray-400">
                      <ul className="space-y-2 list-disc pl-4">
                        <li>Rentals are available for 24-hour periods</li>
                        <li>ID required for all equipment rentals</li>
                        <li>Late returns incur additional daily charges</li>
                        <li>Equipment must be returned in original condition</li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
              
              <div className="mt-4 flex items-center justify-center text-sm text-gray-500 dark:text-gray-400">
                <Calendar className="h-4 w-4 mr-2" />
                <span>30-day rental availability calendar</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Rentals;
