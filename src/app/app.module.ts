import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { TraningComponent } from './traning/traning.component';
import { CurrentTrainingComponent } from './traning/current-training/current-training.component';
import { NewTrainingComponent } from './traning/new-training/new-training.component';
import { StopTrainingComponent } from './traning/current-training/stop-training.component';
import { PastTrainingComponent } from './traning/past-training/past-training.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './navigation/header/header.component';
import { SideNavListComponent } from './navigation/side-nav-list/side-nav-list.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFirestoreModule } from '@angular/fire/firestore';

const config = {
  apiKey: 'AIzaSyCXJE4zQZ7zgMeOpuVCAJmGkw_Fk0pUNZc',
  authDomain: 'fitness-track-80596.firebaseapp.com',
  databaseURL: 'https://fitness-track-80596.firebaseio.com',
  projectId: 'fitness-track-80596',
  storageBucket: 'fitness-track-80596.appspot.com',
  messagingSenderId: '468854951347',
  appId: '1:468854951347:web:32455bfe55521af0'
};

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    TraningComponent,
    CurrentTrainingComponent,
    NewTrainingComponent,
    PastTrainingComponent,
    WelcomeComponent,
    HeaderComponent,
    SideNavListComponent,
    StopTrainingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(config),
    AngularFireDatabaseModule,
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [StopTrainingComponent]
})
export class AppModule {}
