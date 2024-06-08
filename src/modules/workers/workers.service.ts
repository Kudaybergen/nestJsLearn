import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { MONGO_COLLECTION_NAMES } from 'src/enums';
import { Worker } from './entity/Worker.entity';
import { Model } from 'mongoose';
import { CreateWorkerDto } from './dto/createWorker.dto';
import { SimpleResponse } from 'src/template/SimpleResponse';

@Injectable()
export class WorkersService {
    constructor(@InjectModel(MONGO_COLLECTION_NAMES.Workers) private workerModel: Model<Worker>){}

    async getAllWorkers() {
        return "hello world"
    }

    async addWorker(newWorker: CreateWorkerDto){
        try{
            const createWorker = new this.workerModel(newWorker)
            const result =  await createWorker.save()
            if (result){
                return new SimpleResponse(
                    "/workers/add",
                    HttpStatus.CREATED,
                    "worker created"
                )
            }else{
                return new SimpleResponse(
                    "workers/add",
                    HttpStatus.BAD_REQUEST,
                    "Could not create the worker"
                )
            }
        }catch(e){
            console.log(e)
            return new SimpleResponse(
                "workers/add",
                HttpStatus.INTERNAL_SERVER_ERROR,
                "Something wrong with server, CONTACT US"
            )
        }
    }
}
