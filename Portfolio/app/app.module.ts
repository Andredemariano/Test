import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { MessageTextComponent } from './components/messageTextManager';
import { PaginationModule } from 'ng-bootstrap'; // <-- import the module

//PaginationModule.forRoot()

@NgModule({
    imports: [BrowserModule, FormsModule, HttpModule, PaginationModule.forRoot()],
    declarations: [AppComponent, MessageTextComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }