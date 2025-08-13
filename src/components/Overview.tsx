import React from 'react';
import { DollarSign, TrendingDown, Leaf, Server, AlertTriangle, Zap } from 'lucide-react';
import MetricCard from './MetricCard';
import { mockMetrics, costTrendData, carbonTrendData } from '../data/mockData';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';

export default function Overview() {
  return (
    <div className="p-8 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900">Dashboard Overview</h1>
          <p className="text-slate-600 mt-2">Monitor your cloud costs, optimization opportunities, and carbon footprint</p>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <MetricCard
            title="Monthly Cloud Spend"
            value={`$${mockMetrics.totalMonthlyCost.toLocaleString()}`}
            change="+12.3%"
            trend="up"
            icon={DollarSign}
            color="blue"
          />
          
          <MetricCard
            title="Potential Savings"
            value={`$${mockMetrics.potentialSavings.toLocaleString()}`}
            change="-7.6%"
            trend="down"
            icon={TrendingDown}
            color="green"
          />
          
          <MetricCard
            title="Carbon Footprint"
            value={`${mockMetrics.totalCarbonFootprint} kg CO₂`}
            change="-15%"
            trend="down"
            icon={Leaf}
            color="green"
          />
          
          <MetricCard
            title="Active Resources"
            value={mockMetrics.activeResources.toString()}
            change="+3"
            trend="up"
            icon={Server}
            color="slate"
          />
          
          <MetricCard
            title="Idle Resources"
            value={mockMetrics.idleResources.toString()}
            change="+2"
            trend="up"
            icon={AlertTriangle}
            color="amber"
          />
          
          <MetricCard
            title="Optimization Score"
            value="73%"
            change="+5%"
            trend="down"
            icon={Zap}
            color="blue"
          />
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Cost Trends */}
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
            <h3 className="text-lg font-semibold text-slate-900 mb-4">Cost Trends</h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={costTrendData}>
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
                  dataKey="actual" 
                  stroke="#3b82f6" 
                  strokeWidth={3}
                  name="Actual Cost"
                />
                <Line 
                  type="monotone" 
                  dataKey="projected" 
                  stroke="#64748b" 
                  strokeWidth={2}
                  strokeDasharray="5 5"
                  name="Projected"
                />
                <Line 
                  type="monotone" 
                  dataKey="optimized" 
                  stroke="#10b981" 
                  strokeWidth={3}
                  name="With Optimization"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Carbon Footprint */}
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
            <h3 className="text-lg font-semibold text-slate-900 mb-4">Carbon Footprint Trends</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={carbonTrendData}>
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
                <Bar dataKey="footprint" fill="#10b981" name="CO₂ Footprint (kg)" />
                <Line 
                  type="monotone" 
                  dataKey="target" 
                  stroke="#f59e0b" 
                  strokeWidth={2}
                  strokeDasharray="3 3"
                  name="Target"
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Quick Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
            <h4 className="text-sm font-medium text-slate-600 mb-2">Top Cost Category</h4>
            <p className="text-xl font-bold text-slate-900">Compute (EC2)</p>
            <p className="text-sm text-slate-500">$1,247 (44% of total)</p>
          </div>
          
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
            <h4 className="text-sm font-medium text-slate-600 mb-2">Biggest Waste</h4>
            <p className="text-xl font-bold text-slate-900">Idle Instances</p>
            <p className="text-sm text-slate-500">$94.50 potential savings</p>
          </div>
          
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
            <h4 className="text-sm font-medium text-slate-600 mb-2">Carbon Efficiency</h4>
            <p className="text-xl font-bold text-slate-900">85% Green</p>
            <p className="text-sm text-slate-500">Above industry average</p>
          </div>
          
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
            <h4 className="text-sm font-medium text-slate-600 mb-2">Next Action</h4>
            <p className="text-xl font-bold text-slate-900">Downsize DB</p>
            <p className="text-sm text-slate-500">Save $94.50/month</p>
          </div>
        </div>
      </div>
    </div>
  );
}