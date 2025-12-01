// FILE: /data/MarketingPrompts.js

// This is the clean, working version that successfully deployed your MVP.
export const MARKETING_ACTION_PROMPTS = {
  "Star": {
    action: "Strong Performer: Invest and Promote Aggressively.",
    reason: "High customer demand and strong sales indicate high potential for revenue growth with increased investment."
  },

  "Cash Cow": {
    action: "Reliable Seller: Maintain Efficient Marketing Presence.",
    reason: "This product reliably generates cash; focus on efficient, ongoing marketing to protect healthy margins."
  },

  "Question Mark": {
    action: "Needs Attention: Experiment with Small, Targeted Campaigns.",
    reason: "The market is growing but share is low; run quick experiments to discover successful growth strategies."
  },

  "Dog": {
    action: "Low Priority: Reduce Active Spend Immediately.",
    reason: "Low demand and weak market share make large marketing investments unlikely to produce acceptable returns."
  },

  "Unknown": {
    action: "What to Do: Data Missing—Check Inputs.",
    reason: "Revenue or volume metrics are incomplete, preventing accurate classification and recommendation."
  }
};

export const COLOR_MAP = {
  "Star": { fill: "#34d399", border: "border-green-400", bg: "bg-green-50", text: "text-green-700", bg_quadrant: "rgba(52, 211, 153, 0.10)" }, 
  "Cash Cow": { fill: "#60a5fa", border: "border-blue-400", bg: "bg-blue-50", text: "text-blue-700", bg_quadrant: "rgba(96, 165, 250, 0.10)" }, 
  "Question Mark": { fill: "#fbbf24", border: "border-yellow-400", bg: "bg-yellow-50", text: "text-yellow-700", bg_quadrant: "rgba(251, 191, 36, 0.10)" }, 
  "Dog": { fill: "#f87171", border: "border-red-400", bg: "bg-red-50", text: "text-red-700", bg_quadrant: "rgba(248, 113, 113, 0.10)" }, 
  "Unknown": { fill: "#a1a1aa", border: "border-gray-400", bg: "bg-gray-100", text: "text-gray-600", bg_quadrant: "rgba(161, 161, 170, 0.06)" }
};