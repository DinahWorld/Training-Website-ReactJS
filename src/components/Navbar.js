import React,{useState} from 'react';
// On importe l'image comme ceci dans une variable
import Logo from '../assets/pizzaLogo.png';
// Link c'est pour les liens
import {Link} from 'react-router-dom';
import ReorderIcon from '@mui/icons-material/Reorder';
import "../styles/Navbar.css";

function Navbar() {

    //  State = variable si on change notre variable
    //  on va actualiser l'affichage
    const [openLinks, setOpenLinks] = useState(false)

    const toggleNavbar = () => {
        // Si openLinks est true on met false 
        // et l'inverse
        setOpenLinks(!openLinks);
    }
    return ( 
        //On crée une class navbar
        //left side pour logo et right info

        //Link to -> nous conduit a

        <div className="navbar"> 
            <div className="leftSide" id = {openLinks ? "open" : "close"}>
                <img src={Logo} alt="logo" />
                <div className="hiddenLinks">
                    <Link to="/"> Home </Link>
                    <Link to="/menu"> Menu </Link>
                    <Link to="/about"> About </Link>
                    <Link to="/contact"> Contact </Link>
                </div>
            </div> 
            <div className="rightSide">
                <Link to="/"> Home </Link>
                <Link to="/menu"> Menu </Link>
                <Link to="/about"> About </Link>
                <Link to="/contact"> Contact </Link>
                <button onClick = {toggleNavbar}>
                    <ReorderIcon />
                </button>
            </div>
        </div>
    )
}

export default Navbar
