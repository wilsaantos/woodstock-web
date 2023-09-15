export function isEmpty(str?: string): boolean {
  return str == null || str.trim() == '';
}

export function isNotEmpty(str?: string): boolean {
  return str != null && str.trim() != '';
}

export function allEqual(string: string) {
  for (var i = 1; i < string.length; i++) {
    if (string[i] != string[0]) {
      return false;
    }
  }
  return true;
}

export function removeAcentoToUpperCase(text: string) {
  text = text.replace(new RegExp('[ÁÀÂÃ]', 'gi'), 'a');
  text = text.replace(new RegExp('[ÉÈÊ]', 'gi'), 'e');
  text = text.replace(new RegExp('[ÍÌÎ]', 'gi'), 'i');
  text = text.replace(new RegExp('[ÓÒÔÕ]', 'gi'), 'o');
  text = text.replace(new RegExp('[ÚÙÛ]', 'gi'), 'u');
  text = text.replace(new RegExp('[Ç]', 'gi'), 'c');
  text = text.toUpperCase();
  return text;
}
