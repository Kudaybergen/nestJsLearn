import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { ApiPropertyOptional } from "@nestjs/swagger";
import mongoose from "mongoose";
import { WorkerStatus } from "src/enums"

@Schema()
export class Worker{
    @ApiPropertyOptional({
        example: "6662b626bf70191945eafd03",
        description: 'уникальный _id',
      })
    @Prop({ type: mongoose.Types.ObjectId })
    _id: mongoose.Types.ObjectId;

    @Prop({ required: true })
    phone: string

    @Prop({ required: true })
    firstName: string

    @Prop({ required: true })
    lastName: string

    @Prop({
        required: false,
        default: 0
    })
    rating?: number

    @Prop({
        required: false,
        default: 0
    })
    balance?: number

    @Prop({ 
        required: false,
        default: WorkerStatus.OFFLINE
     })
    status?: WorkerStatus
}

export const WorkerSchema = SchemaFactory.createForClass(Worker)