import React from 'react';
import { mockResources } from '../data/mockData';
import { Server, Database, HardDrive, Cpu, MemoryStick, Activity } from 'lucide-react';

const getResourceIcon = (type: string) => {
  switch (type) {
    case 'ec2':
    case 'gce':
      return Server;
    case 'rds':
      return Database;
    case 's3':
    case 'gcs':
    case 'storage':
      return HardDrive;
    default:
      return Server;
  }
};

const getStatusColor = (status: string) => {
  switch (status) {
    case 'running':
      return 'bg-green-100 text-green-800 border-green-200';
    case 'stopped':
      return 'bg-red-100 text-red-800 border-red-200';
    case 'idle':
      return 'bg-amber-100 text-amber-800 border-amber-200';
    default:
      return 'bg-slate-100 text-slate-800 border-slate-200';
  }
};

const getProviderColor = (provider: string) => {
  switch (provider) {
    case 'aws':
      return 'bg-orange-100 text-orange-800';
    case 'gcp':
      return 'bg-blue-100 text-blue-800';
    default:
      return 'bg-slate-100 text-slate-800';
  }
};

export default function Monitoring() {
  return (
    <div className="p-8 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900">Real-time Monitoring</h1>
          <p className="text-slate-600 mt-2">Monitor all your cloud resources across AWS and GCP in real-time</p>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-600">Total Resources</p>
                <p className="text-2xl font-bold text-slate-900">{mockResources.length}</p>
              </div>
              <Activity className="w-8 h-8 text-blue-500" />
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-600">Running</p>
                <p className="text-2xl font-bold text-green-600">
                  {mockResources.filter(r => r.status === 'running').length}
                </p>
              </div>
              <Server className="w-8 h-8 text-green-500" />
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-600">Idle</p>
                <p className="text-2xl font-bold text-amber-600">
                  {mockResources.filter(r => r.status === 'idle').length}
                </p>
              </div>
              <HardDrive className="w-8 h-8 text-amber-500" />
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-600">Stopped</p>
                <p className="text-2xl font-bold text-red-600">
                  {mockResources.filter(r => r.status === 'stopped').length}
                </p>
              </div>
              <Server className="w-8 h-8 text-red-500" />
            </div>
          </div>
        </div>

        {/* Resources Table */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="px-6 py-4 border-b border-slate-200">
            <h3 className="text-lg font-semibold text-slate-900">Resource Monitor</h3>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-slate-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Resource</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Provider</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Usage</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Cost</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Carbon</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-slate-200">
                {mockResources.map((resource) => {
                  const Icon = getResourceIcon(resource.type);
                  return (
                    <tr key={resource.id} className="hover:bg-slate-50 transition-colors duration-200">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <Icon className="w-5 h-5 text-slate-400 mr-3" />
                          <div>
                            <div className="text-sm font-medium text-slate-900">{resource.name}</div>
                            <div className="text-sm text-slate-500">{resource.type.toUpperCase()} • {resource.region}</div>
                          </div>
                        </div>
                      </td>
                      
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getProviderColor(resource.provider)}`}>
                          {resource.provider.toUpperCase()}
                        </span>
                      </td>
                      
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${getStatusColor(resource.status)}`}>
                          {resource.status}
                        </span>
                      </td>
                      
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center">
                            <Cpu className="w-4 h-4 text-slate-400 mr-1" />
                            <span className="text-sm text-slate-600">{resource.cpuUsage}%</span>
                          </div>
                          <div className="flex items-center">
                            <MemoryStick className="w-4 h-4 text-slate-400 mr-1" />
                            <span className="text-sm text-slate-600">{resource.memoryUsage}%</span>
                          </div>
                        </div>
                      </td>
                      
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-slate-900">${resource.monthlyCost}</div>
                        <div className="text-sm text-slate-500">per month</div>
                      </td>
                      
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-slate-900">{resource.carbonFootprint} kg</div>
                        <div className="text-sm text-slate-500">CO₂/month</div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}