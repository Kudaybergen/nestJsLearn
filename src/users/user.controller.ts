// src/user/user.controller.ts
import { Controller, Post, Body, Get } from '@nestjs/common';
import { CreateUserDto } from './dto/createUser.dto';
import { User } from './enitities/user.entity';
import { UserService } from './user.service';

@Controller('users')
export class UserController {

  constructor(readonly userService: UserService){}

  @Post()
  create(@Body() newUser: CreateUserDto) {
    this.userService.addUser(newUser)
  }

  @Get()
  getAll(): CreateUserDto[]{
    return this.userService.getUsers()
  }
}
