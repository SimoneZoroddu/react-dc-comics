import buyDigitalComics from '/buy-comics-digital-comics.png'
import buyMerchandiseComics from '/buy-comics-merchandise.png'
import buySubscriptionsComics from '/buy-comics-subscriptions.png'
import buyShopLocatorComics from '/buy-comics-shop-locator.png'
import buyPowerVisaComics from '/buy-dc-power-visa.svg'
import { Fragment as Pippo } from 'react';

export default function AppMain() {


    return (
        <Pippo>
            <main className="bg-black">
                <div className="container py-4">
                    <div className="row">
                        <div className="col text-white fs-1">
                            Content goes here
                        </div>
                    </div>
                </div>
                <div className="bg-primary">
                    <div id='containerIcon' className="container py-4">
                        <div className="row">
                            <div className="col">
                                <img className='img-fluid' src={buyDigitalComics} alt="buyDigitalComics" /> Digital Comics
                            </div>
                            <div className="col">
                                <img className='img-fluid' src={buyMerchandiseComics} alt="buyDigitalComics" /> DC Merchandise
                            </div>
                            <div className="col">
                                <img className='img-fluid' src={buySubscriptionsComics} alt="buyDigitalComics" /> Subscription
                            </div>
                            <div className="col">
                                <img className='img-fluid' src={buyShopLocatorComics} alt="buyDigitalComics" /> Comic Shop Locator
                            </div>
                            <div className="col">
                                <img className='img-fluid' src={buyPowerVisaComics} alt="buyDigitalComics" /> DC Power visa
                            </div>
                        </div>
                    </div>
                </div>
            </main >
        </Pippo>
    )
}