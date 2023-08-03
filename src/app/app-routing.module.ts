import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { QuemSomosComponent } from './quem-somos/quem-somos.component';
import { ContatoComponent } from './contato/contato.component';
import { AppComponent } from './app.component';
import { DetalhesComponent } from './detalhes/detalhes.component';
import { RodapeComponent } from './rodape/rodape.component';

const routes: Routes = [
  { path: '', redirectTo: 'home',  pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
  { path: 'quem-somos', component: QuemSomosComponent },
  { path: 'contato', component: ContatoComponent },
  { path: 'detalhes/:id', component: DetalhesComponent},
  { path: 'rodape', component: RodapeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
