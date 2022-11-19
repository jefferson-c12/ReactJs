import './navBar.css';
import Button from '../_buttons/buttons';
import CartWidget from '../_CartWidget/CartWidget';

const NavBar = (props) => {
	return (
		<nav style={{backgroundColor: props.bgColor}}>
			<h1 style={{color: props.colorTitle}}><img src={'./images/logo.png'} alt='logo-mg' className='logo'/>E-COMMERS</h1>
			<Button text='Inicio' bgColor='#a4bfd9' colorText='#1a1a1a' />
			<Button text='Productos' bgColor='#a4bfd9' colorText='#1a1a1a' />
			<Button text='About us' bgColor='#a4bfd9' colorText='#1a1a1a' />
			<CartWidget bgColor='#a4bfd9'/>
		</nav>
	)
};

export default NavBar;