export default function updateStudentGradeByCity(students, city, newGrades) {
    // check arg is an array
    if (Object.getPrototypeOf(students) !== Array.prototype) {
      return [];
    }
    if (Object.getPrototypeOf(newGrades) !== Array.prototype) {
      return [];
    }
    return students.filter((student) => student.location === city).map((student) => {
      const [newGrade] = newGrades.filter((item) => item.studentId === student.id);
      return { ...student, grade: newGrade ? newGrade.grade : 'N/A' };
    });
  }
