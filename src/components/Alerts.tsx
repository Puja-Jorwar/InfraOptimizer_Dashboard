import React from 'react';
import { mockAlerts } from '../data/mockData';
import { AlertTriangle, DollarSign, Activity, Leaf, Clock, CheckCircle } from 'lucide-react';

const getAlertIcon = (type: string) => {
  switch (type) {
    case 'cost':
      return DollarSign;
    case 'usage':
      return Activity;
    case 'carbon':
      return Leaf;
    case 'security':
      return AlertTriangle;
    default:
      return AlertTriangle;
  }
};

const getSeverityColor = (severity: string) => {
  switch (severity) {
    case 'critical':
      return 'bg-red-50 border-red-200 text-red-800';
    case 'warning':
      return 'bg-amber-50 border-amber-200 text-amber-800';
    case 'info':
      return 'bg-blue-50 border-blue-200 text-blue-800';
    default:
      return 'bg-slate-50 border-slate-200 text-slate-800';
  }
};

const getIconColor = (severity: string) => {
  switch (severity) {
    case 'critical':
      return 'text-red-500';
    case 'warning':
      return 'text-amber-500';
    case 'info':
      return 'text-blue-500';
    default:
      return 'text-slate-500';
  }
};

export default function Alerts() {
  const activeAlerts = mockAlerts.filter(alert => !alert.resolved);
  const resolvedAlerts = mockAlerts.filter(alert => alert.resolved);

  return (
    <div className="p-8 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900">Alerts & Notifications</h1>
          <p className="text-slate-600 mt-2">Stay informed about cost spikes, resource issues, and optimization opportunities</p>
        </div>

        {/* Alert Summary */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-600">Active Alerts</p>
                <p className="text-2xl font-bold text-red-600">{activeAlerts.length}</p>
              </div>
              <AlertTriangle className="w-8 h-8 text-red-500" />
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-600">Critical</p>
                <p className="text-2xl font-bold text-red-600">
                  {activeAlerts.filter(a => a.severity === 'critical').length}
                </p>
              </div>
              <DollarSign className="w-8 h-8 text-red-500" />
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-600">Warnings</p>
                <p className="text-2xl font-bold text-amber-600">
                  {activeAlerts.filter(a => a.severity === 'warning').length}
                </p>
              </div>
              <Activity className="w-8 h-8 text-amber-500" />
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-600">Resolved Today</p>
                <p className="text-2xl font-bold text-green-600">{resolvedAlerts.length}</p>
              </div>
              <CheckCircle className="w-8 h-8 text-green-500" />
            </div>
          </div>
        </div>

        {/* Active Alerts */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-slate-900 mb-4">Active Alerts</h2>
          <div className="space-y-4">
            {activeAlerts.map((alert) => {
              const Icon = getAlertIcon(alert.type);
              return (
                <div key={alert.id} className={`border rounded-xl p-6 ${getSeverityColor(alert.severity)}`}>
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-4">
                      <Icon className={`w-6 h-6 mt-1 ${getIconColor(alert.severity)}`} />
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg">{alert.title}</h3>
                        <p className="mt-2 text-sm opacity-80">{alert.message}</p>
                        <div className="flex items-center mt-3 space-x-4">
                          <div className="flex items-center space-x-1">
                            <Clock className="w-4 h-4" />
                            <span className="text-xs">
                              {alert.timestamp.toLocaleString()}
                            </span>
                          </div>
                          <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                            alert.severity === 'critical' ? 'bg-red-200 text-red-800' :
                            alert.severity === 'warning' ? 'bg-amber-200 text-amber-800' :
                            'bg-blue-200 text-blue-800'
                          }`}>
                            {alert.severity.toUpperCase()}
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex space-x-2">
                      <button className="bg-white bg-opacity-20 hover:bg-opacity-30 text-current px-4 py-2 rounded-lg transition-all duration-200">
                        View Details
                      </button>
                      <button className="bg-white bg-opacity-20 hover:bg-opacity-30 text-current px-4 py-2 rounded-lg transition-all duration-200">
                        Resolve
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200">
          <div className="px-6 py-4 border-b border-slate-200">
            <h3 className="text-lg font-semibold text-slate-900">Recent Activity</h3>
          </div>
          
          <div className="p-6">
            <div className="space-y-4">
              {resolvedAlerts.map((alert) => {
                const Icon = getAlertIcon(alert.type);
                return (
                  <div key={alert.id} className="flex items-center space-x-4 py-3 border-b border-slate-100 last:border-b-0">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-slate-900">{alert.title}</p>
                      <p className="text-sm text-slate-500">{alert.message}</p>
                    </div>
                    <div className="text-xs text-slate-400">
                      {alert.timestamp.toLocaleString()}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}