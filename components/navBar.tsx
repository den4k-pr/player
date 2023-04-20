import React, {useState} from "react";
import Link from "next/link";

const NavBar: React.FC = () => {
    const [vavBar, setNavBar] = useState(false)


    return(
        <div className="navBar">
      <button onClick={() => setNavBar(true)} className="navBar_button">
        <div className="navBar_button-line"></div>
        <div className="navBar_button-line"></div>
        <div className="navBar_button-line"></div>
      </button>
      <div className={vavBar === false ? "navBar_content" : "navBar_content show"}>
        <ul>
          <li>
            <Link onClick={() => setNavBar(false)} href="/" className="navBar_content-link">Home</Link>
          </li>
          <li>
            <Link onClick={() => setNavBar(false)} href="/tracks" className="navBar_content-link">Tracks</Link>
          </li>
          <li>
            <Link onClick={() => setNavBar(false)} href="" className="navBar_content-link">link link</Link>
          </li>
        </ul>
      </div>
      <div onClick={() => setNavBar(false)} className={vavBar === false ? "navBar_fon" : "navBar_fon show"}></div>
    </div>
    )
}

export default NavBar