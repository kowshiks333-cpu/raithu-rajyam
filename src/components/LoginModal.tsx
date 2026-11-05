import React, { useState } from 'react';
import { X, Tractor, Phone, Mail, Lock, ShieldCheck, UserCheck, ArrowRight, CheckCircle2, User, Landmark, Sparkles, FileSpreadsheet } from 'lucide-react';
import { UserProfile, DEMO_USERS } from '../types/auth';
import { STATES_AND_UTS_DATA } from '../data/statesData';
import { recordFarmerLogin } from '../services/farmerDatabaseService';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLoginSuccess: (user: UserProfile) => void;
  onOpenDatabase?: () => void;
}

export const LoginModal: React.FC<LoginModalProps> = ({
  isOpen,
  onClose,
  onLoginSuccess,
  onOpenDatabase
}) => {
  const [activeTab, setActiveTab] = useState<'signin' | 'register'>('signin');
  const [authMethod, setAuthMethod] = useState<'mobile' | 'email'>('mobile');

  // Sign in state
  const [mobileNumber, setMobileNumber] = useState('');
  const [otpStep, setOtpStep] = useState(false);
  const [otpValue, setOtpValue] = useState('');
  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const [selectedRole, setSelectedRole] = useState<UserProfile['role']>('Raithu (Farmer)');
  const [errorMessage, setErrorMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Registration state
  const [regName, setRegName] = useState('');
  const [regMobile, setRegMobile] = useState('');
  const [regRole, setRegRole] = useState<UserProfile['role']>('Raithu (Farmer)');
  const [regFarmerCategory, setRegFarmerCategory] = useState<string>('Small Farmer (2.5 - 5 Acres)');
  const [regState, setRegState] = useState('Andhra Pradesh');
  const [regDistrict, setRegDistrict] = useState('Guntur');
  const [regAcres, setRegAcres] = useState('4.5');
  const [regCrop, setRegCrop] = useState('Rice (Paddy), Cotton');

  if (!isOpen) return null;

  const handleSendOtp = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');
    if (!mobileNumber || mobileNumber.replace(/\D/g, '').length !== 10) {
      setErrorMessage('Please enter a valid 10-digit Indian mobile number.');
      return;
    }
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setOtpStep(true);
      setOtpValue('123456'); // pre-fill demo OTP for convenience
    }, 400);
  };

  const handleVerifyOtp = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');
    if (otpValue !== '123456' && otpValue.length !== 6) {
      setErrorMessage('Invalid OTP code. Please enter 123456 to verify.');
      return;
    }
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      const existing = DEMO_USERS.find((u) => u.mobile === mobileNumber);
      const user: UserProfile = existing || {
        id: `user-${Date.now()}`,
        name: `Raithu ${mobileNumber.slice(-4)}`,
        mobile: mobileNumber,
        kisanId: `RR-${selectedRole.slice(0, 3).toUpperCase()}-${Math.floor(1000 + Math.random() * 9000)}`,
        role: selectedRole,
        state: 'Andhra Pradesh',
        district: 'Guntur',
        landholdingAcres: 4.5,
        primaryCrops: ['Rice (Paddy)', 'Cotton'],
        joinedDate: new Date().toISOString().slice(0, 10)
      };
      // Automatically record in the Farmer Login Database with date & time, farmer type, and crops
      recordFarmerLogin(user, {
        farmerType: user.role === 'Raithu (Farmer)' ? 'Small Farmer (2.5 - 5 Acres)' : undefined,
        cropsCultivating: user.primaryCrops?.join(', ') || 'Rice (Paddy), Cotton'
      });
      onLoginSuccess(user);
      onClose();
    }, 400);
  };

  const handleEmailLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');
    if (!emailValue || !passwordValue) {
      setErrorMessage('Please enter both your Kisan ID/Email and password.');
      return;
    }
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      const matched = DEMO_USERS.find(
        (u) => u.email?.toLowerCase() === emailValue.toLowerCase() || u.kisanId.toLowerCase() === emailValue.toLowerCase()
      );
      const user: UserProfile = matched || {
        id: `user-${Date.now()}`,
        name: emailValue.split('@')[0],
        mobile: '9848099881',
        email: emailValue,
        kisanId: `RR-USR-${Math.floor(1000 + Math.random() * 9000)}`,
        role: selectedRole,
        state: 'Andhra Pradesh',
        district: 'Guntur',
        landholdingAcres: 4.0,
        primaryCrops: ['Rice (Paddy)', 'Chili'],
        joinedDate: new Date().toISOString().slice(0, 10)
      };
      // Record in Farmer Login Database
      recordFarmerLogin(user, {
        farmerType: user.role === 'Raithu (Farmer)' ? 'Small Farmer (2.5 - 5 Acres)' : undefined,
        cropsCultivating: user.primaryCrops?.join(', ') || 'Rice (Paddy), Chili'
      });
      onLoginSuccess(user);
      onClose();
    }, 400);
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');
    if (!regName.trim()) {
      setErrorMessage('Please enter your full name.');
      return;
    }
    if (!regMobile || regMobile.replace(/\D/g, '').length !== 10) {
      setErrorMessage('Please enter a valid 10-digit mobile number.');
      return;
    }
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      const cropsArray = regCrop.split(',').map((c) => c.trim()).filter(Boolean);
      const newUser: UserProfile = {
        id: `user-${Date.now()}`,
        name: regName.trim(),
        mobile: regMobile,
        kisanId: `RR-${regRole.slice(0, 3).toUpperCase()}-${Math.floor(1000 + Math.random() * 9000)}`,
        role: regRole,
        state: regState,
        district: regDistrict,
        landholdingAcres: parseFloat(regAcres) || 0,
        primaryCrops: cropsArray.length > 0 ? cropsArray : ['Rice (Paddy)'],
        joinedDate: new Date().toISOString().slice(0, 10)
      };
      // Record in Farmer Login Database with exact timestamp, farmer category, and crops
      recordFarmerLogin(newUser, {
        farmerType: regFarmerCategory,
        cropsCultivating: regCrop
      });
      onLoginSuccess(newUser);
      onClose();
    }, 500);
  };

  const handleQuickDemoLogin = (user: UserProfile) => {
    // Record login session with date & time in database
    recordFarmerLogin(user, {
      cropsCultivating: user.primaryCrops?.join(', ') || 'Rice (Paddy), Cotton'
    });
    onLoginSuccess(user);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-stone-900/60 backdrop-blur-xs overflow-y-auto">
      <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-stone-200 overflow-hidden my-auto flex flex-col">
        {/* Modal Header */}
        <div className="p-6 bg-stone-900 text-white relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-stone-300 hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2.5 mb-2">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-600 to-green-800 flex items-center justify-center text-white border border-emerald-500/40 shadow-sm">
              <Tractor className="w-5 h-5 text-emerald-100" />
            </div>
            <div>
              <h2 className="text-xl font-bold tracking-tight text-white">
                Raithu Rajyam Portal
              </h2>
              <span className="text-[11px] text-emerald-400 font-medium">
                Farmer & Agronomist Authentication
              </span>
            </div>
          </div>

          <p className="text-xs text-stone-300 leading-relaxed mt-2">
            Log in to access customized crop advisories, save farm bookmarks, track regional yield estimates, and export official reports.
          </p>

          {/* Tab Switcher: Sign In vs Register */}
          <div className="mt-5 grid grid-cols-2 p-1 bg-white/10 rounded-lg text-xs font-semibold">
            <button
              onClick={() => {
                setActiveTab('signin');
                setErrorMessage('');
              }}
              className={`py-1.5 rounded-md transition-colors cursor-pointer ${
                activeTab === 'signin'
                  ? 'bg-white text-stone-900 shadow-xs'
                  : 'text-stone-300 hover:text-white'
              }`}
            >
              Sign In
            </button>
            <button
              onClick={() => {
                setActiveTab('register');
                setErrorMessage('');
              }}
              className={`py-1.5 rounded-md transition-colors cursor-pointer ${
                activeTab === 'register'
                  ? 'bg-white text-stone-900 shadow-xs'
                  : 'text-stone-300 hover:text-white'
              }`}
            >
              New Raithu Registration
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-5 max-h-[72vh] overflow-y-auto text-xs text-stone-700">
          {errorMessage && (
            <div className="p-3 bg-red-50 border border-red-200 text-red-800 rounded-lg text-xs flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-red-600 shrink-0" />
              <span>{errorMessage}</span>
            </div>
          )}

          {activeTab === 'signin' ? (
            <div className="space-y-4">
              {/* Method Toggle: Mobile OTP vs Email/Kisan ID */}
              <div className="flex items-center gap-3 border-b border-stone-200 pb-2">
                <button
                  onClick={() => {
                    setAuthMethod('mobile');
                    setOtpStep(false);
                    setErrorMessage('');
                  }}
                  className={`text-xs font-semibold pb-1 cursor-pointer transition-colors ${
                    authMethod === 'mobile'
                      ? 'text-emerald-800 border-b-2 border-emerald-700 -mb-2'
                      : 'text-stone-500 hover:text-stone-800'
                  }`}
                >
                  <span className="flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5" />
                    <span>Mobile OTP (Farmer Fast Login)</span>
                  </span>
                </button>

                <button
                  onClick={() => {
                    setAuthMethod('email');
                    setOtpStep(false);
                    setErrorMessage('');
                  }}
                  className={`text-xs font-semibold pb-1 cursor-pointer transition-colors ${
                    authMethod === 'email'
                      ? 'text-emerald-800 border-b-2 border-emerald-700 -mb-2'
                      : 'text-stone-500 hover:text-stone-800'
                  }`}
                >
                  <span className="flex items-center gap-1.5">
                    <Mail className="w-3.5 h-3.5" />
                    <span>Kisan ID / Password</span>
                  </span>
                </button>
              </div>

              {/* Role Selection */}
              <div>
                <label className="text-xs font-bold text-stone-700 block mb-1.5">Select Role</label>
                <div className="grid grid-cols-3 gap-2">
                  {(['Raithu (Farmer)', 'Agronomist / Scientist', 'Agricultural Officer'] as const).map((r) => (
                    <button
                      key={r}
                      type="button"
                      onClick={() => setSelectedRole(r)}
                      className={`p-2 rounded-lg border text-center font-medium transition-colors cursor-pointer text-[11px] ${
                        selectedRole === r
                          ? 'border-emerald-600 bg-emerald-50 text-emerald-900 font-bold'
                          : 'border-stone-200 bg-stone-50 text-stone-600 hover:bg-stone-100'
                      }`}
                    >
                      {r.split('(')[0].trim()}
                    </button>
                  ))}
                </div>
              </div>

              {/* Mobile OTP Flow */}
              {authMethod === 'mobile' ? (
                !otpStep ? (
                  <form onSubmit={handleSendOtp} className="space-y-3">
                    <div>
                      <label className="text-xs font-bold text-stone-700 block mb-1">
                        10-Digit Mobile Number
                      </label>
                      <div className="relative">
                        <div className="absolute left-3 top-2.5 text-stone-500 font-medium">
                          +91
                        </div>
                        <input
                          type="tel"
                          maxLength={10}
                          value={mobileNumber}
                          onChange={(e) => setMobileNumber(e.target.value.replace(/\D/g, ''))}
                          placeholder="98480 22334"
                          className="w-full pl-12 pr-3 py-2 text-xs text-stone-900 bg-stone-50 border border-stone-200 rounded-lg focus:outline-none focus:border-emerald-600 font-mono tracking-wider text-sm"
                          autoFocus
                        />
                      </div>
                      <span className="text-[10px] text-stone-400 mt-1 block">
                        A 6-digit one-time verification password will be sent via SMS.
                      </span>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-2.5 px-4 text-xs font-semibold text-white bg-emerald-800 hover:bg-emerald-900 rounded-lg transition-colors cursor-pointer flex items-center justify-center gap-1.5 shadow-2xs"
                    >
                      {isSubmitting ? (
                        <span>Sending OTP...</span>
                      ) : (
                        <>
                          <span>Send Verification OTP</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </>
                      )}
                    </button>
                  </form>
                ) : (
                  <form onSubmit={handleVerifyOtp} className="space-y-3">
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <label className="text-xs font-bold text-stone-700">
                          Enter 6-Digit OTP sent to +91 {mobileNumber}
                        </label>
                        <button
                          type="button"
                          onClick={() => setOtpStep(false)}
                          className="text-[10px] text-emerald-800 hover:underline cursor-pointer"
                        >
                          Change Number
                        </button>
                      </div>
                      <input
                        type="text"
                        maxLength={6}
                        value={otpValue}
                        onChange={(e) => setOtpValue(e.target.value)}
                        placeholder="123456"
                        className="w-full px-3 py-2 text-center text-sm font-mono tracking-widest text-stone-900 bg-stone-50 border border-stone-200 rounded-lg focus:outline-none focus:border-emerald-600 font-bold"
                        autoFocus
                      />
                      <span className="text-[10px] text-emerald-700 mt-1 block font-medium">
                        ✓ Demo OTP auto-filled (123456) for instant verification.
                      </span>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-2.5 px-4 text-xs font-semibold text-white bg-emerald-800 hover:bg-emerald-900 rounded-lg transition-colors cursor-pointer flex items-center justify-center gap-1.5 shadow-2xs"
                    >
                      {isSubmitting ? (
                        <span>Verifying...</span>
                      ) : (
                        <>
                          <ShieldCheck className="w-3.5 h-3.5" />
                          <span>Verify & Access Portal</span>
                        </>
                      )}
                    </button>
                  </form>
                )
              ) : (
                /* Email / Kisan ID Flow */
                <form onSubmit={handleEmailLogin} className="space-y-3">
                  <div>
                    <label className="text-xs font-bold text-stone-700 block mb-1">
                      Kisan ID or Registered Email
                    </label>
                    <input
                      type="text"
                      value={emailValue}
                      onChange={(e) => setEmailValue(e.target.value)}
                      placeholder="e.g. RR-AP-2024-8841 or ramesh.farmer@raithu.org"
                      className="w-full px-3 py-2 text-xs text-stone-900 bg-stone-50 border border-stone-200 rounded-lg focus:outline-none focus:border-emerald-600"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold text-stone-700 block mb-1">
                      Portal Password
                    </label>
                    <input
                      type="password"
                      value={passwordValue}
                      onChange={(e) => setPasswordValue(e.target.value)}
                      placeholder="••••••••"
                      className="w-full px-3 py-2 text-xs text-stone-900 bg-stone-50 border border-stone-200 rounded-lg focus:outline-none focus:border-emerald-600"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-2.5 px-4 text-xs font-semibold text-white bg-emerald-800 hover:bg-emerald-900 rounded-lg transition-colors cursor-pointer flex items-center justify-center gap-1.5 shadow-2xs"
                  >
                    {isSubmitting ? (
                      <span>Signing in...</span>
                    ) : (
                      <>
                        <Lock className="w-3.5 h-3.5" />
                        <span>Sign In</span>
                      </>
                    )}
                  </button>
                </form>
              )}

              {/* Instant One-Click Demo Profiles */}
              <div className="pt-4 border-t border-stone-200">
                <span className="text-[10px] font-bold text-stone-400 uppercase tracking-wider block mb-2">
                  One-Click Quick Sign In (For Testing):
                </span>
                <div className="space-y-2">
                  {DEMO_USERS.map((user) => (
                    <div
                      key={user.id}
                      onClick={() => handleQuickDemoLogin(user)}
                      className="p-2.5 bg-stone-50 hover:bg-emerald-50/70 border border-stone-200 hover:border-emerald-300 rounded-lg flex items-center justify-between cursor-pointer transition-colors"
                    >
                      <div className="flex items-center gap-2.5">
                        <div className="w-7 h-7 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-xs">
                          {user.name[0]}
                        </div>
                        <div>
                          <div className="font-bold text-stone-900 text-xs">{user.name}</div>
                          <div className="text-[10px] text-stone-500">
                            {user.role} · {user.district}, {user.state}
                          </div>
                        </div>
                      </div>
                      <span className="text-[10px] font-semibold text-emerald-800 bg-white border border-emerald-200 px-2 py-0.5 rounded">
                        Fast Login →
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            /* New Farmer / User Registration Form */
            <form onSubmit={handleRegister} className="space-y-3">
              <div>
                <label className="text-xs font-bold text-stone-700 block mb-1">Full Name</label>
                <input
                  type="text"
                  value={regName}
                  onChange={(e) => setRegName(e.target.value)}
                  placeholder="e.g. Venkat Reddy"
                  className="w-full px-3 py-2 text-xs text-stone-900 bg-stone-50 border border-stone-200 rounded-lg focus:outline-none focus:border-emerald-600"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-bold text-stone-700 block mb-1">Mobile Number</label>
                  <input
                    type="tel"
                    maxLength={10}
                    value={regMobile}
                    onChange={(e) => setRegMobile(e.target.value.replace(/\D/g, ''))}
                    placeholder="98765 43210"
                    className="w-full px-3 py-2 text-xs text-stone-900 bg-stone-50 border border-stone-200 rounded-lg focus:outline-none focus:border-emerald-600 font-mono"
                  />
                </div>
                <div>
                  <label className="text-xs font-bold text-stone-700 block mb-1">User Category</label>
                  <select
                    value={regRole}
                    onChange={(e) => setRegRole(e.target.value as any)}
                    className="w-full px-3 py-2 text-xs text-stone-900 bg-stone-50 border border-stone-200 rounded-lg focus:outline-none focus:border-emerald-600 cursor-pointer"
                  >
                    <option value="Raithu (Farmer)">Raithu (Farmer)</option>
                    <option value="Agronomist / Scientist">Agronomist / Scientist</option>
                    <option value="Agricultural Officer">Agricultural Officer</option>
                  </select>
                </div>
              </div>

              {/* Explicit Type of Farmer Selection */}
              <div>
                <label className="text-xs font-bold text-stone-700 block mb-1">
                  Type of Farmer / Classification
                </label>
                <select
                  value={regFarmerCategory}
                  onChange={(e) => setRegFarmerCategory(e.target.value)}
                  className="w-full px-3 py-2 text-xs text-stone-900 bg-stone-50 border border-stone-200 rounded-lg focus:outline-none focus:border-emerald-600 cursor-pointer"
                >
                  <option value="Marginal Farmer (< 2.5 Acres)">Marginal Farmer (&lt; 2.5 Acres / &lt; 1 Ha)</option>
                  <option value="Small Farmer (2.5 - 5 Acres)">Small Farmer (2.5 - 5 Acres / 1 - 2 Ha)</option>
                  <option value="Semi-Medium Farmer (5 - 10 Acres)">Semi-Medium Farmer (5 - 10 Acres / 2 - 4 Ha)</option>
                  <option value="Medium Farmer (10 - 25 Acres)">Medium Farmer (10 - 25 Acres / 4 - 10 Ha)</option>
                  <option value="Large Commercial Farmer (> 25 Acres)">Large Commercial Farmer (&gt; 25 Acres)</option>
                  <option value="Tenant Farmer (Kowlu Raithu)">Tenant Farmer (Kowlu Raithu / Sharecropper)</option>
                  <option value="Organic & Natural Farming Practitioner">Organic & Natural Farming Practitioner</option>
                  <option value="Agronomist / Research Scientist">Agronomist / Research Scientist</option>
                  <option value="Agricultural Officer / Inspector">Agricultural Officer / Field Inspector</option>
                </select>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-bold text-stone-700 block mb-1">State</label>
                  <select
                    value={regState}
                    onChange={(e) => setRegState(e.target.value)}
                    className="w-full px-3 py-2 text-xs text-stone-900 bg-stone-50 border border-stone-200 rounded-lg focus:outline-none focus:border-emerald-600 cursor-pointer"
                  >
                    {STATES_AND_UTS_DATA.map((s) => (
                      <option key={s.id} value={s.name}>{s.name}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="text-xs font-bold text-stone-700 block mb-1">District</label>
                  <input
                    type="text"
                    value={regDistrict}
                    onChange={(e) => setRegDistrict(e.target.value)}
                    placeholder="e.g. Guntur"
                    className="w-full px-3 py-2 text-xs text-stone-900 bg-stone-50 border border-stone-200 rounded-lg focus:outline-none focus:border-emerald-600"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-bold text-stone-700 block mb-1">Landholding (Acres)</label>
                  <input
                    type="number"
                    step="0.5"
                    value={regAcres}
                    onChange={(e) => setRegAcres(e.target.value)}
                    placeholder="4.5"
                    className="w-full px-3 py-2 text-xs text-stone-900 bg-stone-50 border border-stone-200 rounded-lg focus:outline-none focus:border-emerald-600 font-mono"
                  />
                </div>
                <div>
                  <label className="text-xs font-bold text-stone-700 block mb-1">Crops Cultivating</label>
                  <input
                    type="text"
                    value={regCrop}
                    onChange={(e) => setRegCrop(e.target.value)}
                    placeholder="e.g. Rice (Paddy), Cotton, Chili"
                    className="w-full px-3 py-2 text-xs text-stone-900 bg-stone-50 border border-stone-200 rounded-lg focus:outline-none focus:border-emerald-600"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full mt-2 py-2.5 px-4 text-xs font-semibold text-white bg-emerald-800 hover:bg-emerald-900 rounded-lg transition-colors cursor-pointer flex items-center justify-center gap-1.5 shadow-2xs"
              >
                {isSubmitting ? (
                  <span>Registering & Logging...</span>
                ) : (
                  <>
                    <UserCheck className="w-3.5 h-3.5" />
                    <span>Create Raithu Account & Record Session</span>
                  </>
                )}
              </button>
            </form>
          )}
        </div>

        <div className="p-3 bg-stone-50 border-t border-stone-200 flex flex-wrap items-center justify-between gap-2 text-[10px] text-stone-500">
          <span>Secured with OTP authentication & recorded in central ledger.</span>
          {onOpenDatabase && (
            <button
              onClick={() => {
                onClose();
                onOpenDatabase();
              }}
              className="font-bold text-emerald-800 hover:text-emerald-950 flex items-center gap-1 cursor-pointer hover:underline"
            >
              <FileSpreadsheet className="w-3.5 h-3.5 text-emerald-700" />
              <span>View Farmer Database & Excel Sheet →</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
