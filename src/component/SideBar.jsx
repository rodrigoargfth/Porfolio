import React from "react";
import { useState } from "react";
import { Button, Layout, Menu, ConfigProvider } from "antd";
import {
  BranchesOutlined,
  SearchOutlined,
  CoffeeOutlined,
  MobileOutlined,
  ReadOutlined,
  UserOutlined,
  LinkedinFilled,
  GithubFilled,
  HomeFilled,
  FacebookFilled,
} from "@ant-design/icons";
import Rodrigo from "../assets/img/Rodrigo.jpg";
import "../component/SideBar.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const { Sider } = Layout;

const Sidebar = () => {
  // imagen de perfil
  const imagen = [Rodrigo];

  // items de menu lateral
  const menuItems = [
    {
      label: <Link to="/Inicio"> Inicio</Link>,
      key: "/",
      icon: <HomeFilled />,
      to: "/Inicio",
    },
    {
      label: <Link to="/SobreMi"> Sobre mi</Link>,
      key: "SobreMi",
      icon: <UserOutlined />,
      to: "/SobreMi",
    },
    // {
    //   label: <Link to="/Portfolio"> Portfolio</Link>,
    //   key: "Portfolio",
    //   icon: <BranchesOutlined />,
    //   to: "/Portfolio",
    // },
    {
      label: <Link to="/Educacion"> Educacion</Link>,
      key: "Educacion",
      icon: <ReadOutlined />,
      as: Link,
      to: "/Educacion",
    },
    {
      label: <Link to="/Skills"> Skills </Link>,
      key: "Skills",
      icon: <CoffeeOutlined />,
      as: Link,
      to: "/Skills",
    },
    {
      label: <Link to="/Contacto"> Contacto </Link>,
      key: "Contacto",
      icon: <MobileOutlined />,
      as: Link,
      to: "/Contacto",
    },
  ];

  // iconos de redes
  const SocialIcon = () => (
    <div className="social">
      {[
        {
          key: "Linkedin",
          icon: <LinkedinFilled />,
          link: "https://www.linkedin.com/in/rodrigo-aranda-1a154420a/",
        },
        {
          key: "Github",
          icon: <GithubFilled />,
          link: "https://github.com/rodrigoargfth",
        },
        {
          key: "Facebook",
          icon: <FacebookFilled />,
          link: "https://www.facebook.com/rodrigo.aranda.5076",
        },
      ].map((social, index) => (
        <Button
          href={social.link}
          key={index}
          className="btn-social"
          shape="circle"
          target="_blank"
        >
          {social.icon}
        </Button>
      ))}
    </div>
  );


  const navigate = useNavigate;

  return (
    <ConfigProvider
    theme={{
      components:{
        Menu:{
          // darkItemBg: "#0A100D",
          // darkItemColor:"#DF8549",
          // darkItemHoverColor: '#ECA400',
          // darkItemSelectedBg: "#ECA400",
          // darkPopupBg: "#3c1518",
          // darkItemSelectedColor:"#a44d2c",
          itemBg:"#60935D",
          itemColor: "#D6D5C9",
          itemHoverColor:"#E9E8E1",
          itemSelectedBg:"#243119",
          itemSelectedColor: "#D6D5C9",
          itemBorderRadius: "100px",
        }
      }
    }

    }
    >
      <Layout>
        <Sider className="siderbar">
          <Menu
            mode="inline"
            className="menu-bar"
            items={menuItems}
            onClick={(selected) => {
              navigate;
            }}
          />
          <div>
            {imagen.map((image, index) => (
              <img key={index} src={image} alt={`foto ${index}`} className="foto" />
            ))}
          </div>
          <SocialIcon />
        </Sider>
      </Layout>
    </ConfigProvider>
  );
};

export default Sidebar;
