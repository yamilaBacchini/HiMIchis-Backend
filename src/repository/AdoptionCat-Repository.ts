import {AdoptionCat} from "../entity/AdoptionCat";
import {getManager} from "typeorm";

export class AdoptionCatRepository {

    getAll(): Promise<AdoptionCat[]> {
        return getManager().getRepository(AdoptionCat).find();
    }

    getById(id: number): Promise<AdoptionCat> {
        return getManager().getRepository(AdoptionCat).findOne({
            where: {
                id: id
            }
        })
    }
}