import { Component, OnInit } from '@angular/core';
import {
  Form,
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import {
  forbiddenPasswordValidator,
  PasswordValidator,
} from 'src/app/validators/password.validator';

@Component({
  selector: 'app-from-builder',
  templateUrl: './from-builder.component.html',
  styleUrls: ['./from-builder.component.css'],
})
export class FromBuilderComponent implements OnInit {
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}

  regForm = this.fb.group(
    {
      firstName: ['', [Validators.required, Validators.minLength(2)]],
      lastName: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(5),
          forbiddenPasswordValidator(/password/i),
        ],
      ],
      confirmPassword: ['', [Validators.required]],
      address: this.fb.group({
        addressLine: ['', [Validators.required]],
        postalCode: [
          '',
          [
            Validators.required,
            Validators.minLength(5),
            Validators.maxLength(5),
            Validators.pattern('[0-9]*'),
          ],
        ],
        city: ['', [Validators.required]],
      }),
      programingSkills: this.fb.array([]),
      acceptTerms: [false, Validators.requiredTrue],
    },
    { validator: PasswordValidator }
  );

  get programingSkills() {
    return this.regForm.get('programingSkills') as FormArray;
  }
  get firstName() {
    return this.regForm.get('firstName') as FormControl;
  }
  get lastName() {
    return this.regForm.get('lastName') as FormControl;
  }
  get email() {
    return this.regForm.get('email') as FormControl;
  }
  get password() {
    return this.regForm.get('password') as FormControl;
  }
  get confirmPassword() {
    return this.regForm.get('confirmPassword') as FormControl;
  }
  get address() {
    return this.regForm.get('address') as FormGroup;
  }
  get acceptTerms() {
    return this.regForm.get('acceptTerms') as FormControl;
  }

  addSkill() {
    this.programingSkills.push(this.fb.control(''));
  }

  removeSkill(i: number) {
    this.programingSkills.removeAt(i);
  }

  onSubmit() {
    console.log(this.regForm);
  }
}
