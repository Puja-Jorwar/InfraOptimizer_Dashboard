import React from 'react';
import { ArrowRight, CheckCircle, TrendingDown, Leaf, Shield, Zap, Users, Award, Play, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const features = [
  {
    icon: TrendingDown,
    title: 'Automated Cost Optimization',
    description: 'AI-powered recommendations that automatically reduce your cloud spend by up to 50% without compromising performance.'
  },
  {
    icon: Leaf,
    title: 'Carbon Footprint Tracking',
    description: 'Monitor and reduce your environmental impact with real-time carbon emissions tracking and green optimization suggestions.'
  },
  {
    icon: Shield,
    title: 'Multi-Cloud Security',
    description: 'Secure monitoring across AWS, GCP, and Azure with enterprise-grade security and compliance features.'
  },
  {
    icon: Zap,
    title: 'Real-Time Monitoring',
    description: 'Get instant alerts on cost spikes, resource wastage, and optimization opportunities across all your cloud resources.'
  }
];

const stats = [
  { value: '50%', label: 'Average Cost Reduction' },
  { value: '10M+', label: 'Resources Monitored' },
  { value: '500+', label: 'Enterprise Customers' },
  { value: '99.9%', label: 'Uptime SLA' }
];

const testimonials = [
  {
    name: 'Sarah Chen',
    role: 'CTO at TechCorp',
    company: 'TechCorp',
    content: 'InfraOptimizer reduced our cloud costs by 45% in the first month. The carbon tracking feature helped us achieve our sustainability goals.',
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
  },
  {
    name: 'Michael Rodriguez',
    role: 'DevOps Lead',
    company: 'CloudScale Inc',
    content: 'The automated optimization suggestions are incredibly accurate. We\'ve saved over $100K annually while improving our environmental impact.',
    avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
  },
  {
    name: 'Emily Johnson',
    role: 'Infrastructure Manager',
    company: 'GreenTech Solutions',
    content: 'Finally, a tool that combines cost optimization with sustainability. The real-time monitoring has transformed how we manage our cloud resources.',
    avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
  }
];

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-blue-500 rounded-lg flex items-center justify-center">
                <Leaf className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                InfraOptimizer
              </span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-slate-600 hover:text-slate-900 transition-colors">Features</a>
              <a href="#pricing" className="text-slate-600 hover:text-slate-900 transition-colors">Pricing</a>
              <a href="#testimonials" className="text-slate-600 hover:text-slate-900 transition-colors">Customers</a>
              <a href="#" className="text-slate-600 hover:text-slate-900 transition-colors">Docs</a>
              <Link 
                to="/dashboard" 
                className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-6 py-2 rounded-lg hover:from-green-700 hover:to-blue-700 transition-all duration-200 flex items-center space-x-2"
              >
                <span>Get Started</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-50 to-blue-50 py-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center space-x-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Leaf className="w-4 h-4" />
                <span>Smart Cloud Optimization + GreenOps</span>
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 leading-tight mb-6">
                Reduce Cloud Costs by{' '}
                <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                  50%
                </span>
                {' '}While Going Green
              </h1>
              
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                AI-powered cloud optimization that automatically reduces costs and carbon footprint. 
                Monitor AWS, GCP, and Azure resources in real-time with intelligent automation.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link 
                  to="/dashboard"
                  className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-8 py-4 rounded-lg hover:from-green-700 hover:to-blue-700 transition-all duration-200 flex items-center justify-center space-x-2 text-lg font-semibold"
                >
                  <span>Start Free Trial</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <button className="border-2 border-slate-300 text-slate-700 px-8 py-4 rounded-lg hover:border-slate-400 hover:bg-slate-50 transition-all duration-200 flex items-center justify-center space-x-2 text-lg font-semibold">
                  <Play className="w-5 h-5" />
                  <span>Watch Demo</span>
                </button>
              </div>
              
              <div className="flex items-center space-x-6 text-sm text-slate-500">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>No credit card required</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>14-day free trial</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-6 border border-slate-200">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold text-slate-900">Cost Optimization Dashboard</h3>
                  <div className="flex space-x-1">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-4 rounded-lg border border-green-200">
                    <div className="text-2xl font-bold text-green-600">$12,847</div>
                    <div className="text-sm text-green-700">Monthly Savings</div>
                  </div>
                  <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-4 rounded-lg border border-blue-200">
                    <div className="text-2xl font-bold text-blue-600">-45%</div>
                    <div className="text-sm text-blue-700">Cost Reduction</div>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-sm text-slate-700">Idle EC2 instances terminated</span>
                    </div>
                    <span className="text-sm font-semibold text-green-600">$2,340/mo</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-sm text-slate-700">RDS instances right-sized</span>
                    </div>
                    <span className="text-sm font-semibold text-blue-600">$1,890/mo</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                      <span className="text-sm text-slate-700">Storage optimized</span>
                    </div>
                    <span className="text-sm font-semibold text-purple-600">$945/mo</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-slate-900 mb-2">{stat.value}</div>
                <div className="text-slate-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Everything you need for cloud optimization
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Comprehensive tools to monitor, optimize, and automate your cloud infrastructure 
              while reducing costs and environmental impact.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="bg-white p-8 rounded-xl shadow-sm border border-slate-200 hover:shadow-md transition-all duration-200">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-100 to-blue-100 rounded-lg flex items-center justify-center mb-6">
                    <Icon className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">{feature.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Trusted by leading companies
            </h2>
            <p className="text-xl text-slate-600">
              See how teams are saving millions while going green
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-slate-50 p-8 rounded-xl border border-slate-200">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-slate-700 mb-6 leading-relaxed">"{testimonial.content}"</p>
                <div className="flex items-center space-x-4">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold text-slate-900">{testimonial.name}</div>
                    <div className="text-sm text-slate-600">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Simple, transparent pricing
            </h2>
            <p className="text-xl text-slate-600">
              Start free, scale as you grow
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Starter Plan */}
            <div className="bg-white p-8 rounded-xl border border-slate-200">
              <h3 className="text-xl font-semibold text-slate-900 mb-2">Starter</h3>
              <div className="text-3xl font-bold text-slate-900 mb-4">Free</div>
              <p className="text-slate-600 mb-6">Perfect for small teams getting started</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-slate-700">Up to 50 resources</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-slate-700">Basic cost monitoring</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-slate-700">Email alerts</span>
                </li>
              </ul>
              <button className="w-full border-2 border-slate-300 text-slate-700 py-3 rounded-lg hover:border-slate-400 transition-colors">
                Get Started
              </button>
            </div>
            
            {/* Professional Plan */}
            <div className="bg-gradient-to-br from-green-50 to-blue-50 p-8 rounded-xl border-2 border-green-200 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                  Most Popular
                </span>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">Professional</h3>
              <div className="text-3xl font-bold text-slate-900 mb-4">$99<span className="text-lg text-slate-600">/month</span></div>
              <p className="text-slate-600 mb-6">For growing teams and businesses</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-slate-700">Up to 1,000 resources</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-slate-700">Advanced optimization</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-slate-700">Carbon footprint tracking</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-slate-700">Slack integration</span>
                </li>
              </ul>
              <Link 
                to="/dashboard"
                className="w-full bg-gradient-to-r from-green-600 to-blue-600 text-white py-3 rounded-lg hover:from-green-700 hover:to-blue-700 transition-all duration-200 flex items-center justify-center space-x-2"
              >
                <span>Start Free Trial</span>
              </Link>
            </div>
            
            {/* Enterprise Plan */}
            <div className="bg-white p-8 rounded-xl border border-slate-200">
              <h3 className="text-xl font-semibold text-slate-900 mb-2">Enterprise</h3>
              <div className="text-3xl font-bold text-slate-900 mb-4">Custom</div>
              <p className="text-slate-600 mb-6">For large organizations with complex needs</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-slate-700">Unlimited resources</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-slate-700">Custom integrations</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-slate-700">Dedicated support</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-slate-700">SLA guarantees</span>
                </li>
              </ul>
              <button className="w-full border-2 border-slate-300 text-slate-700 py-3 rounded-lg hover:border-slate-400 transition-colors">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to optimize your cloud costs?
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Join thousands of companies saving millions while reducing their carbon footprint
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/dashboard"
              className="bg-white text-green-600 px-8 py-4 rounded-lg hover:bg-slate-50 transition-colors text-lg font-semibold flex items-center justify-center space-x-2"
            >
              <span>Start Free Trial</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-green-600 transition-all duration-200 text-lg font-semibold">
              Schedule Demo
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-blue-500 rounded-lg flex items-center justify-center">
                  <Leaf className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">InfraOptimizer</span>
              </div>
              <p className="text-slate-400 mb-4">
                Smart cloud optimization that saves money and protects the environment.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Integrations</a></li>
                <li><a href="#" className="hover:text-white transition-colors">API</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Status</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Security</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-400">© 2024 InfraOptimizer. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-slate-400 hover:text-white transition-colors">Privacy</a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">Terms</a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">Cookies</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}