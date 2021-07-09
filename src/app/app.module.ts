import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { RodapeComponent } from './rodape/rodape.component';
import { SobreNosComponent } from './sobre-nos/sobre-nos.component';
import { InicioComponent } from './inicio/inicio.component';
import { ContatoComponent } from './contato/contato.component';
import { EntrarComponent } from './entrar/entrar.component';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { VagasComponent } from './vagas/vagas.component';

import { PerfilComponent } from './perfil/perfil.component';

import { MinhasPostagensComponent } from './minhas-postagens/minhas-postagens.component';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { PostagemEditComponent } from './edit/postagem-edit/postagem-edit.component';



@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    RodapeComponent,
    SobreNosComponent,
    InicioComponent,
    ContatoComponent,
    EntrarComponent,
    CadastrarComponent,
    VagasComponent,
    PerfilComponent,
    MinhasPostagensComponent,
    PostagemEditComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [{
    provide:LocationStrategy,
    useClass:HashLocationStrategy
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
