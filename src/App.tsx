
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

// Pages
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import CourtAvailability from "./pages/CourtAvailability";
import FindPlayers from "./pages/FindPlayers";
import Rentals from "./pages/Rentals";
import AddRental from "./pages/AddRental";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";

// Components
import NavBar from "./components/NavBar";

const queryClient = new QueryClient();

// Add framer-motion for page transitions
const PageTransition = ({ children }: { children: React.ReactNode }) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -10 }}
    transition={{ duration: 0.3 }}
    className="min-h-screen"
  >
    {children}
  </motion.div>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="flex flex-col min-h-screen">
          <NavBar />
          <AnimatePresence mode="wait">
            <Routes>
              <Route 
                path="/" 
                element={
                  <PageTransition>
                    <Index />
                  </PageTransition>
                } 
              />
              <Route 
                path="/court-availability" 
                element={
                  <PageTransition>
                    <CourtAvailability />
                  </PageTransition>
                } 
              />
              <Route 
                path="/find-players" 
                element={
                  <PageTransition>
                    <FindPlayers />
                  </PageTransition>
                } 
              />
              <Route 
                path="/rentals" 
                element={
                  <PageTransition>
                    <Rentals />
                  </PageTransition>
                } 
              />
              <Route 
                path="/add-rental" 
                element={
                  <PageTransition>
                    <AddRental />
                  </PageTransition>
                } 
              />
              <Route 
                path="/login" 
                element={
                  <PageTransition>
                    <Login />
                  </PageTransition>
                } 
              />
              <Route 
                path="/signup" 
                element={
                  <PageTransition>
                    <SignUp />
                  </PageTransition>
                } 
              />
              <Route 
                path="*" 
                element={
                  <PageTransition>
                    <NotFound />
                  </PageTransition>
                } 
              />
            </Routes>
          </AnimatePresence>
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
