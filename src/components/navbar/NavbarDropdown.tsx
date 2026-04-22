// src/components/Navbar/NavbarDropdown.tsx
import React from "react";
import { MainCategory } from "./navbarData";
import { useNavigate } from "react-router-dom";

interface NavbarDropdownProps {
  category: MainCategory;
  closeDropdown: () => void;
}

const NavbarDropdown: React.FC<NavbarDropdownProps> = ({ category, closeDropdown }) => {
  const navigate = useNavigate();

  // if no groups and no topRow, nothing to show
  if (!category.topRow && !category.groups) return null;

  return (
    <div className="navbar-dropdown">
      {/* TOP ROW (orange links) */}
      {category.topRow && (
        <div className="dropdown-toprow">
          {category.topRow.map((item) => (
            <a 
              key={item.code} 
              href={`/category/${item.code}`} 
              className="toprow-link" 
              data-code={item.code}
              onClick={(e) => {
                e.preventDefault();
                closeDropdown();
                navigate(`/category/${item.code}`);
              }}
            >
              {item.name}
            </a>
          ))}
        </div>
      )}

      {/* BODY: groups (Popular / All Categories) */}
      <div className="dropdown-body">
        {category.groups?.map((group) => (
          <div key={group.title} className="dropdown-group">
            <h4 className="dropdown-group-title">{group.title}</h4>
            <ul className="dropdown-list">
              {group.items.map((item) => (
                <li 
                  key={item.code} 
                  className="dropdown-item" 
                  data-code={item.code}
                  onClick={() => {
                      closeDropdown();
                      navigate(`/category/${item.code}`);
                  }}
                >
                  {item.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NavbarDropdown;
