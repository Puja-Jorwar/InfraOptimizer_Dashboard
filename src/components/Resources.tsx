import React, { useState } from 'react';
import { mockResources } from '../data/mockData';
import { Search, Filter, MoreVertical, Cpu, MemoryStick, HardDrive } from 'lucide-react';

export default function Resources() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterProvider, setFilterProvider] = useState('all');
  const [filterStatus, setFilterStatus] = useState('all');

  const filteredResources = mockResources.filter(resource => {
    const matchesSearch = resource.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesProvider = filterProvider === 'all' || resource.provider === filterProvider;
    const matchesStatus = filterStatus === 'all' || resource.status === filterStatus;
    
    return matchesSearch && matchesProvider && matchesStatus;
  });

  return (
    <div className="p-8 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900">Resource Management</h1>
          <p className="text-slate-600 mt-2">Manage and optimize your cloud resources across all providers</p>
        </div>

        {/* Filters and Search */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 mb-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search resources..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              
              <select
                value={filterProvider}
                onChange={(e) => setFilterProvider(e.target.value)}
                className="px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="all">All Providers</option>
                <option value="aws">AWS</option>
                <option value="gcp">GCP</option>
              </select>
              
              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className="px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="all">All Status</option>
                <option value="running">Running</option>
                <option value="idle">Idle</option>
                <option value="stopped">Stopped</option>
              </select>
            </div>
            
            <div className="flex items-center space-x-2">
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200">
                Export Report
              </button>
              <button className="border border-slate-300 text-slate-700 px-4 py-2 rounded-lg hover:bg-slate-50 transition-colors duration-200 flex items-center space-x-2">
                <Filter className="w-4 h-4" />
                <span>More Filters</span>
              </button>
            </div>
          </div>
        </div>

        {/* Resource Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {filteredResources.map((resource) => (
            <div key={resource.id} className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 hover:shadow-md transition-all duration-200">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h3 className="font-semibold text-slate-900 mb-1">{resource.name}</h3>
                  <div className="flex items-center space-x-2">
                    <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                      resource.provider === 'aws' ? 'bg-orange-100 text-orange-800' : 'bg-blue-100 text-blue-800'
                    }`}>
                      {resource.provider.toUpperCase()}
                    </span>
                    <span className="text-xs text-slate-500">{resource.region}</span>
                  </div>
                </div>
                
                <div className="flex items-center space-x-2">
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${
                    resource.status === 'running' ? 'bg-green-100 text-green-800 border-green-200' :
                    resource.status === 'idle' ? 'bg-amber-100 text-amber-800 border-amber-200' :
                    'bg-red-100 text-red-800 border-red-200'
                  }`}>
                    {resource.status}
                  </span>
                  <button className="text-slate-400 hover:text-slate-600">
                    <MoreVertical className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Usage Metrics */}
              <div className="space-y-3 mb-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Cpu className="w-4 h-4 text-slate-400" />
                    <span className="text-sm text-slate-600">CPU</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-24 bg-slate-200 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full ${
                          resource.cpuUsage > 80 ? 'bg-red-500' :
                          resource.cpuUsage > 50 ? 'bg-amber-500' :
                          'bg-green-500'
                        }`}
                        style={{ width: `${resource.cpuUsage}%` }}
                      ></div>
                    </div>
                    <span className="text-sm font-medium text-slate-900">{resource.cpuUsage}%</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <MemoryStick className="w-4 h-4 text-slate-400" />
                    <span className="text-sm text-slate-600">Memory</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-24 bg-slate-200 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full ${
                          resource.memoryUsage > 80 ? 'bg-red-500' :
                          resource.memoryUsage > 50 ? 'bg-amber-500' :
                          'bg-green-500'
                        }`}
                        style={{ width: `${resource.memoryUsage}%` }}
                      ></div>
                    </div>
                    <span className="text-sm font-medium text-slate-900">{resource.memoryUsage}%</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <HardDrive className="w-4 h-4 text-slate-400" />
                    <span className="text-sm text-slate-600">Storage</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-24 bg-slate-200 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full ${
                          resource.storageUsage > 80 ? 'bg-red-500' :
                          resource.storageUsage > 50 ? 'bg-amber-500' :
                          'bg-green-500'
                        }`}
                        style={{ width: `${resource.storageUsage}%` }}
                      ></div>
                    </div>
                    <span className="text-sm font-medium text-slate-900">{resource.storageUsage}%</span>
                  </div>
                </div>
              </div>

              {/* Cost and Carbon */}
              <div className="border-t border-slate-200 pt-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-slate-600">Monthly Cost</p>
                    <p className="font-semibold text-slate-900">${resource.monthlyCost}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-slate-600">Carbon Footprint</p>
                    <p className="font-semibold text-slate-900">{resource.carbonFootprint} kg CO₂</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}