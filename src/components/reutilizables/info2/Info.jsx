import "./Info.css"
import axios from "axios";
import React, { useState, useEffect } from 'react';
import Tarjeta from "./Tarjeta/Tarjeta";

function Info({carrera, info, img, div_carrera}) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios('./src/components/reutilizables/json/carreras.json')
        .then((respuesta) => setData(respuesta.data))
        .catch((error) => {
            console.error('Error fetching data: ', error);
            setError(error);
        })
        .finally(() => {
            setLoading(false);
        });
    }, []);

    if (loading) return 'Loading...';
    if (error) return 'Error!';

    if (div_carrera == "medicina") {
        const medicina = data.medicina
        div_carrera = medicina
    } else if (div_carrera == "abogacia"){
        const abogacia = data.abogacia
        div_carrera = abogacia
    } else if (div_carrera == "contabilidad") {
        const contabilidad = data.contabilidad
        div_carrera = contabilidad
    }

    return (
        <>
            <div className="contenedor-carrera">
                <div className="circulo">
                    <img src="../src/assets/circulo.png"/>
                </div>
                <div className="info">
                    <h2> {carrera} </h2>
                    <p> {info} </p>
                </div>
                <div className="facultad">
                    <img src={img}/>
                </div>
            </div>
            <div id="carouselExampleIndicators" className="carousel slide">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <Tarjeta universidad={div_carrera[0].universidad} descripcion={div_carrera[0].subtitulo} direccion={div_carrera[0].direccion} contacto={div_carrera[0].contacto} duracion={div_carrera[0].duracion} url={div_carrera[0].sitio_web}/>
                    </div>
                    <div className="carousel-item">
                        <Tarjeta universidad={div_carrera[1].universidad} descripcion={div_carrera[1].subtitulo} direccion={div_carrera[1].direccion} contacto={div_carrera[1].contacto} duracion={div_carrera[1].duracion} url={div_carrera[1].sitio_web}/>
                    </div>
                    <div className="carousel-item">
                        <Tarjeta universidad={div_carrera[2].universidad} descripcion={div_carrera[2].subtitulo} direccion={div_carrera[2].direccion} contacto={div_carrera[2].contacto} duracion={div_carrera[2].duracion} url={div_carrera[2].sitio_web}/>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span aria-hidden="true"><i class="bi bi-caret-left-fill"></i></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span aria-hidden="true"><i class="bi bi-caret-right-fill"></i></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </>
    )
}

export default Info