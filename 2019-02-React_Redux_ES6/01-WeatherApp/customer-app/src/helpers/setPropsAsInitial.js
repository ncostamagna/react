import React, {Component} from 'react'

export const setPropsAsInitial = WrappedComponent => (
    class extends Component {
        //initialValues solo funciona una vez, por eso cuando vuelvo a cargar la 
        //pagina no se muestran los valores, lo solucionamos con enableReinitialize
        //sino podemos renderizarlo solo cuando muestra un cliente
        render(){
            return <WrappedComponent {...this.props} 
            initialValues={this.props}
            //enableReinitialize
            />;
        }
    }
);