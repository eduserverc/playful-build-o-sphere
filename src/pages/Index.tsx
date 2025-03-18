
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, Users, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="relative flex items-center justify-center pt-32 pb-20 px-6 md:px-10 min-h-[80vh]">
        <div className="absolute inset-0 bg-gradient-to-b from-badminton-purple-50 to-transparent dark:from-badminton-purple-900/10 dark:to-transparent z-0" />
        
        <div className="container mx-auto max-w-6xl z-10">
          <div className="flex flex-col md:flex-row gap-10 items-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.5 }}
              className="flex-1 text-center md:text-left"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Manage Your <span className="text-badminton-purple-600">Badminton Court</span> Bookings
              </h1>
              <p className="mt-6 text-lg text-gray-600 dark:text-gray-300 max-w-lg">
                Find available courts, connect with other players, and never miss a chance to play with our smart notification system.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Button
                  asChild
                  size="lg"
                  className="bg-badminton-purple-600 hover:bg-badminton-purple-700 text-white rounded-full shadow-sm"
                >
                  <Link to="/court-availability">
                    Find Courts <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="rounded-full border-badminton-purple-200 text-badminton-purple-700 hover:bg-badminton-purple-50"
                >
                  <Link to="/find-players">
                    Find Players <Users className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }} 
              animate={{ opacity: 1, scale: 1 }} 
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex-1 relative"
            >
              <div className="relative w-full h-[400px] rounded-xl overflow-hidden shadow-lg">
                <div className="absolute inset-0 bg-gradient-to-br from-badminton-purple-100 to-badminton-purple-50 dark:from-badminton-purple-900/30 dark:to-badminton-purple-800/10" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg width="280" height="280" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-badminton-purple-400 opacity-20">
                    <path d="M18 3V7M18 11V21M12 3V13M12 17V21M6 3V21" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <img 
                  src="https://images.unsplash.com/photo-1626224583764-f87db24ac4ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2970&q=80" 
                  alt="Badminton Court" 
                  className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-70"
                />
                
                {/* Floating cards */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  className="absolute top-8 left-8 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm p-4 rounded-lg shadow-glass"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-full bg-badminton-purple-100 dark:bg-badminton-purple-900/50">
                      <Calendar className="h-5 w-5 text-badminton-purple-600" />
                    </div>
                    <div>
                      <h3 className="font-medium text-sm">Court 3 Available</h3>
                      <p className="text-xs text-gray-500 dark:text-gray-400">Today, 3:00 PM - 5:00 PM</p>
                    </div>
                  </div>
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7, duration: 0.5 }}
                  className="absolute bottom-8 right-8 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm p-4 rounded-lg shadow-glass"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-full bg-blue-100 dark:bg-blue-900/50">
                      <MapPin className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-medium text-sm">3 Courts Nearby</h3>
                      <p className="text-xs text-gray-500 dark:text-gray-400">Within 2 miles radius</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 md:px-10 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl font-bold"
            >
              Streamline Your Badminton Experience
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-4 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
            >
              Our platform makes it effortless to find courts, connect with players, and manage your badminton schedule.
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Court Availability",
                description: "Find available courts in real-time. Filter by location, time, and amenities.",
                icon: <Calendar className="h-6 w-6" />,
                color: "bg-badminton-purple-100 text-badminton-purple-600 dark:bg-badminton-purple-900/50",
                link: "/court-availability"
              },
              {
                title: "Find Players",
                description: "Connect with other badminton enthusiasts. Match based on skill level and location.",
                icon: <Users className="h-6 w-6" />,
                color: "bg-blue-100 text-blue-600 dark:bg-blue-900/50",
                link: "/find-players"
              },
              {
                title: "Equipment Rentals",
                description: "Rent rackets, shoes, and other equipment. Reserve in advance for pickup.",
                icon: <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18 3V7M18 11V21M12 3V13M12 17V21M6 3V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>,
                color: "bg-green-100 text-green-600 dark:bg-green-900/50",
                link: "/rentals"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-soft hover:shadow-md transition-all"
              >
                <div className={`p-4 rounded-full ${feature.color} w-fit`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mt-4">{feature.title}</h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">{feature.description}</p>
                <div className="mt-4">
                  <Link
                    to={feature.link}
                    className="text-badminton-purple-600 hover:text-badminton-purple-700 flex items-center text-sm font-medium"
                  >
                    Learn more <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Testimonial Section */}
      <section className="py-20 px-6 md:px-10">
        <div className="container mx-auto max-w-6xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-badminton-purple-50 dark:bg-badminton-purple-900/10 rounded-2xl p-8 md:p-12"
          >
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/2">
                <h2 className="text-3xl font-bold">Loved by Badminton Players</h2>
                <p className="mt-4 text-gray-600 dark:text-gray-300">
                  Join thousands of players who have transformed their badminton experience with our platform.
                </p>
                <blockquote className="mt-8 border-l-4 border-badminton-purple-400 pl-4 italic text-gray-600 dark:text-gray-300">
                  "I used to spend hours calling different venues to find available courts. Now, I can see everything in one place and book instantly. A game-changer for badminton enthusiasts!"
                </blockquote>
                <p className="mt-4 font-medium">— Sarah K., Regular Player</p>
              </div>
              
              <div className="md:w-1/2">
                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-soft">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-badminton-purple-50 dark:bg-badminton-purple-900/20 rounded-lg p-4 text-center">
                      <div className="text-3xl font-bold text-badminton-purple-600">500+</div>
                      <div className="text-sm text-gray-600 dark:text-gray-300 mt-1">Available Courts</div>
                    </div>
                    <div className="bg-badminton-purple-50 dark:bg-badminton-purple-900/20 rounded-lg p-4 text-center">
                      <div className="text-3xl font-bold text-badminton-purple-600">10K+</div>
                      <div className="text-sm text-gray-600 dark:text-gray-300 mt-1">Active Players</div>
                    </div>
                    <div className="bg-badminton-purple-50 dark:bg-badminton-purple-900/20 rounded-lg p-4 text-center">
                      <div className="text-3xl font-bold text-badminton-purple-600">98%</div>
                      <div className="text-sm text-gray-600 dark:text-gray-300 mt-1">Satisfaction Rate</div>
                    </div>
                    <div className="bg-badminton-purple-50 dark:bg-badminton-purple-900/20 rounded-lg p-4 text-center">
                      <div className="text-3xl font-bold text-badminton-purple-600">24/7</div>
                      <div className="text-sm text-gray-600 dark:text-gray-300 mt-1">Booking Service</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Index;
