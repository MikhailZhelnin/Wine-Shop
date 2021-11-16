import Link from 'next/link'
import {ShoppingCart, BookmarkBorder, PersonOutline} from '@material-ui/icons';
import { Container, Grid } from '@material-ui/core';

const Header = () => {

    return (
        <>
        <header>
            <Grid container>
                <Grid item lg>
                    <Link href="/">
                            <a> Wines </a>
                        </Link>
                    </Grid>
                <Grid item lg={8}>
                    <nav>
                        <Link href="/">
                            <a> Home </a>
                        </Link>
                        <Link href="/shop">
                            <a> Shop </a>
                        </Link>
                        <Link href="/about-us">
                            <a> About Us </a>
                        </Link>
                        <Link href="/contact">
                            <a> Contact </a>
                        </Link>
                    </nav>
                </Grid>
                <Grid item lg>
                    <nav>
                        <ShoppingCart/>
                        <BookmarkBorder/>
                        <PersonOutline/>
                    </nav>
                </Grid>
            </Grid>
        </header>
        <style jsx>{`
            .header-wrapper {
                display: flex;
            }
        `}</style>
        </>
    )
}

export default Header
