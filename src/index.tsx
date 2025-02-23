import { render } from 'solid-js/web';
import { Router, Routes, Route } from "@solidjs/router";
import App from './App';
import Header from './components/header.tsx';
import Footer from './components/footer.tsx';
import './index.css';

const root = document.getElementById('root');
if (!root) throw new Error("Root div not found!");

render(() => (
    <>
    <Header/>
    <Router>
            <Route path="/" component=<App/>/>
    </Router>
    <Footer/>
    </>
), root);

