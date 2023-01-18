import { FormEvent, useState } from 'react';
import {v4 as uuidv4} from 'uuid'

import styles from './Login.module.scss'

interface IUser {
    name: string,
    id: string
}

const Login = () => {
    const [user, setUser] = useState<IUser>()

    const handleSubmit = (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log(user)
    }

    return (
        <div className={styles.login}>
            <div className='container'>
                <div className={styles.wrapperLogin}>
                    <h1 className={styles.heading}>Sign In</h1>
                    <form 
                        className={styles.form}
                        onSubmit={handleSubmit}
                    >
                        <input 
                            className={styles.inputForm}
                            type="text" 
                            placeholder='name'
                            onChange={e => setUser({
                                name: e.target.value,
                                id: uuidv4()
                            })}
                        />
                        <button
                            className={styles.btn}
                        >Sign In</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;