import {AdoptionCatRepository} from "../repository/AdoptionCat-Repository";
import {AdoptionCat} from "../entity/AdoptionCat";
import {AdoptionCatFilterModel} from "../model/AdoptionCatFilter-Model";

export class AdoptionCatService {

    private adoptionCatRepository = new AdoptionCatRepository();

    getAll(): Promise<AdoptionCat[]> {
        return this.adoptionCatRepository.getAll();
    }

    getById(id: number): Promise<AdoptionCat> {
        return this.adoptionCatRepository.getById(id);
    }

    create(adoptionCat: AdoptionCat): Promise<AdoptionCat> {
        return this.adoptionCatRepository.create(adoptionCat);
    }

    getByFilters(adoptionCatFilterModel: AdoptionCatFilterModel): Promise<AdoptionCat[]> {
        return this.adoptionCatRepository.getByFilters(adoptionCatFilterModel.name, adoptionCatFilterModel.age, adoptionCatFilterModel.gender, adoptionCatFilterModel.color);
    }
}