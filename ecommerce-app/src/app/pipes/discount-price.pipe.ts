import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'discountPrice',
})
export class DiscountPricePipe implements PipeTransform {
  transform(price: number, discountPercentage?: number): number {
    if (!discountPercentage || discountPercentage <= 0) {
      return price; // No discount applied
    }
    return price - (price * discountPercentage) / 100;
  }
}
