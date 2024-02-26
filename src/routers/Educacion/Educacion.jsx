import React from "react";
import { Content } from "antd/es/layout/layout";
import './Educacion.css'

const Educacion = () => {
  return (
    <>
      <Content className="educacion">
        <div>
          <h1>Educacion</h1>
          <p>
            Soy estudiante de la Tecnicatura en Desarrollo de Software en el escuela Comercial de
            Rio Tercero, Cordoba, Argentina.
            <br />
            Durante el 2023 tuve la oportunidad de capacitarme en el Instutito Superior Politecnico
            Cordoba, Argentina, a traves del Gobierno de Cordoba, donde realice el curso de
            "Desarrollador Full Stack .NET", tambien tuve el agrado de hacer un curso intensivo de
            desarrollador Front End dirigido por la Municipalidad de Rio Tercero,Cordoba,Argentia,
            en este curso se enseño a utilizar HTML,CSS,Javascript y Angular
          </p>

          <h4>
            Podes buscar mi historial estudiantil en {""}
            <a href="https://www.linkedin.com/in/rodrigo-aranda-1a154420a/" target="_blanck">
              {" "}
              Linkedin
            </a>
          </h4>
          <h4>
            Tambien puedes visitar mi perfil de <a href="https://github.com/rodrigoargfth" target="_black">Github</a>
          </h4>
        </div>
      </Content>
    </>
  );
};

export default Educacion;
