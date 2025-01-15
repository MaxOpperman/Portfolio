import React from "react";
import { MdDarkMode } from "react-icons/md";
import { MdSunny } from "react-icons/md";
import PropTypes from 'prop-types';


const ThemeToggler = ({ theme, themeSetter }) => {

  ThemeToggler.propTypes = {
    theme: PropTypes.string.isRequired,
    themeSetter: PropTypes.func.isRequired,
  };

  const themeToggle = () => {
    themeSetter(theme === "dark" ? "light" : "dark");
  };
  const themeIcon = theme === "dark" ? <MdSunny /> : <MdDarkMode />;
  return (
    <div onClick={themeToggle}>
      {themeIcon}
    </div>
  );
};

export default ThemeToggler;