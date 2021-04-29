import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('obj/:filename')
  getObj(@Param('filename') filename: string): string {
    return this.appService.getObj(filename);
  }

  @Get('gltf/:filename')
  getGltf(@Param('filename') filename: string): string {
    return this.appService.getGltf(filename);
  }

  @Get('glb/:filename')
  getGlb(@Param('filename') filename: string): string {
    return this.appService.getGlb(filename);
  }

  @Get('map/:z/:x/:y/')
  getMapTile(
    @Param('z') z: number,
    @Param('x') x: number,
    @Param('y') y: number,
  ): Promise<any> {
    return this.appService.getMapTile(x, y, z);
  }
}
