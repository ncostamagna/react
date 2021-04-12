import React from 'react'
import { render, screen } from '@testing-library/react'
import Formulario from '../components/Formulario'
import userEvent from '@testing-library/user-event'
import {monedas, criptos} from '../__mocks__/criptomonedas'
import axios from 'axios';

const mockAxios = axios;
const guardarMoneda = jest.fn();
const guardarCriptomoneda = jest.fn();

test('<useCriptomonedas />', async () => {

    // le mandamos los mocks al request, sin necesidad que consulte la api
    mockAxios.get = jest.fn().mockResolvedValue({
        data: criptos
    })

    render(<Formulario 
        guardarMoneda={guardarMoneda}
        guardarCriptomoneda={guardarCriptomoneda}
        />);

    const monedasDropdown = screen.getByTestId("select-monedas");
    expect(monedasDropdown.children.length).toEqual(monedas.length + 1);


    const opciones = await screen.findAllByTestId("criptos");
    expect(opciones).toHaveLength(2)

    expect(mockAxios.get).toHaveBeenCalled()
    expect(mockAxios.get).toHaveBeenCalledTimes(1)

    userEvent.selectOptions(screen.getByTestId("select-monedas"), "USD");
    userEvent.selectOptions(screen.getByTestId("select-monedas"), "pija");

    userEvent.click(screen.getByTestId('boton'));

    expect(guardarMoneda).toHaveBeenCalled();
    expect(guardarCriptomoneda).toHaveBeenCalled();
});