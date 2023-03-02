import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogonComponent } from './components/logon/logon.component';
import { LoginComponent } from './components/login/login.component';
import { ItemsComponent } from './components/items/items.component';
const routes: Routes = [
  { path: 'Login', component: LoginComponent },
  { path: 'Logon', component: LogonComponent },
  { path: '', component: ItemsComponent },
  { path: 'Items', component: ItemsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
