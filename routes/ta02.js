//TA02 PLACEHOLDER
// Remember, you can make more of these placeholders yourself!
const express = require('express');
const router = express.Router();

let users = [];
let noExist = false;
let isDuplicate = false;

router.post('/addUser', (req, res, next) => {
  noExist = false;
  isDuplicate = false;
  if (users.length > 0) {
    for (user of users) {
      if (req.body.user === user) {
        isDuplicate = true;
      }
    }
    if (!isDuplicate) {
      users.push(req.body.user);
    }
  } else {
    users.push(req.body.user);
  }
  
  res.redirect('/ta02');
});

router.post('/removeUser', (req, res, next) => {
  noExist = false;
  isDuplicate = false;
  let index = -1;
  for (user of users) {
    if (req.body.remUser === user) {
      index = users.indexOf(user);
      users.splice(index, 1);
    }
    else {
      noExist = true;
    }
  }
  res.redirect('/ta02');
});

router.get('/', (req, res, next) => {
  res.render('pages/ta02', {
    title: 'Team Activity 02',
    path: '/ta02', // For pug, EJS
    activeTA03: true, // For HBS
    contentCSS: true, // For HBS
    usernames: users,
    userNoExist: noExist,
    isDuplicateUser: isDuplicate
  });
  noExist = false;
  isDuplicate = false;
});

module.exports = router;
