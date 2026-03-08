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
                            <li className='opacity-50'>Characters</li>
                            <li className='opacity-50'>Comics</li>
                            <li className='opacity-50'>Movies</li>
                            <li className='opacity-50'>TV</li>
                            <li className='opacity-50'>Games</li>
                            <li className='opacity-50'>Videos</li>
                            <li className='opacity-50'>News</li>
                            <li className='text-uppercase fs-3 fw-bolder'>Shop</li>
                            <li className='opacity-50'>Shop DC</li>
                            <li className='opacity-50'>Shop DC Collectibles</li>
                        </ul>
                    </div>
                    <div className="col-2">
                        <ul className='list-unstyled'>
                            <li className='text-uppercase fs-3 fw-bolder'>DC</li>
                            <li className='opacity-50'>Terms Of Use</li>
                            <li className='opacity-50'>Privacy policy (New)</li>
                            <li className='opacity-50'>Ad Choices</li>
                            <li className='opacity-50'>Advertising</li>
                            <li className='opacity-50'>Jobs</li>
                            <li className='opacity-50'>Subscriptions</li>
                            <li className='opacity-50'>Talent Workshops</li>
                            <li className='opacity-50'>CPSC Certificates</li>
                            <li className='opacity-50'>Ratings</li>
                            <li className='opacity-50'>Shop Help</li>
                            <li className='opacity-50'>Contact Us</li>
                        </ul>
                    </div>
                    <div className="col-2">
                        <ul className='list-unstyled'>
                            <li className='text-uppercase fs-3 fw-bolder text-white'>Sites</li>
                            <li className='opacity-50'>DC</li>
                            <li className='opacity-50'>MAD Magazine</li>
                            <li className='opacity-50'>DC Kids</li>
                            <li className='opacity-50'>DC Universe</li>
                            <li className='opacity-50'>DC Power Visa</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="second_bg">
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