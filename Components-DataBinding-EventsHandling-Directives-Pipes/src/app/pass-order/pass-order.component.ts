import { Component, Input, OnInit } from '@angular/core';
import { Choice } from '../interfaces/choice';

@Component({
  selector: 'app-pass-order',
  templateUrl: './pass-order.component.html',
  styleUrls: ['./pass-order.component.css']
})
export class PassOrderComponent implements OnInit {
  choice: Choice;
  items = ['item1', 'item2', 'item3', 'item4'];

  constructor () {
    this.choice = {}
   }

  ngOnInit(): void { }

  giveOrder(order: number){
    if(order == 1){
      this.choice = {
        orderId: 1,
        flag: false,
        orderDescription: "Printing the first object...",
        objectDetails: {
          objectTitle: "Not So Secret",
          objectDescription: "The murderer is someone close to you..." 
        }
      }
    } else if(order == 2){
      this.choice = {
        orderId: 2,
        flag: false,
        orderDescription: "Printing the second object...",
        objectDetails: {
          objectTitle: "Top Beauty",
          objectDescription: "I'm red and I can't contain it!" 
        }
      }
    } else if(order == 3){
      this.choice = {
        orderId: 3,
        flag: true,
        orderDescription: "",
        objectDetails: {
          objectTitle: "",
          objectDescription: "" 
        }
      }
    } 
  }

  addItem(newItem: string) {
    this.items.push(newItem);
  }
}