export const EMAIL_REGEX =
  '^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[_A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$';

export function isValidEmail(email: any): boolean {
  if (isEmpty(email)) return false;
  let regex = new RegExp(EMAIL_REGEX);
  return regex.test(email);
}

export function isEmpty(value: any): boolean {
  return (
    value === null ||
    value === undefined ||
    (typeof value === 'string' && value.trim().length === 0) ||
    (typeof value === 'object' && Object.keys(value).length === 0)
  );
}

export function isListEmpty(list: any): boolean {
  return list == null || list.length === 0;
}

export function hasRepeatedCharacters(str: any): boolean {
  if (str && str.length > 1) {
    const first = str.charAt(0);
    for (let i = 1; i < str.length; i++) {
      if (first !== str.charAt(i)) {
        return false;
      }
    }
    return true;
  }
  return false;
}

export function isValidCPF(cpf: any) {
  if (cpf != null) {
    const strCpf = cpf;
    if (
      !isEmpty(strCpf) &&
      strCpf.length === 11 &&
      !hasRepeatedCharacters(strCpf)
    ) {
      let d1, d2;
      let digito1, digito2, resto;
      let digitoCPF;
      let nDigResult;
      d1 = d2 = 0;
      digito1 = digito2 = resto = 0;
      for (let nCount = 1; nCount < strCpf.length - 1; nCount++) {
        digitoCPF = +strCpf.substring(nCount - 1, nCount);
        d1 = d1 + (11 - nCount) * digitoCPF;
        d2 = d2 + (12 - nCount) * digitoCPF;
      }
      resto = d1 % 11;
      if (resto < 2) {
        digito1 = 0;
      } else {
        digito1 = 11 - resto;
      }
      d2 += 2 * digito1;
      resto = d2 % 11;
      if (resto < 2) {
        digito2 = 0;
      } else {
        digito2 = 11 - resto;
      }
      const nDigVerific = strCpf.substring(strCpf.length - 2, strCpf.length);
      nDigResult = digito1 + '' + digito2;
      return nDigVerific === nDigResult;
    }
  }
  return false;
}

export function formatarNumeroTelefone(numeroTelefone: string): string {
  let numeroSemFormatacao;
  if (numeroTelefone.includes('(')) {
    // Remove todos os caracteres que não são dígitos
    numeroSemFormatacao = numeroTelefone.replace(/\D/g, '');
  } else {
    return numeroTelefone;
  }
  return numeroSemFormatacao;
}

export function formatarCNPJ(cnpj: string): string {
  // Remove todos os caracteres que não são dígitos
  let cnpjSemFormatacao;
  if (cnpj.includes('.')) {
    cnpjSemFormatacao = cnpj.replace(/\D/g, '');
  } else {
    return cnpj;
  }

  return cnpjSemFormatacao;
}

export function formatarCEP(cep: string): string {
  // Remove todos os caracteres que não são dígitos
  let cepSemFormatacao;
  if (cep.includes('-')) {
    cepSemFormatacao = cep.replace(/\D/g, '');
  } else {
    return cep;
  }

  return cepSemFormatacao;
}
