import React, { useState } from 'react';
import { Save, Bell, DollarSign, Leaf, Shield, Users, Cloud, Settings as SettingsIcon } from 'lucide-react';

export default function Settings() {
  const [budgetLimit, setBudgetLimit] = useState('2500');
  const [carbonTarget, setCarbonTarget] = useState('25');
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [slackNotifications, setSlackNotifications] = useState(false);
  const [autoOptimization, setAutoOptimization] = useState(false);

  return (
    <div className="p-8 bg-slate-50 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900">Settings</h1>
          <p className="text-slate-600 mt-2">Configure your InfraOptimizer preferences and thresholds</p>
        </div>

        <div className="space-y-8">
          {/* Budget & Cost Settings */}
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
            <div className="flex items-center space-x-3 mb-6">
              <DollarSign className="w-6 h-6 text-blue-500" />
              <h2 className="text-xl font-semibold text-slate-900">Budget & Cost Settings</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Monthly Budget Limit ($)
                </label>
                <input
                  type="number"
                  value={budgetLimit}
                  onChange={(e) => setBudgetLimit(e.target.value)}
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <p className="text-xs text-slate-500 mt-1">Alert when spending exceeds this limit</p>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Alert Threshold (%)
                </label>
                <select className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                  <option value="75">75% of budget</option>
                  <option value="80">80% of budget</option>
                  <option value="90">90% of budget</option>
                  <option value="95">95% of budget</option>
                </select>
              </div>
            </div>
          </div>

          {/* Carbon & Sustainability */}
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
            <div className="flex items-center space-x-3 mb-6">
              <Leaf className="w-6 h-6 text-green-500" />
              <h2 className="text-xl font-semibold text-slate-900">Carbon & Sustainability</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Monthly Carbon Target (kg CO₂)
                </label>
                <input
                  type="number"
                  value={carbonTarget}
                  onChange={(e) => setCarbonTarget(e.target.value)}
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Green Region Preference
                </label>
                <select className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent">
                  <option value="high">High - Prefer renewable energy regions</option>
                  <option value="medium">Medium - Balance cost and sustainability</option>
                  <option value="low">Low - Cost optimization priority</option>
                </select>
              </div>
            </div>
          </div>

          {/* Notifications */}
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
            <div className="flex items-center space-x-3 mb-6">
              <Bell className="w-6 h-6 text-amber-500" />
              <h2 className="text-xl font-semibold text-slate-900">Notifications</h2>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-slate-900">Email Notifications</p>
                  <p className="text-sm text-slate-500">Receive alerts via email</p>
                </div>
                <button
                  onClick={() => setEmailNotifications(!emailNotifications)}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    emailNotifications ? 'bg-blue-600' : 'bg-slate-200'
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      emailNotifications ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-slate-900">Slack Integration</p>
                  <p className="text-sm text-slate-500">Send alerts to Slack channels</p>
                </div>
                <button
                  onClick={() => setSlackNotifications(!slackNotifications)}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    slackNotifications ? 'bg-blue-600' : 'bg-slate-200'
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      slackNotifications ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>
            </div>
          </div>

          {/* Automation */}
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
            <div className="flex items-center space-x-3 mb-6">
              <SettingsIcon className="w-6 h-6 text-purple-500" />
              <h2 className="text-xl font-semibold text-slate-900">Automation</h2>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-slate-900">Auto-Optimization</p>
                  <p className="text-sm text-slate-500">Automatically apply low-risk optimizations</p>
                </div>
                <button
                  onClick={() => setAutoOptimization(!autoOptimization)}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    autoOptimization ? 'bg-green-600' : 'bg-slate-200'
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      autoOptimization ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>
            </div>
          </div>

          {/* Cloud Providers */}
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
            <div className="flex items-center space-x-3 mb-6">
              <Cloud className="w-6 h-6 text-slate-500" />
              <h2 className="text-xl font-semibold text-slate-900">Cloud Providers</h2>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 border border-slate-200 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center">
                    <span className="text-orange-600 font-semibold text-sm">AWS</span>
                  </div>
                  <div>
                    <p className="font-medium text-slate-900">Amazon Web Services</p>
                    <p className="text-sm text-slate-500">Connected • 28 resources</p>
                  </div>
                </div>
                <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                  Configure
                </button>
              </div>
              
              <div className="flex items-center justify-between p-4 border border-slate-200 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                    <span className="text-blue-600 font-semibold text-sm">GCP</span>
                  </div>
                  <div>
                    <p className="font-medium text-slate-900">Google Cloud Platform</p>
                    <p className="text-sm text-slate-500">Connected • 17 resources</p>
                  </div>
                </div>
                <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                  Configure
                </button>
              </div>
              
              <div className="flex items-center justify-between p-4 border border-slate-200 border-dashed rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center">
                    <span className="text-slate-400 font-semibold text-sm">AZ</span>
                  </div>
                  <div>
                    <p className="font-medium text-slate-500">Microsoft Azure</p>
                    <p className="text-sm text-slate-400">Not connected</p>
                  </div>
                </div>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200">
                  Connect
                </button>
              </div>
            </div>
          </div>

          {/* Save Button */}
          <div className="flex justify-end">
            <button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors duration-200 flex items-center space-x-2">
              <Save className="w-5 h-5" />
              <span>Save Settings</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}