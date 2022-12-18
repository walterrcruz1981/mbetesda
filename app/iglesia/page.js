import Link from 'next/link'
import React from 'react'
import { iglesiasInfo } from './iglesiasContent'
function Iglesia() {
    return (
        <div>
            {iglesiasInfo.map(iglesia => (<Link key={iglesia.id} href={'/iglesia/' + iglesia.slug} >{iglesia.nombreDeMision}</Link>))}
        </div>
    )
}

export default Iglesia