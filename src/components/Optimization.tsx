import React from 'react';
import { mockSuggestions } from '../data/mockData';
import { Lightbulb, TrendingDown, Leaf, ArrowRight, CheckCircle } from 'lucide-react';

const getPriorityColor = (priority: string) => {
  switch (priority) {
    case 'high':
      return 'bg-red-100 text-red-800 border-red-200';
    case 'medium':
      return 'bg-amber-100 text-amber-800 border-amber-200';
    case 'low':
      return 'bg-slate-100 text-slate-800 border-slate-200';
    default:
      return 'bg-slate-100 text-slate-800 border-slate-200';
  }
};

const getEffortColor = (effort: string) => {
  switch (effort) {
    case 'easy':
      return 'bg-green-100 text-green-800';
    case 'moderate':
      return 'bg-amber-100 text-amber-800';
    case 'complex':
      return 'bg-red-100 text-red-800';
    default:
      return 'bg-slate-100 text-slate-800';
  }
};

const getTypeIcon = (type: string) => {
  switch (type) {
    case 'downsize':
      return '↓';
    case 'terminate':
      return '✕';
    case 'schedule':
      return '⏰';
    case 'migrate':
      return '→';
    default:
      return '•';
  }
};

export default function Optimization() {
  const totalSavings = mockSuggestions.reduce((sum, s) => sum + s.estimatedSavings, 0);
  const totalCarbonSavings = mockSuggestions.reduce((sum, s) => sum + s.carbonSavings, 0);

  return (
    <div className="p-8 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900">Optimization Suggestions</h1>
          <p className="text-slate-600 mt-2">AI-powered recommendations to reduce costs and carbon footprint</p>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl p-6 text-white">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-green-100">Total Potential Savings</p>
                <p className="text-3xl font-bold">${totalSavings.toFixed(0)}</p>
                <p className="text-green-100 text-sm">per month</p>
              </div>
              <TrendingDown className="w-10 h-10 text-green-200" />
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-blue-500 to-cyan-600 rounded-xl p-6 text-white">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-blue-100">Carbon Reduction</p>
                <p className="text-3xl font-bold">{totalCarbonSavings.toFixed(1)} kg</p>
                <p className="text-blue-100 text-sm">CO₂ per month</p>
              </div>
              <Leaf className="w-10 h-10 text-blue-200" />
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl p-6 text-white">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-purple-100">Active Suggestions</p>
                <p className="text-3xl font-bold">{mockSuggestions.length}</p>
                <p className="text-purple-100 text-sm">recommendations</p>
              </div>
              <Lightbulb className="w-10 h-10 text-purple-200" />
            </div>
          </div>
        </div>

        {/* Suggestions List */}
        <div className="space-y-4">
          {mockSuggestions.map((suggestion) => (
            <div key={suggestion.id} className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 hover:shadow-md transition-all duration-200">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 font-semibold">
                      {getTypeIcon(suggestion.type)}
                    </div>
                    <h3 className="text-lg font-semibold text-slate-900">{suggestion.resourceName}</h3>
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${getPriorityColor(suggestion.priority)}`}>
                      {suggestion.priority} priority
                    </span>
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getEffortColor(suggestion.effort)}`}>
                      {suggestion.effort}
                    </span>
                  </div>
                  
                  <p className="text-slate-600 mb-4">{suggestion.description}</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-center space-x-2">
                      <TrendingDown className="w-5 h-5 text-green-500" />
                      <span className="text-sm text-slate-600">Cost Savings:</span>
                      <span className="font-semibold text-green-600">${suggestion.estimatedSavings}/month</span>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <Leaf className="w-5 h-5 text-green-500" />
                      <span className="text-sm text-slate-600">Carbon Reduction:</span>
                      <span className="font-semibold text-green-600">{suggestion.carbonSavings} kg CO₂/month</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col space-y-2 ml-6">
                  <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors duration-200 flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4" />
                    <span>Apply</span>
                  </button>
                  <button className="border border-slate-300 text-slate-700 px-4 py-2 rounded-lg hover:bg-slate-50 transition-colors duration-200 flex items-center space-x-2">
                    <ArrowRight className="w-4 h-4" />
                    <span>Details</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Impact Summary */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 mt-8">
          <h3 className="text-lg font-semibold text-slate-900 mb-4">Implementation Impact</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600">${totalSavings.toFixed(0)}</div>
              <div className="text-sm text-slate-600">Monthly Savings</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">{totalCarbonSavings.toFixed(1)} kg</div>
              <div className="text-sm text-slate-600">CO₂ Reduction/Month</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600">${(totalSavings * 12).toFixed(0)}</div>
              <div className="text-sm text-slate-600">Annual Savings</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}