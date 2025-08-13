import React from 'react';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface MetricCardProps {
  title: string;
  value: string;
  change: string;
  trend: 'up' | 'down' | 'neutral';
  icon: LucideIcon;
  color: 'green' | 'blue' | 'amber' | 'red' | 'slate';
}

const colorClasses = {
  green: {
    bg: 'bg-green-50',
    icon: 'bg-green-100 text-green-600',
    text: 'text-green-600',
    border: 'border-green-200'
  },
  blue: {
    bg: 'bg-blue-50',
    icon: 'bg-blue-100 text-blue-600',
    text: 'text-blue-600',
    border: 'border-blue-200'
  },
  amber: {
    bg: 'bg-amber-50',
    icon: 'bg-amber-100 text-amber-600',
    text: 'text-amber-600',
    border: 'border-amber-200'
  },
  red: {
    bg: 'bg-red-50',
    icon: 'bg-red-100 text-red-600',
    text: 'text-red-600',
    border: 'border-red-200'
  },
  slate: {
    bg: 'bg-slate-50',
    icon: 'bg-slate-100 text-slate-600',
    text: 'text-slate-600',
    border: 'border-slate-200'
  }
};

export default function MetricCard({ title, value, change, trend, icon: Icon, color }: MetricCardProps) {
  const classes = colorClasses[color];
  
  return (
    <div className={`${classes.bg} ${classes.border} border rounded-xl p-6 hover:shadow-lg transition-all duration-200`}>
      <div className="flex items-center justify-between">
        <div className={`${classes.icon} p-3 rounded-lg`}>
          <Icon className="w-6 h-6" />
        </div>
        <div className={`text-sm font-medium ${
          trend === 'up' ? 'text-red-600' : 
          trend === 'down' ? 'text-green-600' : 
          'text-slate-500'
        }`}>
          {change}
        </div>
      </div>
      
      <div className="mt-4">
        <h3 className="text-slate-600 text-sm font-medium">{title}</h3>
        <p className="text-2xl font-bold text-slate-900 mt-2">{value}</p>
      </div>
    </div>
  );
}