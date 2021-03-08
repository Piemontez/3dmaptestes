import { Injectable } from '@nestjs/common';
import * as fs from 'fs';

@Injectable()
export class AppService {
  getObj(filename: string): string {
    return fs.readFileSync(`obj/${filename}.obj`, 'utf-8');
  }
}
