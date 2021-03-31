import React, {useContext}from 'react'
import {CounterContext} from '../App'

function ComponentC(){
    const counterContext = useContext(CounterContext);
    return (
        <div>
            ComponenteC
            <button onClick={() => counterContext.counterDispatch('increment')}>
                increment
            </button>
            <button onClick={() => counterContext.counterDispatch('decrement')}>
                decrement
            </button>
            <button onClick={() => counterContext.counterDispatch('reset')}>
                reset
            </button>
        </div>
    )
}

export default ComponentC;