import { GenericResponse } from "src/core/generic-response";
import { IRepository } from "src/core/IRepository";
import { Teams } from "src/entities/teams.entity";
export interface ITeamsService extends IRepository<Teams> {
    GetTeamsByProductCode(productCode: string): Promise<GenericResponse<string[]>>;
    GetTeamsName(): Promise<GenericResponse<Teams[]>>;
}
