
import React, { useState, useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/hooks/use-theme";
import { LanguageProvider } from "@/contexts/LanguageContext";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// Create a context for the global content lock
export const GlobalLockContext = React.createContext({
  isLocked: true,
  setIsLocked: (value: boolean) => {}
});

const queryClient = new QueryClient();

const App = () => {
  const [isLocked, setIsLocked] = useState(true);

  // Lock everything on initial load
  useEffect(() => {
    setIsLocked(true);
    console.log("Content locked globally");
    
    // Prevent modifications via console
    const preventModifications = (e: KeyboardEvent) => {
      if (e.key === 'F12' || (e.ctrlKey && e.shiftKey && e.key === 'I')) {
        e.preventDefault();
      }
    };
    
    window.addEventListener('keydown', preventModifications);
    return () => window.removeEventListener('keydown', preventModifications);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="light">
        <LanguageProvider>
          <GlobalLockContext.Provider value={{ isLocked, setIsLocked }}>
            <TooltipProvider>
              <Toaster />
              <Sonner />
              <BrowserRouter>
                <Routes>
                  <Route path="/" element={<Index />} />
                  {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </BrowserRouter>
            </TooltipProvider>
          </GlobalLockContext.Provider>
        </LanguageProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
