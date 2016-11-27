from twilio import TwilioRestException
from twilio.rest import TwilioRestClient

inp = "../.env"
data = open(inp)
dat = data.read()
lst = dat.splitlines()


def extract_var(raw):
    return raw[raw.find("=") + 1:]


def send_message(phone_num):
    client = TwilioRestClient(extract_var(lst[1]), extract_var(lst[0]))
    try:
        message = client.messages.create(body="Hello from Python",
            to = phone_num,
            from_ = extract_var(lst[2]))
        print(message.sid)
    except TwilioRestException as e:
        print(e)

send_message("+5519986041546")