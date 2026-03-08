import buyDigitalComics from '../assets/img/buy-comics-digital-comics.png'
import buyMerchandiseComics from '../assets/img/buy-comics-merchandise.png'
import buySubscriptionsComics from '../assets/img/buy-comics-subscriptions.png'
import buyShopLocatorComics from '../assets/img/buy-comics-shop-locator.png'
import buyPowerVisaComics from '../assets/img/buy-dc-power-visa.svg'

export default function AppMainIcons() {


    return (
        <div className="bg-primary">
            <div id='containerIcon' className="container py-4">
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-5 text-white">
                    <div className="col d-flex flex-wrap align-items-center justify-content-center">
                        <img className='img-fluid' src={buyDigitalComics} alt="buyDigitalComics" /> <span className='d-none d-md-inline'>Digital Comics</span>
                    </div>
                    <div className="col d-flex flex-wrap align-items-center justify-content-center">
                        <img className='img-fluid' src={buyMerchandiseComics} alt="buyDigitalComics" /> <span className='d-none d-md-inline'>DC Merchandise</span>
                    </div>
                    <div className="col d-flex flex-wrap align-items-center justify-content-center">
                        <img className='img-fluid' src={buySubscriptionsComics} alt="buyDigitalComics" /> <span className='d-none d-md-inline'>Subscription</span>
                    </div>
                    <div className="col d-flex flex-wrap align-items-center justify-content-center">
                        <img className='img-fluid' src={buyShopLocatorComics} alt="buyDigitalComics" /> <span className='d-none d-md-inline'>Comic Shop Locator</span>
                    </div>
                    <div className="col d-flex flex-wrap align-items-center justify-content-center">
                        <img className='img-fluid' src={buyPowerVisaComics} alt="buyDigitalComics" /> <span className='d-none d-md-inline'>DC Power visa</span>
                    </div>
                </div>
            </div>
        </div>
    )
}