import { Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports: [MatGridListModule, MatCardModule, NgFor, NgIf],
})
export class HomeComponent {
  nome: string = 'Mayla';
  sobrenome: string = 'Motobe';
  // imoveis: string[] = ['Casa Incrível', 'Apartamento Padrão', 'Casa de Campo','Flat Minimalista', 'Sala Comercial', 'Cobertura Duplex'];
  //Array <any> vem do ingles qualquer um, pode ser qualquer tipo de dado, ou seja, um objeto, uma string, um number. Declaração obrigatoria, qualquer variavel que declarar, eu preciso declarar o tipo dela em typescript
  imoveis: Array<any> = [
    {
      id: 1,
      titulo: 'Casa Incrível',
      foto: 'https://i.ibb.co/JKzFtzj/casa.jpg',
      quartos: 4,
      banheiros: 3,
      area: 360,
      preco: 990000,
      favorito: true
    },
    {
      id: 2,
      titulo: 'Apartamento Padrão',
      foto: 'https://i.ibb.co/tmsG61R/apartamento.jpg',
      quartos: 2,
      banheiros: 1,
      area: 45,
      preco: 120000,
      favorito: false //nao precisa colocar a vírgula no final destes parâmetros, e nem no final do objeto.
    },
    {
      id: 3,
      titulo: 'Casa de Campo',
      foto: 'https://i.ibb.co/5h1XHzY/casa-de-campo.jpg',
      quartos: 7,
      banheiros: 5,
      area: 800,
      preco: 1500000,
      favorito: true
    },
    {
      id: 4,
      titulo: 'Flat Minimalista',
      foto: 'https://i.ibb.co/FqSpsYt/flat.jpg',
      quartos: 1,
      banheiros: 1,
      area: 36,
      preco: 180000,
      favorito: false
    },
    {
      id: 5,
      titulo: 'Sala Comercial',
      foto: 'https://i.ibb.co/2nNsFkt/sala-comercial.jpg',
      quartos: 0,
      banheiros: 1,
      area: 25,
      preco: 250000,
      favorito: false
    },
    {
      id: 6,
      titulo: 'Cobertura Duplex',
      foto: 'https://i.ibb.co/pPHQfW2/cobertura.jpg',
      quartos: 3,
      banheiros: 3,
      area: 200,
      preco: 1500000,
      favorito: true
    }
  ];
}
