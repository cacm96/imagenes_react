import React from 'react';
import Image from './Image';
import PropTypes from 'prop-types';

const ImageList = ({imagenes}) => {
    return ( 
        <div className="col-12 p-5 row">
            {imagenes.map(imagen => (
                <Image 
                    key={imagen.id}
                    imagen={imagen}
                />
            ))}
        </div>
     );
}

ImageList.propTypes = {
    imagenes: PropTypes.array.isRequired
}
 
export default ImageList;