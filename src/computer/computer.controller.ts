import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put } from '@nestjs/common';
import { ComputerService } from './computer.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateComputerDto } from './dto/createComputer.dto';
import { Computer } from './entity/computer.entity';
import { ResponseTemplate } from 'src/template/Response.templater';
import { retry } from 'rxjs';


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


  @Get(':computerId')
  @ApiOperation({
    summary: "getting computer by id"
  })
  @ApiResponse({
    status: HttpStatus.OK,
    type: Computer
  })
  async getComputerById(@Param('computerId') computerId: string){
    console.log(`computerId: ${computerId}`)
    return this.computerService.findById(computerId)
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
  addComputer(@Body() dto: CreateComputerDto):ResponseTemplate{
    return this.computerService.addComputer(dto)
  }


  @Delete('deleteComputer/:computerId')
  @ApiOperation({
    summary: "deleting the computer"
  })
  @ApiResponse({
    status: HttpStatus.OK,
    type: Computer
  })
  async deleteComputer(@Param('computerId') computerId: string){
    return await this.computerService.deleteComputer(computerId).exec()
  }


  @Put(':computerId')
  @ApiOperation({
    summary: "updating the computer"
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: "Successfully updated",
    type: ResponseTemplate
  })
  async updateComputer(@Param('computerId') computerId: string, @Body() dto: CreateComputerDto){
    return await this.computerService.updateComputer(computerId, dto)
  }
}
