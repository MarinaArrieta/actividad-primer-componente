function Noticia() {

    const noticia = {
        titulo : "Curso React - Actividad 1",
        descripcion : "Resolucion de la actividad numero 1"
    }

    const {titulo, descripcion} = noticia

    return (
        <div>
            <h1>Titulo: {titulo}</h1>
            <p>Descripcion: {descripcion}</p>
        </div>
    )
}

export default Noticia