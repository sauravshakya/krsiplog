import styled from "styled-components";
import {Input, MenuProps} from 'antd';

export const Head = styled.div`
    color: #390179;
    margin-left: 160px;
    margin-top: 62px;
    .logo{
        width: 151px;
        height: 36px;
    }
`;
export const Title = styled.h2`
    color: #251A43;    
    margin-bottom: 60px;
    font-family: Manrope;
    font-style: normal;
    font-weight: bold;
    font-size: 32px;
    line-height: 32px;
    
`;
export const Main = styled.div`
    margin-top: 254px;
    margin-left: 160px;
`;
export const CustomLabel = styled.p`
    width: 96px;
    height: 14px;
    font-family: Manrope;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 14px;
`;
export const CustomInput = styled(Input)`
    background-color: #F5F2F8;
    border-radius: 10px;
    border: 1px solid #F5F2F8;
    font-size: 18px;
    width: 450px;
    height: 48px;
    
    padding: 7px 18px;

    &:hover{
        border-color: rgb(215, 204, 228);
    }
    &:focus{
        border-color: rgb(215, 204, 228);
        box-shadow: none;
    }
    margin-bottom: 25px;
`;
export const Sizer = styled.div`

    font-size: 0.6rem;
`;
export const Wrapper = styled.div`
    display: flex;
`;
export const Photofixer = styled.div`
    background-color: rgb(245, 242, 248);
    width: 63%;
    height: 100vh;
    position: relative;
    flex: 85% 100%;
    
    .image{
        position: absolute;
        left: -52px;
        bottom: 0;
    } 
`;
export const WrapperOne = styled.div`
    flex: 40%;
`;
export const ButtonWrapper = styled.div`
    .ant-btn{
        background-color: #390179;
        border-color: #390179;
        width: 450px;
        height: 48px;
        margin-top: 10px;
        margin-bottom: 20px;
        border-radius: 10px;
    }
`;
export const WrapperCheck = styled.div`
    .ant-checkbox-checked .ant-checkbox-inner{
        background-color: #390179;
        border-color: #390179;
        border-radius: 30%;
        &:hover{
            border: none;
        }
    }
`;

export const Official = styled.div`
    margin-top: 315px;
    a{
        font-size: 0.6rem;
        margin-right: 40px;
        &:hover{
            color: #390179;
        }
    }
`;
// export const Menu = (
//     <Menu>
//       <Menu.Item key="0">
//         <a href="https://www.antgroup.com">1st menu item</a>
//       </Menu.Item>
//       <Menu.Item key="1">
//         <a href="https://www.aliyun.com">2nd menu item</a>
//       </Menu.Item>
//       <Menu.Divider />
//       <Menu.Item key="3">3rd menu item</Menu.Item>
//     </Menu>
//   );
//   <Dropdown overlay={menu} trigger={['click']}>
//     <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
//       Click me <DownOutlined />
//     </a>
//   </Dropdown>

export const Divider = styled.div`
    display: flex;
    flex-direction: row;
    align-content: center;
    align-items: flex-end;
    justify-content: space-between;
`;

export const Placement = styled.div`
    position: absolute;
    right: 160px;
    top: 60px;
    padding: 0.5rem;

    .AppCountry{
        font-size: 10px;
        border: 1px solid #390179; 
        border-radius: 4px;
        &:focus{
            border:none;
        }
    }
    img{
        margin-right: 10px;
    }
`;

  