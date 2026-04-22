// src/components/Navbar/Navbar.tsx
import React, { useState } from "react";
import { NAVBAR_ITEMS, MainCategory } from "./navbarData";
import NavbarDropdown from "./NavbarDropdown";

const Navbar: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<MainCategory | null>(
    null
  );

  return (
    <nav className="navbar">
      <ul className="navbar-list">
        {NAVBAR_ITEMS.map((category) => (
          <li
            key={category.code}
            className="navbar-item"
            onMouseEnter={() => setActiveCategory(category)}
            onMouseLeave={() => setActiveCategory(null)}
          >
            <span className="navbar-link">{category.title}</span>
            {activeCategory?.code === category.code && (
              <NavbarDropdown category={category} closeDropdown={() => setActiveCategory(null)} />
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
