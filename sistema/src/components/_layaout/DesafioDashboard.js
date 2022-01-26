import React, { useState, useEffect } from 'react';
import { Typography, Box, Alert, AlertTitle } from '@mui/material';
import { getClientesDashboard } from '../../hook/apiCliente';

const DesafioDashboard = (props) => {
    const [clienteDashboard, setClienteDashboard] = useState({ registrados: 0, mayores: 0, adultos: 0, });
    useEffect(() => {
        const handleDatosDashBoard = () => {
            getClientesDashboard().then(r => {
                setClienteDashboard(r.data);
            }).catch(e => alert(e.message));
        }
        handleDatosDashBoard();
    }, []);

    return (
        <>
            <Typography variant="h6">DESAFIO DASHBOARD</Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', '& .MuiTextField-root': { m: 1, maxWidth: '500px' } }} >
                <Alert severity="info" sx={{ maxWidth: '500px', m: 1 }}>
                    <AlertTitle>Cantidad de Clientes</AlertTitle>
                    Clientes registrados — <b>{clienteDashboard.registrados}</b>
                </Alert>
                <Alert severity="warning" sx={{ maxWidth: '500px', m: 1 }}>
                    <AlertTitle>Clientes mayores de edad</AlertTitle>
                    Clientes registrados — <b>{clienteDashboard.mayores}</b>
                </Alert>
                <Alert severity="error" sx={{ maxWidth: '500px', m: 1 }}>
                    <AlertTitle>Clientes adultos mayores</AlertTitle>
                    Clientes registrados — <b>{clienteDashboard.adultos}</b>
                </Alert>
            </Box>
        </>
    );
}

export default DesafioDashboard;