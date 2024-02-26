import { useState } from "react";
import { Layout, ConfigProvider } from "antd";
import Sidebar from "./component/SideBar";
import SobreMi from "./routers/SobreMi/SobreMi.jsx";
import Portfolio from "./routers/Portafolio/Portfolio.jsx";
import Educacion from "./routers/Educacion/Educacion.jsx";
import Skills from "./routers/Skills/Skills.jsx";
import Contacto from "./routers/Contacto/Contacto.jsx";
import Inicio from "./routers/Inicio/Inicio.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { TemaLight } from "./component/TemaLight";

const { Sider, Content } = Layout;
const App = () => {
  // Theme
  const [darkTheme, setDarkTheme] = useState(true);
  const toogleTheme = () => {
    setDarkTheme(!darkTheme);
  };

  return (
    <Layout>
      <BrowserRouter>
        <Sider>
          <Sidebar />
        </Sider>
        <ConfigProvider
          theme={{
            components: {
              Layout: {
                bodyBg: "#B9BAA3",
                bodyTextColor: "#102542",
              },
            },
          }}
        >
          <Layout>
            <Content className="container" theme={darkTheme ? "dark" : "light"}>
              <Routes>
                <Route path="/" element={<Inicio />} />
                <Route path="/Inicio" element={<Inicio />} />
                <Route path="/SobreMi" element={<SobreMi />} />
                {/* <Route path="/Portfolio" element={<Portfolio />} /> */}
                <Route path="/Educacion" element={<Educacion />} />
                <Route path="/Skills" element={<Skills />} />
                <Route path="/Contacto" element={<Contacto />} />
              </Routes>
            </Content>
          </Layout>
        </ConfigProvider>
      </BrowserRouter>
    </Layout>
  );
};
export default App;
