import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent {
  @Input() siteMess: string = "pkds";

  constructor() {
    console.log("Constructor Called! ");
  }
}
