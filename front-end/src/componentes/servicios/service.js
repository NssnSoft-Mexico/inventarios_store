import axios from 'axios';

export const auth = async (data) => {
    try {
        const response = await axios.post('http://localhost:3000/auth/login', data);
        
        if (response.data.success) {

            localStorage.setItem("token", response.data.token);
            localStorage.setItem("perfil", response.data.user.perfil_id);

            const fechaActual = new Date();
            const options = { timeZone: 'America/Mexico_City', hour12: false };

            const fechaMexico = new Intl.DateTimeFormat('es-MX', {
                ...options,
                year: 'numeric',
                month: '2-digit',
                day: '2-digit',
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit'
            }).format(fechaActual);

            const logData = {
                idPerfil: response.data.user.perfil_id,
                fecha: fechaMexico
            };

            regBitacora(logData);

            return { success: true };

        } else {
            
            return { success: false };
        
        }

    } catch (error) {
        //console.error('Error en la petición:', error);
        return { success: false, error };
    }
};

export const consultingUsers = async () => {
    try {
        const response = await axios.get('http://localhost:3000/settings/users');
        
        if(response.data.success) {

            const users = response.data.user;
            return { success: true, data: users };

        } else {
            
            return { success: false, message: 'No se pudieron obtener los usuarios.' };

        }
    } catch (error) {
        //console.error('Error en la petición:', error.response ? error.response.data : error.message);
        return { success: false, error: error.message };
    }
};

export const regBitacora = async (data) => {
    try {
        const response = await axios.post('http://localhost:3000/auth/bitacora', data);

        if (response.data.success) {
            
            return { success: true };
        
        } else {
        
            return { success: false };
            
        }

    } catch (error) {

        return { success: false, error: error.message };
    }
};

export const regUsuarios = async (data) => {
    try {
        const response = await axios.post('http://localhost:3000/auth/register', data);

        if (response.data.success) {

            return { success: true };

        } else {

            return { success: false };

        }
    } catch (error) {

        return { success: false, error: error.message };

    }
};

export const catPerfiles = async () => {
    try {
        const response = await axios.get('http://localhost:3000/catalogos/catP');

        if(response.data.success) {
            const catalogo = response.data.data
            return { success: true , data: catalogo};
        } else {
            return { success: false };
        }
    
    } catch (error) {
        return { success: false, error: error.message };
    }
};

export const permisosUsuarios = async (data) => {

    try{
        const response = await axios.post('http://localhost:3000/permisos/pauth', data);
        console.log("rreepsonse", response)
        if(response.data.success) {
            const perfil = response.data.permisos.id;
            return { success: true, data: perfil};
        } else {
            return { success: false };
        }

    } catch(error){
        return { success: false, error: error.message };
    }
}

// export const delUsuarios = async (data) => {
//     try{
//         const response = await axios.post('http://localhost:3000/settings/deluser')
//     }
// }