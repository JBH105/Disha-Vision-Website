
import '../../styles/footer.css'
function Footer() {
    return (

        <footer className="footer-container-section">
            <div className="footer-container">
                <div className="footer-project">
                    <h2>Have a challenging project for us?</h2>
                </div>
                <div className='footer-btn'>
                    <button className="footer-contact-btn">Get in touch</button>
                </div>

                <div className="footer-contact">
                    <h2>DISHA VISION</h2>
                    <h1>
                        Disha Vision Architects & Planners <br />
                        Plot No. 12, Vision Tower, <br />
                        Central Avenue Road, <br />
                        Amravati, Maharashtra - 444601 <br />
                        India
                    </h1>
                </div>

                <div className="footer-web">
                    <div className='footer-p'>
                        <p>Website Design © 2024 Disha Vision Ltd.</p>
                    </div>
                    <div className='footer-p'>
                        <p>Privacy policies and cookies</p>
                    </div>
                </div>

            </div>
        </footer>
    );
}

export default Footer;
