SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
/*
GeneretedBy: Hasan Hüseyin Sönmez
Genereted Date: 05/03/2022
Purpose: Takım isimlerinin bilgisini getirir.
Last Modified By:
Last Modification Date:
*/

CREATE PROCEDURE [ERP].[sel_TeamsName]

AS
SET NOCOUNT ON
BEGIN

SELECT
TS.TeamId,
TS.TeamName
FROM ERP.Teams TS WITH (NOLOCK)
END
GO
