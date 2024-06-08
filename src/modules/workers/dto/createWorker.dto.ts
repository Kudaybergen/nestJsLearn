import { ApiProperty } from "@nestjs/swagger"
import { IsEnum, IsNotEmpty, IsNumber, IsString, Length, Max, Min, max, min } from "class-validator"
import { WorkerStatus } from "src/enums"

export class CreateWorkerDto{

    @IsString()
    @Length(11, 23)
    @IsNotEmpty()
    @ApiProperty({
        description: "phone",
        example: "87055031427"
    })
    phone: string

    @IsString()
    @Length(3, 30)
    @IsNotEmpty()
    @ApiProperty({
        description: "name",
        example: "Абай"
    })
    firstName: string

    @IsString()
    @Length(3, 30)
    @IsNotEmpty()
    @ApiProperty({
        description: "lastName",
        example: "Кунанбаев"
    })
    lastName: string

    @IsNumber()
    @Min(0)
    @Max(10)
    @IsNotEmpty()
    @ApiProperty({
        description: "Rating from 0 to 10",
        example: "9",
        required: false
    })
    rating?: number

    @IsNumber()
    @Min(0)
    @Max(10000000)
    @IsNotEmpty()
    @ApiProperty({
        description: "balance in tenge",
        example: "50000",
        required: false
    })
    balance?: number

    @IsEnum(WorkerStatus)
    @IsNotEmpty()
    @ApiProperty({
        description: "Status",
        example: "OFFLINE",
        required: false,
        enum: WorkerStatus
    })
    status?: WorkerStatus
}