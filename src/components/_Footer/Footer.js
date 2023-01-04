import styles from './Footer.module.css'

const Footer = () => {
    return (
        <div className={styles.container}>
            <img src='../../images/logo.png' alt='logo-mg' className={styles.imgSize}/>
            <img src='../../images/fb.webp' alt='logo-mg' className={styles.imgSize}/>
            <img src='../../images/ig.webp' alt='logo-mg' className={styles.imgSize}/>
            <img src='../../images/gmail.webp' alt='logo-mg' className={styles.imgSize}/>
            <img src='../../images/tw.webp' alt='logo-mg' className={styles.imgSize}/>
        </div>
    )
};

export default Footer;