import { Controller, Get } from '@nestjs/common';
import { GroupService } from './group.service';

@Controller('groups')
export class GroupController {
  constructor(private readonly groupService: GroupService) {}

  @Get()
  public index() {
    return this.groupService.groups();
  }
}
