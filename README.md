# -nanodegree-renameFiles
Python and Node.JS implementation of 'send_message' from udacity full stack web dev nanodegree

## Objective
Send a SMS via Twilio middleware

## Dependencies
- Twilio library
- .env file with TWILIO_AUTH, TWILIO_SID and TWILIO_NO info

## Python
- instal twilio from easy_install
- just run the script from /py/send_message.py

## Node.js
- run npm install to install twilio and dotenv
- require ("js/send_message") and use as a module passing the destionation number as parameter
- exposes method init that accepts a folder path and an array of blacklist characters
