import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SendComponent } from 'src/app/modules/dashboard/send/send.component';
import { ReceiveComponent } from 'src/app/modules/dashboard/receive/receive.component';
import { DashboardComponent } from './dashboard.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { OverviewComponent } from 'src/app/modules/dashboard/overview/overview.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AccountComponent } from 'src/app/modules/dashboard/account/account.component';



@NgModule({
  declarations: [
    DashboardComponent,
    OverviewComponent,
    AccountComponent,
    SendComponent,
    ReceiveComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class DashboardModule { }
