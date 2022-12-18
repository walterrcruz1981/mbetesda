import React from 'react'
import { iglesiasInfo } from '../iglesiasContent'
let churchInfo = {};
function churchData(slug) {
    iglesiasInfo.map(church => {
        if (church.slug !== slug) return
        else churchInfo = church
    })
}

function IglesiaDescription({ params }) {

    const { iglesia } = params
    churchData(iglesia)
    return (
        <div>
            <h1>{churchInfo.nombreDeMision}</h1>
            {churchInfo.nombrePastor}
            <h1>{churchInfo.nuestraIglesia}</h1>
        </div>
    )
}

export default IglesiaDescription