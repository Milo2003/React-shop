import React, { useState } from 'react'

export const StateFul = () => {
    const [name, setName] = useState('juan')
    return (
        <div>
            <h1>Hola {name}</h1>
            <button onClick={setName('milo')}></button>
        </div>
    )
}
