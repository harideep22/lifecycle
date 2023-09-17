import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lifecycle';
  inputText: string = "";

  OnSubmit(inputEle: HTMLInputElement) {
    this.inputText = inputEle.value
  }
}
