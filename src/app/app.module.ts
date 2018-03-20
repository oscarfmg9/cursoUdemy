import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Components
import { StoreComponent } from './components/store/store.component';
import { ParksComponent } from './components/parks/parks.component';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    StoreComponent,
    ParksComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
