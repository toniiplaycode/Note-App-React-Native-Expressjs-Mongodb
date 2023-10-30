import User from "../models/User.js";

export const signupUser = async (req, res) => {
    const { name, email, password } = req.body;

    if(!name || !email || !password) {
        res.status(400);
        throw new Error("Please fill all the field !");
    }

    const checkUserExist = await User.findOne({email});

    if(checkUserExist) {
        res.status(400);
        throw new Error("email used, use a other email !");
        return;
    }
    
    const user = await User.create({
        name, 
        email, 
        password
    })

    if(user) {
        res.status(200).json({
            _id: user._id,
            name: user.name,
            email: user.email
        });
    } else {
        res.status(400);
        throw new Error("cannot create user !");
    }
}

export const signinUser = async(req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if(user && (await user.matchPassword(password))) {
        res.status(200).json({
            _id: user._id,
            name: user.name,
            email: user.email
        });
    } else {
        res.status(400);
        throw new Error("Invalid email or password!");
    }
}
