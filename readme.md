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