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
    margin-bottom: 59px;
    font-family: Manrope;
    color: rgb(37, 26, 67);
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 32px;
    
`;
export const Main = styled.div`
    margin-top: 220px;
    margin-left: 160px;
    margin-right: 148px;
`;
export const CustomLabel = styled.label`
    display: block;
    width: 96px;
    height: 14px;
    color: rgb(86, 77, 109);
    padding-bottom: 6px;
    font-family: Manrope,sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 14px;
    margin-bottom: 6px;

`;
export const CustomInput = styled(Input)`
    margin-top: -1px;
    background-color: #F5F2F8;
    border-radius: 10px;
    border: 1px solid #F5F2F8;
    color: rgb(61, 51, 88);
    width: 450px;
    height: 48px;
    font-weight: 400;
    font-size: 1.125rem;
    padding: 15px 20px 15px 20px;
    margin-bottom: 47px !important;
    /* box-shadow: 0 0 0 2px rgb(57 1 121 / 20%); */

    &:hover{
        border-color: rgb(215, 204, 228);
    }
    &:focus{
        border-color: rgb(215, 204, 228);
        box-shadow: none;
    }
    &::placeholder{
        color: #aaa5b6;
    }
    
`;
export const Pass = styled.div`
    .ant-input-affix-wrapper > input.ant-input{
        background-color: #F5F2F8;
    }
    .ant-input-password{
        margin-top: 2px;
        background-color: #F5F2F8;
        border-radius: 10px;
        width: 100%;
        height: 48px;
        padding: 0px 20px 0px 20px;
        margin-bottom: 20px !important;
        .ant-input:focus, .ant-input-focused{
            border: none;
        }
        .ant-input:placeholder-shown{
            background-color: #F5F2F8 !important;
            /* font-size: 1.125rem; */
            font-weight: 400;
            border: 1px solid #F5F2F8;    
            color: rgb(61, 51, 88);
            padding: 14px 20px 16px 0px;
            font-family: Manrope,sans-serif;
            font-size: 20px;
        }
        &:hover{
        border-color: rgb(215, 204, 228) !important;
        }
        &:focus{
            border-color: rgb(215, 204, 228) !important;
            box-shadow: none;
            border-color: rgb(215, 204, 228) !important;

        }
        &::placeholder{
            color: #aaa5b6;
        }
    }
`;
export const Sizer = styled.div`
    font-family: Manrope,sans-serif;
    font-style: normal;
    font-weight: 700;

    .Sign{
        font-size: 14px;
        color: rgb(26, 99, 244) !important; 
        cursor: pointer;
        font-weight: 700;
        /* margin-top: 50px; */
    }
    p{
        color: #9E99AB;
        font-family: Manrope;
        font-style: normal;
        font-weight: bold;
        font-size: 14px;
        margin-bottom: 3px;
    }
`;
export const Wrapper = styled.div`
    display: flex;
`;
export const Photofixer = styled.div`
    background-color: rgb(245, 242, 248);
    /* flex: 60.521%; */
    width: 1162px;
    height: 100vh;
    position: relative;
    flex: 85% 100%;
    
    .image{
        position: absolute;
        left: -7%;
        bottom: 0px;
        width: 107%;
        /* height: 63%; */
    } 
`;
export const WrapperOne = styled.div`
    /* flex: 39.4793%; */
`;
export const ButtonWrapper = styled.div`
    .ant-btn{
        background-color: #390179;
        border-color: #390179;
        width: 450px;
        height: 48px;
        margin-top: -2px;
        margin-bottom: 24px;
        border-radius: 10px;

        font-family: Manrope,sans-serif;
        font-style: normal;
        font-weight: bold;
        font-size: 16px;
    }
`;
export const WrapperCheck = styled.div`
    font-family: Manrope,sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    /* .ant-checkbox-checked .ant-checkbox-inner{
        background-color: #390179;
        border-color: #390179;
        border-radius: 30%;
    } */
    /* &:hover{
        border: #390179;
    } */
    /* .ant-checkbox-checked .ant-checkbox-inner:hover{
        border: #390179;
    } */
    .ant-checkbox-inner {
        height:19px;
        width: 19px;
    }
    .ant-checkbox-checked .ant-checkbox-inner {
        background-color: #390179;
        border-color: #390179;
        font-size: 20px;
    }   
    .ant-checkbox-wrapper:hover .ant-checkbox-inner,
    .ant-checkbox:hover .ant-checkbox-inner,
    .ant-checkbox-input:focus+.ant-checkbox-inner {
        border-color: #390179 !important;
    }
    .ant-checkbox-indeterminate .ant-checkbox-inner::after {
        background-color: #390179;
    }
    .ant-checkbox-wrapper:focus-visible .ant-checkbox-inner{
        border: none;
    }
`;

export const Official = styled.div`
    margin-top: 204px;
    margin-left: 160px;
    a{
        font-size: 12px;
        font-family: Manrope,sans-serif;
        font-style: normal;
        font-weight: 700;
        margin-right: 60px;
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

    font-family: Manrope,sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 14px;

    /* margin-top: 5px; */
    margin-bottom: 22px;
    
`;

export const Placement = styled.div`
    position: absolute;
    right: 160px;
    top: 66px;
    /* padding: 0.5rem; */
    height: 40px !important;
    line-height: 1.5715;
    min-width: 89px;
    .AppCountry{
        font-size: 10px;
        border: 1px solid #390179; 
        border-radius: 4px;
        &:focus{
            border:none;
        }
    }
    img{
        margin-right: 5px;
        width: 20px;
        height: 20px;
    }
    .dropbox{
        height: 40px !important;
        line-height: 1.5715;
    }
    .ant-dropdown-link{
        border: 2px solid #390179;
        color: #390179;
        padding: 8px 8px 10px 10px;
        border-radius: 8px;
        background: rgb(245, 242, 248) !important;
        font-size: 16px;
    }
`;

  