import { Controller, Get } from '@nestjs/common';
import { WorkersService } from './workers.service';
import { ApiResponse, ApiTags } from '@nestjs/swagger';


@ApiTags("workers")
@Controller("workers")
export class WorkersController {
  constructor(private readonly workersService: WorkersService) {}

  @Get("all")
  async getAllWorkers(): Promise<string> {
    return await this.workersService.getAllWorkers()
  }

  @Get("test1")
  async test1(): Promise<string> {
    return "test"
  }

  @ApiResponse({
    status: 200,
    description: "very good",
  })
  @Get("test2")
  async test2(): Promise<string> {
    return "test"
  }


}
