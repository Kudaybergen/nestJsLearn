import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { MONGO_COLLECTION_NAMES } from 'src/constants/mongoCollectionName';
import { Computer } from './entity/computer.entity';
import { CreateComputerDto } from './dto/createComputer.dto';

@Injectable()
export class ComputerService {
    constructor(@InjectModel(MONGO_COLLECTION_NAMES.Computers) private computerModel: Model<Computer> ){}

    addComputer(dto: CreateComputerDto): string{
        const newComputer = new this.computerModel(dto)
        let res = newComputer.save()
        console.log(res)
        return "added";
    }

    async getAllComputers(): Promise<Computer[]> {
        return await this.computerModel.find().exec();
    }
}
