import {Schema} from 'mongoose'
import { producer } from '..';
import {UserEntity} from '../../../domain/entities'


export const userCreatedProducer = async( data: UserEntity )=>{
    try {
        await producer.connect();
        console.log(data.role,"roleeeeeee");
        console.log(data,"dataaaaaa");
        
        if(data.role === 'user' || data.role === 'admin'){
            const message = {
                topic: 'to-user1',
                messages: [{
                    key: 'userCreated',
                    value: JSON.stringify(data)
                }]
            };
            console.log(message,"message-queeeee");
            
            await  producer.send(message);
        }else{
            throw new Error("undefined role")
        }

    } catch (error:any) {
        console.error('kafka produce error:',error?.message)
    } finally{
        await producer.disconnect();
    }
}