import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegistroComponent } from './pages/registro/registro.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { fromEventPattern } from 'rxjs';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { AboutComponent } from './components/about/about.component';
import { llamadaComponent } from './components/heroe/llamada.component';
import { HeroeTarjetaComponent } from './components/heroe-tarjeta/heroe-tarjeta.component';
import {HeroesService} from './services/heroes.services';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';
import { FulllayoutComponent } from './components/fulllayout/fulllayout.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatInputModule, MatSliderModule, MatDialogModule } from '@angular/material';
import { FirebaseService } from './services/firebase.service';
import { EditUserResolver } from './components/edit-user/edit-user.resolver';
import { AvatarDialogComponent } from './components/avatar-dialog/avatar-dialog.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';
import { NewUserComponent } from './components/new-user/new-user.component';
import { ClientComponent } from './components/clients/cliente.component';
import { NgSelectModule } from '@ng-select/ng-select';
import {MatSelectModule} from '@angular/material/select';
import { ChartsModule } from 'ng2-charts';
@NgModule({
  declarations: [
    AppComponent,
    RegistroComponent,
    HomeComponent,
    LoginComponent,
    NavbarComponent,
    HeroesComponent,
    AboutComponent,
    llamadaComponent,
    HeroeTarjetaComponent,
    FulllayoutComponent,
    AvatarDialogComponent,
    EditUserComponent,
    NewUserComponent,
    ClientComponent
  ],
  entryComponents: [AvatarDialogComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgSelectModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    AngularFireStorageModule,
    NoopAnimationsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatSliderModule,
    MatDialogModule,
    MatSelectModule,
    ChartsModule
  ],
  providers: [HeroesService, FirebaseService, EditUserResolver],
  bootstrap: [AppComponent]
})
export class AppModule { }
