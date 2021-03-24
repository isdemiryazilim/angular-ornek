import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnasayfaComponent } from './routing/anasayfa/anasayfa.component';
import { PersonelComponent } from './routing/personel/personel.component';

const routes: Routes = [
  { path: 'personel', component: PersonelComponent },
  { path: '', component: AnasayfaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
