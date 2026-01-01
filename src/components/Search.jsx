import styles from './search.module.css';
import image from '../assets/images.png';

function Search() {
    return (
        <div>
            <nav className={styles.nav}>
            <input className={styles.sr} type="text" placeholder="Search..." />
            <button className={styles.sb} type="create">create</button>
            <img src={image} height={40} width={40}></img>
            </nav>
        </div>
    );
}
export default Search