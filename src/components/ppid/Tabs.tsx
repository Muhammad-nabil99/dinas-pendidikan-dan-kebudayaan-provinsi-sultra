import { useState } from "react";

interface Tab {
  id: string;
  label: string;
  icon: string;
}

interface TabsProps {
  tabs: Tab[];
  activeTab: string;
  onTabChange: (tabId: string) => void;
}

const Tabs = ({ tabs, activeTab, onTabChange }: TabsProps) => {
  return (
    <div className="flex flex-wrap gap-2 mb-6">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onTabChange(tab.id)}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 ${
            activeTab === tab.id
              ? "bg-blue-600 text-white shadow-md transform scale-105"
              : "bg-white text-gray-600 hover:bg-gray-100 hover:shadow-sm"
          }`}
        >
          <span className={`text-lg ${activeTab === tab.id ? "text-white" : "text-gray-400"}`}>
            {tab.icon}
          </span>
          <span className="text-sm font-medium">{tab.label}</span>
        </button>
      ))}
    </div>
  );
};

export default Tabs;
