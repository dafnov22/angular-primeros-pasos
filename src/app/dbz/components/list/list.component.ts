import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Character } from '../../interfaces/character.interface';
import { v4 as uuid } from 'uuid'

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  @Input()
  public characterList: Character[] = [{
    id: uuid(),
    name: 'Trunks',
    power: 10
  }];

  // @Output()
  // onDelete: EventEmitter<number> = new EventEmitter();
  @Output()
    onDelete: EventEmitter<string> = new EventEmitter();

  // onDeleteCharacter(index: number): void {
  //   //TODO: Emitir el ID del personaje a eliminar
  //   // this.onDelete.emit(this.characterList[index]);
  //   this.onDelete.emit(index);
  //   console.log({index});
  // }

  onDeleteCharacter(id: string): void {
    //TODO: Emitir el ID del personaje a eliminar
    // this.onDelete.emit(this.characterList[index]);
    this.onDelete.emit(id);
    console.log({id});
  }

}
