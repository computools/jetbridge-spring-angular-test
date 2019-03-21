import { ISerializable } from '../interfaces/ISerializable';

export class Project {
  id: number;
  title: string;

  constructor(
    project: any
  ) {
    this.id = project.id;
    this.title = project.tittle;
  }
}
