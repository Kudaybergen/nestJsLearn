import { IsEnum, IsNotEmpty, IsNumber, IsString, Length, Max, Min, max, min } from "class-validator"
import { WorkerStatus } from "src/enums"

export class CreateWorkerDto{

    @IsString()
    @Length(11, 23)
    @IsNotEmpty()
    phone: string

    @IsString()
    @Length(3, 30)
    @IsNotEmpty()
    firstName: string

    @IsString()
    @Length(3, 30)
    @IsNotEmpty()
    lastName: string

    @IsNumber()
    @Min(0)
    @Max(10)
    @IsNotEmpty()
    rating?: number

    @IsNumber()
    @Min(0)
    @Max(10000000)
    @IsNotEmpty()
    balance?: number

    @IsEnum(WorkerStatus)
    @IsNotEmpty()
    status?: WorkerStatus
}