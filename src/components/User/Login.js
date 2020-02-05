import React from 'react';
import { Button, Form, Icon, Input, Layout } from 'antd';
import 'antd/dist/antd.css';
import '../../styles/main.css'
import diamante from '../../images/Diamante.png';

const { Footer } = Layout;

const Login = ({ getFieldDecorator, handleLoginSubmit, setVisible }) => {
  return (
    <div className='login-container'>
      <img alt='ML Movies' src={diamante} width={80}></img>
      <h1>iMovies</h1>
      <Form>
        <Form.Item>
          {getFieldDecorator('username', {
            rules: [{ required: true, message: 'Please input username' }],
          })(
            <Input
              prefix={<Icon type='user' style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder='Username'
              type='text'
              autoFocus={true}
            />,
          )
          }
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input password' }],
          })(
            <Input.Password
              prefix={<Icon type='lock' style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder='Password'
              type='password'
            />,
          )
          }
        </Form.Item>
        <Form.Item style={{ textAlign: 'center' }}>
          <Button type='primary' htmlType='submit' className='login-form-button' onClick={handleLoginSubmit} >
            LOGIN
          </Button>
          Dont have account yet? <a onClick={() => setVisible(true)}>Register now</a>
        </Form.Item>
      </Form>
      <span style={{ fontSize: 9 }}>iMovies © 2020 - Jameskavich</span>
    </div>
  )
}

export default Login;