import Link from 'next/link'
import {font, color, spacing, size} from '../../config/theme'
import { RiShoppingCartLine } from 'react-icons/ri';
import { BsBookmark } from 'react-icons/bs';
import { AiOutlineUser } from 'react-icons/ai';

const Header = () => {

    return (
        <>
        <header className="header">
            <div className="container">
                <div className="header-wrapper">
                    <h2 className="header-title">Winesssss</h2>
                    <nav className="header-nav">
                        <a href="/">Home</a>
                        <a href="/shop">Shop</a>
                        <a href="/about-us">About Us</a>
                        <a href="contact">Contact</a>
                    </nav>
                    <nav className="header-user">
                        <button><RiShoppingCartLine/></button>
                        <button><BsBookmark/></button>
                        <button><AiOutlineUser/></button>
                    </nav>
                </div>
            </div>
            
        </header>
        <style jsx>{`
            .header {
                padding: ${spacing.mini};
                background-color: ${color.background.dark};
                color: ${color.text.light};
            }
            .header-wrapper {
                display: flex;
                justify-content: space-between;
                align-items: center;
            }
            .header-title {
                font-size: ${size.logo.large};
                font-family: ${font.secondary};
            }
            .header-nav a {
                margin-right: 10px;
                cursor: pointer;
                transition: color .2s linear;
            }
            .header-nav a:last-child {
                margin-right: 0;
            }
            .header-nav a:hover {
                color: ${color.text.secondary};
            }
            .header-user {
                display: flex;
                align-items: center;
            }
            .header-user button {
                display: flex;
                justify-content: center;
                align-items: center;
                margin-right: 15px;
                font-size: 20px;
                background: none;
                border: none;
                color: inherit;
                cursor: pointer;
            }
            .header-user button:last-child {
                margin-right: 0;
            }
        `}</style>
        </>
    )
}

export default Header
