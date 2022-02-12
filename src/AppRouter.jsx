//ARCHIVO PARA GENERAR RUTAS
import {
    BrowserRouter as Router,
    Route,
    Routes
} from "react-router-dom";
import Login from "./Page/Login/Login";
import Home from './Page/Home/Home';
// import MantenedorMenu from './Page/Mantenedores/Mantenedor_Menu/Mantenedor_Menu';
// import MantenedorPerfil from './Page/Mantenedores/Mantenedor_Perfil/Mantenedor_Perfil';
import MantenedorUsuario from './Page/Mantenedores/Mantenedor_Usuario/Mantenedor_Usuario'

import Sidebar from './Component/Menu/Sidebar'

const AppRoutes = () => {

    window.onbeforeunload = (event) => {
        const e = event || window.event;
        e.preventDefault();
        if (e) {
          e.returnValue = "";
        }
        return "";
      };
    
    return (
        <div>
        <Router>
            
            <Routes>
            <Route exact path="/" element={<Login/>}/>
            <Route exact path="/home" element={<Home/>}/>
            
            </Routes>
            <Sidebar />
            <Routes>
                <Route path='/mantenedor/mantenedor_usuario' element={<MantenedorUsuario />} />
            </Routes>
        </Router>
        </div>

        
    )
}

export default AppRoutes;