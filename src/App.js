import React, { Component } from 'react';
import { convertBase64ToUint8Array } from './utils';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  setupPushSubscription() {
    if ('serviceWorker' in navigator) {
      console.log('subscribe push notification service worker');
      var serviceWorkerInstance;
      navigator.serviceWorker.ready
        .then((sw) => {
          serviceWorkerInstance = sw;
          return serviceWorkerInstance.pushManager.getSubscription();
        })
        .then((subscriptionInstance) => {
          if (subscriptionInstance === null) {
            console.log('create new subscription');
            var publicSubscriptionKey = convertBase64ToUint8Array(process.env.REACT_APP_API_PUSH_NOTIFICATION_KEY);
            return serviceWorkerInstance.pushManager.subscribe({
              userVisibleOnly: true,
              applicationServerKey: publicSubscriptionKey
            });
          }
          else { return subscriptionInstance; }
        })
        .then((subscription) => {
          console.log('subscription', subscription);
          // post 'subscription' to your api to save this information to your database
        })
        .catch((error) => {
          console.log('error', error);
        });
    }
  }

  getPermissionForNotification() {
    Notification.requestPermission((result) => {
      if (result === 'granted') {
        console.log('Notification permission granted');
        this.setupPushSubscription();
      }
    });
  }

  componentDidMount() {
    console.log('Component Mounted');
    if ('Notification' in window) {
      console.log('Browser supports notifications');
      this.getPermissionForNotification();
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
