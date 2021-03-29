# Indice
- [Introduccion y Bases](#introduccion-y-bases)
    - [Extensiones VSC](#extensiones-vsc)
    - [Extensiones Chrome](#extensiones-chrome)
    - [JSX](#jsx)
    - [Inicializacion proyecto](#inicializacion-proyecto)
- [Webpack](#webpack)
- [Funcionalidades](#funcionalidades)
    - [Props](#props)
    - [Fragment](#fragment)
    - [PropTypes](#proptypes)
    - [Emotion](#emotion)
    - [react-transition-group](#react-transition-group)
- [React Hooks](#react-hooks)
    - [useState](#usestate)
    - [useEffect](#useeffect)
    - [useContext](#usecontext)


# Introduccion y Bases
Anteriormente los componentes se creaban como clases, hoy en dia se utilizan directamente funciones

## Extensiones VSC
- bracket pair colorizer
- es7 react/redux/grapQL ....
- simple react Snippets
- reactjs code snippets
- react/redux/react-router snippets
- generate-react-component (Este no)
- prettier - code formatter (Este no)

## Extensiones Chrome
- React Developer Tools

## JSX
JavaScript con HTML

## Inicializacion proyecto

```sh
npx create-react-app nombre-del-proyecto

```

# Webpack
<img src="images/1.png"><br />
<img src="images/2.png"><br />

# Funcionalidades

## Props
Puedo pasar valores mediante props de componentes padres a hijos<br />

```jsx
// Padre
return (
    <Fragment>
        <Header 
          titulo='Tienda Virtual'
        />
    </Fragment>
)

// Hijo
function Header({titulo}) {
    return(
        <h1 className="encabezado">{titulo}</h1>
    )
}
```

## Fragment
Un patrón común en React es que un componente devuelva múltiples elementos. Los Fragmentos te permiten agrupar una lista de hijos sin agregar nodos extra al DOM.

```jsx
import React, Fragment from 'react';

const Formulario = ({crearCita}) => {
    return ( 
        <Fragment>
            <h2>Crear Cita</h2>
            <form > </form>
            <footer>my footer</footer>
        </Fragment>
    );
}

export default Formulario;
```

## PropTypes
Nos permite documentar la aplicacion para saber que se le deben pasar a cada campo, van siempre abajo de todo

```jsx
import PropTypes from 'prop-types';

const Formulario = ({crearCita}) => {
    // TODO
}

Formulario.propTypes = {
    crearCita: PropTypes.func.isRequired // es una funcion y es requerida
}
 
export default Formulario;
```

## Emotion
Forma mas simple de generar css y combinarlo con React
```jsx
import styled from '@emotion/styled';

const ContenedorHeader = styled.header`
    background-color: #26C6DA;
    padding: 10px;
    font-weight: bold;
    color: #FFFFFF;
`;

const Header = ({titulo}) => {
    return ( 
        <ContenedorHeader>
            <TextoHeader>{titulo}</TextoHeader>
        </ContenedorHeader>
     );
}
```

## react-transition-group
Nos permite realizar animaciones


#  React Hooks
Nos van a permitir actualizar el state sin necesidad de crear un **Class Component**<br />
El codigo es menor<br />
Mayor facilidad para implementar reducers, administrar el state y context<br />


**Algunos Hooks**
- useState
- useEffect
- useContext
- useRef
- useReducer
- useCallback
- useMemo

## useState
Me permite utilizar el state
```jsx
import React, { useState } from 'react';

const [clientes, guardarCliente] = useState([]);

// cliente        -> tiene el state actual
// guardarCliente -> cambia el state, unicamente podemos cambiarlo de esta manera
```

## useEffect
Permite realizar ciertas operaciones cuando el state cambia, se ejecuta cuando el componente esta listo o cuando hay cambios en el componente.

```jsx
useEffect( () => {
    console.log("listo");
})
```

Para que se ejecute solo una vez debemos pasarle un array vacio

```jsx
useEffect( () => {
    console.log("listo");
}, [])
```

cada vez que cambie el state se ejecuta

```jsx
const [misValores, guardarMisValores] = useState([])
useEffect( () => {
    console.log("listo");
}, [misValores])
```

## useContext
Puedes pasar el state o funciones desde el componente principal hasta los hijos, sin necesidad de pasarlo por cada componente. Tambien se puede actualizar el state desde el hijo.
- Si el proyecto es sencillo, tal vez props sea una mejor opcion
- Context hace un poco mas commplicada la reutilizacion de componentes
<br />

**Archivo Context**
```jsx
import React, { createContext, useState, useEffect } from 'react';

// Crear el Context
export const CategoriasContext = createContext();

// Provider es donde se encuentran las funciones y state
const CategoriasProvider = (props) => {

    return (
        <CategoriasContext.Provider
            value={{
                categorias // valores que van a estar disponibles en los difeentes componentes
            }}
        >
            {props.children} //De esta forma tomara los diferentes componentes que se pasaran por aca
        </CategoriasContext.Provider>
    )
}

export default CategoriasProvider;
```
<br />

**Archivo App.js**
```jsx
import CategoriasProvider from './context/CategoriasContext';

function App() {
  return (
      <CategoriasProvider> // todo lo del context estara disponible dentro del tag
        <RecetasProvider>
          <ModalProvider>
              <Header />

              <div className="container mt-5">
                  <div className="row">
                      <Formulario />
                  </div>

                  <ListaRecetas />
              </div>

          </ModalProvider>
        </RecetasProvider>
      </CategoriasProvider>
  );
}

```
<br />

**Tomar el context en Formulario.js**
```jsx
import React, { useContext, useState } from 'react';
import { CategoriasContext } from '../context/CategoriasContext';

const Formulario = () => {
    // vamos a tener disponible todo lo que este en el value
    const { categorias } = useContext(CategoriasContext);

}
```