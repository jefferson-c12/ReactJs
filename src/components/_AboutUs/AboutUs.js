import styles from './AboutUs.module.css'

const AboutUs = () => {
    return (
        <section className={styles.container}>
            <h1 className={styles.tit}>Nosotros:</h1>
            <p className={styles.parraf}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer iaculis tellus luctus odio fringilla lacinia. Maecenas vitae sapien eros. Nulla facilisi. Duis risus odio, maximus ut facilisis at, ultrices at metus. Ut non efficitur ipsum. Nam hendrerit velit a sodales accumsan. Vestibulum ultrices auctor aliquam. Sed consequat lorem sit amet tellus ultricies, eu tempus lorem semper. Integer lobortis lobortis maximus. Donec venenatis ex sed est tincidunt tempus. Duis nec est volutpat tortor tempor congue eget sagittis leo. Nam rutrum malesuada erat et lacinia. Sed pretium porta tellus, sed tincidunt justo ornare sit amet.</p>
        </section>
    )
};

export default AboutUs;
