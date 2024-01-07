import { useRef } from "react";
import {FaBars, FaTimes} from "react-icons/fa";

function NavBar(params) {

    const navRef = useRef();

    const showNavBar = () => {
        navRef.current.classLisr.toggle("responsive_nav");
    }

    return (
        <header>
             <h3>Logo</h3>
             <nav ref={navRef}>
                <a href="/#">Home</a>
                <a href="/#">My work</a>
                <a href="/#">Blog</a>
                <a href="/#">About me</a>
                <button className="nav-btn nav-close-btn" onClick={showNavBar}>
                    <FaTimes/>
                </button>
            </nav>
            <button onClick={showNavBar}>
                <FaBars/>
            </button>
        </header>
    );
}

export default NavBar;