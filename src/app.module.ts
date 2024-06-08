import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { WorkersModule } from './modules/workers/workers.module';

@Module({
  imports: [MongooseModule.forRoot("mongodb+srv://kudaibergenovarhat940:nTohFIf0ed4ktOVt@one.rkfut0s.mongodb.net/nest"), 
    WorkersModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
