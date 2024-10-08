export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name !== 'string') throw new TypeError('Name must be a string');
    if (typeof length !== 'number') throw new TypeError('Length must be a number');
    if (!Array.isArray(students)) throw new TypeError('students must be an array');
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

  get students() {
    return this._students;
  }

  set name(newname) {
    if (typeof newname !== 'string') throw new TypeError('Name must be a string');
    this._name = newname;
  }

  set length(newlength) {
    if (typeof newlength !== 'number') throw new TypeError('length must be a number');
    this._length = newlength;
  }

  set students(newstudents) {
    if (!Array.isArray(newstudents)) throw new TypeError('students must be an array');
    this._students = newstudents;
  }
}
