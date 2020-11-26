import { Injectable } from '@nestjs/common';
import { PRODUCTS } from './mock/products.mock';

@Injectable()
export class AppService {
  products = PRODUCTS;

  async getProducts() {
    return await this.products;
  }

  async hi(){
    return await "I am empty and lame. Go see /products."
  }
}
