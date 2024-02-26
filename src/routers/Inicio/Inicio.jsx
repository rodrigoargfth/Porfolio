import React from "react";
import { useState } from "react";
import "./Inicio.css";
import { Content } from "antd/es/layout/layout";

const Inicio = () => {
  return (
    <>
      <Content className="inicio">
        <div>
          <h1>Soy Rodrigo Aranda</h1>
          <h3>Bienvenido a mi Porfolio como Desarrollador Web Front End Trainee</h3>
          <p>
            Si queres ponerte en contacto conmigo podes escribirme a {""}
            <a href="mailto:rodrifother@gmail.com" target="_blank">
              rodrifother@gmail.com
            </a>
          </p>
        </div>
      </Content>

    </>
  );
};

export default Inicio;
