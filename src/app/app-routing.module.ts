import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', loadChildren: './Pages/login/login.module#LoginPageModule' },
  { path: 'register', loadChildren: './Pages/register/register.module#RegisterPageModule' },
  { path: 'cards', loadChildren: './Pages/cards/cards.module#CardsPageModule' },
  { path: 'credit', loadChildren: './Pages/credit/credit.module#CreditPageModule' },
  { path: 'credit/:id', loadChildren: './Pages/credit/credit.module#CreditPageModule' },
  { path: 'debit', loadChildren: './Pages/debit/debit.module#DebitPageModule' },
  { path: 'debit/:id', loadChildren: './Pages/debit/debit.module#DebitPageModule' },
  { path: 'card-details', loadChildren: './Pages/card-details/card-details.module#CardDetailsPageModule' },
  { path: 'add-cards/:id', loadChildren: './Pages/add-cards/add-cards.module#AddCardsPageModule' },
  { path: 'add-cards', loadChildren: './Pages/add-cards/add-cards.module#AddCardsPageModule' },
  { path: 'tabs', loadChildren: './Pages/tabs/tabs.module#TabsPageModule' },
  { path: 'add-profile', loadChildren: './Pages/add-profile/add-profile.module#AddProfilePageModule' },
  { path: 'profile', loadChildren: './Pages/profile/profile.module#ProfilePageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
