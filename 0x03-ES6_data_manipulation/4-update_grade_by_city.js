export default function updateStudentGradeByCity(arr, city, newGrades) {
  return arr
    .filter((ele) => ele.location === city)
    .map((ele) => {
      const { id } = ele;
      let found = 0;
      for (const grade of newGrades) {
        if (id === grade.studentId) {
          found = 1;
          ele.grade = grade.grade;
          break;
        }
      }
      if (!found) ele.grade = 'N/A';
      return ele;
    });
}
