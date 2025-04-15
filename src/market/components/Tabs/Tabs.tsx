"use client";

import { JSX, useState } from "react";

interface TabProps {
  id: string | number;
  label: string;
  content: JSX.Element;
}

interface TabsArray {
  tabs: TabProps[];
}

export const Tabs = ({ tabs }: TabsArray) => {
  const [activeTab, setActiveTab] = useState(tabs[0].id);
  return (
    <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:mb-12">
      <div className="flex border-b border-gray-200 overflow-x-auto">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`whitespace-nowrap pb-2 px-1 mr-8 md:mr-12 text-base md:text-lg relative ${
              activeTab === tab.id ? "font-bold text-black" : "text-gray-400"
            }`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
            {activeTab === tab.id && (
              <div className="absolute bottom-0 left-0 w-full h-1 bg-black"></div>
            )}
          </button>
        ))}
      </div>
      <div className="mt-6">
        {tabs.map(
          (tab) => activeTab === tab.id && <div key={tab.id}>{tab.content}</div>
        )}
      </div>
    </div>
  );
};
