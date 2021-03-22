import { HomePageRoutingModule } from './home-page/home-page-routing.module';
import { ElectronTestRoutingModule } from './electron-test/electron-test-routing.module';
import { MaterialModule } from './material/material.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { RoundProgressModule } from 'angular-svg-round-progressbar';
import { HomePageComponent } from './home-page/home-page.component';
import { ElectronTestComponent } from './electron-test/electron-test.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ElectronTestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RoundProgressModule,
    BrowserAnimationsModule,
    MaterialModule,
    ElectronTestRoutingModule,
    HomePageRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
