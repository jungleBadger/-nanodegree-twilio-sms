/**
 * Created by danielabrao on 11/27/16.
 */
(function (process) {
    "use strict";
    require("dotenv").config({silent: true});
    var client = require("twilio")(process.env.TWILIO_SID, process.env.TWILIO_AUTH);
    client.sendMessage({
        to: "+5519995447771",
        from: process.env.TWILIO_NO,
        body: "Test."
    }, function (err, responseData) {
        if (!err) {
            console.log(responseData);
        } else {
            console.log(err);
        }
    });

}(process));