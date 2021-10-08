import styled from "styled-components";

export const LangStyle = styled.span`
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
        padding: 16px 16px 14px 19px;
        width: 154px;
        box-shadow: rgb(0 0 0 / 15%) 0px 15px 99px;
    }   
    .ant-menu-item{
        margin:0;
        padding: 0 14px 0 8px;
        height: 31px;
        line-height: 31px;
        font-weight: 600 ;
        justify-content: center;
        img{
            font-size: 0.625rem;
            height: 16px;
            width: 16px;
            margin-bottom: 5px;
        }
    }
    /* .ant-menu-item:(2nd-child){
        padding-bottom: 2px;
    } */
    .ant-menu-item:not(:last-child){
        /* margin-top:-2px; */
        margin-bottom: 1px !important;
    }
    .ant-menu-item-active{
        background-color: rgb(243, 242, 244);
        border-radius: 6px;
        font-weight: 600;
    }
    .ant-menu-item-selected {
        background-color: rgb(243, 242, 244) !important;
        border-radius: 6px;
        span{
            font-weight: bolder;
        }
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
