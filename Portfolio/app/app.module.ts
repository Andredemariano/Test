import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { MessageTextComponent } from './components/messageTextManager';




@NgModule({
    imports: [BrowserModule, FormsModule, HttpModule],
    declarations: [AppComponent, MessageTextComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }