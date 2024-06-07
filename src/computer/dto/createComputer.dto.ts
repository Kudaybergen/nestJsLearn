import { Prop } from "@nestjs/mongoose"
import { ApiProperty } from "@nestjs/swagger"
import { IsNotEmpty, IsString, Max, Min } from "class-validator"
import mongoose from "mongoose"


export class CreateComputerDto{


    @ApiProperty({
        example: "Intel",
        description: "model of the CPU"
    })
    @IsString()
    @IsNotEmpty()
    @Prop({ required: true })
    CPU: string


    @ApiProperty({
        example: "Nvidia",
        description: "model of the GPU"
    })
    @IsString()
    @IsNotEmpty()
    @Prop({ required: true })
    GPU: string


    @ApiProperty({
        example: 16,
        description: "amount of RAM in gigabytes"
    })
    @IsNotEmpty()
    @Min(0)
    @Max(1000)
    @Prop({ required: true })
    RAM: number


    @ApiProperty({
        example: 1024,
        description: "amount of NVRAM in gigabytes"
    })
    @IsNotEmpty()
    @Min(0)
    @Max(99999)
    @Prop({ required: true })
    NVRAM: number   
}