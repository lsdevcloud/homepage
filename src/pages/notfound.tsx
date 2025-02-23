import { createSignal } from 'solid-js'
import solidLogo from './assets/solid.svg'
import viteLogo from '/vite.svg'
import Header from './components/header.tsx';
import Footer from './components/footer.tsx';
import '../index.css';
import '../main.css';
import './notfound.css';

function NotFound() {
    
    document.title = 'lsdevcloud.com :: page not found';
    return (
        <>
            <div id='main'>
        
                <div id='error-details'>

                    <p id='error-message'>Page not found</p>
                </div>
            </div>
        </>
    )
}

export default NotFound
