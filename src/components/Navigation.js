import React from 'react';
import { Layout, Menu, Icon, Button } from 'antd';
import { Link, withRouter } from 'react-router-dom';
import diamante from '../images/Diamante.png';

const { Sider } = Layout;

const Navigation = ({ page, location }) => {
  return (
    <Layout style={{ height: '100vh' }}>
      <Sider width={250} >
        <div className='logo-user' >
          <img src={diamante} width={80}></img>
          <div style={{ margin: '5px 0px', fontSize: 16 }}>
            <span>James Delos Reyes</span>

          </div>
        </div>
        <Menu theme='dark' mode='inline' defaultSelectedKeys={['/home']} selectedKeys={[location]} >
          <Menu.Item key='/home'>
            <Link to='/home' >
              <Icon type='home' />
              <span>Home</span>
            </Link>
          </Menu.Item>
          <Menu.Item key='/movies' >
            <Link to='/movies' >
              <Icon type="video-camera" />
              <span>Movies</span>
            </Link>
          </Menu.Item>
          <Menu.Item key='/tvshows'>
            <Link to='/tvshows' >
              <Icon type="desktop" />
              <span>TV Shows</span>
            </Link>
          </Menu.Item>
          <Menu.Item key='/people'>
            <Link to='/people' >
              <Icon type="team" />
              <span>People</span>
            </Link>
          </Menu.Item>
          <hr />
          <Menu.Item key='/favorites'>
            <Link to='/favorites' >
              <Icon type='heart' />
              <span>Favorites</span>
            </Link>
          </Menu.Item>
          <Menu.Item key='/watchlists'>
            <Link to='/watchlists' >
              <Icon type="ordered-list" />
              <span>Watchlists</span>
            </Link>
          </Menu.Item>
          <hr />
          <Menu.Item style={{ textAlign: 'center', marginTop: 30 }}>
            <Button type='danger' >Logout</Button>
          </Menu.Item>
        </Menu>
      </Sider>
      {page}
    </Layout>
  );
}

export default Navigation;