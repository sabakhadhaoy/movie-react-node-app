import React, { useState } from 'react';
import { message, Form, Row } from 'antd';
import 'antd/dist/antd.css';
import '../styles/main.css'
import Axios from 'axios';
import baseUrl from '../helpers/ServiceAPI';
import Register from './User/Register';
import Login from './User/Login';


const LoginRegister = (props) => {

  const [visible, setVisible] = useState(false)
  const [loading, setLoading] = useState(false);

  const key = 'updatable';

  const { getFieldDecorator } = props.form;

  const handleLoginSubmit = (e) => {
    e.preventDefault();

    props.form.validateFields(['username', 'password'], (err, values) => {
      if (!err) {
        message.loading({ content: 'Loading ...', key }).then(() => {
          const options = {
            method: 'get',
            url: `${baseUrl}/user/login?userName=${values.username}&passWord=${values.password}`
          }
          Axios(options)
            .then(result => {
              const { respcode, respmsg, respdata } = result.data
              if (respcode === 0) {
                message.success({ content: respmsg }).then(() => {
                  props.history.push('/home')
                });
              }
              else {
                message.error({ content: respmsg }).then(() => {
                  props.form.resetFields('password')
                });
              }
            })
            .catch(e => {
              message.error({ content: e.message })
            })
        })
      }
    })
  }

  const handleRegisterSubmit = (e) => {
    e.preventDefault();

    props.form.validateFields(['regFullname', 'regUsername', 'regPassword', 'regEmail'], (err, values) => {
      if (!err) {
        setLoading(true);

        const options = {
          method: 'post',
          url: `${baseUrl}/user/signup`,
          data: {
            fullName: values.regFullname,
            userName: values.regUsername,
            passWord: values.regPassword,
            email: values.regEmail
          }
        }

        Axios(options).then(result => {
          const { respcode, respmsg } = result.data
          if (respcode === 0) {
            setTimeout(() => {
              message.success({ content: respmsg })
              setLoading(false)
              props.form.resetFields()
            }, 1000)
          }
          else {
            setTimeout(() => {
              message.error({ content: respmsg })
              setLoading(false)
            }, 1000)
          }
        })
      }
    })
  }

  return (
    <Row>
      <Login
        getFieldDecorator={getFieldDecorator}
        handleLoginSubmit={handleLoginSubmit}
        setVisible={setVisible}
      />
      <Register
        visible={visible}
        setVisible={setVisible}
        loading={loading}
        setLoading={setLoading}
        getFieldDecorator={getFieldDecorator}
        handleRegisterSubmit={handleRegisterSubmit}
      />
    </Row>
  )
}

const wrapper = Form.create({ name: 'LoginRegister' })(LoginRegister)

export default wrapper;