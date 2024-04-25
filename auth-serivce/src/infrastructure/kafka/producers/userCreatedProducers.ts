import {Schema} from 'mongoose'
import { producer } from '..';


export const userCreatedProducer = async(
    data:{
        _id: Schema.Types.ObjectId;
        username: string;
        email: string;
        password:string;
        role: string;
        isBlocked:Boolean
    }
)=>{
    try {
        await producer.connect();
        console.log(data.role,"roleeeeeee");
        
        if(data.role === 'user' || data.role === 'admin'){
            const message = {
                topic: 'to-user',
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