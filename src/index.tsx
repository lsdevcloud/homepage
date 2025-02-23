// solid 
import { render } from 'solid-js/web';
import { Router, Routes, Route } from "@solidjs/router";

// pages
import App from './pages/main.tsx';
import NotFound from './pages/notfound.tsx';
import Imprint from './pages/imprint.tsx';

// components
import Header from './components/header.tsx';
import Footer from './components/footer.tsx';

// index style sheet
import './assets/index.css';

// page root
const root = document.getElementById('root');
if (!root) throw new Error("Root div not found!");

render(() => (
    <>
        <Header />
            <Router>
                <Route path="*" component=<NotFound />/>
                <Route path="/" component=<App />/>
                <Route path="/imprint" component=<Imprint />/>
            </Router>
        <Footer/>
    </>
), root);

