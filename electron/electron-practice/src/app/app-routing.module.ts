import { ElectronTestRoutingModule } from './electron-test/electron-test-routing.module';
import { HomePageRoutingModule } from './home-page/home-page-routing.module';
import { HomePageComponent } from './home-page/home-page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: HomePageComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' }),
    HomePageRoutingModule,
    ElectronTestRoutingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
