import "./Tarjeta.css"

function Tarjeta({universidad, descripcion, direccion, contacto, duracion, url}) {
    return (
        <>
            <div className="rosa">
                <div className="main-carreras">
                    <h2> {universidad} </h2>
                    <h4> ({descripcion}) </h4>
                </div>
                <div className="secciones">
                    <p><span>Direccion:</span> {direccion}</p>
                    <p><span>Contacto:</span> {contacto} </p>
                    <p><span>Duracion:</span> {duracion} </p>
                </div>
                <div className="ver-mas">
                    <a href={url}> ver mas </a>
                </div>
            </div>
        </>
    )
}

export default Tarjeta