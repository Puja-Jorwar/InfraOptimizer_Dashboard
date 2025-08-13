import React from 'react';
import { TrendingUp, TrendingDown, Calendar, DollarSign } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, AreaChart, Area } from 'recharts';
import { costTrendData } from '../data/mockData';

const usageData = [
  { hour: '00:00', cpu: 15, memory: 32, network: 45 },
  { hour: '04:00', cpu: 12, memory: 28, network: 38 },
  { hour: '08:00', cpu: 65, memory: 78, network: 82 },
  { hour: '12:00', cpu: 78, memory: 85, network: 92 },
  { hour: '16:00', cpu: 82, memory: 88, network: 95 },
  { hour: '20:00', cpu: 45, memory: 52, network: 68 }
];

const regionData = [
  { region: 'us-east-1', cost: 1247, resources: 18 },
  { region: 'us-west-2', cost: 856, resources: 12 },
  { region: 'eu-west-1', cost: 523, resources: 8 },
  { region: 'ap-south-1', cost: 221, resources: 5 }
];

export default function Trends() {
  return (
    <div className="p-8 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900">Cost Trends & Analytics</h1>
          <p className="text-slate-600 mt-2">Analyze spending patterns and forecast future costs</p>
        </div>

        {/* Trend Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-600">Monthly Growth</p>
                <p className="text-2xl font-bold text-red-600">+21.2%</p>
              </div>
              <TrendingUp className="w-8 h-8 text-red-500" />
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-600">Forecast (6M)</p>
                <p className="text-2xl font-bold text-blue-600">$17.1K</p>
              </div>
              <Calendar className="w-8 h-8 text-blue-500" />
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-600">Optimization Impact</p>
                <p className="text-2xl font-bold text-green-600">-7.6%</p>
              </div>
              <TrendingDown className="w-8 h-8 text-green-500" />
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-600">Avg. Daily Cost</p>
                <p className="text-2xl font-bold text-slate-900">$94.9</p>
              </div>
              <DollarSign className="w-8 h-8 text-slate-500" />
            </div>
          </div>
        </div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Cost Projection Chart */}
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
            <h3 className="text-lg font-semibold text-slate-900 mb-4">6-Month Cost Projection</h3>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={costTrendData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis dataKey="month" stroke="#64748b" />
                <YAxis stroke="#64748b" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#1e293b', 
                    border: 'none', 
                    borderRadius: '8px',
                    color: '#fff'
                  }} 
                />
                <Area 
                  type="monotone" 
                  dataKey="projected" 
                  stroke="#64748b" 
                  fill="#94a3b8" 
                  fillOpacity={0.3}
                  name="Projected Cost"
                />
                <Area 
                  type="monotone" 
                  dataKey="optimized" 
                  stroke="#10b981" 
                  fill="#10b981" 
                  fillOpacity={0.3}
                  name="With Optimization"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          {/* Daily Usage Pattern */}
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
            <h3 className="text-lg font-semibold text-slate-900 mb-4">Daily Usage Patterns</h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={usageData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis dataKey="hour" stroke="#64748b" />
                <YAxis stroke="#64748b" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#1e293b', 
                    border: 'none', 
                    borderRadius: '8px',
                    color: '#fff'
                  }} 
                />
                <Line type="monotone" dataKey="cpu" stroke="#ef4444" strokeWidth={2} name="CPU %" />
                <Line type="monotone" dataKey="memory" stroke="#3b82f6" strokeWidth={2} name="Memory %" />
                <Line type="monotone" dataKey="network" stroke="#10b981" strokeWidth={2} name="Network %" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Regional Cost Distribution */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
          <h3 className="text-lg font-semibold text-slate-900 mb-6">Cost Distribution by Region</h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <ResponsiveContainer width="100%" height={250}>
                <BarChart data={regionData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                  <XAxis dataKey="region" stroke="#64748b" />
                  <YAxis stroke="#64748b" />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: '#1e293b', 
                      border: 'none', 
                      borderRadius: '8px',
                      color: '#fff'
                    }} 
                  />
                  <Bar dataKey="cost" fill="#3b82f6" name="Cost ($)" />
                </BarChart>
              </ResponsiveContainer>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-medium text-slate-900 mb-4">Regional Breakdown</h4>
              {regionData.map((region, index) => (
                <div key={region.region} className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
                  <div>
                    <p className="font-medium text-slate-900">{region.region}</p>
                    <p className="text-sm text-slate-500">{region.resources} resources</p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-slate-900">${region.cost}</p>
                    <p className="text-sm text-slate-500">
                      {((region.cost / regionData.reduce((sum, r) => sum + r.cost, 0)) * 100).toFixed(1)}%
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}