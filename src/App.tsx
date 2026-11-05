/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { HeroLanding } from './components/HeroLanding';
import { IndiaMapSection } from './components/IndiaMapSection';
import { CropDatabaseSection } from './components/CropDatabaseSection';
import { ProductionAnalysisDashboard } from './components/ProductionAnalysisDashboard';
import { StateComparisonSection } from './components/StateComparisonSection';
import { WeatherAdvisorySection } from './components/WeatherAdvisorySection';
import { GlobalSearchModal } from './components/GlobalSearchModal';
import { ReportModal } from './components/ReportModal';
import { AboutContactModal } from './components/AboutContactModal';
import { LoginModal } from './components/LoginModal';
import { PythonCodeModal } from './components/PythonCodeModal';
import { FarmerDatabaseModal } from './components/FarmerDatabaseModal';
import { PresentationModal } from './components/PresentationModal';
import { Footer } from './components/Footer';
import { UserProfile, DEMO_USERS } from './types/auth';
import { CheckCircle2, User, X } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('home');
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);
  const [isReportOpen, setIsReportOpen] = useState<boolean>(false);
  const [isLoginOpen, setIsLoginOpen] = useState<boolean>(false);
  const [isPythonCodeOpen, setIsPythonCodeOpen] = useState<boolean>(false);
  const [isFarmerDbOpen, setIsFarmerDbOpen] = useState<boolean>(false);
  const [isPresentationOpen, setIsPresentationOpen] = useState<boolean>(false);
  const [loginToast, setLoginToast] = useState<string | null>(null);

  const [user, setUser] = useState<UserProfile | null>(() => {
    try {
      const saved = localStorage.getItem('raithu_rajyam_user');
      return saved ? JSON.parse(saved) : null;
    } catch {
      return null;
    }
  });

  const [aboutContactState, setAboutContactState] = useState<{
    isOpen: boolean;
    tab: 'about' | 'contact';
  }>({ isOpen: false, tab: 'about' });

  // Cross-navigation selection states
  const [targetStateId, setTargetStateId] = useState<string | null>(null);
  const [targetCropId, setTargetCropId] = useState<string | null>(null);

  // Keyboard shortcut for search
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchOpen(true);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleLoginSuccess = (loggedInUser: UserProfile) => {
    setUser(loggedInUser);
    try {
      localStorage.setItem('raithu_rajyam_user', JSON.stringify(loggedInUser));
    } catch (e) {
      console.error(e);
    }
    setLoginToast(`Namaskaram ${loggedInUser.name}! Welcome to Raithu Rajyam.`);
    setTimeout(() => {
      setLoginToast(null);
    }, 4500);
  };

  const handleLogout = () => {
    setUser(null);
    try {
      localStorage.removeItem('raithu_rajyam_user');
    } catch (e) {
      console.error(e);
    }
  };

  // Handlers for cross-module transitions
  const handleSelectStateFromSearch = (stateId: string) => {
    setTargetStateId(stateId);
    setActiveTab('states');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectCropFromSearch = (cropId: string) => {
    setTargetCropId(cropId);
    setActiveTab('crops');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectStateFromCrop = (stateName: string) => {
    const matched = stateName.toLowerCase().replace(/[^a-z0-9]/g, '-');
    setTargetStateId(matched);
    setActiveTab('states');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectCropFromState = (cropName: string) => {
    const matched = cropName.toLowerCase().replace(/[^a-z0-9]/g, '-');
    setTargetCropId(matched);
    setActiveTab('crops');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAF6] text-stone-800">
      {/* Top Navigation Bar */}
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenReport={() => setIsReportOpen(true)}
        onOpenPythonCode={() => setIsPythonCodeOpen(true)}
        onOpenDatabase={() => setIsFarmerDbOpen(true)}
        onOpenPresentation={() => setIsPresentationOpen(true)}
        user={user}
        onOpenLogin={() => setIsLoginOpen(true)}
        onLogout={handleLogout}
      />

      {/* Floating Login Notification Toast */}
      {loginToast && (
        <div className="fixed top-20 right-6 z-50 bg-emerald-800 text-white px-4 py-3 rounded-xl shadow-xl flex items-center gap-3 text-xs animate-in slide-in-from-top-2 duration-200">
          <CheckCircle2 className="w-4 h-4 text-emerald-300 shrink-0" />
          <span className="font-medium">{loginToast}</span>
          <button
            onClick={() => setLoginToast(null)}
            className="p-1 hover:bg-emerald-700 rounded cursor-pointer"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Authenticated Farmer Status Strip (when logged in) */}
      {user && (
        <div className="bg-emerald-900 text-emerald-100 text-xs px-4 py-2 border-b border-emerald-800">
          <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>
                Logged in as <strong>{user.name}</strong> ({user.role}) · Kisan ID: <span className="font-mono">{user.kisanId}</span>
              </span>
            </div>
            <div className="text-[11px] text-emerald-300">
              Region: {user.district}, {user.state}
              {user.landholdingAcres ? ` · ${user.landholdingAcres} Acres Farm` : ''}
            </div>
          </div>
        </div>
      )}

      {/* Main Viewport Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
        {activeTab === 'home' && (
          <HeroLanding
            onNavigate={(tab) => {
              setActiveTab(tab);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onSelectCrop={(cropId) => {
              setTargetCropId(cropId);
              setActiveTab('crops');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onOpenPresentation={() => setIsPresentationOpen(true)}
          />
        )}

        {activeTab === 'states' && (
          <IndiaMapSection
            onSelectCrop={handleSelectCropFromState}
            selectedStateIdFromExternal={targetStateId}
          />
        )}

        {activeTab === 'crops' && (
          <CropDatabaseSection
            onSelectState={handleSelectStateFromCrop}
            selectedCropIdFromExternal={targetCropId}
          />
        )}

        {activeTab === 'production' && (
          <ProductionAnalysisDashboard />
        )}

        {activeTab === 'compare' && (
          <StateComparisonSection />
        )}

        {activeTab === 'weather' && (
          <WeatherAdvisorySection />
        )}

        {activeTab === 'farmer-db' && (
          <FarmerDatabaseModal
            isOpen={true}
            onClose={() => setActiveTab('home')}
            isEmbedded={true}
          />
        )}
      </main>

      {/* Footer */}
      <Footer
        onNavigate={(tab) => {
          setActiveTab(tab);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onOpenAbout={() => setAboutContactState({ isOpen: true, tab: 'about' })}
        onOpenContact={() => setAboutContactState({ isOpen: true, tab: 'contact' })}
        onOpenReport={() => setIsReportOpen(true)}
      />

      {/* Global Search Modal */}
      <GlobalSearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectState={handleSelectStateFromSearch}
        onSelectCrop={handleSelectCropFromSearch}
      />

      {/* Report Generator Modal */}
      <ReportModal
        isOpen={isReportOpen}
        onClose={() => setIsReportOpen(false)}
      />

      {/* About & Contact Modal */}
      <AboutContactModal
        isOpen={aboutContactState.isOpen}
        onClose={() => setAboutContactState({ isOpen: false, tab: 'about' })}
        initialTab={aboutContactState.tab}
      />

      {/* Login & Registration Modal */}
      <LoginModal
        isOpen={isLoginOpen}
        onClose={() => setIsLoginOpen(false)}
        onLoginSuccess={handleLoginSuccess}
        onOpenDatabase={() => setIsFarmerDbOpen(true)}
      />

      {/* Farmer Login Database & Excel Sheet Modal */}
      <FarmerDatabaseModal
        isOpen={isFarmerDbOpen}
        onClose={() => setIsFarmerDbOpen(false)}
      />

      {/* Python Code Viewer Modal */}
      <PythonCodeModal
        isOpen={isPythonCodeOpen}
        onClose={() => setIsPythonCodeOpen(false)}
      />

      {/* 8-Slide PPT Presentation Deck Modal */}
      <PresentationModal
        isOpen={isPresentationOpen}
        onClose={() => setIsPresentationOpen(false)}
      />
    </div>
  );
}
