import { Component } from "@angular/core";

@Component({
    selector: 'app-contador',
    template: `
        <h1> {{titulo}} </h1>
        <h3>La base es: <strong> 55 </strong></h3>

        <button (click)="acumular(+2) ">+1</button>
        <span> {{numero}} </span>
        <button (click)="acumular(-2) ">-1</button>

        <p></p>

        <button (click)="sumar() ">**+5**</button>
        <span> {{base}} </span>
        <button (click)="restar() ">**-5**</button>
    `
})
export class ContadorComponent{
    titulo: string = 'Contador App';
  numero:number = 10;
  base:number=55;

  acumular(valor:number){
    this.numero = this.numero+valor;
  }

  sumar()
  {
    this.base = this.base+5;
  }
  restar()
  {
    this.base = this.base-5;
  }
}