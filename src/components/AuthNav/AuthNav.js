import React from 'react';
import { styleLink, activeStyleLink } from '../Navigation/Navigation';
import { NavLink } from 'react-router-dom';

export default function AuthNav() {
  return (
    <div>
      <NavLink
        to="/register"
        style={({ isActive }) => (isActive ? activeStyleLink : styleLink)}
      >
        Зареєструйтесь
      </NavLink>
      <NavLink
        to="/login"
        style={({ isActive }) => (isActive ? activeStyleLink : styleLink)}
      >
        Вхід
      </NavLink>
    </div>
  );
}
