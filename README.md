Push Notification Example

Create Subscription keys using web-push,
you should only run this once.
> npm run web-push generate-vapid-keys

You should get:-
Public Key:
[your public key]

Private Key:
[your private key]

replace the public key in .env file in root project
REACT_APP_API_PUSH_NOTIFICATION_KEY = [your public key]

save your private key somewhere safe, we will use this to push messages later

To send push notifications, check Console logs to get the PushSubscription json,
look for the endpoint value, it should look something like this:

https://fcm.googleapis.com/fcm/send/eXBd8BuyE58:APA91bEvVDRiWcXtmwX8vE2GXil2N_4Cof517W7cYTlSedBq3SZX7fGUMVf_QuPIjOqkkaebacAhCTfX61y0fk9RjwywJKORoMhqa_0WA8oqjglJdI4NmF5m9yhiCWphl-8EW0bqHxgC

You will need the public and private key to send messages to this endpoint.
