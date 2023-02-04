import { FormEvent, useState } from 'react';
import {v4 as uuidv4} from 'uuid'

import { IUser } from '../../types/types';

import styles from './Login.module.scss'
import Chat from '../Chat/Chat';

const Login = () => {
    const [user, setUser] = useState<IUser>({
        name: '',
        id: ''
    })
    const [isLogin, setIsLogin] = useState(false)


    const handleSubmit = (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setIsLogin(true)
    }


    if(!isLogin) {
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
    }

    return (
        <>
            <Chat user={user}/>
        </>
    )
    

};

export default Login;