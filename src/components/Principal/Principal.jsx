import React from "react";
//Constants
import relativeRoutes from "./utilis/constants"

//Router
import {Route} from "react-router-dom";

// import children 
import Home from "./components/Home/Home"
import Cursos from "./components/cursos/Cursos"
import Eventos from "./components/Eventos/Eventos"
import Contactos from "./components/Contactos/Contactos"



function Principal() {

    return (
        <div className="principal">
            <Route exact path={relativeRoutes.home} component={Home}/> 
            <Route  path={relativeRoutes.cursos} component={Cursos}/> 
            <Route  path={relativeRoutes.eventos} component={Eventos}/> 
            <Route  path={relativeRoutes.contactos} component={Contactos}/>             
        </div>
    )
}

export default Principal;