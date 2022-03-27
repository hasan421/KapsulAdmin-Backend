import { GenericResponse } from "src/core/generic-response";
import { IRepository } from "src/core/IRepository";
import { ProductDemand } from "src/entities/product-demand.entity";
import { Teams } from "src/entities/teams.entity";

export interface ITeamsService extends IRepository<Teams>{
    GetTeamsByProductCode(entitiy:ProductDemand):Promise<GenericResponse<Teams[]>>;
    GetTeamsName():Promise<GenericResponse<Teams[]>>
}