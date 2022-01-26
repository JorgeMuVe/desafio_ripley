import React, { useState } from 'react';
import { postClientes } from '../../hook/apiCliente';
import { Box, TextField, Button, Typography } from '@mui/material';

const JSONCliente = { nombre: '', apellido: '', nacimiento: '' }

const ClienteRegistro = (props) => {
    const [clienteFormulario, setClienteFormulario] = useState(JSONCliente);

    const handleGuardarCliente = () => {
        if (clienteFormulario.nombre.length === 0 || clienteFormulario.apellido.length === 0 || clienteFormulario.nacimiento.length !== 10) {
            alert('Faltan datos para el registro');
        } else {
            postClientes(clienteFormulario).then(r => {
                if (r.status === 201) {
                    alert('Cliente registrado correctamente');
                    setClienteFormulario(JSONCliente);
                } else {
                    alert('Algo salio mal, vuelve a intentar!');
                }
            }).catch(e => alert(e.message));
        }
    }
    return (
        <>
            <Typography variant="h6">FORMULARIO DE CLIENTE</Typography>
            <Box
                component="form"
                sx={{ display: 'flex', flexDirection: 'column', '& .MuiTextField-root': { m: 1, width: '350px' } }}
                noValidate
                autoComplete="off"
            >
                <TextField label="Nombre" variant="standard" value={clienteFormulario.nombre} onChange={e => setClienteFormulario({ ...clienteFormulario, nombre: e.target.value })} />
                <TextField label="Apellido" variant="standard" value={clienteFormulario.apellido} onChange={e => setClienteFormulario({ ...clienteFormulario, apellido: e.target.value })} />
                <TextField label="Nacimiento" variant="standard" value={clienteFormulario.nacimiento} onChange={e => setClienteFormulario({ ...clienteFormulario, nacimiento: e.target.value })} InputLabelProps={{ shrink: true }} type="date" />
                <Button variant="outlined" color="primary" sx={{ mt: 2, ml: 1, width: '350px' }} onClick={handleGuardarCliente}>GUARDAR</Button>
            </Box>
        </>
    );
}

export default ClienteRegistro;