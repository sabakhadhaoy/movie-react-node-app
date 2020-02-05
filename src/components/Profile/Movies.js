import React, { useState } from 'react';
import { message, Form } from 'antd';
import 'antd/dist/antd.css';
import '../../styles/main.css'
import Axios from 'axios';
import environment_API from '../../helpers/ServiceAPI';
import { Layout, Menu, Icon, Row } from 'antd';
import Navigation from '../Navigation'
const { Header, Sider, Content, Footer } = Layout;

const MoviesContent = () => {
  return (
    <Layout>
      <Header style={{ background: '#fff', textAlign: 'center' }}>
        MOVIES
      </Header>
      <Content
        style={{
          margin: '16px',
          padding: 20,
          background: '#fff',
          minHeight: 100,
        }}
      >
        Content
      </Content>
      <Footer style={{ textAlign: 'center', fontSize: 10 }}>iMovies © 2020 - Jameskavich</Footer>
    </Layout>
  )
}

const Movies = () => {
  return (
    <Navigation page={<MoviesContent />} location={'/movies'} />
  )
}

export default Movies;