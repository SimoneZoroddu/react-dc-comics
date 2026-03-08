import dc_logo from "/dc-logo.png" //giusto per ricordarsi come collegare dal public


export default function AppHeader() {
    
    return (
        <header>
            <div className="container">
                <nav className="navbar navbar-expand-lg pb-0">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#"><img src={dc_logo} alt="" /></a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse d-flex justify-content-end" id="navbarSupportedContent">
                                <ul id="nav_link2" className="navbar-nav mb-2 mb-lg-0">
                                    <li className="nav-item position-relative">
                                        <a className="nav-link active fw-bolder" aria-current="page" href="#">Characters</a>
                                        <span className="bar_under"></span>
                                    </li>
                                    <li className="nav-item position-relative">
                                        <a className="nav-link active fw-bolder" aria-current="page" href="#">Comics</a>
                                        <span className="bar_under"></span>
                                    </li>
                                    <li className="nav-item position-relative">
                                        <a className="nav-link active fw-bolder" aria-current="page" href="#">Movies</a>
                                        <span className="bar_under"></span>
                                    </li>
                                    <li className="nav-item position-relative">
                                        <a className="nav-link active fw-bolder" aria-current="page" href="#">TV</a>
                                        <span className="bar_under"></span>
                                    </li>
                                    <li className="nav-item position-relative">
                                        <a className="nav-link active fw-bolder" aria-current="page" href="#">Games</a>
                                        <span className="bar_under"></span>
                                    </li>
                                    <li className="nav-item position-relative">
                                        <a className="nav-link active fw-bolder" aria-current="page" href="#">Collectibles</a>
                                        <span className="bar_under"></span>
                                    </li>
                                    <li className="nav-item position-relative">
                                        <a className="nav-link active fw-bolder" aria-current="page" href="#">Videos</a>
                                        <span className="bar_under"></span>
                                    </li>
                                    <li className="nav-item position-relative">
                                        <a className="nav-link active fw-bolder" aria-current="page" href="#">Fans</a>
                                        <span className="bar_under"></span>
                                    </li>
                                    <li className="nav-item position-relative">
                                        <a className="nav-link active fw-bolder" aria-current="page" href="#">News</a>
                                        <span className="bar_under"></span>
                                    </li>
                                    <li className="nav-item position-relative">
                                        <a className="nav-link active fw-bolder" aria-current="page" href="#">Shop</a>
                                        <span className="bar_under"></span>
                                    </li> 
                                </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    )
}