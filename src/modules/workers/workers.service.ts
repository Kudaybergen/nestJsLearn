import { Injectable } from '@nestjs/common';

@Injectable()
export class WorkersService {

    async getAllWorkers() {
        return "hello world"
    }
}
