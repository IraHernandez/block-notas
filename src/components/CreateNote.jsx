import React from 'react'
import app from "firebase/app";


const CreateNote = () => {
  const [notas, setNotas] = React.useState([]);
  const [nota, setNota] = React.useState("");
  const [modoEdicion, setModoEdicion] = React.useState(false);
  const [id, setId] = React.useState("")


  React.useEffect(() => {
    const obtenerNotas = async () => {
      try {

        const db = app.firestore()
        const data = await db.collection("notas").get()
        const arryData = data.docs.map(doc => ({ id: doc.id, ...doc.data() }))
        setNotas(arryData)


      } catch (error) {

      }
    }
    obtenerNotas()
  }, [])

  const agregar = async (e) => {
    e.preventDefault()
    if (!nota.trim()) {
      console.log("Elemento Vacio")
      return
    }
    try {
      const db = app.firestore()
      const nuevaNota = {
        name: nota,
        fecha: Date.now()
      }
      const data = await db.collection("notas").add(nuevaNota)
      setNotas([
        ...notas,
        { ...nuevaNota, id: data.id }
      ])
      setNota("")
    } catch (error) {
      console.error(error)

    }
  }
  const eliminar = async (id) => {
    try {
      const db = app.firestore()
      await db.collection("notas").doc(id).delete()

      const arrayFiltrado = notas.filter(item => item.id !== id)
      setNotas(arrayFiltrado)

    } catch (error) {

    }
  }

  const editandoNota = (item) => {
    setModoEdicion(true)
    setNota(item.name)
    console.log(item.id)
    setId(item.id)
  }

  const editar = async (e) => {
    e.preventDefault()
    if (!nota.trim()) {
      console.log("Elemento Vacio")
      return
    }
    try {

      const db = app.firestore()
      await db.collection("notas").doc(id).update({
        name: nota
      })
      const arrayEditado = notas.map(item => (
        item.id === id ? { id: item.id, fecha: item.fecha, name: nota } : item))
      setNotas(arrayEditado)
      setModoEdicion(false)
      setId('')
      setNota('')
    }
    catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="container-fluid mt-3">
      <div className="row">
        <div className="col-8 col-md-6">
          <ul className="list-group listaContainer">
            {
              notas.map(item => (
                <li className="list-group-item mt-2" key={item.id} >
                  {item.name}
                  <button
                    className="btn btn-danger btn-sm float-right mx-2"
                    onClick={() => eliminar(item.id)}
                  >
                    Eliminar
                  </button>
                  <button
                    className="btn btn-warning btn-sm float-right"
                    onClick={() => editandoNota(item)}
                  >
                    Editar
                  </button>
                </li>
              ))
            }
          </ul>
        </div>
        <div className=" col-4 col-md-6">
          <h3>
            {
              modoEdicion ? "Editar Notas" : "Agregar Notas"
            }
          </h3>
          <form onSubmit={modoEdicion ? editar : agregar}>
            <input
              type="text"
              placeholder="Escribir nota"
              className="form-control mb-2"
              onChange={e => setNota(e.target.value)}
              value={nota}
            >
            </input>
            <button
              className={
                modoEdicion ? "btn btn-dark btn-block" : "btn btn-warning btn-block"
              }
              type="submit"
            >{
                modoEdicion ? "Editar " : "Agregar"
              }
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default CreateNote;