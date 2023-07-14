import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeatherComponent } from './weather/weather.component';
import { ResolverDataComponent } from './resolver-data/resolver-data.component';
import { UserResolverService } from './user-resolver.service';

@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    ResolverDataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [UserResolverService],
  bootstrap: [AppComponent]
})
export class AppModule { }
