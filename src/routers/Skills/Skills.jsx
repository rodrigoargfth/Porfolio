import React from "react";
import { Card, ConfigProvider } from "antd";
import { Content } from "antd/es/layout/layout";
import "./Skills.css";
import { Html5Filled } from "@ant-design/icons";
import { IoLogoCss3 } from "react-icons/io";
import { IoLogoJavascript } from "react-icons/io5";
import { GrJava } from "react-icons/gr";
import { FaBootstrap } from "react-icons/fa6";
import { FaReact } from "react-icons/fa6";
import { IoLogoAngular } from "react-icons/io5";
import { GrMysql } from "react-icons/gr";
import { SiVisualstudiocode } from "react-icons/si";
import { SiVisualstudio } from "react-icons/si";

const Skills = () => {
  return (
    <>
      <Content className="skills">
        <div>
          <h1>Skills</h1>
          <h4>Lenguajes de Programacion</h4>
          <div className="container-leng">
            <div className="log-htm">
              <Html5Filled style={{ fontSize: "68px",color:"white", margin: "3px" }} />
            </div>
            <div className="log-css">
              <IoLogoCss3 style={{ fontSize: "68px", color: "#FFC906", margin: "3px" }} />
            </div>
            <div className="log-js">
              <IoLogoJavascript style={{ fontSize: "68px", color: "#AEAE2D", margin: "3px" }} />
            </div>
            <div className="log-java">
              <GrJava style={{ fontSize: "68px", color: "#FF5D06", margin: "3px" }} />
            </div>
            <div className="log-mysql">
              <GrMysql style={{ fontSize: "68px", color: "#4FB0C6", margin: "3px" }} />
            </div>
          </div>
        </div>
        <div>
          <h4>Frameworks y Bibliotecas</h4>
          <div className="container-leng">
            <div className="log-btsp">
              <FaBootstrap style={{ fontSize: "68px", color: "#190E4F", margin: "3px" }} />
            </div>
            <div className="log-react">
              <FaReact style={{ fontSize: "68px", color: "#47C4FA", margin: "3px" }} />
            </div>
            <div className="log-ang">
              <IoLogoAngular style={{ fontSize: "68px", color: "#E10306", margin: "3px" }} />
            </div>
          </div>
        </div>
        <div>
          <h4>Software y Herramientas</h4>
          <div className="container-leng">
            <div className="log-vsc">
              <SiVisualstudiocode style={{ fontSize: "68px", color: "#47C4FA", margin: "3px" }} />
            </div>
            <div className="log-vs">
              <SiVisualstudio style={{ fontSize: "68px", color: "#744FC6", margin: "3px" }} />
            </div>
          </div>
        </div>
      </Content>
    </>
  );
};

export default Skills;
