import { Component } from '@angular/core';
import { Response } from '@angular/http';
import { ApiService } from './services/apiService';
import { Message } from './models/messageModel';

@Component({
    selector: 'purchase-app',
    providers: [ApiService],
    template: `<div class="page-header">
        <h1> Список покупок </h1>
    </div>
    <div class="panel">
        <div class="form-inline">
            <div class="form-group">
                <div class="col-md-8">
                    <input class="form-control" [(ngModel)]="text" placeholder = "Название" />
                </div>
            </div>
            <div class="form-group">
                <div class="col-md-6">
                    <input type="number" class="form-control" [(ngModel)]="price" placeholder="Цена" />
                </div>
            </div>
            <div class="form-group">
                <div class="col-md-offset-2 col-md-8">
                    <button class="btn btn-default" (click)="addItem(text, price)">Добавить</button>
                </div>
            </div>
        </div>
        <table class="table table-striped">
            <thead>
                <tr>
                    <th>Предмет</th>
                    <th>Цена</th>
                    <th>Куплено</th>
                </tr>
            </thead>
            <tbody>
                <tr *ngFor="let item of messages">
                    <td>{{item.name}}</td>
                    <td>{{item.email}}</td>
                    <td>{{item.phone}}</td>
                    <td><button class="btn btn-default" (click)="removeItem(item)">delete</button></td>
                </tr>
            </tbody>
        </table>
    </div>`
})
export class AppComponent  {
    constructor(private apiService: ApiService) { };
    messages: Message[] = [];


    ngOnInit() {
        this.apiService.getMessages().subscribe((data: Response) => this.messages = data.json());
    }

    addItem(text: string, price: number): void {

    }

    removeItem(message: Message): void {
        let index: number = this.messages.indexOf(message);
        if (index !== -1) {
            this.messages.splice(index, 1);
            this.apiService.removeMessage(message.Id);
        }
    }
}