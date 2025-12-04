// FILE: /lib/data-service.js
import menuData from "@/data/MenuData";

/**
 * Normalizes menu items to calculate:
 * x = Relative Revenue Share (% of total revenue)
 * y = Growth Score (% of max volume)
 */
export function normalizeMenuItems(items) {
  const totalRevenue = items.reduce((sum, item) => sum + (item.revenue || 0), 0);
  const maxVolume = Math.max(...items.map(i => i.volume || 0));

  return items.map(item => ({
    ...item,
    x: totalRevenue > 0 ? ((item.revenue / totalRevenue) * 100) : 0,
    y: maxVolume > 0 ? ((item.volume / maxVolume) * 100) : 0,
  }));
}

export function getMenuItems() {
  const raw = Array.isArray(menuData.items) ? [...menuData.items] : [];
  return normalizeMenuItems(raw);
}