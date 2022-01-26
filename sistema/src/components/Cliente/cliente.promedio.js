import React, { useState, useEffect } from 'react';
import { getClientes, getClientesPromedio } from '../../hook/apiCliente';

import { Box, Typography, Alert, AlertTitle } from '@mui/material';
import ClienteTabla from './cliente.tabla'

const ClientePromedio = (props) => {
    const [clienteLista, setClienteLista] = useState([]);
    const [clientePromedio, setClientePromedio] = useState(0);

    useEffect(() => {
        const handleClienteLista = () => {
            getClientes('').then(r => {
                setClienteLista(r.data);
            }).catch(e => alert(e.message));
            getClientesPromedio().then(p => {
                setClientePromedio(p.data.promedio);
            }).catch(e => alert(e.message));
        }
        handleClienteLista();
    }, []);

    return (
        <>
            <Typography variant="h6">PROMEDIO DE EDAD DE CLIENTES REGISTRADOS</Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', '& .MuiTextField-root': { m: 1, maxWidth: '500px' } }} >
                <ClienteTabla clienteLista={clienteLista} />
                <Alert severity="info" sx={{ maxWidth: '500px' }}>
                    <AlertTitle>Promedio de edad</AlertTitle>
                    Clientes registrados: <b>{clienteLista.length}</b> — Promedio: <b>{clientePromedio}</b>
                </Alert>
            </Box>
        </>
    );
}

export default ClientePromedio;