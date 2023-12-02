import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Choice } from '../interfaces/choice';

@Component({
  selector: 'app-receive-order',
  templateUrl: './receive-order.component.html',
  styleUrls: ['./receive-order.component.css']
})
export class ReceiveOrderComponent implements OnInit {
  @Input() parentsChoice:Choice; //information that it's going to be passed to the child
  @Output() newItemEvent = new EventEmitter<string>();

  constructor(){
    this.parentsChoice = {}
  }

  ngOnInit(): void {
    this.parentsChoice = {
      orderId: 0,
      flag: true,
      orderDescription: "",
      objectDetails: {
        objectTitle: "",
        objectDescription: "" 
      }
    } 
  }
  
  addNewItem(value: string) {
    this.newItemEvent.emit(value);
  }
}
