
import './index.css'
import { Header } from '../component/Header';
import { Footer } from '../component/Footer';

export default function CollabMultiUser() {
  return (
    <>
    <meta name="robots" content="noindex, nofollow" />
      <Header />
      <div style={{ alignItems: 'center', justifyContent: 'center', display: 'flex', margin: '10rem 0' }}>
        Page for Collab Multi-User Project. 
        The goal is to develop a collaborative platform for multiple users to work together with live updates. Likely built with firebase.
        Possible topics: Weather to Health tracker for weather-sensitive individuals. 
      </div>
      <Footer />
    </>
  )
}