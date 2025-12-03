import menuData from "@/data/MenuData";

/**
 * Normalizes the menu item data by calculating the x (Share) 
 * and y (Growth) coordinates based on their respective totals/maximums.
 */
export function normalizeMenuItems(items) {
  // Calculate total revenue for the x-axis (Share) calculation
  const totalRevenue = items.reduce((sum, item) => sum + (item.revenue || 0), 0);
  
  // Find the maximum volume for the y-axis (Growth Score) calculation
  const maxVolume = Math.max(...items.map(i => i.volume || 0));

  return items.map(item => ({
    ...item,
    // FIXED X: Share is calculated as a percentage of TOTAL revenue
    x: totalRevenue > 0 ? ((item.revenue / totalRevenue) * 100) : 0,  
    // Y: Growth score is calculated as a percentage of the MAX volume
    y: maxVolume > 0 ? ((item.volume / maxVolume) * 100) : 0,        
  }));
}

export function getMenuItems() {
  const raw = Array.isArray(menuData.items) ? [...menuData.items] : [];
  
  // Use the new normalization function to calculate the correct x and y coordinates
  return normalizeMenuItems(raw);
}