import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WeatherComponent } from './weather/weather.component';
import { UserResolverService } from './user-resolver.service';
import { ResolverDataComponent } from './resolver-data/resolver-data.component';

const routes: Routes = [
  {path:'weather', component:WeatherComponent},
  {path:'data', component:ResolverDataComponent, resolve: {
    userList: UserResolverService
  }}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
