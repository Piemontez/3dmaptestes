"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppService = void 0;
const common_1 = require("@nestjs/common");
const axios_1 = require("axios");
const fs = require("fs");
let AppService = class AppService {
    getObj(filename) {
        return fs.readFileSync(`obj/${filename}.obj`, 'utf-8');
    }
    getGltf(filename) {
        return fs.readFileSync(`obj/${filename}.gltf`, 'utf-8');
    }
    getGlb(filename) {
        return fs.readFileSync(`obj/${filename}.glb`, 'utf-8');
    }
    async getMapTile(x, y, zoom) {
        const response = await axios_1.default.get(`https://tile.openstreetmap.org/${zoom}/${x}/${y}.png`);
        console.log(response.data);
        return response.data;
    }
};
AppService = __decorate([
    common_1.Injectable()
], AppService);
exports.AppService = AppService;
//# sourceMappingURL=app.service.js.map