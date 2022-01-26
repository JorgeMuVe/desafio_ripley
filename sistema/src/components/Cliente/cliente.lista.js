import React, { useState, useEffect } from 'react';
import { getClientes } from '../../hook/apiCliente';
import { Box, TextField, Typography } from '@mui/material';
import ClienteTabla from './cliente.tabla'

const ClienteLista = (props) => {
    const [clienteLista, setClienteLista] = useState([]);
    const [filtro, setFiltro] = useState('');

    useEffect(() => {
        const handleClienteLista = () => {
            getClientes(filtro).then(r => {
                setClienteLista(r.data);
            }).catch(e => alert(e.message));
        }
        handleClienteLista();
    }, [filtro]);

    return (
        <>
            <Typography variant="h6">LISTA DE CLIENTES REGISTRADOS</Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', '& .MuiTextField-root': { m: 1, maxWidth: '500px' } }} >
                <TextField label="Buscar clientes por nombre o apellido" variant="standard" onChange={e => setFiltro(e.target.value)} />
                <ClienteTabla clienteLista={clienteLista} />
            </Box>
        </>
    );
}

export default ClienteLista;