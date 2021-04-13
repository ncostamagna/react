import React from 'react';
import PropTypes from 'prop-types';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import { setPropsAsInitial } from '../helpers/setPropsAsInitial';
import CustomerActions from './CustomerActions';
import { Prompt} from 'react-router-dom'

/*const isRequired = value => (
  !value && "Este campo es requerido"
);*/

const validate = values => {
  const error = {};
  if(!values.name){
    error.name = "El campo nombre es requerido"
  }

  if(!values.dni){
    error.dni = "El campo DNI es requerido"
  }
  return error;
};

const myField = ({input, meta, type, label, name}) => (
  <div>
    <label htmlFor={name}>{label}</label>
    <input {...input} type={!type?"text":type}></input>
    {
      meta.touched && meta.error && <span>{meta.error}</span>
    }
  </div>
)

const isNumber = value => (
  isNaN(Number(value)) && "El campo debe ser un numero"
);

const toNumber = value => value && Number(value);

const toUpper = value => value && value.toUpperCase();
const toLower = value => value && value.toLowerCase();
const onlyGrow = (value, previosValue, values) => 
  value && (!previosValue ? value : (value > previosValue ? value : previosValue))

//handleSubmit, submitting -> redux-form
const CustomerEdit = ({
  name, dni, age, handleSubmit, submitting, onBack, pristine, submitSucceeded}) => {
  return(
    <div>
      <h2>Edicion del cliente</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <Field 
            name="name" 
            component={myField} 
            type="text"
            label="Nombre"
            parse={toUpper}
            format={toLower}></Field>
        </div>
        <div>
          <Field name="dni" component={myField}  type="text" 
            //validate={[isRequired, isNumber]}
            label="DNI"></Field>
        </div>
        <div>
          <Field name="age" component={myField} type="number" 
            validate={isNumber}
            label="Edad"
            //primero se ejecuta parse y despues Normalie
            parse={toNumber}
            normalize={onlyGrow}></Field>
        </div>
        <CustomerActions>
          <button type="submit" disabled={submitting || pristine}>
            Aceptar
          </button>
          <button type="button" disabled={submitting} onClick={onBack}>
            Cancelar
          </button>
        </CustomerActions>
        <Prompt
          //pristine -> si se edito el formulario
          when={!pristine && !submitSucceeded}
          message="Se perderan los datos si continua"></Prompt>
      </form>
    </div>
  )
}

CustomerEdit.propTypes = {
  name: PropTypes.string,
  dni: PropTypes.string,
  age: PropTypes.number,
  onBack: PropTypes.func.isRequired,
};
/*
export default connect(
  (state, props) => (
    {initialValues: props}
    ))(reduxForm({ form: 'CustomerEdit'})(CustomerEdit));
*/
export default setPropsAsInitial(reduxForm({ form: 'CustomerEdit', validate})(CustomerEdit));
