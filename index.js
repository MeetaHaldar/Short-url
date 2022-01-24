const express = require("express");
const passport = require ("passport");
const googleStrategy = require("passport-google-oauth20")
let app = express();

passport.use(new googleStrategy ({

    clientID :"832204902510-5cr24m2u3jhoctg49ukkbq02uf2u58hj.apps.googleusercontent.com",
    clientSecret :"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",
    callbackURL : "http://localhost:3000/auth/google/callback"
} , (accessToken, refreshToken , profile, done) => {
  console.log(accessToken)
 console.log(refreshToken)
 console.log(profile)
}
))




// clientId ="832204902510-5cr24m2u3jhoctg49ukkbq02uf2u58hj.apps.googleusercontent.com"
// clientSecret ="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";
// callbackURL = "/auth/google/callback"


app.get(
    "/auth/google",passport.authenticate("google" ,{
        scope :["profile" , "email"]
    })

);

app.get("/auth/google/callback",passport.authenticate("google"))


// const port = process.env.PORT || 3000
app.listen(3000,function(){
    console.log("i m meta haldar");
});