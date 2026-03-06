import footerFacebook from '/footer-facebook.png'

export default function AppFooter(){


  return (
    <footer className="bg_footer"> 
      <div className="container">
        <div className="row text-white">
            <div className="col">DC Comics</div>
            <div className="col">DC</div>
            <div className="col">Sites</div>
        </div>
      </div>
      <div className="bg-secondary">
        <div className="container">
            <div className="row">
                <div className="col"><button>Sign-up Now</button></div>
                <div className="col">Follow US 
                    <img src={footerFacebook} alt="" />
                </div>
            </div>
        </div>
      </div>
    </footer>
  )
}