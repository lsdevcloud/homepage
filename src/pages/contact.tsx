export default function Contact() {

    return (
        <div id='main'>
            <p id='page-title'>contact</p>
            <div id='page-content'>
                <h3>email: {import.meta.env.VITE_CONTACT_EMAIL}</h3>
                <h3>signal: {import.meta.env.VITE_CONTACT_SIGNAL}</h3>
            </div>
        </div>
    )
}
