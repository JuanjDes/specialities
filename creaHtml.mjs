/* Especialidades:
    - marketing
    - developers
    - QAs
    - ventas
*/

import {usersData} from './usersdata.mjs';


/***********************************************************************************************
 ********* FUNCIONES PARA GENERAR CADA HTML (HOME, VENTAS, MARKETING, DEVELOPERS, QAs) *********
 ***********************************************************************************************/
function home() {
    const titulo = `<h1>Página principal</h1>`;
    const marketing = `<a href="/marketing">Marketing</a>`;
    const developers = `<a href="/developers">Developers</a>`;
    const qas = `<a href="/qas">QAs</a>`;
    const ventas = `<a href="/ventas">Ventas</a>`;

    const homepage = `
        <style>
            a {padding: 10px;}
        </style>
        <center>
            ${titulo}
            ${marketing}
            ${developers}
            ${qas}
            ${ventas}
        </center>
    `;

    return homepage;
};


function marketing() {
    const titulo = `<h1>Marketing</h1>`;
    const home = `<a href="/">Home</a>`;

    // mostramos usuarios con especialidad marketing
    const usersTable = usuariosPorEspecialidad('marketing');

    const marketing = `
        <center>
            ${titulo}
            ${home}
            <h2>Usuarios con especialidad marketing:</h2>
            ${usersTable}
        </center>
    `;

    return marketing;
};


function developers() {
    const titulo = `<h1>Desarrolladores</h1>`;
    const home = `<a href="/">Home</a>`;

    // mostramos usuarios con especialidad developers
    const usersTable = usuariosPorEspecialidad('developers');

    const developers = `
        <center>
            ${titulo}
            ${home}
            <h2>Usuarios con especialidad desarrolladores:</h2>
            ${usersTable}
        </center>
    `;

    return developers;
};


function qas() {
    const titulo = `<h1>QAs</h1>`;
    const home = `<a href="/">Home</a>`;

    // mostramos usuarios con especialidad QAs
    const usersTable = usuariosPorEspecialidad('QAs');

    const qas = `
        <center>
            ${titulo}
            ${home}
            <h2>Usuarios con especialidad QAs:</h2>
            ${usersTable}
        </center>
    `;

    return qas;
};


function ventas() {
    const titulo = `<h1>Ventas</h1>`;
    const home = `<a href="/">Home</a>`;

    // mostramos usuarios con especialidad ventas
    const usersTable = usuariosPorEspecialidad('ventas');

    const ventas = `
        <center>
            ${titulo}
            ${home}
            <h2>Usuarios con especialidad ventas:</h2>
            ${usersTable}
        </center>
    `;

    return ventas;
};


/************************************************************  
 **** FUNCIONES PARA FILTRAR USUARIOS SEGÚN ESPECIALIDAD ****
 ************************************************************/
function filtrarEspecialidad(specialty) {
    return usersData.filter(user => user.specialty === specialty);
}

function usuariosPorEspecialidad(specialty) {
    const users = filtrarEspecialidad(specialty);

    let html = `
        <style>
            th, td {border: 1px solid black; padding: 5px;}
            th {background-color: #f2f2f2;}
        </style>

        <table>
            <tr>
                <th>ID</th>
                <th>Nombre</th>
                <th>Edad</th>
            </tr>`;

    users.forEach(user => {
        html += `<tr>
                    <td>${user.id}</td>
                    <td>${user.name}</td>
                    <td>${user.age}</td>
                </tr>`;
    });

    html += `</table>`;

    return html;
}

export {home, marketing, developers, qas, ventas};