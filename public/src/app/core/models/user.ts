import { Project } from './project';
import { WorkHours } from './work-hours';
import { ISerializable } from '../interfaces/ISerializable';
import { Skill } from './skill';

export class User implements ISerializable {

  firstName: string;
  lastName: string;
  skills: Skill[];
  manager: User;
  currentProject: Project;
  onHolidaysTill: Date;
  freeSince: Date;
  workingHours: WorkHours;
  id?: number;

  constructor(user: any) {
    this.firstName = user.firstName;
    this.lastName = user.lastName;
    this.id = user.id;
    this.skills = user.skills;

    this.currentProject = user.currentProject;

    if (user.workingHours) {
      this.workingHours = new WorkHours(user.workingHours);
    }

    if (user.onHolidaysTill) {
      this.onHolidaysTill = new Date(user.onHolidaysTill);
    }

    if (user.freeSince) {
      this.freeSince = new Date(user.freeSince);
    }
  }

  serialize(): any {
    const { id, lastName, firstName, skills, currentProject, workingHours } = this;

    return {
      lastName,
      firstName,
      id,
      skills,
      currentProject,
      workingHours
    };
  }
}
