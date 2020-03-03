document.addEventListener('DOMContentLoaded', function() {

  const app = firebase.app()

  const db = firebase.firestore()

  let docRef = db.collection('lootfeeds').doc('M8s8RrmmrYC1wSvjNmx0');

  let setTitle = docRef.set({
    title: 'hello lootfeed'
  });
})
