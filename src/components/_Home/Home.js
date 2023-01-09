import styles from './Home.module.css'

const Home = () => {
    return(
        <section className={styles.container}>
            <h2 className={styles.title}>Nuestras sucursales:</h2>
            <div className={styles.divContainer}>
                <img className={styles.img} src='../../images/localcd.jpg' alt="sucursal1"/>
                <p className={styles.parraf}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras maximus felis erat, ut scelerisque augue vestibulum id. Proin vel eros at arcu feugiat consequat nec luctus velit. Nunc mollis at velit a viverra. Proin accumsan mi ac est tincidunt posuere. Sed pretium dui eu congue vulputate. Nunc ultricies mattis nisl, a tincidunt arcu sollicitudin eget. Morbi aliquet magna in lacus iaculis, sed egestas est fermentum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent sollicitudin libero in neque rhoncus, sed fringilla quam finibus.</p>
            </div>
            <div className={styles.divContainer}>
                <p className={styles.parraf}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras maximus felis erat, ut scelerisque augue vestibulum id. Proin vel eros at arcu feugiat consequat nec luctus velit. Nunc mollis at velit a viverra. Proin accumsan mi ac est tincidunt posuere. Sed pretium dui eu congue vulputate. Nunc ultricies mattis nisl, a tincidunt arcu sollicitudin eget. Morbi aliquet magna in lacus iaculis, sed egestas est fermentum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent sollicitudin libero in neque rhoncus, sed fringilla quam finibus.</p>
                <img className={styles.img} src='../../images/localsc.jpg' alt="sucursal2"/>
            </div>
        </section>
    )
}

export default Home;