export declare class AppService {
    getObj(filename: string): string;
    getGltf(filename: string): string;
    getGlb(filename: string): string;
    getMapTile(x: number, y: number, zoom: number): Promise<any>;
}
