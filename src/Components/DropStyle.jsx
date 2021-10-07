import styled from "styled-components";

export const LangStyle = styled.div`
    display: inline-block;
    margin-left:6px;
    color: rgb(158, 153, 171);
    font-size: 0.875rem;
    line-height: 28px;
    font-family: Manrope;
    font-weight: 600;
    &:hover{
        color: rgb(110, 102, 129);
    }
`;

export const LangOut = styled.div`
    background:none !important;
    .ant-menu{
        margin-top: 10px;
        margin-left: -64px;
        border-radius:15px;
        padding: 16px 16px 14px 17px;
        width: 154px;
        box-shadow: rgb(0 0 0 / 15%) 0px 15px 99px;
    }   
    .ant-menu-item{
        margin:0;
        padding: 0 12px;
        height: 31px;
        line-height: 31px;
        font-weight: 600 ;
        img{
            font-size: 0.625rem;
            height: 16px;
            width: 16px;
        }
    }
    .ant-menu-item:not(:last-child){
        margin-bottom: 1px;
    }
    .ant-menu-item-active{
        background-color: rgb(243, 242, 244);
        border-radius: 6px;
    }
    .ant-menu-item-selected {
        background-color: rgb(243, 242, 244) !important;
        font-weight: bold;
    }
    .ant-select-selector{
        border:1px solid #390179 !important;
    }
    .ant-select-selector:hover{
        border:1px solid #390179;
    }
`;
export const Font = styled.span`
    text-transform: uppercase;
    margin-right: 2px;
    font-weight: 600;
    color: rgb(57, 1, 121);
    display: inline-block;
    font-family: Manrope;
`; 
