export interface CloudResource {
  id: string;
  name: string;
  type: 'ec2' | 'rds' | 'gce' | 'gcs' | 's3' | 'storage';
  provider: 'aws' | 'gcp';
  region: string;
  status: 'running' | 'stopped' | 'idle';
  monthlyCost: number;
  cpuUsage: number;
  memoryUsage: number;
  storageUsage: number;
  carbonFootprint: number; // kg CO2/month
}

export interface OptimizationSuggestion {
  id: string;
  resourceId: string;
  resourceName: string;
  type: 'downsize' | 'terminate' | 'schedule' | 'migrate';
  description: string;
  estimatedSavings: number;
  carbonSavings: number;
  priority: 'high' | 'medium' | 'low';
  effort: 'easy' | 'moderate' | 'complex';
}

export interface Alert {
  id: string;
  type: 'cost' | 'usage' | 'carbon' | 'security';
  severity: 'critical' | 'warning' | 'info';
  title: string;
  message: string;
  timestamp: Date;
  resolved: boolean;
}

export interface DashboardMetrics {
  totalMonthlyCost: number;
  potentialSavings: number;
  totalCarbonFootprint: number;
  carbonSavings: number;
  activeResources: number;
  idleResources: number;
}