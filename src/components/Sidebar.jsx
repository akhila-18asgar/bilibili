import styles from './Sidebar.module.css';

function Sidebar() {
    return(
        <div className={styles.sidebar}>
            <ul className={styles.menu}>
                <li>Home</li>
                <li>Anime</li>
                <li>Trading</li>
                <li>Category</li>
            </ul>
            
            <ul className={styles.menu}>
                <li>History</li>
                <li>Saved videos</li>
                <li>Top up</li>
            </ul>
        </div>
    )
}
export default Sidebar