import { useState, FC} from 'react';

import { IMessage } from '../../types/types';
import { IUser } from '../../types/types';
import styles from './Chat.module.scss'


let socket = new WebSocket('ws://localhost:5000')

interface IChat  {
    user: IUser
}

const Chat : FC <IChat> = ({user}) => {
    const [messages, setMessages] = useState<IMessage[]>([])
    const [newMessage, setNewMessage] = useState('')
    
    socket.onmessage = (event) => {
        const message = JSON.parse(event.data)
        setMessages(prev => [...prev, message])

    }

    const sendMessage = async () => {
        
        const message = {
            event: 'message',
            message: newMessage,
            user: user
        } 
        socket.send(JSON.stringify(message))
        setNewMessage('')
    }

    return (
        <div className={styles.chat}>
            <div className="container">
                <div className={styles.chatInner}>
                    <div className={styles.window}>
                        {messages ? messages.map((message, i) => (
                            <div className={styles.userMessage} key={`key__${i}`}> 
                                <div className={styles.name}>{message.user.name}:</div>
                                <div className={styles.message}>{message.message}</div>
                            </div>
                        )) :
                            <div className='flex justify-center items-center text-white'>Loading</div>
                        }
                    </div>
                    <div className={styles.chatInput}>
                        <input 
                            type="text" 
                            onChange={e => setNewMessage(e.target.value)} 
                            value = {newMessage}
                            className='text-black'
                        />
                        <button onClick={sendMessage}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Chat;