import React from "react";
import {Link} from "react-router-dom";
import relativeRoutes from "../Principal/utilis/constants";


function Navegacion(){

    return (
        <header>
            <nav>
                <ul className="lista">
                    <li><Link to={relativeRoutes.home}>Home</Link></li>
                    <li><Link to={relativeRoutes.cursos}>Cursos</Link></li>
                    <li><Link to={relativeRoutes.eventos}>Eventos</Link></li>
                    <li><Link to={relativeRoutes.contactos}>Contactos</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Navegacion;