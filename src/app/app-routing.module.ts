import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {OffersCreditComponent} from "./offers-credit/offers-credit.component";
import {AddOfferComponent} from "./add-offer/add-offer.component";
import {RequestComponent} from "./request/request.component";
import {MatchingComponent} from "./matching/matching.component";
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ListuserComponent } from './listuser/listuser.component';
import { AddUserComponent } from './add-user/add-user.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import { AuthGuard } from '../app/core/service/auth.guard';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {path:"home",component:HomeComponent},
  {path:"listoffer",component:OffersCreditComponent},
  {path:"addOffer",component:AddOfferComponent},
  {path:"listRequest",component:RequestComponent},
  {path:"Matching",component:MatchingComponent},
  {
    path: 'home',
    component: HomeComponent,
    // canActivateChild: [AuthGuard], //Ajoutez le guard ici
    children: [
      {
        path: 'home',
        loadChildren: ()=> import('./home/home.component').then(m => m.HomeComponent)
      },
      {
        path: 'listUsers',
        component: ListuserComponent
      },
      {
        path: 'adduser',
        component: AddUserComponent
      },
      {
        path: 'profile',
        component: ProfileComponent
      },
    ],
  },
  {
    path: 'signin',
      component: SignInComponent,
      children: [
        {
          path: 'signin',
          loadChildren: ()=> import('./sign-in/sign-in.component').then(m => m.SignInComponent)
        }
      ]
    },
    {
      path: 'forgetPwd',
        component: ForgetPasswordComponent,
        children: [
          {
            path: 'forgetPwd',
            loadChildren: ()=> import('./forget-password/forget-password.component').then(m => m.ForgetPasswordComponent)
          }
        ]
      },
      {
        path: 'resetPassword',
          component: ResetpasswordComponent,
          children: [
            {
              path: 'resetPassword',
              loadChildren: ()=> import('./resetpassword/resetpassword.component').then(m => m.ResetpasswordComponent)
            }
          ]
        },
    {
      path: 'signup',
        component: SignUpComponent,
        children: [
          {
            path: 'signup',
            loadChildren: ()=> import('./sign-up/sign-up.component').then(m => m.SignUpComponent)
          }
        ]
      },
      {
        path: '**',
          component: PageNotFoundComponent,
          
        },
      // {
      //   path: 'listUsers',
      //     component: ListuserComponent,
      //     children: [
      //       {
      //         path: 'listUsers',
      //         loadChildren: ()=> import('./listuser/listuser.component').then(m => m.ListuserComponent)
      //       }
      //     ]
      //   },
    
  




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
