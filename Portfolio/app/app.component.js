"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const apiService_1 = require("./services/apiService");
const messageModel_1 = require("./models/messageModel");
let AppComponent = class AppComponent {
    constructor(apiService, cdRef) {
        this.apiService = apiService;
        this.cdRef = cdRef;
        this.messages = [];
        this.activeElementId = 0;
        this.activeItem = new messageModel_1.Message();
        this.currentPage = 1;
        this.itemsPerPage = 5;
        this.pagedItems = [];
    }
    ;
    ngOnInit() {
        this.apiService.getMessages().subscribe((data) => {
            this.messages = data.json();
            this.totalItems = this.messages.length;
            this.pagedItems = this.messages.slice(1 * 5 - 5, this.itemsPerPage + 1 * 5 - 5);
        });
    }
    addItem(text, price) {
    }
    iterate(element) {
        return this.messages.indexOf(element) + 1;
    }
    pageChanged(event) {
        this.pagedItems = this.messages.slice(event.page * 5 - 5, this.itemsPerPage + event.page * 5 - 5);
    }
    setActive(item) {
        this.activeElementId = item.Id;
        this.activeItem = item;
    }
    //Todo fix bug with remove items, subscribe when changed message colelction -> change pages collection
    removeItem(message) {
        let index = this.messages.indexOf(message);
        if (index !== -1) {
            this.messages.splice(index, 1);
            this.pagedItems = this.messages.slice(this.currentPage * 5 - 5, this.itemsPerPage + this.currentPage * 5 - 5);
            this.apiService.removeMessage(message.Id);
            this.totalItems = this.messages.length;
            //bug with crash when delete last item in last page
            this.cdRef.detectChanges();
        }
    }
};
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        providers: [apiService_1.ApiService],
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
    }),
    __metadata("design:paramtypes", [apiService_1.ApiService, core_1.ChangeDetectorRef])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map