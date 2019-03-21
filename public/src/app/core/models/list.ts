export class PageableList<T> {
  page: number;
  size: number;
  hasPrevious: boolean;
  hasNext: boolean;
  content: T[];

  constructor(data: any) {
    this.page = data.number;

    this.hasNext = data.totalPages > data.number + 1;
    this.hasPrevious = data.number !== 0;

    this.content = data.content;
  }
}
