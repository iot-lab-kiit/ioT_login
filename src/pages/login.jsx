import React from "react";
import { Fragment, useState } from "react";
import Screen2 from "../page_components/Screen2";
import Screen1 from "../page_components/Screen1";
import Title from "../components/Title";
import styles from "../styles/Login.module.css";


export default function login() {
  
  const updateMain = (n) => {
    switch (n) {
      case "1":
      {
    
        setMain(<Screen1 updateMain={updateMain} />);
        
      }
        break;
      case "2":
        setMain(<Screen2 updateMain={updateMain} />);
        break;
    }
    
  };
  
  const [main, setMain] = useState(<Screen1 updateMain={updateMain} />);
  return <Fragment>{main}</Fragment>;

}