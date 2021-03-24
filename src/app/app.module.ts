import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { AnasayfaComponent } from './routing/anasayfa/anasayfa.component';
import { PersonelComponent } from './routing/personel/personel.component';
import { ReactiveFormsModule } from '@angular/forms';
import { InputTextComponent } from './shared/components/input-text/input-text.component';
import { InputSelectComponent } from './shared/components/input-select/input-select.component';
import { HttpClientModule } from '@angular/common/http';
import { InputDateComponent } from './shared/components/input-date/input-date.component';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { InputFileComponent } from './shared/components/input-file/input-file.component';

@NgModule({
  declarations: [
    AppComponent,
    AnasayfaComponent,
    PersonelComponent,
    InputTextComponent,
    InputSelectComponent,
    InputDateComponent,
    InputFileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'tr-TR' },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
