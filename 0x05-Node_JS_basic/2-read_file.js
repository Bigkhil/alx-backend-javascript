const fs = require('fs');

function countStudents(path) {
  try {
    // Read the database file synchronously
    const data = fs.readFileSync(path, 'utf8');

    // Split the data into lines and remove empty lines
    const lines = data.split('\n').filter((line) => line.trim() !== '');

    // Remove the header line cuz we dont need field names
    const students = lines.slice(1);

    // Count total number of students
    console.log(`Number of students: ${students.length}`);

    // Count students in each field
    const fields = {};
    students.forEach((student) => {
      const [firstName, , , field] = student.split(',');
      if (!fields[field]) {
        fields[field] = { count: 0, list: [] };
      }
      fields[field].count += 1;
      fields[field].list.push(firstName);
    });

    // Log the count and list of students for each field
    Object.entries(fields).forEach(([field, { count, list }]) => {
      console.log(`Number of students in ${field}: ${count}. List: ${list.join(', ')}`);
    });
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
