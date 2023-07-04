import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { HomeComponent } from 'src/app/modules/home/home.component';
import { PriceComponent } from 'src/app/modules/price/price.component';
import { SecurityComponent } from 'src/app/modules/security/security.component';
import { AboutComponent } from 'src/app/modules/about/about.component';
import { SupportComponent } from 'src/app/modules/support/support.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';
import { InstitutionsComponent } from 'src/app/modules/institutions/institutions.component';
import { ContactComponent } from 'src/app/modules/contact/contact.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    DefaultComponent,
    HomeComponent,
    PriceComponent,
    SecurityComponent,
    AboutComponent,
    SupportComponent,
    InstitutionsComponent,
    ContactComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class DefaultModule { }
