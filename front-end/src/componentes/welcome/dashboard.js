import React, {useEffect, useState} from 'react';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import SettingsIcon from '@mui/icons-material/Settings';
import {consultingUsers, catPerfiles} from '../servicios/service';
import { Modal, Button, Box, Tabs, Tab, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, CircularProgress } from '@mui/material';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import CardUsers from './cardUsers';


function TabPanel(props){
  const { children, value, index, ...other} = props;

  return (
    <>
        <div
          role='tabpanel'
          hidden={value !== index}
          id={`tabpanel-${index}`}
          {...other}
        >
          {value === index && (
            <Box p={3}>
              <Typography component="span">{children}</Typography>
            </Box>
          )}
        </div>
    </>
  )
}

export default function Dashboard() {

  const [value, setValue] = useState(0);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [mostrarCard, setMostrarCard] = useState(false);
  const [selectedUser, setSelectedUser] = useState({}); // Almacenar el usuario seleccionado
  const [editUser, setEditUser] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    try {
      const result = await consultingUsers();
      if (result.success) {
        setUsers(result.data);
      } else {
        setError('Error al obtener los usuarios');
      }
    } catch (err) {
      setError('Error en la consulta');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
    if(newValue === 2){
      fetchData();
    }
  };

  const handleCloseModal = () => {
    setMostrarCard(false);
    setSelectedUser('');
    setEditUser(false);
  };

  const handleOpenModal = (user, isRegister) => {

    if(!isRegister){
      const selected = {
        user: "",
        isRegister
      }

      setSelectedUser(selected);
      setMostrarCard(true);
    }
    
      const selected = {
        user: user,
        isRegister
      }
      
      setSelectedUser(selected); // Pasar el usuario seleccionado al modal
      setMostrarCard(true);  // Abrir el modal

  };

  return (
    <>

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '95vh', // Altura completa de la página para centrar verticalmente
        }}
      >
        <Box
          sx={{
            width: '90%',
            height: '80%',
            backgroundColor: 'white',
            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.25)', // Sombra
            borderRadius: 2,
            padding: 0,
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Tabs
            value={value}
            onChange={handleChange}
            variant="fullWidth" // Hace que las pestañas ocupen el 100% del ancho
            sx={{ borderBottom: 1, borderColor: 'divider' }}
            aria-label="icon label tabs example"
          >
            <Tab icon={<HomeIcon />} label="Inicio" id="tab-0" />
            <Tab icon={<InfoIcon />} label="Info" id="tab-1" />
            <Tab icon={<SettingsIcon />} label="Ajustes" id="tab-2" />
          </Tabs>

          {/* Tab Panels */}
          <TabPanel value={value} index={0}>
            Contenido de Inicio
          </TabPanel>
          <TabPanel value={value} index={1}>
            Información Detallada
          </TabPanel>

          <TabPanel value={value} index={2}>
            <div style={{paddingBottom: '3%', paddingLeft: '85%'}}>
              <Button onClick={ () => handleOpenModal("",false)} variant="contained" color="primary" size="small" style={{ marginRight: 5 }}>
                  <GroupAddIcon/>Agregar Usuario
              </Button>
            </div>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="tabla de usuarios">
                <TableHead>
                  <TableRow>
                    <TableCell>Nombre</TableCell>
                    <TableCell>Correo</TableCell>
                    <TableCell>Perfil</TableCell>
                    <TableCell>Acciones</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {users.map((user, index) => (
                    <TableRow key={index}>
                      <TableCell>{user.nombre}</TableCell>
                      <TableCell>{user.correo}</TableCell>
                      <TableCell>{user.perfil}</TableCell>
                      <TableCell>
                        <Button onClick={ () => handleOpenModal(user, true)} variant="contained" color="primary" size="small" style={{ marginRight: 5 }}>
                          Editar
                        </Button>
                        <Button variant="contained" color="error" size="small">
                          Eliminar
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </TabPanel>
        </Box>
      </Box>

      <CardUsers open={mostrarCard} onClose={handleCloseModal} data={selectedUser}/>

    </>
  )
}