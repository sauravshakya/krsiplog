import React, { FC, useState } from 'react';
// import { useTranslation } from 'react-i18next'
// import ReactDOM from 'react-dom';
import { Menu, Dropdown, Select } from 'antd';
import 'antd/dist/antd.css';
import { DownOutlined } from '@ant-design/icons';
// const {  DownOutlined  } = icons;
import { LangStyle, LangOut, Font } from './DropStyle.jsx'

// import { useState, useMemo } from "react";
// import Select from 'react-select'
// import countryList from 'react-select-country-list';

import denmark from './Framephoto/denmark.svg';
import uk from './Framephoto/uk.svg';
import france from './Framephoto/france.svg';
import germany from './Framephoto/germany.svg';
import spain from './Framephoto/spain.svg';
// import { Dropdown } from 'semantic-ui-react'


// const {  Select  } = antd;

const { Option } = Select;



function LanguageDropdown(){
  
  const [value,setValue] = useState(null);

  const selection = ({value}) => {
    console.log({value});
    // setRock(menu.value)
  }
  
  const menu = (
    <LangOut>
    <Menu defaultValue="EN" onChange={ (value) => setValue(value) } onClick={ selection } >
      <Menu.Item key="0" value="EN"><img src={ uk } alt="en" /><LangStyle>English</LangStyle></Menu.Item>
      <Menu.Item key="1" value="ES"><img src={ spain } alt="es" /><LangStyle>Espanol</LangStyle></Menu.Item>
      <Menu.Item key="2" value="FR"><img src={ france } alt="fr" /><LangStyle>Francais</LangStyle></Menu.Item>
      <Menu.Item key="3" value="DA"><img src={ denmark } alt="da" /><LangStyle>Dansk</LangStyle></Menu.Item>
      <Menu.Item key="4" value="DE"><img src={ germany } alt="de" /><LangStyle>Deutsch</LangStyle></Menu.Item>
    </Menu>
    </LangOut>
    );
    const downArrow = { fontSize: '12px' , marginLeft: '2px', marginTop: '4px'}
    
    return (
        <Dropdown overlay={menu} trigger={['click']}>
          <a className="ant-dropdown-link" onClick={ e => e.preventDefault() }>
          <img src={ uk } alt="en" />
            <Font>EN{value}</Font> 
            {/* <Select></Select> */}
            <DownOutlined style = { downArrow } />
          </a>
        </Dropdown>
    );
  // const [value, setValue] = useState(0);
  // function handleChange(value) {
  //   console.log(`selected ${value}`);
  // }

  // return(
  //   <LangOut>
  //   <Select defaultValue="EN" className="AppCountry" onChange={ (value) => setValue(value) } dropdownStyle={{ borderRadius: '10px', color:'#390179', padding:'10px'}} style={{ width: 150 }} onChange={handleChange}>
  //     <Option value="EN"><img src={ uk } alt="en" /><LangStyle>English</LangStyle></Option>
  //     <Option value="ES"><img src={ spain } alt="es" /><LangStyle>Espanol</LangStyle></Option>
  //     <Option value="FR"><img src={ france } alt="fr" /><LangStyle>Francais</LangStyle></Option>
  //     <Option value="DA"><img src={ denmark } alt="da" /><LangStyle>Dansk</LangStyle></Option>
  //     <Option value="DE"><img src={ germany } alt="de" /><LangStyle>Deutsch</LangStyle></Option>
  //   </Select>
  //   </LangOut>
  // );

// const friendOptions = [
//   {
//     key: 'Jenny Hess',
//     text: 'Jenny Hess',
//     value: 'Jenny Hess',
//     image: { avatar: true, src: 'https://react.semantic-ui.com/images/avatar/small/jenny.jpg' },
//   },
//   {
//     key: 'Elliot Fu',
//     text: 'Elliot Fu',
//     value: 'Elliot Fu',
//     image: { avatar: true, src: 'https://react.semantic-ui.com/images/avatar/small/elliot.jpg' },
//   },
//   {
//     key: 'Stevie Feliciano',
//     text: 'Stevie Feliciano',
//     value: 'Stevie Feliciano',
//     image: { avatar: true, src: 'https://react.semantic-ui.com/images/avatar/small/stevie.jpg' },
//   },
//   {
//     key: 'Christian',
//     text: 'Christian',
//     value: 'Christian',
//     image: { avatar: true, src: 'https://react.semantic-ui.com/images/avatar/small/christian.jpg' },
//   },
//   {
//     key: 'Matt',
//     text: 'Matt',
//     value: 'Matt',
//     image: { avatar: true, src: 'https://react.semantic-ui.com/images/avatar/small/matt.jpg' },
//   },
//   {
//     key: 'Justen Kitsune',
//     text: 'Justen Kitsune',
//     value: 'Justen Kitsune',
//     image: { avatar: true, src: 'https://react.semantic-ui.com/images/avatar/small/justen.jpg' },
//   },
// ]

// const DropdownExampleSelection = () => (
//   <Dropdown
//     placeholder='Select Friend'
//     fluid
//     selection
//     options={friendOptions}
//   />
// )
}

export default LanguageDropdown;