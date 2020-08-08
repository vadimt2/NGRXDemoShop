import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products/products.component';
import { ProductComponent } from './product/product.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MaterialModule } from 'src/app/shared/material/material.module';



@NgModule({
  declarations: [ProductsComponent, ProductComponent],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [ProductsComponent, ProductComponent]
})
export class ProductsModule { }
