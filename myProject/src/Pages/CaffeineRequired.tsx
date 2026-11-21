
import './index.css'
import { Header } from '../component/Header';
import { Footer } from '../component/Footer';

export default function CaffeineRequired() {
  return (
    <>
    <meta name="robots" content="noindex, nofollow" />
      <Header />
      <div style={{ alignItems: 'center', justifyContent: 'center', display: 'flex', margin: '10rem 0' }}>
       Notion template for managing personal and professional tasks, goals, and resources.
      </div>
      <Footer />
    </>
  )
}