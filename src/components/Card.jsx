import React from 'react'

const Card = ({user}) => {

  return (
    <div>
        <h2>Disponible</h2>
        <p>El libro: {user.libro} del autor {user.autor} 
        con genero {user.genero} se encuentra disponible, 
        puede venir a partir del mes {user.mes} a leerlo.
        </p>
    </div>
  )
}

export default Card