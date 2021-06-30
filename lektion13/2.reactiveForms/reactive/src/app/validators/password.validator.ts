import { AbstractControl, FormControl, ValidatorFn } from '@angular/forms';

export function PasswordValidator(
  control: AbstractControl
): { [key: string]: boolean } | null {
  const password = control.get('password') as FormControl;
  const confirmPassword = control.get('confirmPassword') as FormControl;

  if (password.pristine || confirmPassword.pristine) {
    return null;
  }

  return password && confirmPassword && password.value !== confirmPassword.value
    ? { missMatch: true }
    : null;
}

export function forbiddenPasswordValidator(passwordRe: RegExp): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const forbidden = passwordRe.test(control.value);
    return forbidden ? { forbiddenPassword: { value: control.value } } : null;
  };
}
