import React from 'react';
import { List } from 'lucide-react';
import { MARKETING_ACTION_PROMPTS, COLOR_MAP } from '../data/MarketingPrompts.js';

// FIX: Explicity define the border classes here so Tailwind JIT compiler can see them.
// This ensures that classes like 'border-green-400' are compiled into the CSS bundle.
const BORDER_COLOR_MAP = {
    'Star': 'border-green-400',
    'Cash Cow': 'border-blue-400',
    'Question Mark': 'border-yellow-400',
    'Dog': 'border-red-400',
    'Unknown': 'border-gray-400',
};

const MenuItemList = ({ items, onSelect, selectedId }) => {
    if (!items || items.length === 0) {
        return (
            <div className="text-center p-6 text-gray-500 bg-gray-50 rounded-lg">
                No menu items loaded. Check data source.
            </div>
        );
    }

    return (
        <div className="mb-2 bg-white p-6 rounded-xl shadow-lg ring-1 ring-gray-200">
            <h3 className="text-2xl font-bold text-gray-800 mb-4 border-b pb-2 flex items-center">
                <List className="w-5 h-5 mr-2 text-indigo-500" /> All Menu Items ({items.length})
            </h3>

            <div className="max-h-[300px] overflow-y-auto space-y-3 pr-2">
                {items.map((item) => {
                    const colors = COLOR_MAP[item.classification] || COLOR_MAP.Unknown;
                    const prompt = MARKETING_ACTION_PROMPTS[item.classification] || MARKETING_ACTION_PROMPTS.Unknown;
                    const isSelected = item.id === selectedId;
                    
                    // Use the explicit lookup object created above
                    const quadrantBorderClass = BORDER_COLOR_MAP[item.classification] || BORDER_COLOR_MAP['Unknown'];

                    return (
                        <div
                            key={item.id}
                            onClick={() => onSelect(item)}
                            className={`p-3 border-l-4 rounded-lg cursor-pointer transition-all duration-200
                                ${quadrantBorderClass}  <-- USING THE EXPLICIT CLASS
                                ${
                                    isSelected
                                        ? 'bg-indigo-50 shadow-md ring-1 ring-indigo-500'
                                        : 'bg-white hover:bg-gray-50 shadow-sm hover:shadow-lg'
                                }`}
                        >
                            <p className="font-semibold text-gray-900 flex justify-between items-center">
                                <span>{item.name}</span>
                                <span className={`text-xs font-bold px-2 py-1 rounded-full ${colors.bg} ${colors.text} uppercase`}>
                                    {item.classification}
                                </span>
                            </p>

                            <p className="text-[11px] text-gray-400 mt-1 line-clamp-2">
                                {prompt.action}
                            </p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default MenuItemList;