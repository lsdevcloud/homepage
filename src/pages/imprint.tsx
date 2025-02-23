import { createSignal } from 'solid-js'
import solidLogo from './assets/solid.svg'
import viteLogo from '/vite.svg'
import Header from './components/header.tsx';
import Footer from './components/footer.tsx';
import '../index.css';
import '../main.css';

export default function Imprint() {

    document.title = 'lsdevcloud.com :: imprint';

    return (
        <>
            <div id='main'>
                <p id='page-title'>imprint</p>
            </div>
        </>
    )
}

