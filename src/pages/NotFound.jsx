import React from 'react'
import '../style/notFound.scss'
export const NotFound = () => {
    return (
        <div className='not-found'>
            <h1 className="title-404">404</h1>
            <p className="text-404">Oops! Pagina no encontrada.</p>
            <a className="button-404" href="/home">Vuelve al Inicio</a>
        </div>
    )
}
