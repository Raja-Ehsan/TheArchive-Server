const jwt = require('jsonwebtoken')
require('dotenv').config();
const mongoose = require("mongoose");
const userModel = mongoose.model("User");
const handleRefeshToken = async (req, res) => {
    const cookies = req.cookies;
    if (!cookies?.jwt) return res.sendStatus(401)
    const refreshToken = cookies.jwt;
    try {
        let foundUser=await userModel.find({refreshToken:refreshToken});
        if (!foundUser) return res.sendStatus(403)

        jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET,
            (err, decoded) => {

                //    console.log(decoded)
                if (err || foundUser.useName !== decoded.userName) return res.sendStatus(403)
                const accessToken = jwt.sign(
                    { 'name': decoded.userName },
                    process.env.ACCESS_TOKEN_SECRET,
                    { expiresIn: '1m' }
                );
                res.json({
                    aToken: accessToken,
                    foundUser
                })
            }
        )
    } catch (err) {
        console.log(err)
    }
    // mysql.query(`Select * from  user where rToken= '${refreshToken}'`, (err, results, fields) => {
    //     if (err) console.log(err);
    //     else {
    //         let foundUser = results[0];
    //         if (!foundUser) return res.sendStatus(403)

    //         jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET,
    //             (err, decoded) => {

    //                 //    console.log(decoded)
    //                 if (err || foundUser.user_name !== decoded.name) return res.sendStatus(403)
    //                 const accessToken = jwt.sign(
    //                     { 'name': decoded.name },
    //                     process.env.ACCESS_TOKEN_SECRET,
    //                     { expiresIn: '1m' }
    //                 );
    //                 res.json({
    //                     aToken: accessToken,
    //                     foundUser
    //                 })
    //             }
    //         )
    //     }
    // })

}

module.exports = handleRefeshToken