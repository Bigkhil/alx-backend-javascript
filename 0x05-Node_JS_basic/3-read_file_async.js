const fs = require('fs').promises;

async function countStudents(path) {
  try {
    const data = await fs.readFile(path, 'utf8');
    const lines = data.split('\n').filter((line) => line.trim() !== '');
    const students = lines.slice(1);

    console.log(`Number of students: ${students.length}`);

    const fields = students.reduce((acc, student) => {
      const [firstName, , , field] = student.split(',');
      if (!acc[field]) {
        acc[field] = { count: 0, list: [] };
      }
      acc[field].count += 1;
      acc[field].list.push(firstName);
      return acc;
    }, {});

    Object.entries(fields).forEach(([field, { count, list }]) => {
      console.log(`Number of students in ${field}: ${count}. List: ${list.join(', ')}`);
    });

    return { numStudents: students.length, fields };
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
