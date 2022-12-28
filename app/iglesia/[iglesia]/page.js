import Image from 'next/image'
import React from 'react'
import { iglesiasInfo } from '../iglesiasContent'

async function IglesiaDescription({ params }) {

    const { iglesia } = params
    const filtered = iglesiasInfo.filter((church => church.slug === iglesia))
    const search = iglesiasInfo.find(church => church.nombreDeMision.toLowerCase().includes('sali'));
    console.log(search, 'church search results');
    const [churchInfo] = filtered
    return (
        <div>
            <h1>{churchInfo.nombreDeMision}</h1>
            {churchInfo.nombrePastor}
            <h1>{churchInfo.nuestraIglesia}</h1>
            <Image src={churchInfo.flag} alt='church flag' width={200} height={200} />
        </div>
    )
}

export default IglesiaDescription