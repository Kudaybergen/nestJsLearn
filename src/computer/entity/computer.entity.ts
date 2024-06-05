import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"
import { ApiProperty } from "@nestjs/swagger"
import mongoose from "mongoose"


@Schema()
export class Computer{
    @ApiProperty({
        example: "6659b08318c8c0279d2a733f",
        description: "unique id"
    })
    @Prop({type: mongoose.Types.ObjectId})
    id: mongoose.Types.ObjectId


    @ApiProperty({
        example: "Intel",
        description: "model of the CPU"
    })
    @Prop({ required: true })
    CPU: string


    @ApiProperty({
        example: "Nvidia",
        description: "model of the GPU"
    })
    @Prop({ required: true })
    GPU: string


    @ApiProperty({
        example: 16,
        description: "amount of RAM in gigabytes"
    })
    @Prop({ required: true })
    RAM: number


    @ApiProperty({
        example: 1024,
        description: "amount of NVRAM in gigabytes"
    })
    @Prop({ required: true })
    NVRAM: number   
}

export const ComputerSchema = SchemaFactory.createForClass(Computer)