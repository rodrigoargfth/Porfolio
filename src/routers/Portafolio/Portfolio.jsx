import React from "react";
import { Card, Col, Divider, Row } from "antd";
import { Content } from "antd/es/layout/layout";
import "./Portfolio.css";

const { Meta } = Card;

const Portfolio = () => {
  return (
    <>
      <Content className="inicio">
        <h2>Mi Portafolio</h2>
        <Row gutter={16} className="esc-row">
          <Col span={8}>
            <Card
              cover={
                  <img id="broker" alt="Broker" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDSdDIw90oDX4NNzo-Zxibg02rwHuX5mYH9Q&usqp=CAU" />
              }
            >
              <Meta
                title="Trabajo Practico de Broker"
                description="Desarrollador Full Stack .NET"
              />
            </Card>
          </Col>
          <Col span={8}>
            <Card title="Card title" bordered={false}>
              Card content
            </Card>
          </Col>
          <Col span={8}>
            <Card title="Card title" bordered={false}>
              Card content
            </Card>
          </Col>
        </Row>
      </Content>
    </>
  );
};

export default Portfolio;
