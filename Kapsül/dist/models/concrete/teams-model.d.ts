import { GenericResponse } from "src/core/generic-response";
import { Teams } from "src/entities/teams.entity";
import { ITeams } from "../abstract/ITeamsModel";
export declare class TeamsModel implements ITeams {
    GetAll(): Promise<GenericResponse<Teams[]>>;
    Create(entity: Teams | Teams[]): Promise<GenericResponse<number>>;
    Update(entity: Teams): Promise<GenericResponse<Number>>;
    Delete(entity: Teams): Promise<GenericResponse<Number>>;
    GetTeamsName(): Promise<GenericResponse<Teams[]>>;
    GetTeamsByProductCode(productCode: string): Promise<GenericResponse<string[]>>;
}
