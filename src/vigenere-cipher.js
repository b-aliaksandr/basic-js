/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  isDirectMod = true;
  alphabetRow = 'abcdefghijklmnopqrstuvwxyz';

  constructor(isDefaultMod = true) {
    this.isDirectMod = isDefaultMod;
  }

  checkCorrectArguments(message, key) {
    if (message === undefined || key === undefined) {
      throw new Error('Incorrect arguments!');
    }
  }

  isAlphabetSymbol(ch) {
    const chIndex = ch.charCodeAt(0);
    const START_UPPER_INDEX = 65;
    const END_UPPER_INDEX = 90;
    const START_LOWER_INDEX = 97;
    const END_LOWER_INDEX = 122;
    if (chIndex >= START_UPPER_INDEX && chIndex <= END_UPPER_INDEX) return true;
    if (chIndex >= START_LOWER_INDEX && chIndex <= END_LOWER_INDEX) return true;
    return false;
  }

  calcEncryptedIndex = (index, amountShift) => {
    const startLimit = 0;
    const endLimit = 25;

    const resIndex = index + amountShift;
    const amountFix = 1;

    return resIndex <= endLimit
      ? resIndex
      : startLimit + Math.abs(endLimit - index - amountShift + amountFix);
  };

  calcDecryptedIndex = (index, amountShift) => {
    const endLimit = 25;

    const resIndex = index - amountShift;
    const amountFix = 1;

    return resIndex >= 0
      ? resIndex
      : endLimit - Math.abs(resIndex) + amountFix;
  };

  encrypt(message, key) {
    return this.cipherByFn(message, key, this.calcEncryptedIndex);
  }

  decrypt(message, key) {
    return this.cipherByFn(message, key, this.calcDecryptedIndex);
  }
  
  cipherByFn(message, key, calcShiftIndex) {
    this.checkCorrectArguments(message, key);
    
    const msg = this.isDirectMod ? message : message.split('').reverse().join('');

    const keyLength = key.length;
    let curKeyIndex = 0;
    const resultChs = [];

    for (let ch of msg) {
      if (this.isAlphabetSymbol(ch)) {
        const msgColumnChIndex = this.alphabetRow.indexOf(ch.toLowerCase());
        const keyRowChIndex = this.alphabetRow.indexOf(key[curKeyIndex].toLowerCase());

        const shiftedIndex = calcShiftIndex(msgColumnChIndex, keyRowChIndex);
        resultChs.push(this.alphabetRow[shiftedIndex]);

        curKeyIndex = curKeyIndex === keyLength - 1 ? 0 : curKeyIndex + 1;
      } else {
        resultChs.push(ch);
      }
    }

    return resultChs.join('').toUpperCase();
  }
}

module.exports = {
  VigenereCipheringMachine
};
