const express = require('express');


const url = require('url');

const app = express();

app.set('view engine', 'ejs');

const data = {
  player1: {
    playername: 'MS Dhoni',
    age: 33,
    born: 'July 07,1981',
    birthplace: 'Ranchi',
    role: 'WK-Batsman',
    battingstyle: 'Right Handed Bat',
    bowlingstyle: 'Right-arm medium',
  },
  player2: {
    playername: 'Virat kholi',
    age: 29,
    born: 'November 05,1988',
    birthplace: 'Delhi',
    role: 'Batsman',
    battingstyle: 'Right Handed Bat',
    bowlingstyle: 'Right-arm medium',
  },
  player3: {
    playername: 'Ravindra Jadeja',
    age: 29,
    born: 'December 06,1988',
    birthplace: 'Saurashtra',
    role: 'Bowling Allrounder',
    battingstyle: 'Left Handed Bat',
    bowlingstyle: 'Left-arm orthodox',
  },
};

app.get('/pages/players.html', (req, res) => {
//   const q = url.parse(req.url);
//   const filename = `.${q.pathname}`;
  res.render('players', data);
});
app.get('/pages/home.html', (req, res) => {
  //   const q = url.parse(req.url);
  //   const filename = `.${q.pathname}`;
  res.render('home', data);
});

app.get('/assets/stylesheets/*', (req, res) => {
  const q = url.parse(req.url);
  const filename = `${q.pathname}`;
  res.sendFile(`${__dirname}${filename}`);
});
app.listen(4000);
