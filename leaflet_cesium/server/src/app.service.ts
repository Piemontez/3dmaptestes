import { Injectable } from '@nestjs/common';
import axios from 'axios';
import * as fs from 'fs';

@Injectable()
export class AppService {
  getObj(filename: string): string {
    return fs.readFileSync(`obj/${filename}.obj`, 'utf-8');
  }

  getGltf(filename: string): string {
    return fs.readFileSync(`obj/${filename}.gltf`, 'utf-8');
  }

  getGlb(filename: string): string {
    return fs.readFileSync(`obj/${filename}.glb`, 'utf-8');
  }

  async getMapTile(x: number, y: number, zoom: number) {
    const response = await axios.get(
      `https://tile.openstreetmap.org/${zoom}/${x}/${y}.png`,
    );
    return response.data;
  }
}
