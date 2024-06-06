import { BadRequestException, Injectable, Res } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { MONGO_COLLECTION_NAMES } from 'src/constants/mongoCollectionName';
import { Computer } from './entity/computer.entity';
import { CreateComputerDto } from './dto/createComputer.dto';
import { Utils } from 'src/constants/utils';
import { ResponseTemplate } from 'src/template/Response.templater';

@Injectable()
export class ComputerService {
    constructor(@InjectModel(MONGO_COLLECTION_NAMES.Computers) private computerModel: Model<Computer> ){}

    addComputer(dto: CreateComputerDto): ResponseTemplate{
        const newComputer = new this.computerModel(dto)
        let res = newComputer.save()
        if(!res){
            throw new BadRequestException('Could not create new computer')
        }
        return new ResponseTemplate(200, "/addComputer", "successfully added");
    }

    async findById(computerId: string){
        const objectId = Utils.getObjectId(computerId)
        const res = await this.computerModel.findOne({_id: objectId})
        if(!res){
            throw new BadRequestException('Could not find the the computer')
        }
        return res
    }

    async getAllComputers(): Promise<Computer[]> {
        return await this.computerModel.find().exec();
    }

    deleteComputer(computerId: string){
        const objectId = Utils.getObjectId(computerId)
        return this.computerModel.findOneAndDelete(objectId)
    }

    async updateComputer(computerId: string, body: CreateComputerDto): Promise<ResponseTemplate>{
        const objectId = Utils.getObjectId(computerId)
        const res = await this.computerModel.findByIdAndUpdate(objectId, body, {new: true}).exec()
        if(!res){
            throw new BadRequestException('Could not update the computer')
        }
        return new ResponseTemplate(200, 'computer/{computerId}', "updated")
    }
}
