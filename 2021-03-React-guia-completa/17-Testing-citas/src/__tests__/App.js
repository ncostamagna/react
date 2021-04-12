import React from 'react'
import { render, screen } from '@testing-library/react' 
import '@testing-library/jest-dom/extend-expect' // para utilizat toBeInTheDocument();
import userEvent from '@testing-library/user-event'; // se utiliza en lugar de fireEvent
import App from '../App'

test('<App /> la aplicacion funciona bien', () => {
    render(<App />);
    
    // validamos los textos
    // TODO


});

test('<App /> la aplicacion funciona bien, una prueba de integracion', () => {
    render(<App />);
    
    // validamos los textos
    // TODO

    // vamos a escribir en el form
    userEvent.type(screen.getByTestId('mascota'), 'Paquito')

    
    const btn = screen.getByTestId('btn-submit');
    userEvent.click(btn); // forma actual de dar click

    expect(screen.getByTestId('alerta').tagName).toBe('P');
    expect(screen.getByTestId('alerta').textContent).toBe('Todos los campos son obligatorios');
    
});

test('<App /> Agregar y verificar', async () => {
    render(<App />);

    // los find son asincronos
    const citas = await screen.findAllByTestId("cita"); // es como un query selector

    expect(citas).toMatchSnapshot(); 
    //Esto nos va a crear un archivo nuevo en el cual podamos ver el contenido
    // en __snapshots__
    // para no tener que mirar la consola


});

test('<App /> eliminar', async () => {
    render(<App />);

    const btnEliminar = screen.getByTestId("btnEliminar");

    userEvent.click(btnEliminar);
    // los find son asincronos
    const citas = await screen.findAllByTestId("cita"); // es como un query selector

    expect(citas).toMatchSnapshot(); 
    //Esto nos va a crear un archivo nuevo en el cual podamos ver el contenido
    // en __snapshots__
    // para no tener que mirar la consola


});