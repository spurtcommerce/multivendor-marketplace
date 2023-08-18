"use strict";
/*
 * spurtcommerce API
 * version 4.8.2
 * Copyright (c) 2021 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ZoneRepository = void 0;
const tslib_1 = require("tslib");
const typeorm_1 = require("typeorm");
const Zone_1 = require("../models/Zone");
let ZoneRepository = class ZoneRepository extends typeorm_1.Repository {
};
ZoneRepository = tslib_1.__decorate([
    (0, typeorm_1.EntityRepository)(Zone_1.Zone)
], ZoneRepository);
exports.ZoneRepository = ZoneRepository;
//# sourceMappingURL=ZoneRepository.js.map