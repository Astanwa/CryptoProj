import { useState } from 'react';
import { Button } from './components/ui/button';
import { LoginPage } from './components/LoginPage';
import { Dashboard } from './components/Dashboard';
import { AvailableFunds } from './components/AvailableFunds';
import { FundDetail } from './components/FundDetail';
import { LayoutDashboard, TrendingUp, LogOut } from 'lucide-react';

type Page = 'login' | 'dashboard' | 'funds' | 'fund-detail';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('login');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
    setCurrentPage('dashboard');
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setCurrentPage('login');
  };

  if (!isAuthenticated) {
    return <LoginPage onLogin={handleLogin} />;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-8">
              <div className="flex items-center">
                <span>Private Fund Portal</span>
              </div>
              <div className="flex gap-4">
                <Button
                  variant={currentPage === 'dashboard' ? 'default' : 'ghost'}
                  onClick={() => setCurrentPage('dashboard')}
                  className="flex items-center gap-2"
                >
                  <LayoutDashboard className="h-4 w-4" />
                  Dashboard
                </Button>
                <Button
                  variant={currentPage === 'funds' ? 'default' : 'ghost'}
                  onClick={() => setCurrentPage('funds')}
                  className="flex items-center gap-2"
                >
                  <TrendingUp className="h-4 w-4" />
                  Available Funds
                </Button>
              </div>
            </div>
            <Button
              variant="ghost"
              onClick={handleLogout}
              className="flex items-center gap-2"
            >
              <LogOut className="h-4 w-4" />
              Logout
            </Button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {currentPage === 'dashboard' && <Dashboard onNavigate={setCurrentPage} />}
        {currentPage === 'funds' && <AvailableFunds onViewDetails={() => setCurrentPage('fund-detail')} />}
        {currentPage === 'fund-detail' && <FundDetail onBack={() => setCurrentPage('funds')} />}
      </main>
    </div>
  );
}
