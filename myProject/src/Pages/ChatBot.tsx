
import './index.css'
import { Header } from '../component/Header';
import { Footer } from '../component/Footer';

export default function ChatBot() {
  return (
    <>
    <meta name="robots" content="noindex, nofollow" />
      <Header />
      <div style={{ alignItems: 'center', justifyContent: 'center', display: 'flex', margin: '10rem 0' }}>
        Page for Chat Bot Project. 
        Uses natural language processing and machine learning to provide intelligent responses.
        Topic: Person Portfolio assistant: Answers questions about my portfolio to potential recruiters
      </div>
      <Footer />
    </>
  )
}