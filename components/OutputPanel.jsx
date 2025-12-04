import React from 'react';
import { ChevronDoubleLeftIcon, DollarSign, TrendingUp, Zap, XCircle } from 'lucide-react';
import { MARKETING_ACTION_PROMPTS, COLOR_MAP } from '../data/MarketingPrompts';

/**
 * OutputPanel Component
 * Displays detailed information and suggested actions for the selected item.
 */
const OutputPanel = ({ selectedItem, onDeselect, onAction }) => {
  if (!selectedItem) {
    return (
      <div className="flex flex-col items-center justify-center p-8 bg-gray-50 rounded-xl shadow-inner h-full">
        <XCircle className="w-12 h-12 text-gray-400 mb-4" />
        <p className="text-lg font-medium text-gray-600">
          Select a product bubble on the chart
        </p>
        <p className="text-sm text-gray-400">
          to see its details and strategic actions.
        </p>
      </div>
    );
  }

  const { id, name, classification, x, y, revenue } = selectedItem;
  const colorData = COLOR_MAP[classification] || COLOR_MAP.Unknown;
  const promptData = MARKETING_ACTION_PROMPTS[classification] || MARKETING_ACTION_PROMPTS.Unknown;

  return (
    <div className="bg-white p-6 rounded-xl shadow-2xl ring-1 ring-gray-200 h-full">
      
      {/* Header and Deselect Button */}
      <div className="flex justify-between items-start mb-4 border-b pb-3">
        <h3 className="text-2xl font-bold text-gray-800 flex-grow mr-4">
          {name}
        </h3>
        <button
          onClick={onDeselect}
          className="flex items-center text-sm font-semibold text-indigo-600 hover:text-indigo-800 transition-colors"
        >
          <ChevronDoubleLeftIcon className="w-4 h-4 mr-1" />
          Deselect
        </button>
      </div>

      {/* Classification Badge */}
      <div className={`inline-flex items-center px-3 py-1.5 rounded-full text-sm font-semibold mb-6 shadow-md`}
           style={{ backgroundColor: colorData.bg_quadrant, color: colorData.fill }}>
        <Zap className="w-4 h-4 mr-1.5" />
        {classification}
      </div>

      {/* Key Metrics Section */}
      <div className="space-y-4 mb-8">
        <h4 className="text-lg font-bold text-gray-700">Key Metrics</h4>
        
        {/* Metric 1: Sales Strength Index (REPLACED WITH NEW STRUCTURE) */}
        <div className="flex flex-wrap items-baseline">
          <DollarSign className="w-5 h-5 mr-2 text-indigo-500 flex-shrink-0" />
          <p className="flex items-center text-gray-800">
            {/* The finalized sentence structure for clarity on 100% score */}
            <span className="mr-1">This product’s Sales Strength Index is</span>
            <span className="font-bold text-indigo-700">{x.toFixed(1)}%</span>
            <span className="ml-1 text-sm text-gray-500 italic">(Scored against your top seller)</span>
          </p>
        </div>

        {/* Metric 2: Growth Trend (REPLACED LABEL) */}
        <div className="flex items-center">
          <TrendingUp className="w-5 h-5 mr-2 text-indigo-500" />
          <span className="font-semibold text-gray-600">Growth Trend:</span>
          <span className="ml-2">{y.toFixed(1)}%</span>
        </div>
        
        {/* Metric 3: Total Revenue (No change) */}
        <div className="flex items-center">
          <DollarSign className="w-5 h-5 mr-2 text-green-600" />
          <span className="font-semibold text-gray-600">Total Revenue:</span>
          <span className="ml-2 font-bold">${revenue.toLocaleString()}</span>
        </div>
      </div>

      {/* Strategic Recommendation Section */}
      <div className="bg-indigo-50 p-4 rounded-lg border-l-4 border-indigo-500">
        <h4 className="text-lg font-bold text-indigo-700 mb-2">
          Recommended Strategy
        </h4>
        <p className="text-gray-700 mb-3">{promptData.action}</p>
        <button
          onClick={() => onAction(id)}
          className="w-full bg-indigo-600 text-white py-2 rounded-lg font-semibold hover:bg-indigo-700 transition-colors shadow-md"
        >
          Learn More About "{promptData.action}"
        </button>
      </div>

    </div>
  );
};

export default OutputPanel;