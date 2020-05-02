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

    create(adoptionCat: AdoptionCat): Promise<AdoptionCat> {
        return getManager().getRepository(AdoptionCat).save((adoptionCat));
    }

    getByFilters(name: string, age: number, gender: string, color: string): Promise<AdoptionCat[]> {
        return getManager().getRepository(AdoptionCat).createQueryBuilder("AdoptionCat")
            .where("AdoptionCat.name like :name", { name: '%' + name + '%' })
            .andWhere("AdoptionCat.age = :age", { age: age })
            .andWhere("AdoptionCat.gender = :gender", { gender: gender } )
            .andWhere("AdoptionCat.color like :color", { color: '%' + color + '%' })
            .getMany();
    }
}