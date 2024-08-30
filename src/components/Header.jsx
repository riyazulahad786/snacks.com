import {useState} from 'react'
import { IoCloseSharp } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { MdMarkEmailRead } from "react-icons/md";
import { IoIosMenu } from "react-icons/io";

function Header() {
   const [menuOpen,setMenuOpen] = useState(false);

   const toggleMenu = () => {
      setMenuOpen(!menuOpen);
   }
  return (
    <div>
        <header className="header" id="header">
             <nav>
                <a href="/" className="nav_logo">Chips</a>

                <div className={`nav_menu  ${menuOpen ? "show":""}` }>
                    <ul className="nav_list">
                        <li className="">
                           <a href="#" className="nav_link">Home</a>
                        </li>
                        <li className="">
                           <a href="#" className="nav_link">Favorite</a>
                        </li>
                        <li className="">
                           <a href="#" className="nav_link">Care</a>
                        </li>
                        <li className="">
                           <a href="#" className="nav_link">Products</a>
                        </li>
                        <li className="">
                           <a href="#" className="nav_link">Contact</a>
                        </li>
                    </ul>
                    {/* close btn */}
                    <div className="close_nav_btn" onClick={toggleMenu}>
                         <IoCloseSharp/>
                    </div>
                    {/* social link */}
                    <div className="social_links">
                          <a className="nav_social_link"><FaFacebookF/></a>
                          <a className="nav_social_link"><FaTwitter/></a>
                          <a className="nav_social_link"><MdMarkEmailRead/></a>
                    </div>
                </div>


                <div className="nav_toggle" onClick={toggleMenu}>
                   <a><IoIosMenu/></a>
                </div>
             </nav>
        </header>
    </div>
  )
}

export default Header