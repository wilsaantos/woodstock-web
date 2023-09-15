import { AbstractControl, ValidationErrors, ValidatorFn, FormGroup } from '@angular/forms';
import { allEqual } from './string-utils';

// Valida se tem algum número no campo, caso tiver invalida o campo
export function notNumberValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;

    if (!value) {
      return null;
    }

    const hasNumeric = /[0-9]+/.test(value);
    const hasSpecialChar = /[!-\/:-@[-`{-~]/.test(value);

    const notNumberInvalid = hasNumeric || hasSpecialChar;

    return notNumberInvalid ? { notNumberInvalid: true } : null;
  };
}

// Valida se tem a quantidade de palavras de acordo com length, e se cada palavra tem mais de 2 letras
export function wordLengthValidator(length: number): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;

    if (!value) {
      return null;
    }

    const words = value.split(' ');

    const hasWordLength = words?.length >= length;

    let wordsMoreThan2Chars = words.filter(word => word.length >= 2);

    let hasCharLength = wordsMoreThan2Chars?.length >= 2;

    const wordLengthValid = hasWordLength && hasCharLength;

    return wordLengthValid ? null : { wordLengthInvalid: true };
  };
}

// Valida tamanho de campo decimal (10 dígitos inteiros e 5 decimais no máximo)
export function bigDecimalLengthValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;

    if (!value) {
      return null;
    }

    const valueArray = value.toString().split('.');
    const hasIntLength = valueArray[0].length <= 10;
    const hasDecimalLength = !valueArray[1] || valueArray[1]?.length <= 5;

    const bigDecimalLengthInvalid = !hasIntLength || !hasDecimalLength;

    return bigDecimalLengthInvalid ? { bigDecimalLengthInvalid: true } : null;
  };
}

// Valida se todos caracteres não são iguais
export function notEqual(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;

    if (!value) {
      return null;
    }

    const _allEqual = allEqual(value);

    return !_allEqual ? null : { notEqualInvalid: true };
  };
}

// Valida se últimos 4 digítos equivalem apenas até ano atual
export function maxCurrentYear(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;

    if (!value) {
      return null;
    }

    const currentYear = new Date().getFullYear();
    let year = value.slice(-4);

    const isMaxCurrentYear = year <= currentYear;

    return isMaxCurrentYear ? null : { maxCurrentYearInvalid: true };
  };
}

// Verifica se formGroup tem pelo menos um control
export const atLeastOne = (validator: ValidatorFn) => (
  group: FormGroup,
): ValidationErrors | null => {
  const hasAtLeastOne =
    group &&
    group.controls &&
    Object.keys(group.controls).some(k => !validator(group.controls[k]));

  return hasAtLeastOne ? null : { atLeastOne: true };
};
