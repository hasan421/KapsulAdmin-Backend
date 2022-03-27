export abstract class TeamsScript{
    public static readonly selectTeamsByProductCode = "EXEC ERP.sel_TeamsByProductCode @0,@1"
    public static readonly selectTeamsName = "EXEC ERP.sel_TeamsName"
}