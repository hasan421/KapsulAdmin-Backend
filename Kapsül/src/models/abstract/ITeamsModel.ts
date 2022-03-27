import { GenericResponse } from "src/core/generic-response";
import { IRepository } from "src/core/IRepository";
import { ProductDemand } from "src/entities/product-demand.entity";
import { Teams } from "src/entities/teams.entity";

export interface ITeams extends IRepository<Teams>{
    GetTeamsByProductCode(entity:ProductDemand):Promise<GenericResponse<Teams[]>>;
    GetTeamsName():Promise<GenericResponse<Teams[]>>

}