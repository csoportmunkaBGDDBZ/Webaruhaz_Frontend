import React from 'react'

function TermekAdminSor({termek}) {
  return (
    <>
        <tr>
            <th>{termek.id}</th>
            <td>{termek.title}</td>
            <td>{termek.price}</td>
            <td>{termek.description}</td>
            <td>{termek.category}</td>
            <td><button type="button" className='btn btn-dark'>Módosítás</button></td>
            <td><button id={termek.id}type="button" className='btn btn-dark'>Törlés</button></td>
        </tr>
    </>
  )
}

export default TermekAdminSor