import { Body, Controller, Get, Post } from '@nestjs/common';
import { WorkersService } from './workers.service';
import { ApiBadRequestResponse, ApiBody, ApiNotFoundResponse, ApiOkResponse, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateWorkerDto } from './dto/createWorker.dto';
import { Worker, WorkerSchema } from './entity/Worker.entity';


@ApiTags("workers")
@Controller("workers")
export class WorkersController {
  constructor(private readonly workersService: WorkersService) {}

  @Get("all")
  async getAllWorkers(): Promise<string> {
    return await this.workersService.getAllWorkers()
  }


  @Post("add")
  async addWorker(@Body() newWorker: CreateWorkerDto): Promise<Worker | unknown | {}> {
    return await this.workersService.addWorker(newWorker)
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
