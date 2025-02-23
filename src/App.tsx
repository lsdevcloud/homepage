import { createSignal } from 'solid-js'
import solidLogo from './assets/solid.svg'
import viteLogo from '/vite.svg'
import Header from './components/header.tsx';
import Footer from './components/footer.tsx';
import './index.css';
import './main.css';
function App() {

  return (
    <>
        <Header />
        <div id='main'>
            <p>main content</p>
        </div>
    	<Footer />
    </>
  )
}

export default App
