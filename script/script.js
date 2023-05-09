function generateKey(length, characters) {
    let usstring = '';
    for (let i = 0; i < length; i++) {
        let random = Math.floor((Math.random() * characters.length + 1), 1);
        usstring += characters[random];
    }
    return usstring;
}

const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';

const key = generateKey(16, characters);
console.log(key);