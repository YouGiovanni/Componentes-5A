import { Component } from '@angular/core';

import { every } from 'rxjs';
import { Product } from './product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'App-TL';
  widthImg = 10;
  name = 'Giovanni';
  age = 19;
  btnDisabled = false;

  toggleButton(){
    this.btnDisabled = !this.btnDisabled;
  }

  increaseAge(){
    this.person.age += 1;
  }
  // metodo
  drecrementAge(){
    this.person.age -= 1;

  }


  register = {
    name: '',
    email: '',
    password: '',
  }

  // esto es un evento
  onScroll(event: Event){
    const element = event.target as HTMLElement;
    console.log(element.scrollTop);
  }

  changeName(event: Event){
    const element = event.target as HTMLInputElement;
    this.person.name = element.value;
  }
  addName() {
    this.names.push(this.newName);
    this.newName = '';
  }

  deleteName(index: number) {
    this.names.splice(index, 1);  //splice elimina un elemento, 1 indica cuantos elementos se van a borrar

  }
onRegister(){
  console.log()
}


  //estamos dicendo que espere cadana o | numeros
  names: any[] | string[] | number[] = ['Nico', 'Juli', 'Santi', 'Susana'];

  emojis = [''];

  newName = '';

  products=[
    {
      name:'El mejr juguete',
      price :565,
      image:'./assets/toy.jpg',
      category:''
    },
    {
      name:'Bicicleta casi nueva',
      price :565,
      image:'./assets/bike.jpg',
      category :''
    },
    {
      name:'Coleccon de albunes',
      price :565,
      image:'./assets/album.jpg',
      category :''
    },
    {
      name:'Mis libros',
      price: 23,
      image:'./assets/books.jpg',
      category :''
    },
    {
      name:'Casa de perro ',
      price :34,
      image:'./assets/house.jpg',
      category :''
    },
    {
      name:'Gafas',
      price :34,
      image:'./assets/glasses.jpg',
      category :''
    },

  ];


  person={
    name: 'Tisha',
    age: 22,
    avatar: 'https://i.pinimg.com/564x/70/51/8a/70518ac0283c6bf861a2b7cf55d7454a.jpg',
  }

  img = 'https://i.pinimg.com/564x/70/51/8a/70518ac0283c6bf861a2b7cf55d7454a.jpg';

}
