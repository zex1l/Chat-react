import {useNavigate} from 'react-router-dom'
import styles from './Home.module.scss';

const Home = () => {

    const navigate = useNavigate()

    const onStart = () => {
        navigate('/login')
    }
    
    return (
        <div className={styles.home}>
            <div className='container'>
                <div className={styles.homeWrapper}>
                    <h1 className={styles.heading}>Simply Chat on React</h1>
                    <button
                        className={styles.btn}
                        onClick={onStart}
                    >Start</button>
                </div>
            </div>
        </div>
    );
};

export default Home;