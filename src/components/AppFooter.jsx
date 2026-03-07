import footerFacebook from '/footer-facebook.png'
import footerTwitter from '/footer-twitter.png'
import footerYoutube from '/footer-youtube.png'
import footerPinterest from '/footer-pinterest.png'
import footerPeriscope from '/footer-periscope.png'


export default function AppFooter() {


    return (
        <footer className="bg_footer">
            <div className="logoFooter">
            <div className="container">
                <div className="row text-white py-4">
                    <div className="col-2">
                        <ul className='list-unstyled'>
                            <li className='text-uppercase fs-3 fw-bolder'>DC Comics</li>
                            <li>Characters</li>
                            <li>Comics</li>
                            <li>Movies</li>
                            <li>TV</li>
                            <li>Games</li>
                            <li>Videos</li>
                            <li>News</li>
                            <li className='text-uppercase fs-3 fw-bolder'>Shop</li>
                            <li>Shop DC</li>
                            <li>Shop DC Collectibles</li>
                        </ul>
                    </div>
                    <div className="col-2">
                        <ul className='list-unstyled'>
                            <li className='text-uppercase fs-3 fw-bolder'>DC</li>
                            <li>Terms Of Use</li>
                            <li>Privacy policy (New)</li>
                            <li>Ad Choices</li>
                            <li>Advertising</li>
                            <li>Jobs</li>
                            <li>Subscriptions</li>
                            <li>Talent Workshops</li>
                            <li>CPSC Certificates</li>
                            <li>Ratings</li>
                            <li>Shop Help</li>
                            <li>Contact Us</li>
                        </ul>
                    </div>
                    <div className="col-2">
                        <ul className='list-unstyled'>
                            <li className='text-uppercase fs-3 fw-bolder'>Sites</li>
                            <li>DC</li>
                            <li>MAD Magazine</li>
                            <li>DC Kids</li>
                            <li>DC Universe</li>
                            <li>DC Power Visa</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="bg-secondary">
                <div className="container p-4 socialsLink">
                    <div className="d-flex justify-content-between">
                        <div>
                            <button className='btn rounded-0 border-primary border-2 text-white text-uppercase fw-bolder'>Sign-up Now!</button>
                        </div>
                        <div className='d-flex gap-4 flex-wrap'>
                            <span className='text-primary text-uppercase fs-4 fw-bolder flex-shrink-0'>Follow US</span>
                            <img src={footerFacebook} alt="footerFacebook" />
                            <img src={footerTwitter} alt="footerFacebook" />
                            <img src={footerYoutube} alt="footerFacebook" />
                            <img src={footerPinterest} alt="footerFacebook" />
                            <img src={footerPeriscope} alt="footerFacebook" />
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </footer>
    )
}