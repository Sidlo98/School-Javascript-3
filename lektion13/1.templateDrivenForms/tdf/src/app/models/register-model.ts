import { StringMap } from '@angular/compiler/src/compiler_facade_interface';
import { AddressModel } from './address-model';

export class RegisterModel {
  constructor(
    public firstName?: string,
    public lastName?: string,
    public email?: string,
    public password?: string,
    public hobbies?: string,
    public address?: AddressModel,
    public preferredLanguage?: String,
    public accepted: boolean = false
  ) {}
}
