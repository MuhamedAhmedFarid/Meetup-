import { Link } from "react-router-dom"

import classes from './MainNav.module.css'


function MainNav () {
    return(
        <header className={classes.header}>
            <div className={classes.logo}>logo</div>
            <nav className={classes.nav}>
                <ul>
                    <li>
                       <Link className={classes.link} to='/'>All Meetup</Link> 
                    </li>
                    
                </ul>
                <ul>
                    <li>
                        <Link className={classes.link} to='/NewMeetupPage'>Add New Meetup</Link>
                    </li>
                    
                </ul>
                <ul>
                    <li>
                        <Link className={classes.link} to='/FavoritesPage'>Favorites </Link>
                    </li>
                    
                </ul>
            </nav>
        </header>

    )
}


export default MainNav