import { Body, Controller, Get, HttpStatus, Post, Put } from '@nestjs/common';
import { ComputerService } from './computer.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateComputerDto } from './dto/createComputer.dto';
import { Computer } from './entity/computer.entity';
import { ResponseTemplate } from 'src/template/Response.templater';


@ApiTags('Computers')
@Controller('computer')
export class ComputerController {
  constructor(private readonly computerService: ComputerService) {}

  @Get('computerList')
  @ApiOperation({
    summary: "getting list of computers"
  })
  @ApiResponse({
    status: HttpStatus.OK,
    type: [Computer]
  })
  async getAllComputers(): Promise<Computer[]> {
      return await this.computerService.getAllComputers();
  }


  @Post('addComputer')
  @ApiOperation({
    summary: "adding new computer"
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: "Successfully added",
    type: ResponseTemplate
  })
  addComputer(@Body() dto: CreateComputerDto):string{
    return this.computerService.addComputer(dto)
  }
}
