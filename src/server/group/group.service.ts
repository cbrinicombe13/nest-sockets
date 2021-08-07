import { Injectable } from '@nestjs/common';
import { Group } from '../../shared/interfaces/Group';

@Injectable()
export class GroupService {
  private _groups: Group[] = [
    {
      id: 0,
      name: 'Javascript',
    },
    {
      id: 1,
      name: 'PHP',
    },
    {
      id: 2,
      name: '.NET',
    },
    {
      id: 3,
      name: 'Frontend',
    },
    {
      id: 4,
      name: 'Backend',
    },
  ];

  public groups(): Group[] {
    return this._groups;
  }
}
