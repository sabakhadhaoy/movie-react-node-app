import React, { useState } from 'react';
import { message, Form } from 'antd';
import 'antd/dist/antd.css';
import '../../styles/main.css'
import Axios from 'axios';
import environment_API from '../../helpers/ServiceAPI';
import { Layout, Menu, Icon, Row, Carousel, Card, Col } from 'antd';
import Navigation from './../Navigation'
import diamante from '../../images/Diamante.png';
import company from '../../images/mlhuillier_heading_white.png';

const { Header, Sider, Content, Footer } = Layout;

const CarouselImage = ({ src }) => {
  return (
    <div>
      <img width={300} src={src} />
    </div>
  )
}

const HomeContent = () => {
  return (
    <Layout>
      <Content>
        <div style={{
          margin: 20
        }}>
          <Carousel autoplay>
            <CarouselImage src={diamante} />
            <CarouselImage src={company} />
            <CarouselImage src={diamante} />
            <CarouselImage src={company} />
            <CarouselImage src={diamante} />
          </Carousel>
        </div>
      </Content>
      <Footer style={{ textAlign: 'center', fontSize: 10 }}>iMovies © 2020 - Jameskavich</Footer>
    </Layout >
  )
}

const Home = () => {
  return (
    <Navigation page={<HomeContent />} location={'/home'} />
  )
}

export default Home;