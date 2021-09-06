import React, { Component }  from 'react';
import PhotoDesign from './Components/Photo'
import LanguageDropdown from './Components/Dropdown'
import 'antd/dist/antd.css';
import './index.css';
import { Form, Button, Checkbox } from 'antd';
// import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { EyeOutlined } from '@ant-design/icons';
import { Head, Title, Main, CustomInput, Sizer, Photofixer, Wrapper, WrapperOne ,ButtonWrapper, WrapperCheck, Official, Divider, Placement } from "./Styles";
import {  } from 'react-icons/fa';

function App() {
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };
  return (
    <>
    <Wrapper>
    <WrapperOne>
    <Head>
      <img src="./krispcall-logo.svg" alt="logo" height="50px" width="100px"/>
    </Head>
    <Main>
    <Title>
      Log In 
    </Title>  
    <Form
    name="normal_login"
    className="login-form"
    initialValues={{
      remember: true,
    }}
    onFinish={onFinish}
    >
    <div
      // name="username"
      // label="Email Address"
      // rules={[
      //   {
      //     required: true,
      //     message: 'Please input your Username!',
      //   },
      // ]}
    >
      <p>Email Address</p> 
      <CustomInput placeholder="donjohn@krispcall.com" />
    </div>
    <div
      // name="password"
      // label="Password"
      // rules={[
      //   {
      //     required: true,
      //     message: 'Please input your Password!',
      //   },
      // ]}
    >
      <p>Password</p>
      <CustomInput
        type="password"
        placeholder="*******************"
      />
      {/* <EyeOutlined /> */}
    </div>

    <Form.Item>
      <Divider>
      <Form.Item name="remember" valuePropName="checked" noStyle>
        <WrapperCheck>
          <Checkbox>Keep me logged in</Checkbox>
        </WrapperCheck>
      </Form.Item>
      <a className="login-form-forgot" href="">
        Forgot password?
      </a>
      </Divider>
    </Form.Item>

    <Form.Item>
      <ButtonWrapper>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Log in
        </Button>
      </ButtonWrapper>
      <p>Dont have an account?</p>
      <Sizer>
        <a href="">Sign up?</a>
      </Sizer>
      <Official>
        <a href="">Terms of Use</a>
        <a href="">Privacy Policy</a>
      </Official>  
    </Form.Item>
  </Form>
  </Main>
  </WrapperOne>
  <Photofixer>
    <PhotoDesign></PhotoDesign>
    <Placement>
      <LanguageDropdown></LanguageDropdown>
    </Placement>
  </Photofixer>
  </Wrapper>
  </> 
  );
}  

export default App;
 
