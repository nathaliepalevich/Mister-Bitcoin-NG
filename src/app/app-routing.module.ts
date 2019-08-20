import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component'
import { ContactPageComponent } from './pages/contact-page/contact-page.component'
import { ContactDetailsComponent } from './pages/contact-details/contact-details.component'
import { StatisticPageComponent } from './pages/statistic-page/statistic-page.component'
import { SignupPageComponent } from './pages/signup-page/signup-page.component'
import { ContactEditPageComponent } from './pages/contact-edit-page/contact-edit-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'contact', component: ContactPageComponent },
  { path: 'statistics', component: StatisticPageComponent },
  { path: 'contact/:id', component: ContactDetailsComponent },
  { path: 'contact/edit/:id?', component: ContactEditPageComponent },
  { path: 'signup', component: SignupPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
