import './Header.css'

function Header() {
    return (
        <>
            <header className="header">
                <div className="Contenido">
                    <div className="Titulo">
                        <h1 className='p-v'> Do Better </h1>
                        <h1 className='v-p'> Do Better </h1>
                    </div>
                    <h3> Porque es posible hacerlo mejor </h3>
                    <div className='redes'>
                        <a href="https://aprendeprogramandoinscripciones.bue.edu.ar/"><i class="bi bi-globe"></i></a>
                        <a href="https://twitter.com/EducacionBA"><i class="bi bi-twitter"></i></a>
                        <a href="https://www.instagram.com/aprendeprogramandoba/?hl=es"><i class="bi bi-instagram"></i></a>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header