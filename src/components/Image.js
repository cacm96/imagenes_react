import React from 'react';

const Image = ({imagen}) => {

    //extraer las variables
    const {largeImageURL, likes, webformatURL, tags, views} = imagen;


    return ( 
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
            <div className="card">
                <img src={webformatURL} alt={tags} className="card-img-top" />

                <div className="card-body">
                    <p className="card-text">{likes} Me gusta </p>
                    <p className="card-text">{views} Vistas </p>
                </div>

                <div className="card-footer">
                    <a 
                        href={largeImageURL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary btn-block"
                    >Ver imagen</a>
                </div>
            </div>
        </div>
     );
}
 
export default Image;