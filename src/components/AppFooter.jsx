import footerFacebook from '../assets/img/footer-facebook.png'
import footerTwitter from '../assets/img/footer-twitter.png'
import footerYoutube from '../assets/img/footer-youtube.png'
import footerPinterest from '../assets/img/footer-pinterest.png'
import footerPeriscope from '../assets/img/footer-periscope.png'


const linksFooter1 = [
    {
        id: 1,
        linkname: "Characters"
    },
    {
        id: 2,
        linkname: "Comics"
    },
    {
        id: 3,
        linkname: "Movies"
    },
    {
        id: 4,
        linkname: "TV"
    },
    {
        id: 5,
        linkname: "Games"
    },
    {
        id: 6,
        linkname: "Videos"
    },
    {
        id: 7,
        linkname: "News"
    }
]
const linksFooter2 = [
    {
        id: 1,
        linkname: "Shop DC"
    },
    {
        id: 2,
        linkname: "Shop DC Collectibles"
    }
]
const linksFooter3 = [
    {
        id: 1,
        linkname: "Terms Of Use"
    },
    {
        id: 2,
        linkname: "Privacy policy (New)"
    },
    {
        id: 3,
        linkname: "Ad Choices"
    },
    {
        id: 4,
        linkname: "Advertising"
    },
    {
        id: 5,
        linkname: "Jobs"
    },
    {
        id: 6,
        linkname: "Subscriptions"
    },
    {
        id: 7,
        linkname: "Talent Workshops"
    },
    {
        id: 8,
        linkname: "CPSC Certificates"
    },
    {
        id: 9,
        linkname: "Ratings"
    },
    {
        id: 10,
        linkname: "Shop Help"
    },
    {
        id: 11,
        linkname: "Contact Us"
    }
]

const linksFooter4 = [
    {
        id: 1,
        linkname: "DC"
    },
    {
        id: 2,
        linkname: "MAD Magazine"
    },
    {
        id: 3,
        linkname: "DC Kids"
    },
    {
        id: 4,
        linkname: "DC Universe"
    },
    {
        id: 5,
        linkname: "DC Power Visa"
    }
]





export default function AppFooter() {
    
    function linksFooter(array) {
        const markup = array.map(link => (
            <li className='opacity-50' key={link.id}>{link.linkname}</li>
        ))
        return markup
    }


    return (
        <footer className="bg_footer">
            <div className="logoFooter">
                <div className="container">
                    <div className="row row-cols-1 row-cols-md-3 text-white py-4">
                        <div className="col-lg-2">
                            <h2 className='text-uppercase fs-3 fw-bolder'>DC Comics</h2>
                            <ul className='list-unstyled'>
                                {
                                    linksFooter(linksFooter1)
                                }
                            </ul>
                            <h2 className='text-uppercase fs-3 fw-bolder'>Shop</h2>
                            <ul className='list-unstyled'>
                                {
                                    linksFooter(linksFooter2)
                                }
                            </ul>
                        </div>
                        <div className="col-lg-2">
                            <h2 className='text-uppercase fs-3 fw-bolder'>DC</h2>
                            <ul className='list-unstyled'>
                                {
                                    linksFooter(linksFooter3)
                                }
                            </ul>
                        </div>
                        <div className="col-lg-2">
                            <h2 className='text-uppercase fs-3 fw-bolder'>Sites</h2>
                            <ul className='list-unstyled'>
                                {
                                    linksFooter(linksFooter4)
                                }
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="second_bg">
                    <div className="container p-4 socialsLink">
                        <div className="d-flex justify-content-between gap-2">
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