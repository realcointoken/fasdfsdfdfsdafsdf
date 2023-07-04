import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './layouts/auth/auth.component';
import { DashboardComponent } from './layouts/dashboard/dashboard.component';
import { DefaultComponent } from './layouts/default/default.component';
import { AboutComponent } from './modules/about/about.component';
import { ContactComponent } from './modules/contact/contact.component';
import { AccountComponent } from './modules/dashboard/account/account.component';
import { OverviewComponent } from './modules/dashboard/overview/overview.component';
import { ReceiveComponent } from './modules/dashboard/receive/receive.component';
import { SendComponent } from './modules/dashboard/send/send.component';
import { HomeComponent } from './modules/home/home.component';
import { InstitutionsComponent } from './modules/institutions/institutions.component';
import { PriceComponent } from './modules/price/price.component';
import { SecurityComponent } from './modules/security/security.component';
import { SigninComponent } from './modules/signin/signin.component';
import { SignupComponent } from './modules/signup/signup.component';
import { AuthGuardService as AuthGuard } from './services/auth-guard.service';

const routes: Routes = [
  {
    path: 'auth',
    component: AuthComponent,
    children: [
      {
        path: 'signin',
        component: SigninComponent,
        data: {
          title: 'Sign in',
          description: 'Description Meta Tag Content'
        }
      },
      {
        path: 'signup',
        component: SignupComponent,
        data: {
          title: 'Sign up',
          description: 'Description Meta Tag Content'
        }
      }
    ]
  },
  {
    path: '',
    component: DefaultComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
        data: {
          title: 'Home',
          description: 'Description Meta Tag Content'
        }
      },
      {
        path: 'price',
        component: PriceComponent,
        data: {
          title: 'Price',
          description: 'Description Meta Tag Content'
        }
      },
      {
        path: 'security',
        component: SecurityComponent,
        data: {
          title: 'Security',
          description: 'Description Meta Tag Content'
        }
      },
      {
        path: 'institutions',
        component: InstitutionsComponent,
        data: {
          title: 'Institutions',
          description: 'Description Meta Tag Content'
        }
      },
      {
        path: 'about',
        component: AboutComponent,
        data: {
          title: 'About',
          description: 'Description Meta Tag Content'
        }
      },
      {
        path: 'contact',
        component: ContactComponent,
        data: {
          title: 'Contact',
          description: 'Description Meta Tag Content'
        }
      }
    ]
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      {
        path: '',
        component: OverviewComponent,
        data: {
          title: 'Overview',
          description: 'Description Meta Tag Content'
        },
        canActivate: [AuthGuard]
      },
      {
        path: 'account',
        component: AccountComponent,
        data: {
          title: 'Account',
          description: 'Description Meta Tag Content'
        },
        canActivate: [AuthGuard]
      },
      {
        path: 'send',
        component: SendComponent,
        data: {
          title: 'Send',
          description: 'Description Meta Tag Content'
        },
        canActivate: [AuthGuard]
      },
      {
        path: 'receive',
        component: ReceiveComponent,
        data: {
          title: 'Receive',
          description: 'Description Meta Tag Content'
        },
        canActivate: [AuthGuard]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
