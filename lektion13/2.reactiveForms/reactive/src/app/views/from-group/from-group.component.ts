import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-from-group',
  templateUrl: './from-group.component.html',
  styleUrls: ['./from-group.component.css'],
})
export class FromGroupComponent {
  profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    address: new FormGroup({
      city: new FormControl(''),
      postalCode: new FormControl(''),
      addressLine: new FormControl(''),
    }),
  });

  onSub() {
    console.log(this.profileForm.value);
  }
}
