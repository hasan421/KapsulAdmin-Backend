"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductProcess = void 0;
const typeorm_1 = require("typeorm");
class ProductProcess {
    async Product(entity) {
        let returnObject = null;
        const connection = (0, typeorm_1.getConnection)();
        const queryRunner = connection.createQueryRunner();
        try {
            await queryRunner.startTransaction();
            for (let i = 0; i < 10; i++) {
                if (i == 5)
                    entity.productName = null;
                return await queryRunner.query("EXEC ERP.ins_ProductDemands @0,@1,@2,@3,@4", [
                    entity.productName,
                    entity.productType,
                    entity.productCode,
                    entity.productLink,
                    entity.productImage
                ]);
            }
            await queryRunner.commitTransaction();
        }
        catch (err) {
            await queryRunner.rollbackTransaction();
        }
        finally {
            await queryRunner.release();
        }
        return returnObject;
    }
}
exports.ProductProcess = ProductProcess;
//# sourceMappingURL=product-process.js.map