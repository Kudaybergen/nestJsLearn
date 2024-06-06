import { BadRequestException } from "@nestjs/common";
import mongoose from "mongoose";



export class Utils{
    static getObjectId(id: string) {
        if (!mongoose.Types.ObjectId.isValid(id))
        throw new BadRequestException('Object is not valid');
        try {
        return new mongoose.Types.ObjectId(id);
        } catch (e) {
        throw new BadRequestException('Bad id');
        }
    }
}