import classes from './Layout.module.css'
import MainNav from '../layout/MainNav'

function Layout (props) {
    return <div>
        <MainNav />
        <main className={classes.main}>
            {props.children}
        </main>
    </div>

}

export default Layout