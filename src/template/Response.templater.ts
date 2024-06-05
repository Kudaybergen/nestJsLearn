import { ApiProperty } from "@nestjs/swagger";



export class ResponseTemplate{
    @ApiProperty({
        example: 200,
        description: "status code from server"
    })
    statusCode: number

    @ApiProperty({
        example: "/computer/computerList",
        description: "path"
    })
    path: string

    @ApiProperty({
        example: "success",
        description: "message from server"
    })
    message: string

    @ApiProperty({
        description: "i did not see how to implement this"
    })
    data: []
}