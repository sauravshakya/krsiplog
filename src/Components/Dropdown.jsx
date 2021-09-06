import React, { FC, useState } from 'react';
// import { useTranslation } from 'react-i18next'
// import ReactDOM from 'react-dom';
import { Menu, Dropdown, Select } from 'antd';

// import { useState, useMemo } from "react";
// import Select from 'react-select'
import countryList from 'react-select-country-list'

// const {  Select  } = antd;

const { Option } = Select;



function LanguageDropdown(){
  // const menu = (
  //   <Menu>
  //     <Menu.Item onClick="selection" key="0">English</Menu.Item>
  //     <Menu.Item onClick="selection" key="1">Espanol</Menu.Item>
  //     <Menu.Item onClick="selection" key="2">Francais</Menu.Item>
  //     <Menu.Item onClick="selection" key="3">Dansk</Menu.Item>
  //     <Menu.Item onClick="selection" key="4">Deutsch</Menu.Item>
  //   </Menu>
  //   );
    

  //   return (
  //       <Dropdown overlay={menu} trigger={['click']}>
  //         <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
  //           CLICK ME
  //           {/* <Select></Select> */}
  //           {/* <DownOutlined /> */}
  //         </a>
  //       </Dropdown>
  //   );
  function handleChange(value) {
    console.log(`selected ${value}`);
  }

  return(
    <Select defaultValue="EN" className="AppCountry" dropdownStyle={{ borderRadius: '10px', color:'#390179', padding:'10px'}} style={{ width: 120 }} onChange={handleChange}>
      <Option style={{ fontSize:'10px'}} value="EN"><img src="./uk.svg" alt="en" />English</Option>
      <Option style={{ fontSize:'10px'}} value="ES"><img src="./spain.svg" alt="es" />Espanol</Option>
      <Option style={{ fontSize:'10px'}} value="FR"><img src="./france.svg" alt="fr" />Francais</Option>
      <Option style={{ fontSize:'10px'}} value="DA"><img src="./denmark.svg" alt="da" />Dansk</Option>
      <Option style={{ fontSize:'10px'}} value="DE"><img src="./germany.svg" alt="de" />Deutsch</Option>
    </Select>
  );
  
}

export default LanguageDropdown;