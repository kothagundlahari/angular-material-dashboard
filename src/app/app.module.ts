import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {routing} from './app.routes';
import {MatButtonModule, MatCheckboxModule, MatInputModule, MatMenuModule, MatRadioModule} from '@angular/material';
import {AppComponent} from './app.component';
import {SidebarComponent} from './sidebar/sidebar.component';
import {HomeComponent} from './dashboard/home/home.component';
import {ProfileComponent} from './dashboard/profile/profile.component';
import 'hammerjs';
import {HttpClientModule} from '@angular/common/http';
import {NavbarComponent} from './shared/navbar/navbar.component';
import {FigurecardComponent} from './shared/figurecard/figurecard.component';
import {ImagecardComponent} from './shared/imagecard/imagecard.component';
import {TableComponent} from './dashboard/table/table.component';
import {NotificationComponent} from './dashboard/notification/notification.component';
import {MsgIconBtnComponent} from './shared/msgiconbtn/msgiconbtn.component';
import {SweetAlertComponent} from './dashboard/sweetalert/sweetalert.component';
import {LoginComponent} from './page/login/login.component';
import {RootComponent} from './dashboard/root/root.component';
import {HeaderComponent} from './shared/header/header.component';
import {FooterComponent} from './shared/footer/footer.component';
import {SettingsComponent} from './dashboard/settings/settings.component';
import {SettingsService} from './services/settings.service';


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HomeComponent,
    ProfileComponent,
    NavbarComponent,
    FigurecardComponent,
    ImagecardComponent,
    TableComponent,
    NotificationComponent,
    MsgIconBtnComponent,
    SweetAlertComponent,
    LoginComponent,
    RootComponent,
    HeaderComponent,
    FooterComponent,
    SettingsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    routing,
    BrowserAnimationsModule,
    MatButtonModule,
    MatRadioModule,
    MatInputModule,
    MatMenuModule,
    MatCheckboxModule,
  ],
  providers: [SettingsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
