/* jshint esversion: 6 */
class VigenereCipheringMachine {
  constructor(bool) {
    this.type = bool;
  }
  encrypt(message, key) {
    if (!message || !key) {
      throw Error;
    }
    const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    const messageTrim = [];
    for (const item of message) {
      if (item !== ' ' && alphabet.includes(item.toUpperCase())) {
        messageTrim.push(item);
      }
    }
    const keyArr = [];
    for (let i = 0; keyArr.length < messageTrim.length; i += 1) {
      keyArr.push(key[i].toUpperCase());
      if (i === key.length - 1) {
        i = -1;
      }
    }
    const messageUpp = message.toUpperCase();
    const keyUpp = keyArr.join('');
    const encrypted = [];
    let j = 0;
    for (let i = 0; i < message.length; i += 1) {
      if (messageUpp[i] !== ' ' && alphabet.includes(messageUpp[i])) {
        const index = alphabet.indexOf(messageUpp[i]) + alphabet.indexOf(keyUpp[j]);
        encrypted.push(alphabet[index]);
        j += 1;
      } else {
        encrypted.push(messageUpp[i]);
      }
    }
    if (this.type === false) {
      return encrypted.reverse().join('');
    } else {
      return encrypted.join('');
    }
  }

  decrypt(message, key) {
    if (!message || !key) {
      throw Error;
    }
    const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    const messageTrim = [];
    for (const item of message) {
      if (item !== ' ' && alphabet.includes(item.toUpperCase())) {
        messageTrim.push(item);
      }
    }
    const keyArr = [];
    for (let i = 0; keyArr.length < messageTrim.length; i += 1) {
      keyArr.push(key[i].toUpperCase());
      if (i === key.length - 1) {
        i = -1;
      }
    }
    const messageUpp = message.toUpperCase();
    const keyUpp = keyArr.join('');
    const decrypted = [];
    let j = 0;
    for (let i = 0; i < message.length; i += 1) {
      if (messageUpp[i] !== ' ' && alphabet.includes(messageUpp[i])) {
        const index = alphabet.indexOf(messageUpp[i]) - alphabet.indexOf(keyUpp[j]) + 26;
        decrypted.push(alphabet[index]);
        j += 1;
      } else {
        decrypted.push(messageUpp[i]);
      }
    }
    if (this.type === false) {
      return decrypted.reverse().join('');
    } else {
      return decrypted.join('');
    }
  }
}

module.exports = VigenereCipheringMachine;
