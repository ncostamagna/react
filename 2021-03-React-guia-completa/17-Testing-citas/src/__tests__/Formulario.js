import React from 'react'
import Formulario from '../components/Formulario'
// en lugar de usar wrapper utilizamos screen
// cleanup me permite limpiar un componente una vez utilizado, pero en las ultimas versiones ya no se usa
import { render, screen, fireEvent } from '@testing-library/react' 
import '@testing-library/jest-dom/extend-expect' // para utilizat toBeInTheDocument();
import userEvent from '@testing-library/user-event'; // se utiliza en lugar de fireEvent

const crearCita = jest.fn() // Mock Function


test('<Formulario /> Cargar el formulario y revisar que sea correcto', () => {
    render(<Formulario crearCita={crearCita}/>);

    // Heading
    expect(screen.getByText('Crear Cita')).toBeInTheDocument();
    //console.log(screen.getByTestId('titulo'))
    expect(screen.getByTestId('titulo').tagName).toBe('H2');
    expect(screen.getByTestId('titulo').textContent).toBe('Crear Cita');

    // Button
    expect(screen.getByTestId('btn-submit').tagName).toBe('BUTTON');
    expect(screen.getByTestId('btn-submit').textContent).toBe('Agregar Cita');
});

test('<Formulario /> Validacion del formulario fireEvent', () => {
    render(<Formulario crearCita={crearCita}/>);

    const btn = screen.getByTestId('btn-submit');
    fireEvent.click(btn); // forma anterior

    expect(screen.getByTestId('alerta').tagName).toBe('P');
    expect(screen.getByTestId('alerta').textContent).toBe('Todos los campos son obligatorios');
    
});

test('<Formulario /> Validacion del formulario fireEvent 2', () => {
    render(<Formulario crearCita={crearCita}/>);
    
    // agregar valores al formulario
    fireEvent.change(screen.getByTestId('mascota'), {
        target: {
            value: 'Paquito'
        }
    });

    const btn = screen.getByTestId('btn-submit');
    fireEvent.click(btn); // forma anterior de dar click

    // si puede existir o no utilizamos queryByTestId
    // Si siempre existe utilizamos get
    expect(screen.getByTestId('alerta').tagName).toBe('P');
    expect(screen.getByTestId('alerta').textContent).toBe('Todos los campos son obligatorios');
    
});

test('<Formulario /> Validacion del formulario userEvent', () => {
    render(<Formulario crearCita={crearCita}/>);
    
    // vamos a escribir en el form
    userEvent.type(screen.getByTestId('mascota'), 'Paquito')

    
    const btn = screen.getByTestId('btn-submit');
    userEvent.click(btn); // forma actual de dar click

    expect(screen.getByTestId('alerta').tagName).toBe('P');
    expect(screen.getByTestId('alerta').textContent).toBe('Todos los campos son obligatorios');
    
    // si pasa las validaciones esperamos que crearCita haya sido llamado
    //expect(crearCita).toHaveBeenCalled();
    //expect(crearCita).toHaveBeenCalledTimes(1); // ha sido llamada 1 sola vez
});