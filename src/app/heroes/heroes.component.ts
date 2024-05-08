import { Component } from '@angular/core';
import { Client, Message } from 'node-osc';

@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [],
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.css'
})
export class HeroesComponent {

    constructor(){}

    ngOnInit(): void{
       
    }

    sendOSC(): void{
       // Create a new instance of the OSC client
       const client = new Client('127.0.0.1', 3333);
    
       const message = new Message('/address');
       message.append('testing');
       message.append('testing');
       message.append(123);
   
       client.send(message, (err) => {
          if (err) {
            console.error(err.message); // Output the error message
          }
         client.close();
       });
       
    }
      
}
