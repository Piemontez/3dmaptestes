import { AppService } from './app.service';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getObj(filename: string): string;
    getGltf(filename: string): string;
    getGlb(filename: string): string;
}
