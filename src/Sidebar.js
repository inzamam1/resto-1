import React from 'react';
import { stack as Menu } from 'react-burger-menu';
import './Sidebar.css'

export default props => {
  return (
    <Menu>
      <a className="menu-item" >
        Home
      </a>
      <a className="menu-item" >
        Salads
      </a>
      <a className="menu-item" >
        Pizzas
      </a>
      <a className="menu-item">
        Desserts
      </a>
    </Menu>
  );
};