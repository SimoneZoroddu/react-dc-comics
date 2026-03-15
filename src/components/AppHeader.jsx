import dc_logo from "/dc-logo.png" //giusto per ricordarsi come collegare dal public


const navLinks = [
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
        linkname: "Collectibles"
    },
    {
        id: 7,
        linkname: "Videos"
    },
    {
        id: 8,
        linkname: "Fans"
    },
    {
        id: 9,
        linkname: "News"
    },
    {
        id: 10,
        linkname: "Shop"
    }
]




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
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul id="nav_link2" className="navbar-nav ms-auto">
                                {
                                    navLinks.map(navLink => (
                                        <li className="nav-item position-relative" key={navLink.id}>
                                            <a className="nav-link active fw-bolder" aria-current="page" href="#">{navLink.linkname}</a>
                                            <span className="bar_under"></span>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    )
}