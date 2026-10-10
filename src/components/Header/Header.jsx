import lokpalLogo from "../../assets/lokpal_logo.webp";
import ashokaEmblem from "../../assets/emblem_of_india.webp";
import "./Header.css";
function Header(){
    return(
        <div className="header">
            <div className="header-left">
                <img src={lokpalLogo} alt="Lokpal of India"/>
            </div>
            
            <div className="header-right">
                <img src={ashokaEmblem} alt="Government of India"/>
            </div>
        </div>
    );
}

export default Header;