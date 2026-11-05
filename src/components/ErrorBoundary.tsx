import React, { Component, ErrorInfo, ReactNode } from 'react';
import { Sprout, RefreshCw, AlertCircle } from 'lucide-react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('AgriVision Uncaught Exception:', error, errorInfo);
  }

  private handleReset = () => {
    this.setState({ hasError: false, error: null });
    window.location.reload();
  };

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center p-6 bg-[#F8FAF6] text-stone-800">
          <div className="max-w-md w-full bg-white rounded-2xl p-6 sm:p-8 border border-stone-200 shadow-xl text-center space-y-4">
            <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center mx-auto">
              <Sprout className="w-6 h-6 text-emerald-800" />
            </div>

            <h1 className="text-xl font-bold text-stone-900">
              AgriVision Ready for Reload
            </h1>

            <p className="text-xs text-stone-600 leading-relaxed">
              An unexpected display interruption occurred while loading agricultural datasets. Click below to refresh the system state.
            </p>

            {this.state.error && (
              <div className="p-3 bg-stone-50 rounded-lg border border-stone-200 text-left text-[11px] text-stone-600 font-mono overflow-x-auto max-h-24">
                {this.state.error.message}
              </div>
            )}

            <button
              onClick={this.handleReset}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-white bg-emerald-800 hover:bg-emerald-900 rounded-lg transition-colors cursor-pointer shadow-xs"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>Reload AgriVision Platform</span>
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
