import '../styles/globals.css'
import Footer from './(home-components)/Footer'
import NavBar from './(home-components)/NavBar'
import MyProviders from './Providers'

export default function RootLayout({ children }) {
  return (
    <html>
      <head />
      <body>
        <MyProviders>

          <div className='layoutContainer'>
            <NavBar />
            {children}
            <Footer />
          </div>

        </MyProviders>
      </body>
    </html>
  )
}
