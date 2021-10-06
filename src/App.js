import React, { Component , useState}  from 'react';
import PhotoDesign from './Components/Photo'
import LanguageDropdown from './Components/Dropdown'
import 'antd/dist/antd.css';
import './index.css';
import { Form, Button, Checkbox, Input } from 'antd';
// import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { EyeTwoTone , EyeInvisibleOutlined } from '@ant-design/icons';
import { Head, Title, Main, CustomInput, Sizer, Photofixer, Wrapper, WrapperOne ,ButtonWrapper, WrapperCheck, Official, Divider, Placement, CustomLabel, Pass} from "./Styles";
import {  } from 'react-icons/fa';
import krisplogo from './asset/krispcall-logo.svg';
import { RiEyeCloseLine , RiEyeLine } from "react-icons/ri";

function App() {
  // const onFinish = (values) => {
  //   console.log('Received values of form: ', values);
  // };
  // const iconStyle = { height: '18px', width: '18px' };
  let visible;

  // const [details,setDetails] = useState({ email: "", password: ""});
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [checkbox,setCheckbox] = useState("");

  const submitHandler = (e) =>{
    e.preventDefault();
    console.log([ {email}, {password}, {checkbox} ]);
    // console.log([details]);
  } 
  return (
    <>
    <Wrapper>
    <WrapperOne>
    <Head>
      <img src={ krisplogo } className="logo" alt="logo"/>
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
      <CustomLabel>Email Address</CustomLabel> 
      {/* <CustomInput placeholder="donjohn@krispcall.com" /> */}
      <CustomInput>
        <Input placeholder="donjohn@krispcall.com" 
        onChange={ (e) => setEmail(e.target.value) } 
        value={email} />
      </CustomInput>
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
      {/* <CustomInput
        type="password"
        placeholder="*******************"
        iconRender= {<EyeTwoTone />}
      /> */}
    </div>

      <CustomLabel>Password</CustomLabel>
      <Form.Item>
        <Pass>
        <Input.Password 
        placeholder="*********************"
        onChange={ (e) => setPassword( e.target.value ) }
        value={password}
        iconRender={visible => (visible ? <RiEyeLine size='18px' /> : <RiEyeCloseLine size='18px' />
        )}>
        </Input.Password>
        </Pass>
      </Form.Item>
      {/* <EyeOutlined /> */}

    <Form.Item> 
      <Divider>
      <Form.Item name="remember" valuePropName="checked" noStyle>
        <WrapperCheck>
          <Checkbox onChange={ (e) => setCheckbox(e.target.checked) }>Keep me logged in</Checkbox>
        </WrapperCheck>
      </Form.Item>
      <a className="login-form-forgot" href="">
        Forgot Password?
      </a>
      </Divider>
    </Form.Item>

    <Form.Item>
      <ButtonWrapper>
        <Button type="primary" onClick={submitHandler} htmlType="submit" className="login-form-button">
          Log in
        </Button>
      </ButtonWrapper>
      <Sizer>
        <p>Don't have an account?</p>
        <a className="Sign">Sign up?</a>
      </Sizer> 
    </Form.Item>
  </Form>
  </Main>
  <Official>
        <a href="">Terms of Use</a>
        <a href="">Privacy Policy</a>
  </Official> 
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
 
