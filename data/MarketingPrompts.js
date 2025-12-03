// FILE: /data/MarketingPrompts.js

// Clean, marketer-friendly prompts with business clarity.
export const MARKETING_ACTION_PROMPTS = {
  "Star": {
    category: "Strong Performer",
    reason: "Customers love this product and demand keeps growing.",
    action: "Keep it front and center—feature it in ads, promos, and menus."
  },

  "Cash Cow": {
    category: "Reliable Seller",
    reason: "This product sells steadily without needing heavy marketing.",
    action: "Maintain visibility, but don’t invest extra promo budget here."
  },

  "Question Mark": {
    category: "Needs Attention",
    reason: "It shows some interest, but sales haven’t proven themselves yet.",
    action: "Try small tests—new angles, placement, or light promos to see what sticks."
  },

  "Dog": {
    category: "Low Priority",
    reason: "Low demand and weak sales make this a poor investment area.",
    action: "Reduce focus; consider phasing it out or replacing it."
  },

  "Unknown": {
    category: "Unclassified",
    reason: "Missing data prevents classification.",
    action: "Add the missing values to get insights."
  }
};

export const COLOR_MAP = {
  "Star": { fill: "#34d399", border: "border-green-400", bg: "bg-green-50", text: "text-green-700", bg_quadrant: "rgba(52, 211, 153, 0.10)" },
  "Cash Cow": { fill: "#60a5fa", border: "border-blue-400", bg: "bg-blue-50", text: "text-blue-700", bg_quadrant: "rgba(96, 165, 250, 0.10)" },
  "Question Mark": { fill: "#fbbf24", border: "border-yellow-400", bg: "bg-yellow-50", text: "text-yellow-700", bg_quadrant: "rgba(251, 191, 36, 0.10)" },
  "Dog": { fill: "#f87171", border: "border-red-400", bg: "bg-red-50", text: "text-red-700", bg_quadrant: "rgba(248, 113, 113, 0.10)" },
  "Unknown": { fill: "#a1a1aa", border: "border-gray-400", bg: "bg-gray-100", text: "text-gray-600", bg_quadrant: "rgba(161, 161, 170, 0.06)" }
};
