import { GenericResponse } from "src/core/generic-response";
import { ProductDemand } from "src/entities/product-demand.entity";
import { Teams } from "src/entities/teams.entity";
import { ITeamsService } from "../abstract/ITeamsService";
export declare class TeamsService implements ITeamsService {
    private teamsemandModel;
    GetAll(): Promise<GenericResponse<Teams[]>>;
    Create(entity: Teams | Teams[]): Promise<GenericResponse<number>>;
    Update(entity: Teams): Promise<GenericResponse<Number>>;
    Delete(entity: Teams): Promise<GenericResponse<Number>>;
    GetTeamsByProductCode(entity: ProductDemand): Promise<GenericResponse<Teams[]>>;
    GetTeamsName(): Promise<GenericResponse<Teams[]>>;
}
