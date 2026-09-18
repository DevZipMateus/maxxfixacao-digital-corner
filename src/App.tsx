import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Vitrine from "./pages/Vitrine";
import Header from "./components/Header";
import WhatsAppFloat from "./components/WhatsAppFloat";

const queryClient = new QueryClient();

const Chrome = () => {
  const { pathname } = useLocation();
  return (
    <>
      <Header />
      {pathname !== "/vitrine" && <WhatsAppFloat />}
    </>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Chrome />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/vitrine" element={<Vitrine />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
