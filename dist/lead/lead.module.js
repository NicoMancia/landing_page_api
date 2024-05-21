"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LeadModule = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const lead_service_1 = require("./lead.service");
const lead_controller_1 = require("./lead.controller");
const prisma_service_1 = require("../prisma.service");
let LeadModule = class LeadModule {
};
exports.LeadModule = LeadModule;
exports.LeadModule = LeadModule = tslib_1.__decorate([
    (0, common_1.Module)({
        controllers: [lead_controller_1.LeadController],
        providers: [lead_service_1.LeadService, prisma_service_1.PrismaService],
    })
], LeadModule);
//# sourceMappingURL=lead.module.js.map