/**
 * Created by danielabrao on 11/27/16.
 */
(function (process) {
    "use strict";
    require("dotenv").config({silent: true});
    var client = require("twilio")(process.env.TWILIO_SID, process.env.TWILIO_AUTH);

    module.exports = {
        "sendMessage": function (phone_num) {
            client.sendMessage({
                to: phone_num,
                from: process.env.TWILIO_NO,
                body: "Test."
            }, function (err, responseData) {
                if (!err) {
                    console.log(responseData);
                } else {
                    console.log(err);
                }
            });
        }
    };
}(process));