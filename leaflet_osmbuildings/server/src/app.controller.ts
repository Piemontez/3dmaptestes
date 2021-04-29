import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('obj/:filename')
  getHello(@Param('filename') filename: string): string {
    return this.appService.getObj(filename);
  }
}
