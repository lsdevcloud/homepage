import { createSignal } from 'solid-js'
import solidLogo from './assets/solid.svg'
import viteLogo from '/vite.svg'
import Header from './components/header.tsx';
import Footer from './components/footer.tsx';
import '../assets/index.css';
import '../assets/main.css';

export default function App() {

    document.title = 'lsdevcloud.com :: home';

    return (
        <>
            <div id='main'>
                <p id='page-title'>main page</p>
            </div>
        </>
    )
}

