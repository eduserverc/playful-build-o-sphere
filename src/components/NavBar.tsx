
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Bell } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const NavBar = () => {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [notificationCount, setNotificationCount] = useState(2);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const routes = [
    { path: '/', label: 'Home' },
    { path: '/court-availability', label: 'Court Availability' },
    { path: '/find-players', label: 'Find Players' },
    { path: '/rentals', label: 'Rentals' },
  ];

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full flex items-center justify-between px-6 md:px-10 py-4',
        scrolled ? 'bg-white/80 dark:bg-black/80 backdrop-blur-md shadow-sm' : 'bg-transparent'
      )}
    >
      <Link 
        to="/" 
        className="flex items-center gap-2 transition-all duration-300 group"
      >
        <div className="w-8 h-8 rounded-full bg-badminton-purple-600 flex items-center justify-center animate-pulse-subtle">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18 3V7M18 11V21M12 3V13M12 17V21M6 3V21" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <span className="font-semibold text-lg transition-all group-hover:text-badminton-purple-600">
          Badminton Court Manager
        </span>
      </Link>

      <nav className="hidden md:flex items-center gap-1">
        {routes.map((route) => (
          <Link
            key={route.path}
            to={route.path}
            className={cn(
              'px-4 py-2 rounded-full text-sm font-medium transition-all duration-200',
              location.pathname === route.path
                ? 'bg-badminton-purple-600 text-white shadow-sm'
                : 'hover:bg-gray-100 dark:hover:bg-gray-800'
            )}
          >
            {route.label}
          </Link>
        ))}
      </nav>

      <div className="flex items-center gap-2">
        <button className="relative p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-all">
          <Bell size={20} />
          {notificationCount > 0 && (
            <Badge 
              className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 bg-badminton-purple-600 hover:bg-badminton-purple-700"
            >
              {notificationCount}
            </Badge>
          )}
        </button>
        <Link
          to="/login"
          className="hidden md:flex items-center justify-center px-4 py-2 rounded-full bg-badminton-purple-600 text-white text-sm font-medium hover:bg-badminton-purple-700 transition-all shadow-sm"
        >
          Login
        </Link>
      </div>
    </header>
  );
};

export default NavBar;
