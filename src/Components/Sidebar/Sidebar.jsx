import React from 'react';
import './Sidebar.css'; 

const Sidebar = () => (
  <aside className="sidebar">
    <h2>Filters</h2>
    <div className="filter-section">
      <h3>Customize</h3>
      <input type="checkbox" id="customize" name="customize" />
      <label htmlFor="customize"> Customizable</label>
    </div>
    {/* Add more filters */}
  </aside>
);

export default Sidebar;
