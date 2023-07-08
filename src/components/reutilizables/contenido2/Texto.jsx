import "./Texto.css"    

function Texto({color, titulo, descripcion}) {

    return (
        <>
            <div id="grey" className={"contenido2" + " " + color}>
                <div className="title-text2">
                    <h1>{titulo}</h1>
                    <p>{descripcion}</p>
                </div>
            </div>
        </>
    )
}

export default Texto