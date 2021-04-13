
//Action creator
export const incrementar = () => ({
    type: 'CONTADOR/INCREMENTAR',

})

export const decrementar = () => ({
    type: 'CONTADOR/DECREMENTAR',
    
})

export const setear = payload => ({
    type: 'CONTADOR/SETEAR',
    payload
})

export default (state = 0, action) => {
    console.log(action);
    
    switch (action.type) {
        case 'CONTADOR/INCREMENTAR':
            return state + 1
        case 'CONTADOR/DECREMENTAR':
            return state - 1
        case 'CONTADOR/SETEAR':
            return action.payload
        default:
            return state;
    }
}