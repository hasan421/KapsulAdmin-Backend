import { GenericResponse } from "src/core/generic-response";
import { Connection, EntityManager, getConnection, getManager, QueryRunner } from "typeorm";
import { ProductDemandModel } from "src/models/concrete/product-demand-model";
import { ProductDemand } from "src/entities/product-demand.entity";
import { HttpError } from "src/core/error/http-error";
import { SystemErrorMessage } from "src/utilities/constants/error-message";
import { CalculaterTotalProductQuantityPrice } from "src/helper/product-quantity-calculater";

export class ProductProcess {
private productDemandModel:ProductDemandModel
  async Product(entity:ProductDemand): Promise<GenericResponse<number>> {
    let returnObject: GenericResponse<number> = null;

    // establish real database connection using our new query runner
    
    // now we can execute any queries on a query runner, for example:
    const connection: Connection = getConnection();

    const queryRunner: QueryRunner = connection.createQueryRunner();
    
    // we can also access entity manager that works with connection created by a query runner:
    
    // lets now open a new transaction:

    try {
      await queryRunner.startTransaction()

      for( let i = 0 ; i < 10 ; i++)
      {
        if(i == 5 ) entity.productName = null

        // execute some operations on this transaction:
      return  await queryRunner.query("EXEC ERP.ins_ProductDemands @0,@1,@2,@3,@4",
        [
          entity.productName,
          entity.productType,
          entity.productCode,
          entity.productLink,
          entity.productImage
        ])
        // commit transaction now:
      }
      await queryRunner.commitTransaction()

    } catch (err) {
        // since we have errors let's rollback changes we made
        await queryRunner.rollbackTransaction()
    } finally {
        // you need to release query runner which is manually created:
        await queryRunner.release()
    }
    return returnObject;
  }
}
