import React from 'react';
import { Leaf, TrendingDown, Award, Target } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { carbonTrendData, mockResources } from '../data/mockData';

const carbonByProvider = [
  { name: 'AWS', value: 18.7, color: '#ff9900' },
  { name: 'GCP', value: 14.3, color: '#4285f4' }
];

const carbonByResourceType = [
  { name: 'Compute', value: 45, color: '#10b981' },
  { name: 'Storage', value: 25, color: '#3b82f6' },
  { name: 'Database', value: 20, color: '#f59e0b' },
  { name: 'Network', value: 10, color: '#8b5cf6' }
];

const greenPractices = [
  {
    title: 'Use Renewable Energy Regions',
    description: 'Deploy resources in regions with high renewable energy usage',
    impact: 'High',
    implemented: true
  },
  {
    title: 'Right-size Compute Resources',
    description: 'Avoid over-provisioning to reduce unnecessary energy consumption',
    impact: 'Medium',
    implemented: false
  },
  {
    title: 'Implement Auto-scaling',
    description: 'Scale resources based on demand to minimize idle capacity',
    impact: 'High',
    implemented: true
  },
  {
    title: 'Use Spot Instances',
    description: 'Utilize spare compute capacity for non-critical workloads',
    impact: 'Medium',
    implemented: false
  }
];

export default function Carbon() {
  return (
    <div className="p-8 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900">Carbon Footprint & GreenOps</h1>
          <p className="text-slate-600 mt-2">Track and optimize your cloud infrastructure's environmental impact</p>
        </div>

        {/* Carbon Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl p-6 text-white">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-green-100">Total Footprint</p>
                <p className="text-3xl font-bold">33.0 kg</p>
                <p className="text-green-100 text-sm">CO₂ this month</p>
              </div>
              <Leaf className="w-10 h-10 text-green-200" />
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-600">Reduction Target</p>
                <p className="text-2xl font-bold text-green-600">-15%</p>
                <p className="text-sm text-slate-500">vs last month</p>
              </div>
              <Target className="w-8 h-8 text-green-500" />
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-600">Green Score</p>
                <p className="text-2xl font-bold text-blue-600">85/100</p>
                <p className="text-sm text-slate-500">Industry: 67</p>
              </div>
              <Award className="w-8 h-8 text-blue-500" />
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-600">Potential Reduction</p>
                <p className="text-2xl font-bold text-green-600">10.8 kg</p>
                <p className="text-sm text-slate-500">CO₂/month</p>
              </div>
              <TrendingDown className="w-8 h-8 text-green-500" />
            </div>
          </div>
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Carbon Trend */}
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
            <h3 className="text-lg font-semibold text-slate-900 mb-4">Carbon Footprint Trend</h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={carbonTrendData}>
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
                <Line 
                  type="monotone" 
                  dataKey="footprint" 
                  stroke="#10b981" 
                  strokeWidth={3}
                  name="Actual Footprint (kg CO₂)"
                />
                <Line 
                  type="monotone" 
                  dataKey="target" 
                  stroke="#f59e0b" 
                  strokeWidth={2}
                  strokeDasharray="5 5"
                  name="Target"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Carbon by Provider */}
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
            <h3 className="text-lg font-semibold text-slate-900 mb-4">Carbon Footprint by Provider</h3>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={carbonByProvider}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={120}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {carbonByProvider.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#1e293b', 
                    border: 'none', 
                    borderRadius: '8px',
                    color: '#fff'
                  }} 
                />
              </PieChart>
            </ResponsiveContainer>
            <div className="flex justify-center space-x-6 mt-4">
              {carbonByProvider.map((item) => (
                <div key={item.name} className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }}></div>
                  <span className="text-sm text-slate-600">{item.name}: {item.value} kg</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Green Practices */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
          <h3 className="text-lg font-semibold text-slate-900 mb-6">Green Practices Implementation</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {greenPractices.map((practice, index) => (
              <div key={index} className="border border-slate-200 rounded-lg p-4">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <h4 className="font-semibold text-slate-900">{practice.title}</h4>
                    <p className="text-sm text-slate-600 mt-1">{practice.description}</p>
                  </div>
                  <div className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                    practice.implemented 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-slate-100 text-slate-800'
                  }`}>
                    {practice.implemented ? 'Implemented' : 'Pending'}
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className={`text-xs px-2 py-1 rounded ${
                    practice.impact === 'High' 
                      ? 'bg-red-100 text-red-700' 
                      : 'bg-amber-100 text-amber-700'
                  }`}>
                    {practice.impact} Impact
                  </span>
                  
                  {!practice.implemented && (
                    <button className="text-green-600 hover:text-green-700 text-sm font-medium">
                      Implement →
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Carbon by Resource Type */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 mt-8">
          <h3 className="text-lg font-semibold text-slate-900 mb-4">Carbon Footprint by Resource Type (%)</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {carbonByResourceType.map((item) => (
              <div key={item.name} className="text-center">
                <div className="relative w-20 h-20 mx-auto mb-3">
                  <svg className="w-20 h-20 transform -rotate-90" viewBox="0 0 36 36">
                    <path
                      className="text-slate-200"
                      stroke="currentColor"
                      strokeWidth="3"
                      fill="transparent"
                      d="M18 2.0845
                        a 15.9155 15.9155 0 0 1 0 31.831
                        a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                    <path
                      stroke={item.color}
                      strokeWidth="3"
                      strokeDasharray={`${item.value}, 100`}
                      strokeLinecap="round"
                      fill="transparent"
                      d="M18 2.0845
                        a 15.9155 15.9155 0 0 1 0 31.831
                        a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-sm font-bold text-slate-900">{item.value}%</span>
                  </div>
                </div>
                <p className="text-sm font-medium text-slate-900">{item.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}