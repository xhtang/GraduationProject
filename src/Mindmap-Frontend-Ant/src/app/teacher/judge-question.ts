export class JudgeQuestion {
  title: string;
  correct_answer: string;

  correct_number: string;
  number: string;

  value: number;

  constructor() {
    this.title = '';
    this.correct_answer = '';
    this.correct_number = '';
    this.number = '';

    this.value = 1;
  }
}
