import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ComputerModule } from './computer/computer.module';

@Module({
  imports: [MongooseModule.forRoot("mongodb+srv://kudaibergenovarhat940:nTohFIf0ed4ktOVt@one.rkfut0s.mongodb.net/nest"), ComputerModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
