import styles from './navBar.module.css'
import ButtonsNav from '../_buttons/buttons';


const NavBar = () => {
	return (
		<nav className={`${styles.bgNav} ${styles.navBorder}`}>
			<h1 className={styles.fontColorBlack}><img src='../../images/logo.png' alt='logo-mg' className={styles.logo}/>E-COMMERS</h1>
			<ButtonsNav />
		</nav>
	)
};

export default NavBar;