export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name !== 'string') throw new TypeError('Name must be a string');
    if (typeof length !== 'number') throw new TypeError('Length must be a number');
    if (!Array.isArray(students) && students.every((student) => typeof student !== 'string')) throw new TypeError();
    this._name = name;
    this._length = length;
    this._students = students;
  }

  get name() {
    return this._name;
  }

  get length() {
    return this._length;
  }

  get studnets() {
    return this._students;
  }

  set name(newname) {
    if (typeof newname !== 'string') throw new TypeError('Name must be a string');
    this._name = newname;
  }

  set length(newlength) {
    if (typeof newlength !== 'number') throw new TypeError('length must be a number');
    this._name = newlength;
  }

  set students(newstudents) {
    if (!Array.isArray(students) && newstudents.every((student) => typeof student !== 'string')) throw new TypeError();
    this._students = newstudents;
  }
}
