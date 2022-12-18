import Image from "next/image"

export const imageSize = '(max-width: 768px) 100vw,(max-width: 1200px) 50vw, 33vw';

export const MyImage = (src) => {
    return <Image src={src || defaultImage} className='object-fit-cover' fill alt='' sizes='(max-width: 768px) 100vw,(max-width: 1200px) 50vw, 33vw' priority />
}
export const defaultImage = 'https://images.unsplash.com/photo-1529973625058-a665431328fb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
