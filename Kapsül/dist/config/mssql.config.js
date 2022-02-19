"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.configService = void 0;
require('dotenv').config();
class ConfigService {
    constructor(env) {
        this.env = env;
    }
    getValue(key, throwOnMissing = true) {
        const value = this.env[key];
        if (!value && throwOnMissing) {
            throw new Error(`config error - missing env.${key}`);
        }
        return value;
    }
    ensureValues(keys) {
        keys.forEach(k => this.getValue(k, true));
        return this;
    }
    getPort() {
        return this.getValue('PORT', true);
    }
    isProduction() {
        const mode = this.getValue('MODE', false);
        return mode != 'DEV';
    }
    getTypeOrmConfig() {
        return {
            type: 'mssql',
            host: this.getValue('MSSQL_HOST'),
            port: parseInt(this.getValue('MSSQL_PORT')),
            username: this.getValue('MSSQL_USER'),
            password: this.getValue('MSSQL_PASSWORD'),
            database: this.getValue('MSSQL_DATABASE'),
            migrationsTableName: 'migration',
            migrations: ['src/migration/*.ts'],
            cli: {
                migrationsDir: 'src/migration',
            },
            ssl: this.isProduction(),
        };
    }
}
const configService = new ConfigService(process.env)
    .ensureValues([
    'MSSQL_HOST',
    'MSSQL_PORT',
    'MSSQL_USER',
    'MSSQL_PASSWORD',
    'MSSQL_DATABASE'
]);
exports.configService = configService;
//# sourceMappingURL=mssql.config.js.map