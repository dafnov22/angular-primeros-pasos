import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {

  public name: string = 'ironman';
  public age: number = 45;

  constructor() { }

  ngOnInit(): void {
  }

  get capitalizedName():string {
    return this.name.toUpperCase();
  }

  getHeroDescription(): string {
    return `${this.name} - ${this.age}`;
  }

  cambiarNombre(): void {
    this.name = 'Spiderman';
  }

  cambiarEdad(): void {
    this.age = 30;
  }

  resetForm(): void {
    this.name = 'ironman';
    this.age = 45;
  }

  resetSoloh1(): void {
    document.querySelectorAll('h1')!.forEach( element => {
      element.innerHTML = '<h1> Desde Angular</h1>';
    });
  }

}
