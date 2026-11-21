
import './index.css'
import { Header } from '../component/Header';
import { Footer } from '../component/Footer';


export default function OffTheScreen() {
  return (
    <>
    <meta name="robots" content="noindex, nofollow" />
      <Header />
      <div style={{ alignItems: 'center', justifyContent: 'center', display: 'flex', margin: '10rem 0' }}>
        Page for projects irl. Not necessarily related to web development, but lessons and experiences I have had which have improved my abilities
        - Patio
        - Motorcycle
        - Car
        - Hiking/travel
        - Homelab
      </div>
      <Footer />
    </>
  )
}