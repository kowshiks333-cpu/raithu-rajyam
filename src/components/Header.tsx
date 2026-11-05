import React, { useState, useRef, useEffect } from 'react';
import { Tractor, Search, FileText, Menu, X, User, LogOut, ChevronDown, CheckCircle2, MapPin, FileSpreadsheet, Presentation } from 'lucide-react';
import { UserProfile } from '../types/auth';

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onOpenSearch: () => void;
  onOpenReport: () => void;
  onOpenPythonCode?: () => void;
  onOpenDatabase?: () => void;
  onOpenPresentation?: () => void;
  user: UserProfile | null;
  onOpenLogin: () => void;
  onLogout: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  setActiveTab,
  onOpenSearch,
  onOpenReport,
  onOpenPythonCode,
  onOpenDatabase,
  onOpenPresentation,
  user,
  onOpenLogin,
  onLogout
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setUserMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'states', label: 'States Map' },
    { id: 'crops', label: 'Crop Database' },
    { id: 'production', label: 'Production Analysis' },
    { id: 'compare', label: 'Compare States' },
    { id: 'weather', label: 'Weather & Advisory' },
    { id: 'farmer-db', label: 'Farmer Database (Excel)' },
  ];

  const handleNavClick = (id: string) => {
    setActiveTab(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur border-b border-emerald-100/90 shadow-xs">
      {/* Lush Greenery Top Bar Accent */}
      <div className="h-1 bg-gradient-to-r from-emerald-800 via-green-500 to-emerald-700" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8 h-16">
          {/* Zone 1: Wordmark with Tractor Logo */}
          <div
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-2.5 cursor-pointer whitespace-nowrap shrink-0 group"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-600 via-green-700 to-emerald-800 flex items-center justify-center text-white shadow-sm border border-emerald-500/40 group-hover:from-emerald-700 group-hover:to-green-900 transition-all duration-300">
              <Tractor className="w-5 h-5 text-emerald-100" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold tracking-tight text-stone-900 group-hover:text-emerald-800 transition-colors">
                Raithu Rajyam
              </span>
              <span className="text-[10px] text-emerald-700 font-semibold tracking-wide -mt-0.5 hidden sm:block">
                Indian Crop Production Analysis
              </span>
            </div>
          </div>

          {/* Zone 2: clean text navigation links */}
          <nav className="hidden xl:flex items-center gap-5 text-sm font-medium text-stone-600">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`whitespace-nowrap shrink-0 transition-colors hover:text-emerald-800 py-1 cursor-pointer ${
                  activeTab === item.id
                    ? 'text-emerald-800 font-semibold border-b-2 border-emerald-700'
                    : 'text-stone-600'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Zone 3: Search + Excel Database + Login/User + Primary Action */}
          <div className="flex items-center gap-2 sm:gap-2.5 shrink-0">
            {/* Search Trigger */}
            <button
              onClick={onOpenSearch}
              title="Search states, crops, varieties (Ctrl+K)"
              className="flex items-center gap-2 px-3 py-1.5 text-xs text-stone-600 bg-stone-100 hover:bg-stone-200/80 rounded-md transition-colors cursor-pointer"
            >
              <Search className="w-3.5 h-3.5 text-stone-500" />
              <span className="hidden sm:inline">Search...</span>
              <kbd className="hidden md:inline-block px-1.5 py-0.5 text-[10px] font-mono text-stone-400 bg-white rounded border border-stone-200">
                ⌘K
              </kbd>
            </button>

            {/* Farmer Database & Excel Quick Button */}
            <button
              onClick={() => {
                if (onOpenDatabase) onOpenDatabase();
                else handleNavClick('farmer-db');
              }}
              title="Farmer Login Database & Excel Sheet"
              className="hidden lg:flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-emerald-900 bg-emerald-50 hover:bg-emerald-100/90 border border-emerald-300/80 rounded-md transition-colors cursor-pointer"
            >
              <FileSpreadsheet className="w-3.5 h-3.5 text-emerald-700" />
              <span>Excel Database</span>
            </button>

            {/* PPT Presentation Deck Button */}
            {onOpenPresentation && (
              <button
                onClick={onOpenPresentation}
                title="View 8-Slide Presentation Deck"
                className="hidden md:flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-purple-900 bg-purple-50 hover:bg-purple-100/90 border border-purple-300/80 rounded-md transition-colors cursor-pointer"
              >
                <Presentation className="w-3.5 h-3.5 text-purple-700" />
                <span>PPT (8 Slides)</span>
              </button>
            )}

            {/* Login / User Profile Component */}
            {user ? (
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setUserMenuOpen(!userMenuOpen)}
                  className="flex items-center gap-2 p-1 sm:px-2.5 sm:py-1 bg-stone-100 hover:bg-stone-200/80 rounded-lg transition-colors cursor-pointer"
                >
                  <div className="w-6 h-6 rounded-full bg-emerald-700 text-white flex items-center justify-center font-bold text-xs">
                    {user.name[0]}
                  </div>
                  <div className="hidden sm:flex flex-col text-left">
                    <span className="text-xs font-bold text-stone-900 leading-tight truncate max-w-[100px]">
                      {user.name.split(' ')[0]}
                    </span>
                    <span className="text-[10px] text-emerald-800 font-semibold -mt-0.5">
                      {user.role.split('(')[0].trim()}
                    </span>
                  </div>
                  <ChevronDown className="w-3 h-3 text-stone-400 hidden sm:block" />
                </button>

                {/* User Dropdown */}
                {userMenuOpen && (
                  <div className="absolute right-0 mt-2 w-72 bg-white rounded-xl shadow-xl border border-stone-200 p-4 space-y-3 z-50 animate-in fade-in duration-150">
                    <div className="border-b border-stone-100 pb-3">
                      <div className="font-bold text-stone-900 text-sm">{user.name}</div>
                      <div className="text-[11px] font-mono text-stone-500">Kisan ID: {user.kisanId}</div>
                      <div className="mt-1 text-[11px] text-emerald-800 font-medium bg-emerald-50 px-2 py-0.5 rounded inline-block">
                        {user.role}
                      </div>
                    </div>

                    <div className="space-y-1 text-xs text-stone-600">
                      <div className="flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-stone-400" />
                        <span>{user.district}, {user.state}</span>
                      </div>
                      {user.landholdingAcres ? (
                        <div className="text-[11px] text-stone-500">
                          Farm Holding: <strong className="text-stone-800">{user.landholdingAcres} Acres</strong>
                        </div>
                      ) : null}
                      {user.primaryCrops && user.primaryCrops.length > 0 ? (
                        <div className="text-[11px] text-stone-500">
                          Cultivating: <strong className="text-stone-800">{user.primaryCrops.join(', ')}</strong>
                        </div>
                      ) : null}
                    </div>

                    <div className="pt-2 border-t border-stone-100 space-y-1">
                      <button
                        onClick={() => {
                          setUserMenuOpen(false);
                          if (onOpenDatabase) onOpenDatabase();
                          else handleNavClick('farmer-db');
                        }}
                        className="w-full flex items-center gap-2 p-2 text-xs font-semibold text-emerald-800 hover:bg-emerald-50 rounded-lg transition-colors cursor-pointer text-left"
                      >
                        <FileSpreadsheet className="w-3.5 h-3.5 text-emerald-600" />
                        <span>Farmer Database & Excel Ledger</span>
                      </button>

                      <button
                        onClick={() => {
                          setUserMenuOpen(false);
                          onLogout();
                        }}
                        className="w-full flex items-center gap-2 p-2 text-xs font-semibold text-red-700 hover:bg-red-50 rounded-lg transition-colors cursor-pointer text-left"
                      >
                        <LogOut className="w-3.5 h-3.5" />
                        <span>Sign Out of Portal</span>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <button
                onClick={onOpenLogin}
                className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-emerald-950 bg-emerald-100/80 hover:bg-emerald-200 border border-emerald-300 rounded-md transition-colors cursor-pointer"
              >
                <User className="w-3.5 h-3.5 text-emerald-800" />
                <span>Sign In</span>
              </button>
            )}

            {/* Primary Action Button */}
            <button
              onClick={onOpenReport}
              className="hidden sm:flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-white bg-gradient-to-r from-emerald-700 to-green-700 hover:from-emerald-800 hover:to-green-800 rounded-md transition-all whitespace-nowrap shrink-0 cursor-pointer shadow-sm"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Generate Report</span>
            </button>

            {/* Mobile menu trigger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-1.5 text-stone-600 hover:text-stone-900 rounded-md hover:bg-stone-100 cursor-pointer"
              aria-label="Toggle navigation"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white border-b border-stone-200 px-4 pt-2 pb-4 space-y-1 shadow-lg">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`w-full text-left px-3 py-2 text-sm rounded-md transition-colors ${
                activeTab === item.id
                  ? 'bg-emerald-50 text-emerald-800 font-semibold'
                  : 'text-stone-700 hover:bg-stone-50'
              }`}
            >
              {item.label}
            </button>
          ))}
          <div className="pt-2 border-t border-stone-100 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                if (onOpenDatabase) onOpenDatabase();
                else handleNavClick('farmer-db');
              }}
              className="w-full flex items-center justify-center gap-2 py-2 text-xs font-semibold text-emerald-900 bg-emerald-50 border border-emerald-200 rounded-md"
            >
              <FileSpreadsheet className="w-4 h-4 text-emerald-700" />
              <span>Farmer Database & Excel Sheet</span>
            </button>
            {!user ? (
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenLogin();
                }}
                className="w-full flex items-center justify-center gap-2 py-2 text-xs font-semibold text-emerald-900 bg-emerald-100 rounded-md"
              >
                <User className="w-4 h-4" />
                <span>Raithu Sign In</span>
              </button>
            ) : (
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onLogout();
                }}
                className="w-full flex items-center justify-center gap-2 py-2 text-xs font-semibold text-red-700 bg-red-50 rounded-md"
              >
                <LogOut className="w-4 h-4" />
                <span>Sign Out ({user.name.split(' ')[0]})</span>
              </button>
            )}
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenReport();
              }}
              className="w-full flex items-center justify-center gap-2 py-2 text-xs font-semibold text-white bg-emerald-800 rounded-md"
            >
              <FileText className="w-4 h-4" />
              <span>Generate Executive Report</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
