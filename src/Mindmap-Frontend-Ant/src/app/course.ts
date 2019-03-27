export class Course {
  course_id: string;
  course_name: string;
  course_number: string;

  selectCode: string;

  constructor() {
    this.course_id = '';
    this.course_name = '';
    this.course_number = '';

    this.selectCode = '';
  }
}
