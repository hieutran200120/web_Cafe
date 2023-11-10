import React, { useState, useEffect } from 'react';
import { RouterLinks } from '../../const/RouterLinks';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';
import { Link, Navigate } from "react-router-dom";
import "./Login.scss"
import useAction from '../../redux/useActions';
import { useDispatch, useSelector } from 'react-redux';
import { EyeTwoTone, EyeInvisibleOutlined } from "@ant-design/icons";
import { authService } from '../../utils/services/authService ';
const Login: React.FC = () => {
  const [login, setLogin] = useState(false);
  const [form] = Form.useForm();
  // const actions = useAction();
  // const dispatch = useDispatch();
  const loading = useSelector((state: any) => state.state.loadingState);
  const isLogin = useSelector((state: any) => state.state.loginState);
  // const token = sessionStorage.getItem("name");
  // useEffect(() => {
  //     if (sessionStorage.getItem("login")) {
  //         setLogin(true);
  //     }
  // }, []);
  const onFinish = (values: any) => {
    console.log('Received values of form: ', values);

    authService.handleLoginApi(values)
      .then((response: any) => {
        console.log('Login API response:', response);
        // sessionStorage.setItem("login", "true");
        // sessionStorage.setItem("name", response.data.token);
        // setLogin(true);
        console.log(isLogin);
      })
      .catch((error: any) => {
        console.error('Error while calling login API:', error);
      });
  };
  if (isLogin) {
    return <Navigate to={RouterLinks.BAO_CAO_DOANH_THU} />;
  }
  return (
    <div className='login_content'>
      <div className='login'>
        <div className="login-main " >
          <div className="ant-pro-form-login-top">
            <div className="ant-pro-form-login-header ">
              <span className="ant-pro-form-login-logo ">
                <img alt="logo" src="/logo.svg" />
              </span>
              <span className="ant-pro-form-login-title ">Ant Design</span>
            </div>
            <div className="ant-pro-form-login-desc ">Ant Design </div>
          </div>
          <Form
            name="normal_login"
            className="login-form"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            form={form}
          >
            <Form.Item
              name="username"
              rules={[{ required: true, message: 'Please input your Username!' },
              {
                validator: async (_, value) => {
                  if (value) {
                    const regex = /^\s*$/
                    if (regex.test(value)) {
                      throw new Error("username không hợp lệ !")
                    }

                  }
                },
              }
              ]}

            >
              <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                { required: true, message: 'Please input your Password!' },
                {
                  validator: async (_, value) => {
                    if (value) {
                      const regex = /^\s*$/
                      if (regex.test(value)) {
                        throw new Error("Tên bài không hợp lệ !")
                      }

                    }
                  },
                }
              ]}
            >
              <Input.Password
                prefix={<LockOutlined className="site-form-item-icon" />}
                placeholder="Nhập mật khẩu"
                iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
              />
            </Form.Item>
            <Form.Item>
              <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox>Remember me</Checkbox>
              </Form.Item>

              <a className="login-form-forgot" href="">
                Forgot password
              </a>
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" className="login-form-button">
                Log in
              </Button>
              Or <a href="">register now!</a>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Login;
