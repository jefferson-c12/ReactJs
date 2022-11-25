import styles from './navBar.module.css'
import ButtonNav from '../_buttons/buttons';
import CartWidget from '../_CartWidget/CartWidget';

const NavBar = () => {
	return (
		<nav className={styles.bgNav}>
			<h1 className={styles.fontColorBlack}><img src={'./images/logo.png'} alt='logo-mg' className={styles.logo}/>E-COMMERS</h1>
			<ButtonNav text='Inicio' />
			<ButtonNav text='Productos' />
			<ButtonNav text='About us' />
			<CartWidget />
		</nav>
	)
};

export default NavBar;