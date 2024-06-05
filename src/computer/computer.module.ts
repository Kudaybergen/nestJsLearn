import { Module } from '@nestjs/common';
import { ComputerService } from './computer.service';
import { ComputerController } from './computer.controller';
import { Mongoose } from 'mongoose';
import { MongooseModule } from '@nestjs/mongoose';
import { ComputerSchema } from './entity/computer.entity';
import { MONGO_COLLECTION_NAMES } from 'src/constants/mongoCollectionName';

@Module({
  imports: [
    MongooseModule.forFeature(
      [
        {
          name: MONGO_COLLECTION_NAMES.Computers,
          schema: ComputerSchema
        }
      ]
    )
  ],
  controllers: [ComputerController],
  providers: [ComputerService],
})
export class ComputerModule {}
