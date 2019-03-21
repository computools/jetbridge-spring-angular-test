export class WorkHours {
  id: number;
  start: Date;
  end: Date;

  constructor(data: any) {
    this.id = data.id;
    this.start = data.start;
    this.end = data.end;
  }
}
