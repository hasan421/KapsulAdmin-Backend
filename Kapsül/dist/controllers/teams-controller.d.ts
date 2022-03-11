import { GenericResponse } from "src/core/generic-response";
import { ProductDemand } from "src/entities/product-demand.entity";
import { Teams } from "src/entities/teams.entity";
import { TeamsService } from "src/services/concrete/teams-service";
export declare class TeamsController {
    private readonly teamService;
    constructor(teamService: TeamsService);
    GetTeamsNameByProductCode(entity: ProductDemand, response: any): Promise<GenericResponse<string[]>>;
    GetTeamsName(response: any): Promise<GenericResponse<Teams[]>>;
}
