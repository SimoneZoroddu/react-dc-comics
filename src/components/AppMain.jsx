import buyDigitalComics from '/buy-comics-digital-comics.png'
import buyMerchandiseComics from '/buy-comics-merchandise.png'
import buySubscriptionsComics from '/buy-comics-subscriptions.png'
import buyShopLocatorComics from '/buy-comics-shop-locator.png'
import buyPowerVisaComics from '/buy-dc-power-visa.svg'

export default function AppMain() {


    return (
        <>
            <main className="bg-black">
                <div className="container">
                    <div className="row">
                        <div className="col text-white">
                            Content goes here
                        </div>
                    </div>
                </div>
                <div className="bg-primary">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <img src={buyDigitalComics} alt="buyDigitalComics" /> Digital Comics
                            </div>
                            <div className="col">
                                <img src={buyMerchandiseComics} alt="buyDigitalComics" /> DC Merchandise
                            </div>
                            <div className="col">
                                <img src={buySubscriptionsComics} alt="buyDigitalComics" /> Subscription
                            </div>
                            <div className="col">
                                <img src={buyShopLocatorComics} alt="buyDigitalComics" /> Comic Shop Locator
                            </div>
                            <div className="col">
                                <img src={buyPowerVisaComics} alt="buyDigitalComics" /> DC Power visa
                            </div>
                        </div>
                    </div>
                </div>
            </main >
        </>
    )
}