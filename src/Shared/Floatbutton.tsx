import { Button } from "antd";
import { useContext } from "react";
import { ThemeContext } from "styled-components";


const FloatButton = () => {
    const themeContext = useContext(ThemeContext);
  
    const toggleTheme = () => {
      themeContext.setTheme(
        themeContext.theme === "light" ? "dark" : "light"
      );
    };
  
    return (
      <Button
        type="primary"
        shape="circle"
        size="large"
        onClick={toggleTheme}
        style={{
          position: "fixed",
          bottom: 20,
          right: 20,
          zIndex: 9999,
        }}
      >
        {themeContext.theme === "light" ? "🌙" : "☀️"}
      </Button>
    );
  };
  export default FloatButton;