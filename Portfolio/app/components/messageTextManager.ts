import { Component, Input } from '@angular/core';
import { Message } from '../models/messageModel';


@Component({
    selector: 'message-text',
    template: `<h3>Subject:{{subject}}</h3>
               <textarea  class="form-control" rows="5" placeholder = "Text message" [(ngModel)]="text"></textarea>`
})

export class MessageTextComponent {

    @Input() text: string;
    @Input() subject: string;

    ngOnInit() {
        console.log('This if the value for user-id: ' + this.text);
    }
  
}