import React from 'react';

const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-[#1e1e1e] text-white p-4">
      {/* Top Tabs */}
      <div className="flex gap-4 mb-6 text-sm">
        <div>Explore</div>
        <div className="border-b-2 border-white pb-1">Problems</div>
      </div>

      {/* Menu Items */}
      <div className="space-y-4">
        <div className="hover:text-yellow-400 cursor-pointer flex items-center gap-2">
          📚 <span>Library</span>
        </div>
        <div className="hover:text-yellow-400 cursor-pointer flex items-center gap-2">
          🎓 <span>Study Plan</span>
        </div>
      </div>

      {/* My Lists */}
      <div className="mt-8">
        <div className="text-gray-400 text-sm mb-2">My Lists</div>
        <div className="hover:text-yellow-400 cursor-pointer flex items-center justify-between">
          <div className="flex items-center gap-2">
            ⭐ <span>Favorite</span>
          </div>
          <span className="text-gray-500">🔒</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
