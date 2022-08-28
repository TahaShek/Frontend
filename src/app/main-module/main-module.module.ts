import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainModuleRoutingModule } from './main-module-routing.module';
import { MainModuleComponent } from './main-module.component';
import { HomeComponent } from './MAIN-component/home/home/home.component';
import { HeaderComponent } from './MAIN-component/header/header/header.component';
import { FooterComponent } from './MAIN-component/footer/footer/footer.component';
import { ContactUsComponent } from './MAIN-component/ContactUs/contact-us/contact-us.component';
import { ProductsComponent } from './MAIN-component/Products/products/products.component';
import { ViewProductsComponent } from './MAIN-component/ViewProducts/view-products/view-products.component';
import { CheckOutComponent } from './MAIN-component/CheckOut/check-out/check-out.component';
import { OrderSuccessfullComponent } from './MAIN-component/OrderSuccessfull/order-successfull/order-successfull.component';
import { OrderFailComponent } from './MAIN-component/OrderFail/order-fail/order-fail.component';
import { SpecialsComponent } from './MAIN-component/Specials/specials/specials.component';


@NgModule({
  declarations: [
    MainModuleComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    ContactUsComponent,
    ProductsComponent,
    ViewProductsComponent,
    CheckOutComponent,
    OrderSuccessfullComponent,
    OrderFailComponent,
    SpecialsComponent
  ],
  imports: [
    CommonModule,
    MainModuleRoutingModule
  ]
})
export class MainModuleModule { }
