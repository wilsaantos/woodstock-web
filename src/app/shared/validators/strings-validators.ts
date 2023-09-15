import { FormControl, FormGroup } from '@angular/forms';
import { isEmpty, isValidCPF } from '../utils/strings-utils';
import { isValidEmail } from '../utils/strings-utils';
import { DateTime } from 'luxon';

export class StringValidators {
  static readonly NUMBER_MIN_CHARACTERS = 8;
  static readonly AT_LEAST_ONE_NUMBER = /.*[0-9].*/;
  static readonly AT_LEAST_ONE_LOWER_LETER = /.*[a-z].*/;
  static readonly AT_LEAST_ONE_UPPER_LETER = /.*[A-Z].*/;
  static readonly AT_LEAST_ONE_SPECIAL_CHARACTER = /.*[@!#$%&*()/\\].*/;

  /*  static validateDate(control: FormControl): any {
    const date = DateTime.fromJSDate(control.value).toFormat("dd-MM-yyyy");
    return date.isValid() ? null : { invalidDate: true};
  } */

  static validateMaxDate(control: FormControl): any {
    const compareDate = DateTime.fromJSDate(control.value);
    let diff = DateTime.now().diff(compareDate, 'years').years;
    return diff >= 13 ? null : { notAllowedDate: true };
  }

  static validateCPF(control: FormControl): any {
    const isValidCpf: boolean =
      isEmpty(control.value) || isValidCPF(control.value);
    return isValidCpf ? null : { invalidCpf: true };
  }

  static validateEmail(control: FormControl): any {
    return isValidEmail(control.value) ? null : { invalidEmail: true };
  }

  static validatePassword(control: FormControl): any {
    const validPassword =
      isEmpty(control.value) ||
      (control.value.length >= StringValidators.NUMBER_MIN_CHARACTERS &&
        StringValidators.AT_LEAST_ONE_NUMBER.test(control.value) &&
        StringValidators.AT_LEAST_ONE_SPECIAL_CHARACTER.test(control.value) &&
        StringValidators.AT_LEAST_ONE_LOWER_LETER.test(control.value) &&
        StringValidators.AT_LEAST_ONE_UPPER_LETER.test(control.value));
    return validPassword ? null : { invalidPassword: true };
  }

  static mustMatch(controlName: string, matchingControlName: string): any {
    return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];

      if (matchingControl.errors && !matchingControl.errors['mustMatch']) {
        return;
      }

      if (control.value !== matchingControl.value) {
        matchingControl.setErrors({ mustMatch: true });
      } else {
        matchingControl.setErrors(null);
      }
    };
  }
}
