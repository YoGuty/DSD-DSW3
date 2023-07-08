import "./Main.css"

function Main({title, text}) {

    return (
        <>
        <div className="contenido_explicativo">
            <div className="title-text">
                <h1>{title}</h1>
                <p>{text}</p>
                <div id="ul-main">
                    <p> Actualmente se han definido tres formas de aprendizaje generales: </p>
                    <ul>
                        <li> La <span>visual</span>: Como su nombre lo indica, la forma de aprendizaje visual se basa en relacionar imágenes con ideas o conceptos. Por ejemplo, mapas conceptuales. </li>
                        <li> La <span href="">auditiva</span>: Los individuos que aprenden de manera auditiva suelen retener información de forma más eficiente al recordar expresiones orales. Es de gran importancia al estudiar temas como los idiomas o la música.</li>
                        <li> La <span href="">kinestésica</span>: El sistema kinestésico se encuentra basado en el movimiento y el tacto. Por ejemplo, al manipular herramientas o instrumentos, o al caminar mientras se recita información. Tiende a resultar en una mayor retención de la información.</li>
                    </ul>
                </div>
            </div>
        </div>
        </>
    )
}

export default Main