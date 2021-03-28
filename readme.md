# Indice
- [Introduccion y Bases](#introduccion-y-bases)
    - [Extensiones VSC](#extensiones-vsc)
    - [Extensiones Chrome](#extensiones-chrome)
    - [JSX](#jsx)
    - [Inicializacion proyecto](#inicializacion-proyecto)
- [Webpack](#webpack)
- [Funcionalidades](#funcionalidades)
    - [Props](#props)
- [React Hooks](#react-hooks)
    - [useState](#usestate)
    - [useEffect](#useeffect)


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