const express = require('express');
const countStudents = require('./3-read_file_async');

const app = express();
const port = 1245;

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  res.write('This is the list of our students\n');
  try {
    const databasePath = process.argv[2];
    const { numStudents, fields } = await countStudents(databasePath);

    res.write(`Number of students: ${numStudents}\n`);
    Object.entries(fields).forEach(([field, { count, list }]) => {
      res.write(`Number of students in ${field}: ${count}. List: ${list.join(', ')}\n`);
    });
    res.end();
  } catch (error) {
    res.end('Cannot load the database');
  }
});

app.listen(port);

module.exports = app;
