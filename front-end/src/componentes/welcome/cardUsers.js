import React, {useEffect, useState, useRef} from 'react';
import { Box, Typography, Button, Modal, TextField, FormControl, InputLabel, Select, MenuItem} from '@mui/material';
import { regUsuarios } from '../servicios/service';
import { catPerfiles } from '../servicios/service';

export default function CardUsers({ open, onClose, data }) {

    const [nombre, setNombre] = useState ('');
    const [correo, setCorreo] = useState('');
    const [password, setPassword] = useState('');
    const [perfil, setPerfil] = useState('');
    const [estatus, setEstatus] = useState('');
    const [error, setError] = useState(null);
    const [dataPerfil, setDataPerfil] = useState([]);
    const [loading, setLoading] = useState(true);

    const regUsu = async (data) => {
        const response = await regUsuarios(data);

        if (response.success) {
            console.log("exito")
        } else {
            console.log('Error en el registro de usuarios');
        }
    };

    const handleSubmit = () => {

        const data = {
            nombre: nombre,
            correo: correo,
            password: password,
            perfil_id: parseInt(perfil),
            estatus: parseInt(estatus)
        };

        regUsu(data);
    };

    const handleActua = () => {

    }

    const fetchCatalogos = async() => {
        setLoading(true);

        try{
            const result = await catPerfiles();

            if (result.success) {
                console.log(result.data)
                setDataPerfil(result.data);
                console.log(dataPerfil)
            } else {
                console.log("Error en la consulta de catalogo");
            }

        } catch (err) {
        setError()
        }
    };

    useEffect(() => {
        if(open){
            fetchCatalogos();
        }   
    }, [open]);

    return (
        <>

            <Modal open={open} onClose={onClose}>
                {data.isRegister ? 
                    <Box
                        sx={{
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            width: 400,
                            bgcolor: 'background.paper',
                            boxShadow: 24,
                            p: 4,
                            display: 'flex',
                        }}
                    >
                        <form onSubmit={handleActua}>
                            <Typography sx={{paddingBottom: '10px'}} variant="h6" component="h2"> Actualizar Usuario </Typography>
                            <TextField
                                sx={{paddingBottom: '10px'}}
                                label="Nombre"
                                variant="outlined"
                                fullWidth
                                defaultValue={data.user.nombre}
                                onChange={(e) => setNombre(e.target.value)}
                                required
                            />
                             <TextField
                                sx={{paddingBottom: '10px'}}
                                label="Correo Electrónico"
                                type="email"
                                variant="outlined"
                                fullWidth
                                defaultValue={data.user.correo}
                                onChange={(e) => setCorreo(e.target.value)}
                                required
                            />

                            <FormControl sx={{paddingBottom: '10px'}} fullWidth>
                                <InputLabel id="perfil-label">Perfil{data.user.id}</InputLabel>
                                <Select
                                    labelId="perfil-label"
                                    value={perfil}
                                    onChange={(e) => setPerfil(e.target.value)}
                                    label="Perfil"
                                    required
                                >
                                    {dataPerfil.map((option) => (
                                        <MenuItem key={option.id} value={option.id}>
                                            {option.perfil} 
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>

                            <FormControl sx={{paddingBottom: '10px'}} fullWidth>
                                <InputLabel id="estatus-label">Estatus {estatus}</InputLabel>
                                <Select
                                    labelId="estatus-label"
                                    value={estatus}
                                    onChange={(e) => setEstatus(e.target.value)}
                                    label="Estatus"
                                    required
                                >
                                    <MenuItem value="1">Activo</MenuItem>
                                    <MenuItem value="2">Inactivo</MenuItem>
                                </Select>
                            </FormControl>

                            <Button type="submit" variant="contained" color="primary">
                                Editar Usuario
                            </Button>
                        </form>
                    </Box>
                    :
                    <Box
                        sx={{
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            width: 400,
                            bgcolor: 'background.paper',
                            boxShadow: 24,
                            p: 4,
                            display: 'flex',
                        }}
                    >
                        <form onSubmit={handleSubmit}>

                        <Typography sx={{paddingBottom: '10px'}} variant="h6" component="h2"> Registro de Usuario </Typography>
                        <TextField
                            sx={{paddingBottom: '10px'}}
                            label="Nombre"
                            variant="outlined"
                            fullWidth
                            value={nombre}
                            onChange={(e) => setNombre(e.target.value)}
                            required
                        />

                        <TextField
                            sx={{paddingBottom: '10px'}}
                            label="Correo Electrónico"
                            type="email"
                            variant="outlined"
                            fullWidth
                            value={correo}
                            onChange={(e) => setCorreo(e.target.value)}
                            required
                        />

                        <TextField
                            sx={{paddingBottom: '10px'}}
                            label="Password"
                            type="password"
                            variant="outlined"
                            fullWidth
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />

                        <FormControl sx={{paddingBottom: '10px'}} fullWidth>
                            <InputLabel id="perfil-label">Perfil</InputLabel>
                            <Select
                                labelId="perfil-label"
                                value={perfil}
                                onChange={(e) => setPerfil(e.target.value)}
                                label="Perfil"
                                required
                            >
                                {dataPerfil.map((option) => (
                                    <MenuItem key={option.id} value={option.id}>
                                        {option.perfil} 
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>

                        <FormControl sx={{paddingBottom: '10px'}} fullWidth>
                            <InputLabel id="estatus-label">Estatus</InputLabel>
                            <Select
                                labelId="estatus-label"
                                value={estatus}
                                onChange={(e) => setEstatus(e.target.value)}
                                label="Estatus"
                                required
                            >
                                <MenuItem value="1">Activo</MenuItem>
                                <MenuItem value="2">Inactivo</MenuItem>
                            </Select>
                        </FormControl>
                        <Button type="submit" variant="contained" color="primary">
                            Guardar Usuario
                        </Button>
                        </form>
                    </Box>
                }
            </Modal>
        </>
    )
}