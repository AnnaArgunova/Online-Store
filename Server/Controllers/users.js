import Router from 'express'
import UserManager from '../DB/userManager'

const userRouter = Router()

userRouter.get('/', async(req, res)=>{
    const users = await UserManager.getAllUsers()
    res.send(users)
})

userRouter.post('/update-password', async(req,res)=>{
    const{password,id} = req.body
    const users = await UserManager.updateUserPassword(password,id)
    res.send(users)
})

export default userRouter