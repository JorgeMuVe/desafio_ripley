

import React from 'react';
import { Link } from "react-router-dom";
import { GroupAdd, Group, Functions } from '@mui/icons-material';
import { Toolbar, List, ListItem, ListItemIcon, ListItemText, Divider } from '@mui/material';

const MenuDesafio = () => {
    return (
        <>
            <Toolbar />
            <Divider />
            <List>
                <Link to="/cliente/registro" style={{ textDecoration: 'none', color: 'inherit' }}>
                    <ListItem button>
                        <ListItemIcon>
                            <GroupAdd />
                        </ListItemIcon>
                        <ListItemText primary="Crear nuevo cliente" />
                    </ListItem>
                </Link>
                <Link to="/cliente/lista" style={{ textDecoration: 'none', color: 'inherit' }}>
                    <ListItem button>
                        <ListItemIcon>
                            <Group />
                        </ListItemIcon>
                        <ListItemText primary="Lista de clientes" />
                    </ListItem>
                </Link>
                <Link to="/cliente/promedio" style={{ textDecoration: 'none', color: 'inherit' }}>
                    <ListItem button>
                        <ListItemIcon>
                            <Functions />
                        </ListItemIcon>
                        <ListItemText primary="Promedio de edad" />
                    </ListItem>
                </Link>
            </List>
        </>
    );
}

export default MenuDesafio