import React from 'react';
import { Table, TableHead, TableBody, TableRow, TableCell } from '@mui/material';

const ClienteTabla = ({ clienteLista }) => {
    return (
        <Table sx={{ maxWidth: '500px' }} aria-label="simple table">
            <TableHead>
                <TableRow>
                    <TableCell>Nombre</TableCell>
                    <TableCell>Apellido</TableCell>
                    <TableCell>Nacimiento</TableCell>
                    <TableCell>Edad</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {(clienteLista || []).map(cliente =>
                    <TableRow key={cliente.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }} >
                        <TableCell>{cliente.nombre}</TableCell>
                        <TableCell>{cliente.apellido}</TableCell>
                        <TableCell>{cliente.nacimiento}</TableCell>
                        <TableCell>{cliente.edad} Años</TableCell>
                    </TableRow>
                )}
            </TableBody>
        </Table>
    );
}

export default ClienteTabla;