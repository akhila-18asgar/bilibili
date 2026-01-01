import styles from './Subscriptions.module.css';

function Subscriptions(props) {
    return(
      <div className={styles.logo1}>
       <img className={styles.img1} src={props.image} height={60} width={60}></img>
       <h6 className={styles.title}>{props.title}</h6>
    </div>
    );
}
export default Subscriptions