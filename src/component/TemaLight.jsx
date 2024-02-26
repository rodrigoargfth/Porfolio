import { FloatButton } from "antd";
import React from "react";
import { HiOutlineSun, HiOutlineMoon } from "react-icons/hi";

export const TemaLight = ({ darkTheme, toogleTheme }) => {
  return (
      <div className="toogle-btn-theme">
        <FloatButton
          icon={darkTheme ? <HiOutlineMoon /> : <HiOutlineSun />}
          onClick={toogleTheme}
        ></FloatButton>
      </div>
  );
};
