import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})

export class ListadoComponent {

    heroes: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor'];
    heroeBorrado: string|undefined = '';

    BorrarHeroe(){
      //this.heroeBorrado = this.heroes.shift() || '';
      this.heroeBorrado = this.heroes.shift();
      //const heroeBorrado = this.heroes.shift();
      //console.log(heroeBorrado);
    }
}
