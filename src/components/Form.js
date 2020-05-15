import React, {useState} from 'react';
import Error from './Error';
import PropTypes from 'prop-types';

const Form = ({guardarBusqueda}) => {

    //state que guarda lo que el usuario escribe
    const [termino, guardarTermino] = useState('');
    const [error, guardarError] = useState(false);

    const buscarImagen = e => {
        e.preventDefault();

        //validar campo
        if(termino.trim() === '') {
            guardarError(true);
            return;
        }

        guardarError(false);
        guardarBusqueda(termino);
    }

    return ( 
        <form
            onSubmit={buscarImagen}
        >
            <div className="row">
                <div className="form-group col-md-8">
                    <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Busca una imagen. Ejemplo: café, perros, etc"
                        onChange={e => guardarTermino(e.target.value)}
                    />
                </div>
                <div className="form-group col-md-4">
                    <input
                        type="submit"
                        className="btn btn-lg btn-danger btn-block"
                        value="Buscar"
                    />
                </div>
            </div>
            {error ? <Error mensaje="Debe colocar un término de búsqueda" /> : null}
        </form>
     );
}

Form.propTypes = {
    guardarBusqueda: PropTypes.func.isRequired
}
 
export default Form;