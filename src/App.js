// 1- Instalación de dependencias de FontAwsome
/*
   npm i @fortawesome/fontawesome-svg-core @fortawesome/free-solid-svg-icons  @fortawesome/free-regular-svg-icons @fortawesome/react-fontawesome@latest
*/

import React from "react";
import "./style.css";

//2 - Importar componente FontAwsomeIcon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// 3 - Importar icono deseado de alguna de la libreria de iconos gratuitos
import { faCoffee }  from "@fortawesome/free-solid-svg-icons";

import * as iconList from "@fortawesome/free-solid-svg-icons";


export default function App() {
  
  // TIP: ver en la consola  el listado de iconos 👁
  console.log(iconList);

  return (
    <div>
      <h1>FontAwsome v6 with React ☕</h1>
      {/* 4 - mostramos el componente FontAwsomeIcon, pasando como valor "icon" el icono que importamos en el paso 3" */}
     <FontAwesomeIcon icon={ faCoffee } /> 
    </div>
  );
}
