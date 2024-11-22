import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../globalLayouts/Navbar";
import Dashboard from "./dashboard";
import { permisosUsuarios } from '../servicios/service';

export default function DashWelcome(){

    const navigate = useNavigate();

    useEffect(() => {
        const getPermisos = async() => {

            const data = {
                perfil_id: 1
            };

            try{
                const res = await permisosUsuarios(data);
                console.log(res)

            }catch(error){}
        };

        // Verifica si el token está presente
        const token = localStorage.getItem("token");

        if (!token) {
        // Si no hay token, redirige a la página de inicio de sesión
        navigate("/");
        }

        getPermisos();
    }, [navigate]);
    
    return(
        <>
            <NavBar/>
            <Dashboard/>
        </>
    )
}