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
let AppComponent = class AppComponent {
    constructor(apiService) {
        this.apiService = apiService;
        this.messages = [];
    }
    ;
    ngOnInit() {
        this.apiService.getMessages().subscribe((data) => this.messages = data.json());
    }
    addItem(text, price) {
    }
    removeItem(message) {
        let index = this.messages.indexOf(message);
        if (index !== -1) {
            this.messages.splice(index, 1);
            this.apiService.removeMessage(message.Id);
        }
    }
};
AppComponent = __decorate([
    core_1.Component({
        selector: 'purchase-app',
        providers: [apiService_1.ApiService],
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
    }),
    __metadata("design:paramtypes", [apiService_1.ApiService])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map