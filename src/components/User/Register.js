import React from 'react';
import { Form, Icon, Input, Modal } from 'antd';
import 'antd/dist/antd.css';
import '../../styles/main.css';

const Register = ({ visible, setVisible, loading, getFieldDecorator, handleRegisterSubmit }) => {
  return (
    <Modal
      width={400}
      title='Registration Form'
      visible={visible}
      onCancel={() => setVisible(false)}
      onOk={handleRegisterSubmit}
      okText='Submit'
      okButtonProps={{ loading }}
    >
      <div className='register-container'>
        <Form>
          <Form.Item >
            {getFieldDecorator('regFullname', {
              rules: [{ required: true, message: 'Please input full name' }],
            })(
              <Input
                prefix={<Icon type='user' style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder='Full Name'
                type='text'
                autoFocus={true}
              />,
            )
            }
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('regUsername', {
              rules: [{ required: true, message: 'Please input last name' }],
            })(
              <Input
                prefix={<Icon type='user' style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder='Username'
                type='text'
              />,
            )
            }
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('regPassword', {
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
          <Form.Item>
            {getFieldDecorator('regEmail', {
              rules: [{ required: true, message: 'Please input email' }],
            })(
              <Input
                prefix={<Icon type='mail' style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder='Email'
                type='email'
              />,
            )
            }
          </Form.Item>
        </Form>
      </div>
    </Modal>
  )
}

export default Register;