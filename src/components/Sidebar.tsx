import React from 'react';
import { 
  BarChart3, 
  Cloud, 
  Leaf, 
  AlertTriangle, 
  Settings, 
  TrendingUp,
  Monitor,
  Lightbulb
} from 'lucide-react';

interface SidebarProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const menuItems = [
  { id: 'overview', label: 'Overview', icon: BarChart3 },
  { id: 'monitoring', label: 'Real-time Monitoring', icon: Monitor },
  { id: 'optimization', label: 'Optimization', icon: Lightbulb },
  { id: 'alerts', label: 'Alerts', icon: AlertTriangle },
  { id: 'carbon', label: 'Carbon Footprint', icon: Leaf },
  { id: 'trends', label: 'Cost Trends', icon: TrendingUp },
  { id: 'resources', label: 'Resources', icon: Cloud },
  { id: 'settings', label: 'Settings', icon: Settings }
];

export default function Sidebar({ activeTab, onTabChange }: SidebarProps) {
  return (
    <div className="w-64 bg-slate-900 text-white h-screen flex flex-col">
      <div className="p-6 border-b border-slate-700">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-blue-500 rounded-lg flex items-center justify-center">
            <Cloud className="w-5 h-5 text-white" />
          </div>
          <h1 className="text-xl font-bold bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
            InfraOptimizer
          </h1>
        </div>
        <p className="text-slate-400 text-sm mt-2">Smart Cloud Cost & Carbon Optimization</p>
      </div>
      
      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <li key={item.id}>
                <button
                  onClick={() => onTabChange(item.id)}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 text-left ${
                    activeTab === item.id
                      ? 'bg-gradient-to-r from-green-500 to-blue-500 text-white shadow-lg'
                      : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span className="font-medium">{item.label}</span>
                </button>
              </li>
            );
          })}
        </ul>
      </nav>
      
      <div className="p-4 border-t border-slate-700">
        <div className="text-xs text-slate-500">
          Last updated: {new Date().toLocaleTimeString()}
        </div>
      </div>
    </div>
  );
}