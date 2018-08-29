self.addEventListener('push', (event) => {
  console.log('Push Notification Event', event);
  var data = { title: 'push event', content: 'a push notification event occured' }
  if (event.data) {
    data = JSON.parse(event.data.text());
  }
  var options = {
    body: data.content,
    icon: 'favicon.ico',
    badge: 'favicon.ico'
  };

  event.waitUntil(
    self.registrion.showNotification(data.title, options)
  );
});