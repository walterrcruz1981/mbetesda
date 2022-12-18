'use client'
import React, { useState } from 'react'
import styles from '../../Admin.module.scss'
import Link from 'next/link'
import { MyImage } from '../../../variables'
import EventCard from '../../../components/cards/EventCard'
import { useRouter } from 'next/navigation'
function CrearEvento({ data }) {
    const router = useRouter()
    const [event, setEvent] = useState({
        title: '',
        venue: '',
        date: '',
        location,
        description: '',
        imageUrl: ''
    })

    function handleChange(e) {
        const { name, value } = e.target;
        setEvent((prev) => {
            return {
                ...prev,
                [name]: value
            }
        })
    }

    async function handleSubmit(e) {
        e.preventDefault()

        await fetch('http://localhost:3000/api/events', {
            method: 'POST',
            body: JSON.stringify(event)
        }).then(() =>
            setEvent({
                title: '',
                venue: '',
                date: '',
                location,
                description: '',
                imageUrl: ''
            })).then(() => router.refresh())
    }
    async function deleteEvent(id) {
        await fetch('/api/events', {
            method: 'DELETE',
            body: JSON.stringify(id)
        }).then(() => router.refresh())
    }

    return (
        <div className={styles.crearContainer}>
            <button><Link href={'/admin'}>Regresar</Link></button>
            <div className={styles.createFormContainer + ' flex'}>
                <form onSubmit={handleSubmit} className={styles.form + ' flex-center-column '}>
                    <div>
                        <label htmlFor="title">Title: </label>
                        <input type="text" name='title' placeholder='Enter Title' value={event.title} onChange={handleChange} />
                    </div>
                    <div>
                        <label htmlFor='venue'>Venue: </label>
                        <select name='venue' value={event.venue} onChange={handleChange}>
                            <option>lugar</option>
                            <option >Edificio 1</option>
                            <option>Edificio 2</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor='date'>Date: </label>
                        <input type="date" name='date' placeholder='Enter Date' value={event.date} onChange={handleChange} />
                    </div>
                    <div>
                        <label htmlFor='location'>Location: </label>
                        <select name='location' value={event.location} onChange={handleChange}>
                            <option >Iglesia</option>
                            <option >Betesda </option>
                            <option >Betesda Oaxaca</option>
                            <option>Betesda Anaheim</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor='imageUrl'>ImageURl: </label>
                        <input type="text" name='imageUrl' placeholder='Enter ImageURL' value={event.imageUrl} onChange={handleChange} />
                    </div>
                    <textarea placeholder='Enter Event Description' rows={10} cols={40} name='description' value={event.description} onChange={handleChange}></textarea>
                    <button>Create Event</button>
                </form>
                <div className={styles.preview}>
                    <div className={styles.imageContainer}>
                        {MyImage(event.imageUrl)}
                    </div>
                    <h4>{event.title || 'Titulo de Evento'}</h4>
                    <p>lugar: {event.venue || 'Santuario'} </p>
                </div>
            </div>

            <h1>Eventos Actuales en la base de datos</h1>
            <div className={styles.currentEventsContainer + ' responsive-grid'}>
                {data?.map(event => (
                    <div key={event.id}>
                        <button onClick={() => {
                            deleteEvent(event.id)
                        }}>Delete</button>
                        <EventCard content={event} />
                    </div>

                ))}
            </div>

        </div>
    )
}

export default CrearEvento