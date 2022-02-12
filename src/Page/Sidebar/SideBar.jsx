// import logo from './logo.svg';
import React, { useEffect, useState } from 'react';
import { Fragment } from 'react/cjs/react.production.min';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import logo from "../../assets/logo/logo.png";

function SideBar() {
  const url = 'http://localhost:8081/api/menu';
  const [todos, setTodos] = useState();
  const fetchApi = async () =>{
    const response = await fetch(url);
    const data = await response.json();
    const menu = data.data[0];
    console.log(menu);
    setTodos(menu);
  }
  useEffect(()=>{
    fetchApi();
  }, [])
  return (
      <Fragment>
        <nav className="block sidebar h-full left-0 top-0 z-[99] pb-12 overflow-hidden overflow-y-auto transition-[0.5s] bg-transparent ">
            <div className="logo m-8 flex justify-between py-8 px-8 rounded-lg box-border">
                <a href="#">
                  <img src={logo} alt=""/>
                </a>
                <div className="sidebar_close_icon d-lg-none">
                    <i className="ti-close"></i>
                </div>
            </div>
            <ul id="sidebar_menu" className="metismenu">
              {/* {
                !todos ? 'Cargando...': 
                todos.map((todo, index) =>{
                  return  <li key={ Math.random().toString(36).substr(2, 9) } className=""><a className="font-Open-Sans has-arrow text-base font-normal text-slate-600 px-4 py-6 transition-[.3s] z-0 grid grid-cols-[26px auto] gap-4 items-center relative bg-transparent" href={todo.ruta} aria-expanded="false">{todo.nombre}
                  </a>
                </li>
                })
              } */}
              <li key={ Math.random().toString(36).substr(2, 9) } className="">
                <a className="font-Open-Sans has-arrow text-base font-normal text-slate-600 px-4 py-6 transition-[.3s] z-0 grid grid-cols-[26px auto] gap-4 items-center relative bg-transparent" href="/Mantenedores" aria-expanded="false">Mantenedores</a>
                  <ul className="mm-collapse mm-show" style="">
                    <li><a href="#">Classic</a></li>
                    <li><a href="#">Minimal</a></li>
                  </ul>
                </li>
               
              </ul>
            
        </nav>
      </Fragment>
  );
}

export default SideBar;