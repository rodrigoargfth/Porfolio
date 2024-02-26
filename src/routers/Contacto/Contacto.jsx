import React from "react";
import { Content } from "antd/es/layout/layout";
import "./Contacto.css";
import { LinkOutlined, LinkedinOutlined, MailFilled, WhatsAppOutlined } from "@ant-design/icons";

const Contacto = () => {

  const phoneNumber = '3571551393';
  const message = encodeURIComponent('Hola, Soy Rodrigo')
  const url = `https://wa.me/${phoneNumber}?text=${message}`;
  return (
    <>
      <Content className="contact">
        <div>
          <h1>Contactame!</h1>
          <p>
            <MailFilled/>
            {" "}Email:{" "}
            <a href="mailto:rodrifother@gmail.com" target="_blank"> rodrifother@gmail.com</a>
          </p>
          <p>
            <WhatsAppOutlined/>
            {" "}Whatsapp:{" "}
            <a href={url} target="_blank" rel="noopener noreferrer"> 3571551393</a>
          </p>
          <p>
            <LinkedinOutlined/>
            {" "}Linkedin:{" "}
            <a href="https://www.linkedin.com/in/rodrigo-aranda-1a154420a/" target="_blank" > Rodrigo_aranda</a>
          </p>
        </div>
      </Content>
    </>
  );
};

export default Contacto;
