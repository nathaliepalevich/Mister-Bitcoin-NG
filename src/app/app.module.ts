import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import { GoogleChartsModule } from 'angular-google-charts';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomePageComponent } from './pages/home-page/home-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { ContactDetailsComponent } from './pages/contact-details/contact-details.component';
import { ContactEditPageComponent } from './pages/contact-edit-page/contact-edit-page.component';
import { StatisticPageComponent } from './pages/statistic-page/statistic-page.component';
import { SignupPageComponent } from './pages/signup-page/signup-page.component';

import { ContactPreviewComponent } from './components/contact-preview/contact-preview.component';
import { ContactListComponent } from './components/contact-list/contact-list.component';
import { ContactFilterComponent } from './components/contact-filter/contact-filter.component';
import { InputComponent } from './components/input/input.component';
import { ChartComponent } from './components/chart/chart.component';
import { TransferFoundComponent } from './components/transfer-found/transfer-found.component';
import { MoveListComponent } from './components/move-list/move-list.component';
import { SuccessAlertComponent } from './components/success-alert/success-alert.component';
import { WarningAlertComponent } from './components/warning-alert/warning-alert.component';

import { BitcoinService } from './service/bitcoinService/bitcoin.service';
import { ContactService } from './service/contactService/contact.service';
import { UserService } from './service/userService/user.service';
import { HeaderComponent } from './components/header/header.component';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ContactPageComponent,
    ContactPreviewComponent,
    ContactListComponent,
    ContactDetailsComponent,
    ContactFilterComponent,
    InputComponent,
    ContactEditPageComponent,
    StatisticPageComponent,
    SignupPageComponent,
    ChartComponent,
    TransferFoundComponent,
    MoveListComponent,
    SuccessAlertComponent,
    WarningAlertComponent,
    HeaderComponent,
    

  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpClientJsonpModule,
    AppRoutingModule,
    GoogleChartsModule.forRoot(),
    NgbModule,
    TooltipModule.forRoot(),
    BsDropdownModule.forRoot(),

  ],
  providers: [BitcoinService, ContactService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
