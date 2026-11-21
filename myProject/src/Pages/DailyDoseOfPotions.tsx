
import './index.css'
import { Header } from '../component/Header';
import { Footer } from '../component/Footer';

export default function DailyDoseOfPotions() {
  return (
    <>
    <meta name="robots" content="noindex, nofollow" />
      <Header />
      <div style={{ alignItems: 'center', justifyContent: 'center', display: 'flex', margin: '10rem 0' }}>
        Page for My API Project. 
        Uses rest api with rate limiting, using JWT auth, and api key generation/revocation. Also, swagger documentation
      </div>
      <Footer />
    </>
  )
}