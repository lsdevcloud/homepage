import '../assets/index.css';
import '../assets/main.css';
import '../assets/pages/notfound.css';

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
