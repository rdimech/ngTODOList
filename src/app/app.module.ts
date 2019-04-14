import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TodoComponent } from './app.component';
import { FilterPipe } from './filter.pipe';

@NgModule({
  declarations: [
    [TodoComponent, FilterPipe]
  ],
  imports: [
    [BrowserModule, FormsModule]
  ],
  providers: [],
  bootstrap: [TodoComponent]
})
export class AppModule { }
