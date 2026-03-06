import dc_logo from "/dc-logo.png"


export default function AppHeader() {


    return (
        <header>
            <img src={dc_logo} alt="dcLogo" />
            <a href="">Characters</a>
            <a href="">Comics</a>
            <a href="">Movies</a>
            <a href="">TV</a>
            <a href="">Games</a>
            <a href="">Collectibles</a>
            <a href="">Videos</a>
            <a href="">Fans</a>
            <a href="">News</a>
            <a href="">Shop</a>
        </header>
    )
}