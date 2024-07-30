import User from '../modal/user.modal.js'
import bcryptjs from 'bcryptjs'

//signup form

export const signup = async (req, res) => {
    try {
        //request data from database
        const { fulname, email, password } = req.body;
        //find data from database
        const user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({ message: "user already exists" })
        }
        //create new user
        const hashPassword = await bcryptjs.hash(password, 8)
        const createdUser = await new User({
            fulname: fulname,
            email: email,
            password: hashPassword
        })

        //save user
        await createdUser.save()
        res.status(201).json({
            message: "User created successfully",
            user: {
                _id: createdUser._id,
                fulname: createdUser.fulname,
                email: createdUser.email
            }
        })
    }
    catch (error) {
        console.log("error" + error.message)
        res.status(500).json({ message: "Internal server error" })
    }

}

//Login Form
export const login = async (req, res) => {

    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });  //finding email
        const isMatch = await bcryptjs.compare(password, user.password); //Matching password
        if (!user || !isMatch) {
            return res.status(400).json({ message: "Invalid Username and password" })
        }
        else {
            return res.status(200).json({
                message: "login Successfully", user: {
                    _id: user.id,
                    fulname: user.fulname,
                    email: user.email
                }
            })
        }
    } catch (error) {
        console("eroor", error.message)
        res.status(500).json({ message: "Internal server error" })
    }



}