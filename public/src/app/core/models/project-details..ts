import { Project } from './project';
import { User } from './user';

export class ProjectDetails extends Project {
  users: User[];

  constructor(data: any) {
    super(data);

    if (data.users && data.users.length > 0) {
      this.users = data.users.map(user => new User(user));
    }
  }
}
