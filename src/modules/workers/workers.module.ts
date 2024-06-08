import { Module } from '@nestjs/common';
import { WorkersService } from './workers.service';
import { WorkersController } from './workers.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { MONGO_COLLECTION_NAMES } from 'src/enums';
import { Worker, WorkerSchema } from './entity/Worker.entity';

@Module({
  imports: [MongooseModule.forFeature([{name: MONGO_COLLECTION_NAMES.Workers, schema: WorkerSchema}])],
  controllers: [WorkersController],
  providers: [WorkersService],
})
export class WorkersModule {}
