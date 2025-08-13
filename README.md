# InfraOptimizer Dashboard

**InfraOptimizer** is a smart assistant for cloud costs. It monitors AWS and GCP resources in real time, detects wasteful usage like idle servers or oversized VMs, provides actionable cost-saving suggestions, sends budget alerts, and even tracks the carbon footprint—helping organizations save money and go green.

---

## ✨ Features

- **Real-time Monitoring** – Track cloud usage across AWS & GCP.
- **Waste Detection** – Identify idle instances, over-provisioned resources, and unused storage volumes.
- **Cost-saving Suggestions** – Recommend actions with estimated savings (e.g., “shut this down” or “resize that VM”).
- **Alerts & Notifications** – Warn about budget spikes or inefficiencies.
- **Carbon Footprint Metrics** – Track emissions for greener operations.
- **Automation & Scalability** – Fully automated and built to handle enterprise-scale infrastructure.

---

## 📊 Dashboard Layout

1. **Overview Page** – Total spend, estimated savings, and carbon footprint summary.
2. **Real-time Monitoring** – Live view of active resources, usage trends, and alerts.
3. **Optimization Suggestions** – Actionable list of savings opportunities with impact estimates.
4. **Alerts & Notifications** – Instant alerts for cost spikes or idle resources.
5. **Multi-cloud Support** – Unified interface for AWS and GCP.

---

## 🆚 Why It's Unique

While platforms like **AWS Cost Explorer**, **Google Cloud Billing**, **CloudHealth by VMware**, **Spot.io**, **Cast.ai**, and **Kubecost** focus mainly on either cost optimization or Kubernetes tracking, **InfraOptimizer** combines **cost optimization + carbon tracking** into one smart, automation-driven dashboard.

---

## ⚙️ Installation & Setup

### Prerequisites
- Node.js (v16+)
- npm or yarn
- AWS & GCP billing API credentials

### Steps
```bash
# Clone repository
git clone https://github.com/Puja-Jorwar/InfraOptimizer_Dashboard.git

# Navigate into folder
cd InfraOptimizer_Dashboard

# Install dependencies
npm install        # or yarn install

# Configure environment variables for AWS/GCP access
# (See .env.example for guidance)

# Start development server
npm run dev

# Build for production
npm run build
