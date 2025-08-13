import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Overview from '../components/Overview';
import Monitoring from '../components/Monitoring';
import Optimization from '../components/Optimization';
import Alerts from '../components/Alerts';
import Carbon from '../components/Carbon';
import Trends from '../components/Trends';
import Resources from '../components/Resources';
import Settings from '../components/Settings';

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('overview');

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return <Overview />;
      case 'monitoring':
        return <Monitoring />;
      case 'optimization':
        return <Optimization />;
      case 'alerts':
        return <Alerts />;
      case 'carbon':
        return <Carbon />;
      case 'trends':
        return <Trends />;
      case 'resources':
        return <Resources />;
      case 'settings':
        return <Settings />;
      default:
        return <Overview />;
    }
  };

  return (
    <div className="flex h-screen bg-slate-50">
      <Sidebar activeTab={activeTab} onTabChange={setActiveTab} />
      <main className="flex-1 overflow-auto">
        {renderContent()}
      </main>
    </div>
  );
}