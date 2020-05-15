import React, {useState, useEffect} from 'react';
import Form from './components/Form';
import ImageList from './components/ImageList';


function App() {

  //state que guarda el termino de busqueda para mostrar las imagenes
  const [busqueda, guardarBusqueda] = useState('')
  const [imagenes, guardarImagenes] = useState([]);

  //state que nos dice en que pagina estamos
  const [paginaactual, guardarPaginaActual] = useState(1);
  //state que nos dice cuantas paginas hay en total
  const [totalpagina, guardarTotalPagina] = useState(1);


  useEffect(() => {
    
    const busquedaAPI = async () => {

      if(busqueda === '') return;

      const imagenesPorPagina = 32;
      const apiID = '16537888-41cecf39c6fa4657430e67ca1';
      const url = `https://pixabay.com/api/?key=${apiID}&q=${busqueda}&per_page=${imagenesPorPagina}&page=${paginaactual}`;

      const respuesta = await fetch(url);
      const resultado = await respuesta.json();

      
      guardarImagenes(resultado.hits);
      //calcular total de paginas
      guardarTotalPagina(Math.ceil(resultado.totalHits/imagenesPorPagina));

      //subir la pagina al principio
      const jumbotron = document.querySelector('.jumbotron');
      jumbotron.scrollIntoView({behavior: 'smooth'});

    }
    busquedaAPI();
  }, [busqueda, paginaactual])

  //definir la pagina anterior
  const paginaAnterior = () => {
    const nuevaPaginaActual = paginaactual - 1;

    if(nuevaPaginaActual === 0) return;

    guardarPaginaActual(nuevaPaginaActual);
  }

  //definir la pagina siguiente
  const paginaSiguiente = () => {
    const nuevaPaginaActual = paginaactual + 1;

    if(nuevaPaginaActual > totalpagina) return;

    guardarPaginaActual(nuevaPaginaActual);
  }


  return (
    <div className="container">
      <div className="jumbotron">
        <p className="lead text-center">Buscador de imágenes</p>

        <Form 
          guardarBusqueda={guardarBusqueda}
        />
      </div>

      <div className="row justify-content-center">
        <ImageList 
          imagenes={imagenes}
        />

        { (paginaactual === 1) 
        ? null 
        : (<button
              type="button"
              className="bbtn btn-info mr-1"
              onClick={paginaAnterior}
          >&laquo; Anterior</button> )
        }

        { (paginaactual === totalpagina) 
        ? null
        : (<button
              type="button"
              className="bbtn btn-info"
              onClick={paginaSiguiente}
          >Siguiente &raquo; </button>)
        }
      </div>
      
    </div>
  );
}

export default App;
