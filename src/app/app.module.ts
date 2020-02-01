import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ProfService} from './services/prof.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ProfService],
  bootstrap: [AppComponent]
})
export class AppModule { }
