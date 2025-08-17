import { NgModule } from '@angular/core';                    // Angular decorators
import { BrowserModule } from '@angular/platform-browser';   // Browser support
import { HttpClientModule } from '@angular/common/http';     // HTTP services
import { AppRoutingModule } from './app-routing.module';     // Root router config
import { AppComponent } from './app.component';              // Root component

@NgModule({
  declarations: [AppComponent],                              // Declare root component
  imports: [
    BrowserModule,                                           // Required for browser apps
    HttpClientModule,                                        // Enable HttpClient across app
    AppRoutingModule                                         // App-level routes + lazy loading
  ],
  providers: [],                                             // (Optional) global providers
  bootstrap: [AppComponent]                                  // Start with AppComponent
})
export class AppModule {}                                    // Root module class
