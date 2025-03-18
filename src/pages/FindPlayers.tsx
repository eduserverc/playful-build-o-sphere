
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import PlayerCard from '@/components/PlayerCard';
import { Player } from '@/lib/types';

const FindPlayers = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [levelFilter, setLevelFilter] = useState<Player['level'] | 'All'>('All');
  const [showFilters, setShowFilters] = useState(false);

  // Sample players data
  const players: Player[] = [
    {
      id: '1',
      name: 'Alex Johnson',
      photoUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D',
      level: 'Intermediate',
      description: 'Tennis Enthusiast, Level: Intermediate',
    },
    {
      id: '2',
      name: 'Sarah Chen',
      photoUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D',
      level: 'Advanced',
      description: 'Professional Player, 5+ years experience',
    },
    {
      id: '3',
      name: 'Michael Torres',
      photoUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D',
      level: 'Beginner',
      description: 'New to badminton, looking for practice partners',
    },
    {
      id: '4',
      name: 'Emily Kim',
      photoUrl: 'https://images.unsplash.com/photo-1614283233556-f35b0c801ef1?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D',
      level: 'Intermediate',
      description: 'Casual player, enjoys doubles matches',
    },
    {
      id: '5',
      name: 'David Patel',
      photoUrl: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cGVvcGxlfGVufDB8fDB8fHww',
      level: 'Advanced',
      description: 'Tournament player, seeking challenge matches',
    },
    {
      id: '6',
      name: 'Jessica Wang',
      photoUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGVvcGxlfGVufDB8fDB8fHww',
      level: 'Beginner',
      description: 'Started playing last month, enthusiastic learner',
    },
  ];

  // Filter players based on search term and level filter
  const filteredPlayers = players.filter(player => {
    const matchesSearch = player.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          player.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesLevel = levelFilter === 'All' || player.level === levelFilter;
    return matchesSearch && matchesLevel;
  });

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
            <h1 className="text-3xl font-bold">Find Players</h1>
            <p className="text-gray-600 dark:text-gray-300 mt-1">Connect with other badminton enthusiasts</p>
          </div>
        </motion.div>
        
        {/* Search and Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-8"
        >
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <Input
                type="text"
                placeholder="Search by name, level, or description..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 rounded-full border-gray-200 focus-visible:ring-badminton-purple-600"
              />
            </div>
            <Button 
              variant="outline" 
              onClick={() => setShowFilters(!showFilters)}
              className="md:w-auto w-full rounded-full border-gray-200"
            >
              <Filter className="h-4 w-4 mr-2" />
              Filter
            </Button>
          </div>
          
          {/* Filter options */}
          {showFilters && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="mt-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-xl"
            >
              <div className="space-y-4">
                <div>
                  <Label htmlFor="level-filter" className="text-sm font-medium">Skill Level</Label>
                  <RadioGroup 
                    id="level-filter" 
                    value={levelFilter} 
                    onValueChange={(value) => setLevelFilter(value as typeof levelFilter)}
                    className="flex flex-wrap gap-4 mt-2"
                  >
                    {['All', 'Beginner', 'Intermediate', 'Advanced'].map((level) => (
                      <div key={level} className="flex items-center space-x-2">
                        <RadioGroupItem 
                          value={level} 
                          id={`level-${level}`} 
                          className="text-badminton-purple-600"
                        />
                        <Label htmlFor={`level-${level}`}>{level}</Label>
                      </div>
                    ))}
                  </RadioGroup>
                </div>
              </div>
            </motion.div>
          )}
        </motion.div>
        
        {/* Players Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredPlayers.length > 0 ? (
            filteredPlayers.map((player) => (
              <PlayerCard key={player.id} player={player} />
            ))
          ) : (
            <div className="col-span-full text-center py-20">
              <h3 className="text-lg font-medium text-gray-600 dark:text-gray-300">No players found</h3>
              <p className="text-gray-500 dark:text-gray-400 mt-1">Try adjusting your search or filter criteria</p>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default FindPlayers;
