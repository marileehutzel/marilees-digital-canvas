import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ConcentrixFC from "./pages/projects/ConcentrixFC";
import MachineLearning from "./pages/projects/MachineLearning";
import AIDataExplorer from "./pages/projects/AIDataExplorer";
import DashboardBuilder from "./pages/projects/DashboardBuilder";
import CXMobile from "./pages/projects/CXMobile";
import HackAThon from "./pages/projects/HackAThon";
import FirstWatch from "./pages/projects/FirstWatch";
import Marcos from "./pages/projects/Marcos";
import NCRCollaboration from "./pages/projects/NCRCollaboration";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects/concentrix-fc" element={<ConcentrixFC />} />
          <Route path="/projects/machine-learning" element={<MachineLearning />} />
          <Route path="/projects/ai-data-explorer" element={<AIDataExplorer />} />
          <Route path="/projects/dashboard-builder" element={<DashboardBuilder />} />
          <Route path="/projects/cx-mobile" element={<CXMobile />} />
          <Route path="/projects/hack-a-thon" element={<HackAThon />} />
          <Route path="/projects/first-watch" element={<FirstWatch />} />
          <Route path="/projects/marcos" element={<Marcos />} />
          <Route path="/projects/ncr-collaboration" element={<NCRCollaboration />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
