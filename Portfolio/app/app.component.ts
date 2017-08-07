import { Input, Component, ChangeDetectorRef, IterableDiffers, DoCheck } from '@angular/core';
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
                <tr *ngFor="let item of pagedItems" [ngClass]="{'active': activeElementId==item.Id}" (click)="setActive(item)">
                    <td>{{iterate(item)}}</td>
                    <td>{{item.name}}</td>
                    <td>{{item.email}}</td>
                    <td>{{item.phone}}</td>
                    <td><button class="btn btn-default" (click)="removeItem(item)">delete</button></td>
                </tr>
            </tbody>
        </table>
    </div>
    <message-text [text]="activeItem.text" [subject]="activeItem.subject"></message-text>
    <pagination [totalItems]="totalItems" [itemsPerPage]="itemsPerPage" [(ngModel)]="currentPage" (pageChanged) = "pageChanged($event)"></pagination>`

})

export class AppComponent implements DoCheck {
    constructor(private apiService: ApiService, private cdRef: ChangeDetectorRef, differs: IterableDiffers) {
        this.differ = differs.find([]).create(null);
    };
    messages: Message[] = [];
    activeElementId: number = 0;
    activeItem: Message = new Message();

    public totalItems: number;
    public currentPage: number = 1;
    public itemsPerPage: number = 5;
    public pagedItems: Message[] = [];
    differ: any;

    ngOnInit() {
        this.apiService.getMessages().subscribe((data: Response) => {
            this.messages = data.json();
        });

    }

    ngDoCheck() {
        var changes = this.differ.diff(this.messages);
        if (changes) {
            this.changePageItems();
        }
    }

    public removeItem(message: Message): void {
        let index: number = this.messages.indexOf(message);
        if (index !== -1) {
            this.messages.splice(index, 1);
            this.apiService.removeMessage(message.Id);

            //bug with crash when delete last item in last page
            this.cdRef.detectChanges();

        }
    }

    public iterate(element: any): number {
        return this.messages.indexOf(element) + 1;
    }

    public pageChanged(event: any): void {
        this.currentPage = event.page;
        this.changePageItems();
    }

 
    public setActive(item: Message): void {
        this.activeElementId = item.Id;
        this.activeItem = item;
    }

    private changePageItems() {
        this.pagedItems = this.messages.slice((this.currentPage - 1) * this.itemsPerPage, (this.currentPage - 1) * this.itemsPerPage + this.itemsPerPage);
        this.totalItems = this.messages.length;
        this.cdRef.detectChanges();
    }

   
}