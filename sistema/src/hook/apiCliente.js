import { GetClientes, PostClientes, GetClientesPromedio, GetClientesDashboard } from '../services/cliente.servicio';

const getClientes = (filtro) => {
    const respuesta = GetClientes(filtro);
    return respuesta;
}

const postClientes = (cliente) => {
    const respuesta = PostClientes(cliente);
    return respuesta;
}

const getClientesPromedio = () => {
    const respuesta = GetClientesPromedio();
    return respuesta;
}

const getClientesDashboard = () => {
    const respuesta = GetClientesDashboard();
    return respuesta;
}

export { getClientes, postClientes, getClientesPromedio, getClientesDashboard };