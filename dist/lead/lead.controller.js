"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LeadController = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const lead_service_1 = require("./lead.service");
let LeadController = class LeadController {
    constructor(leadService) {
        this.leadService = leadService;
    }
    async create(createLeadDto) {
        console.log(createLeadDto);
        return this.leadService.create(createLeadDto);
    }
    async findAll() {
        return this.leadService.findAll();
    }
    async findOne(id) {
        return this.leadService.findOne(+id);
    }
    async update(id, updateLeadDto) {
        return this.leadService.update(+id, updateLeadDto);
    }
    async remove(id) {
        return this.leadService.remove(+id);
    }
};
exports.LeadController = LeadController;
tslib_1.__decorate([
    (0, common_1.Post)(),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], LeadController.prototype, "create", null);
tslib_1.__decorate([
    (0, common_1.Get)(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], LeadController.prototype, "findAll", null);
tslib_1.__decorate([
    (0, common_1.Get)(':id'),
    tslib_1.__param(0, (0, common_1.Param)('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], LeadController.prototype, "findOne", null);
tslib_1.__decorate([
    (0, common_1.Patch)(':id'),
    tslib_1.__param(0, (0, common_1.Param)('id')),
    tslib_1.__param(1, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], LeadController.prototype, "update", null);
tslib_1.__decorate([
    (0, common_1.Delete)(':id'),
    tslib_1.__param(0, (0, common_1.Param)('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], LeadController.prototype, "remove", null);
exports.LeadController = LeadController = tslib_1.__decorate([
    (0, common_1.Controller)('lead'),
    tslib_1.__metadata("design:paramtypes", [lead_service_1.LeadService])
], LeadController);
//# sourceMappingURL=lead.controller.js.map