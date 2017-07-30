import { Input, Component } from '@angular/core';
import { Response } from '@angular/http';
import { ApiService } from './services/apiService';
import { Message } from './models/messageModel';

@Component({
    selector: 'my-app',
    providers: [ApiService],
    template: `<div class="page-header">
    <h1>List of messages</h1>
    </div>
    <div class="panel">
        <div class="form-inline">
            <div class="form-group">
                <div class="col-md-8">
                    <input class="form-control" [(ngModel)]="text" placeholder = "Find" />
                </div>
            </div>
            <div class="form-group">
                <div class="col-md-offset-2 col-md-8">
                    <button class="btn btn-default" (click)="addItem(text, price)">Добавить</button>
                </div>
            </div>
        </div>
        <table class="table table-hover">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                </tr>
            </thead>
            <tbody>
                <tr *ngFor="let item of messages" [ngClass]="{'active': activeElementId==item.Id}" (click)="setActive(item)">
                    <td>{{item.name}}</td>
                    <td>{{item.email}}</td>
                    <td>{{item.phone}}</td>
                    <td><button class="btn btn-default" (click)="removeItem(item)">delete</button></td>
                </tr>
            </tbody>
        </table>
    </div>
    <message-text [text]="activeItem.text" [subject]="activeItem.subject"></message-text>`

})

export class AppComponent {
    constructor(private apiService: ApiService) { };
    messages: Message[] = [];
    activeElementId: number = 0;
    activeItem: Message = new Message();
    testActive = "test data";

    ngOnInit() {
        this.apiService.getMessages().subscribe((data: Response) => this.messages = data.json());
        this.testActive = "test data";
    }

    addItem(text: string, price: number): void {

    }

    setActive(item: Message): void {
        this.activeElementId = item.Id;
        this.activeItem = item;
    }

    removeItem(message: Message): void {
        let index: number = this.messages.indexOf(message);
        if (index !== -1) {
            this.messages.splice(index, 1);
            this.apiService.removeMessage(message.Id);
        }
    }
}