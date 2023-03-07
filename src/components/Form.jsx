import React, { useState } from 'react'
import Card from './Card'

const Form = () => {

    const [user, setUser] = useState({
        autor: '',
        genero: '',
        libro: '',
        mes: ''
    })


    const [show, setShow] = useState(false)
    const [err, setErr] = useState(false)


    const submitCheck = (event) => {
        event.preventDefault()
        if(user.autor.length >= 3 && user.genero.length >= 6 && user.autor.trim()) {
            setShow(true)
            setErr(false)
        } else {
            setErr(true)
        }
    }


  return (
    <div>
        <form onSubmit={submitCheck}>
            <h1>Biblioteca</h1>
            <label>Autor: </label>
            <input type="text" value={user.autor} onChange={(e) => setUser({...user, autor: e.target.value})}/>
            <label>Genero: </label>
            <input type="text" value={user.genero} onChange={(e) => setUser({...user, genero: e.target.value})}/>
            <label>Libro: </label>
            <input type="text" value={user.libro} onChange={(e) => setUser({...user, libro: e.target.value})}/>
            <select value={user.mes} onChange={(e) => setUser({...user, mes: e.target.value})}>
                <option value="">Seleccione un mes</option>
                <option value="Julio">Julio</option>
                <option value="Agosto">Agosto</option>
                <option value="Septiembre">Septiembre</option>
            </select>
            <button>Buscar</button>
            {err && 'Por favor chequea que la información sea correcta'}
        </form>
        {show  && <Card user={user}/>}
    </div>
  )
}

export default Form