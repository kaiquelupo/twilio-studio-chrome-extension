import React, { useState, useEffect } from 'react';
import './App.css';
import AlertDialog from './components/Dialog';

const App = () => {

  const [name, setName] = useState(null);
  const [service, setService] = useState(null);
  const [environment, setEnvironment] = useState(null);
  const [func, setFunc] = useState(null);

  const widgets = [ "function_1" ];


  useEffect(() => {
    checkForValue(() => document.getElementById("input-name"), "value", (value) => setName(value));
    checkForValue(() => document.getElementsByClassName("css-xp4uvy ui-component-select__single-value")[0], "innerText", (value) => setService(value));
    checkForValue(() => document.getElementsByClassName("css-xp4uvy ui-component-select__single-value")[1], "innerText", (value) => setEnvironment(value));
    checkForValue(() => document.getElementsByClassName("css-xp4uvy ui-component-select__single-value")[2], "innerText", (value) => setFunc(value));
  }, [])
  
  let showComponent = false;
  
  if(name && widgets.includes(name)){

    if(service && environment && func) {
      showComponent = true;
    }

  }

  return (
    <div>{showComponent ? <AlertDialog name={name} /> : null}</div>
  );

}

export default App;

const checkForValue = (node, selector, run, stopAtTheEnd) => {

  let visible = null;

  const checkFunction = () => {

     const elem = node();
     const value = elem && elem[selector];

     if(value && visible !== value) {
         visible = value;

         if(value) {

             console.log(value);
             run(value);
             
         }
     }

     if(!value && visible) {
          console.log("removing " + visible);

         visible = null;

         run(null);
     }

 }

 setInterval(checkFunction, 1000);
 
}