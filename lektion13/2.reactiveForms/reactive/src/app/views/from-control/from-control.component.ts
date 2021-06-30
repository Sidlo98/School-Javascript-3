import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-from-control',
  templateUrl: './from-control.component.html',
  styleUrls: ['./from-control.component.css'],
})
export class FromControlComponent {
  name = new FormControl('');

  onSub() {
    console.log(this.name);
  }
}
