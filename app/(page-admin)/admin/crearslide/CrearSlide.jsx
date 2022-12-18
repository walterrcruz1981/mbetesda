'use client'
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import { useState } from 'react'
import { MyImage } from '../../../variables';
import style from '../../Admin.module.scss'

function CrearSlide({ content }) {
    const router = useRouter()
    const [slide, setSlide] = useState({
        buttonText: '',
        buttonLink: '',
        imageUrl: ''
    });

    function handleChange(e) {
        const { value, name } = e.target;
        setSlide((prev => {
            return {
                ...prev,
                [name]: value
            }
        }))
    }
    async function handleSubmit(e) {
        e.preventDefault();
        await fetch('/api/slideshow', {
            method: 'POST',
            body: JSON.stringify(slide),
        })
        setSlide({
            buttonText: '',
            buttonLink: '',
            imageUrl: ''
        })
        router.refresh()
    }
    async function deleteSlide(id) {
        await fetch('/api/slideshow', {
            method: 'DELETE',
            body: JSON.stringify(id)
        })
        router.refresh()
    }

    return (
        <div className={style.crearContainer}>
            <Link href={'/admin'}  >Regresar</Link>
            <div className={style.createFormContainer}>
                <h1>Creando nuevo Slide</h1>
                <form onSubmit={handleSubmit} className={style.form + ' flex-center-column'}>
                    <label htmlFor="buttonText">Button Text</label>
                    <input type="text" name='buttonText' placeholder='button text' value={slide.buttonText} onChange={handleChange} />
                    <label htmlFor="buttonLink">Button Link</label>
                    <input type="text" name='buttonLink' placeholder='button link' value={slide.buttonLink} onChange={handleChange} />
                    <label htmlFor="imageUrl">Image Url</label>
                    <input type="text" name='imageUrl' placeholder='imageUrl' value={slide.imageUrl} onChange={handleChange} />
                    <button>Crear Slide</button>

                </form>
                <div className={style.preview}>

                    <div className={style.slideImageContainer}>
                        {MyImage(slide.imageUrl)}
                        <div >
                            <button className={style.slideButton}>{slide.buttonText || 'Texto del boton'}</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex-center-column'>
                <h1>Slides actuales</h1>
                <div className={style.currentObjects + " responsive-grid-large"}>
                    {content?.map(slide => (
                        <div key={slide.id} className={style.eachObject} >
                            <input type="submit" value='Delete' onClick={() => {
                                deleteSlide(slide.id)
                            }} />
                            {MyImage(slide.imageUrl)}
                            <button>{slide.buttonText}</button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default CrearSlide