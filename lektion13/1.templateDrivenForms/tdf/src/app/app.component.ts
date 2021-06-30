import { Component, OnInit } from '@angular/core';
import { AddressModel } from './models/address-model';
import { RegisterModel } from './models/register-model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  public input: string = 'hej';

  log(val: any) {
    console.log(val);
  }

  onSub(form: any) {
    console.log(form.value);
  }

  public user = new RegisterModel();
  public address = new AddressModel();

  ngOnInit(): void {
    this.user.address = this.address;
  }

  public options: string[] = ['Gaming', 'Coding', 'Eating', 'Sleeping'];
  public preferredLanguages: string[] = [
    'Angular',
    'React',
    'Vue',
    'Asp.net',
    'Php',
    'Node',
    'TypeScript',
    'JavaScript',
  ];

  onSubmit(regForm: any) {
    console.log(this.user);
    console.log(regForm);
  }
}
