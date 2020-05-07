import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import {  HttpClientModule, HttpClient } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenubarComponent } from './common/menubar/menubar.component';
import { HomeComponent } from './pages/home/home.component';
import { DealsComponent } from './pages/deals/deals.component';
import { BestsellersComponent } from './pages/bestsellers/bestsellers.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ReviewsComponent } from './pages/reviews/reviews.component';
import { ProductscrollComponent } from './common/productscroll/productscroll.component';
import { ProductComponent } from './common/product/product.component';
import { ScrollDirective } from './directives/scroll.directive';
import { ScrollbackDirective } from './directives/scrollback.directive';
import { ReviewComponent } from './pages/reviews/review/review.component';

@NgModule({
  declarations: [
    AppComponent,
    MenubarComponent,
    HomeComponent,
    DealsComponent,
    BestsellersComponent,
    ContactComponent,
    ReviewsComponent,
    ProductscrollComponent,
    ProductComponent,
    ScrollDirective,
    ScrollbackDirective,
    ReviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
