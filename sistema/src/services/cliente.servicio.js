import axios from "axios";

export const GetClientes = async (filtro) => {
    return await axios.get(`http://localhost:5000/api/cliente?filtro=${filtro}`)
}

export const PostClientes = async (cliente) => {
    return await axios.post('http://localhost:5000/api/cliente', { ...cliente })
}

export const GetClientesPromedio = async () => {
    return await axios.get(`http://localhost:5000/api/cliente/promedio`)
}

export const GetClientesDashboard = async () => {
    return await axios.get(`http://localhost:5000/api/cliente/Dashboard`)
}