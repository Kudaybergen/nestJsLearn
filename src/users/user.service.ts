import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/createUser.dto';
import { User } from './enitities/user.entity';

@Injectable()
export class UserService {

    
    private allUsers: CreateUserDto[] = []

    getUsers(): CreateUserDto[]{
        return this.allUsers;
    }

    addUser(user: CreateUserDto): void{
        this.allUsers.push(user)
    }
}
