export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name !== 'string') throw new TypeError();
    if (typeof length !== 'number') throw new TypeError();
    if (!(students instanceof Array) && students.every((student) => typeof student !== 'string')) throw new TypeError();
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
    this._name = newname;
  }

  set length(newlength) {
    this._name = newlength;
  }

  set students(newstudents) {
    this._students = newstudents;
  }
}
