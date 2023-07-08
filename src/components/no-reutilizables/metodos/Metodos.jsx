import Main from "../../reutilizables/contenido1/Main"
import Footer from "../../reutilizables/footer/Footer"
import Texto from "../../reutilizables/contenido2/Texto"
function Metodos() {
    return (
        <>
            <Main title={"Técnicas de estudio"} text={"Consisten en una serie de métodos aplicados al momento de estudiar, cuya finalidad es facilitar la concentración del estudiante durante el proceso de aprendizaje. Y cabe recalcar que antes de realizar alguno de los métodos que verás en esta página, debes de identificar tu forma de asimilar información. Es decir, de aprender."}/>
            <Texto color="grey" titulo={"Pomodoro"} descripcion={"Consiste en dividir el tiempo de estudio en plazos de 25 minutos, los cuales son denominados “Pomodoros”. Estos se encontrarán separados por intervalos de descanso que también tendrán una duración establecida, la cual se irá incrementando luego de cada Pomodoro. Primero 5 minutos de descanso, despues 10, 15..."}/>
            <Texto titulo={"Mapa Mental"} descripcion={"Consisten en un diagrama que se utiliza para representar ideas, palabras, dibujos, imágenes, entre otros elementos que se relacionan a una idea o concepto central. En general, son palabras clave o conceptos muy resumidos del tema."}/>
            <Texto color="grey" titulo={"Resumenes"} descripcion={"Los resúmenes consisten en un escrito, generalmente breve, en el que se sintetizan los puntos de mayor relevancia de un texto de mayor complejidad. Para lograr esto es necesario leer y comprender el texto a resumir, que a su vez tambien cuenta como estudiar."}/>
            <Texto titulo={"Explicar el tema"} descripcion={"Explicar el tema que se estudia, tanto a uno mismo como a otra persona, es una de las mejores formas de aprender. Es importante que la persona a la que le explicas tenga una clara comprension del tema para que pueda decirte en que te equivocas y puedas corregirte."}/>
            <Texto color="grey" titulo={"Feyman"} descripcion={"Consiste en seleccionar un tema o concepto que desea comprender y explicarlo como si estuviera enseñándoselo a alguien más, utilizando un lenguaje simple y evitando términos complicados. Al intentar explicar el tema, te enfrentas a tus propias limitaciones de comprensión y buscas simplificar y aclarar aún más la explicación mediante ejemplos y analogías."}/>
            <Texto titulo={"Space Repetition"} descripcion={"Consiste en revisar la información en intervalos de tiempo específicos y cada vez más prolongados. Al programar repasos en momentos estratégicos, se refuerza la memoria y se evita la pérdida de conocimiento a largo plazo. Esta técnica se basa en la idea de que la revisión regular y planificada mejora la retención de la información."}/>
            <Texto color="grey" titulo={"Active Recall"} descripcion={"Se basa en revisar la información en momentos específicos y cada vez más distantes en el tiempo. Al programar repasos en momentos estratégicos, se refuerza la memoria y se evita el olvido a largo plazo."}/>
            <Footer/>
        </>
    )
}

export default Metodos