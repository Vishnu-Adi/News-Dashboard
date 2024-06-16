import React from 'react';
import './Header.css';

const Header = ({ setRegion, categories, setActiveCategory }) => {
  return (
    <header>
      <div className="header-top">
        <h1>News Dashboard</h1>
        <select onChange={(e) => setRegion(e.target.value)}>
          <option value="us">United States</option>
          <option value="gb">United Kingdom</option>
          <option value="ca">Canada</option>
          <option value="au">Australia</option>
          <option value="">International</option>
        </select>
      </div>
      <nav>
        {categories.map((category) => (
          <button key={category} onClick={() => setActiveCategory(category)}>
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </nav>
    </header>
  );
};

export default Header;
