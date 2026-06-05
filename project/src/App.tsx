import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { lazy, Suspense, useEffect } from 'react';

const Home = lazy(() => import('./pages/Home'));
const Features = lazy(() => import('./pages/Features'));
const AIGuardian = lazy(() => import('./pages/AIGuardian'));
const SOSProtection = lazy(() => import('./pages/SOSProtection'));
const LiveIntel = lazy(() => import('./pages/LiveIntel'));
const CyberSafety = lazy(() => import('./pages/CyberSafety'));
const NearbyHelp = lazy(() => import('./pages/NearbyHelp'));
const About = lazy(() => import('./pages/About'));
const Pricing = lazy(() => import('./pages/Pricing'));
const Blog = lazy(() => import('./pages/Blog'));
const Contact = lazy(() => import('./pages/Contact'));
const Privacy = lazy(() => import('./pages/Privacy'));
const Terms = lazy(() => import('./pages/Terms'));

function LoadingScreen() {
  return (
    <div className="min-h-screen bg-dark-950 flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="w-12 h-12 border-2 border-neon-blue/30 border-t-neon-blue rounded-full animate-spin" />
        <p className="text-neon-blue/60 text-sm font-mono tracking-widest">LOADING</p>
      </div>
    </div>
  );
}

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Suspense fallback={<LoadingScreen />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/features" element={<Features />} />
          <Route path="/ai-guardian" element={<AIGuardian />} />
          <Route path="/sos-protection" element={<SOSProtection />} />
          <Route path="/live-intel" element={<LiveIntel />} />
          <Route path="/cyber-safety" element={<CyberSafety />} />
          <Route path="/nearby-help" element={<NearbyHelp />} />
          <Route path="/about" element={<About />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
