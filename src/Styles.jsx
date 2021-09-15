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
    margin-bottom: 60px;
    font-family: Manrope;
    color: rgb(37, 26, 67);
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 32px;
    
`;
export const Main = styled.div`
    margin-top: 224px;
    margin-left: 160px;
`;
export const CustomLabel = styled.label`
    width: 96px;
    height: 14px;
    color: rgb(86, 77, 109);
    padding-bottom: 6px;
    font-family: Manrope,sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 14px;
`;
export const CustomInput = styled(Input)`
    background-color: #F5F2F8;
    border-radius: 10px;
    border: 1px solid #F5F2F8;
    color: rgb(61, 51, 88);
    width: 450px;
    height: 48px;
    font-weight: 400;
    font-size: 1.125rem;
    padding: 15px 20px;
    /* box-shadow: 0 0 0 2px rgb(57 1 121 / 20%); */

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
    font-size: 14px;
`;
export const Wrapper = styled.div`
    display: flex;
`;
export const Photofixer = styled.div`
    background-color: rgb(245, 242, 248);
    width: 63%;
    /* height: 100vh; */
    position: relative;
    flex: 85% 100%;
    
    .image{
        position: absolute;
        left: -72px;
        bottom: -13px;
        width: 105%;
        height: 63%;
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
    margin-top: 240px;
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
    width: 450px;
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

  