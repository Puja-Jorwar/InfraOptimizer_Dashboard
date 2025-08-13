import { CloudResource, OptimizationSuggestion, Alert, DashboardMetrics } from '../types';

export const mockResources: CloudResource[] = [
  {
    id: '1',
    name: 'web-server-prod-01',
    type: 'ec2',
    provider: 'aws',
    region: 'us-east-1',
    status: 'running',
    monthlyCost: 245.50,
    cpuUsage: 15,
    memoryUsage: 32,
    storageUsage: 45,
    carbonFootprint: 12.3
  },
  {
    id: '2',
    name: 'db-instance-staging',
    type: 'rds',
    provider: 'aws',
    region: 'us-west-2',
    status: 'idle',
    monthlyCost: 189.75,
    cpuUsage: 3,
    memoryUsage: 8,
    storageUsage: 78,
    carbonFootprint: 9.5
  },
  {
    id: '3',
    name: 'analytics-vm-01',
    type: 'gce',
    provider: 'gcp',
    region: 'us-central1',
    status: 'running',
    monthlyCost: 156.20,
    cpuUsage: 78,
    memoryUsage: 85,
    storageUsage: 92,
    carbonFootprint: 7.8
  },
  {
    id: '4',
    name: 'backup-storage-legacy',
    type: 's3',
    provider: 'aws',
    region: 'us-east-1',
    status: 'idle',
    monthlyCost: 67.30,
    cpuUsage: 0,
    memoryUsage: 0,
    storageUsage: 23,
    carbonFootprint: 3.4
  },
  {
    id: '5',
    name: 'ml-training-cluster',
    type: 'gce',
    provider: 'gcp',
    region: 'europe-west1',
    status: 'stopped',
    monthlyCost: 0,
    cpuUsage: 0,
    memoryUsage: 0,
    storageUsage: 15,
    carbonFootprint: 0
  }
];

export const mockSuggestions: OptimizationSuggestion[] = [
  {
    id: '1',
    resourceId: '2',
    resourceName: 'db-instance-staging',
    type: 'downsize',
    description: 'Database instance is consistently using <10% CPU. Downsize from db.r5.large to db.t3.medium',
    estimatedSavings: 94.50,
    carbonSavings: 4.7,
    priority: 'high',
    effort: 'easy'
  },
  {
    id: '2',
    resourceId: '1',
    resourceName: 'web-server-prod-01',
    type: 'schedule',
    description: 'Server shows low usage during nights and weekends. Consider auto-scaling or scheduled shutdown',
    estimatedSavings: 73.65,
    carbonSavings: 3.7,
    priority: 'medium',
    effort: 'moderate'
  },
  {
    id: '3',
    resourceId: '4',
    resourceName: 'backup-storage-legacy',
    type: 'migrate',
    description: 'Move old backups to Glacier or Archive storage class to reduce costs by 70%',
    estimatedSavings: 47.11,
    carbonSavings: 2.4,
    priority: 'medium',
    effort: 'easy'
  },
  {
    id: '4',
    resourceId: '5',
    resourceName: 'ml-training-cluster',
    type: 'terminate',
    description: 'Cluster has been stopped for 30+ days with no scheduled usage. Consider termination',
    estimatedSavings: 0,
    carbonSavings: 0,
    priority: 'low',
    effort: 'easy'
  }
];

export const mockAlerts: Alert[] = [
  {
    id: '1',
    type: 'cost',
    severity: 'critical',
    title: 'Budget Threshold Exceeded',
    message: 'Monthly spend is 127% of allocated budget ($2,847 / $2,250)',
    timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000),
    resolved: false
  },
  {
    id: '2',
    type: 'usage',
    severity: 'warning',
    title: 'Idle Resources Detected',
    message: '3 EC2 instances have been idle for more than 72 hours',
    timestamp: new Date(Date.now() - 6 * 60 * 60 * 1000),
    resolved: false
  },
  {
    id: '3',
    type: 'carbon',
    severity: 'info',
    title: 'Carbon Goal Achieved',
    message: 'This month\'s carbon footprint is 15% below target',
    timestamp: new Date(Date.now() - 12 * 60 * 60 * 1000),
    resolved: true
  }
];

export const mockMetrics: DashboardMetrics = {
  totalMonthlyCost: 2847.25,
  potentialSavings: 215.26,
  totalCarbonFootprint: 33.0,
  carbonSavings: 10.8,
  activeResources: 45,
  idleResources: 8
};

export const costTrendData = [
  { month: 'Jan', actual: 2100, projected: 2000, optimized: 1800 },
  { month: 'Feb', actual: 2350, projected: 2200, optimized: 1950 },
  { month: 'Mar', actual: 2800, projected: 2400, optimized: 2100 },
  { month: 'Apr', actual: 2847, projected: 2600, optimized: 2200 },
  { month: 'May', actual: 0, projected: 2800, optimized: 2350 },
  { month: 'Jun', actual: 0, projected: 3000, optimized: 2500 }
];

export const carbonTrendData = [
  { month: 'Jan', footprint: 28.5, target: 30 },
  { month: 'Feb', footprint: 31.2, target: 29 },
  { month: 'Mar', footprint: 35.8, target: 28 },
  { month: 'Apr', footprint: 33.0, target: 27 },
  { month: 'May', footprint: 0, target: 26 },
  { month: 'Jun', footprint: 0, target: 25 }
];