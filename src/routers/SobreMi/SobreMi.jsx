import React from "react";
import { Content } from "antd/es/layout/layout";
import './SobreMi.css'

const SobreMi = () => {
  return (
    <>
      <Content className="sobre-mi">
        <div>
          <h1>Sobre Mi</h1>
          <p>
            Actualmente estoy cursando la carrera: Tecnicatura en Desarrollo de Software en el escuela Comercial de Rio Tercero, Cordoba, Argentina; Durante mi trayectoria estudiantil tuve la oportunidad de capacitarme
            en el Instutito Superior Politecnico Cordoba, Argentina, donde realice el curso de "Desarrollador Full Stack .NET" 
          </p>
          <h4>BUSCO AMPLIAR MI CAMPO LABORAL EN EL MUNDO DEL DESARROLLO WEB</h4>
          <p>
            Podes buscar mi historial laboral en {""}
          <a href="https://www.linkedin.com/in/rodrigo-aranda-1a154420a/" target="_blanck"> Linkedin</a>
          </p>
        </div>
      </Content>
    </>
  );
};

export default SobreMi;
