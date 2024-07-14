import UserModel from '../model/user.js'
import crypto from 'crypto';
import jwt from 'jsonwebtoken';
const secret = "secret hashing token"


export function getLoginForm(req, res) {
    res.render('login/login-form')
}


export async function loginUser(req, res) {
    const {email, password} = req.body
    const sha256Hasher = crypto.createHmac("sha256", secret);
    const hash = sha256Hasher.update(password).digest("hex");
    const user = await UserModel.findOne({email : email, password : hash})

    if (user) {
        const token = jwt.sign({userId: 1}, process.env.JWT_SECRET, {algorithm: "HS256"});
        req.session.token = token

        res.redirect("/admin")
    }
    else {

        const errors = {wrongPassword : "Wrong Password !"}
        res.render('login/login-form', {errors})
        return

    }
}

export function logoutUser( req, res ) {
    delete req.session.token;
    res.redirect("/");
}

