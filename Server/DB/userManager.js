import { reject } from 'async'
import { resolve } from 'q'
import getConnection from './index'


const connection = getConnection()

export default {
    getAllUsers:()=>{
const query = 'SELECT *FROM users'
return new Promise((resolve, reject)=>
connection.query(query, [], (err,res)=>{
    if(err){reject(err)}
resolve(res)
}))
    },
updateUserPassword:(password,id)=>{
    const query = 'UPDATE users SET password=? WHERE id=?'
    return new Promise((resolve,reject)=>
    connection.query(query,[password, id], (err, res)=>{
        if(err){reject(err)}
        resolve(res)
    })
    )
}
}