import * as React from 'react';
import PropTypes from 'prop-types';
import { Routes, Route, Link } from "react-router-dom";
import { Menu as MenuIcono } from '@mui/icons-material';
import { CssBaseline, AppBar, Box, Drawer, IconButton, Toolbar, Typography } from '@mui/material';

import MenuDesafio from './MenuDesafio';
import DesafioDashboard from './DesafioDashboard';

import ClienteLista from '../Cliente/cliente.lista';
import ClienteRegistro from '../Cliente/cliente.registro';
import ClientePromedio from '../Cliente/cliente.promedio';

const drawerWidth = 240;

function ResponsiveDrawer(props) {
    const { windowProps } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const container = windowProps !== undefined ? () => windowProps().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcono />
                    </IconButton>
                    <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                        <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
                            Desafio Ripley
                        </Typography>
                    </Link>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{ keepMounted: true }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    <MenuDesafio />
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    <MenuDesafio />
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />
                <Routes>
                    <Route path="/cliente/lista" element={<ClienteLista />} />
                    <Route path="/cliente/registro" element={<ClienteRegistro />} />
                    <Route path="/cliente/promedio" element={<ClientePromedio />} />
                    <Route path="/" element={<DesafioDashboard />} />
                </Routes>
            </Box>
        </Box>
    );
}

ResponsiveDrawer.propTypes = { window: PropTypes.func };

export default ResponsiveDrawer;
