const http = require('http');
const countStudents = require('./3-read_file_async');

const app = http.createServer(async (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  if (req.url === '/') {
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
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
  } else {
    res.statusCode = 404;
    res.end('Not found');
  }
});

app.listen(1245);

module.exports = app;
