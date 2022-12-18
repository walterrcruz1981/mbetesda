'use client'
import { useSession, signIn } from 'next-auth/react'
import React from 'react'
import { MyImage } from '../variables'
import styles from './Admin.module.scss'

function layout({ children }) {
    const { data: session, status } = useSession()
    console.log(session, status);
    const heroImageUrl = 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
    if (!session) {
        return (
            <div className={styles.restrictedContainer + ' flex-center-column'}>
                <h4>This is a protected site</h4>
                {MyImage(heroImageUrl)}
                <button onClick={() => signIn()}>Login</button>
            </div>
        )
    } else {
        return (
            <>
                {children}
            </>
        )
    }
}

export default layout