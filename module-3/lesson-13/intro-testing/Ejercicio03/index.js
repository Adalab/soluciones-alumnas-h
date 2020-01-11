function paddingLeft(string, length, padding) {
    const initialLength = string.length;

    if(initialLength < length){
        const paddingLength = length - initialLength;
        let paddingShown = '';
        for (let i = 0; i < paddingLength; i++) {
            paddingShown = paddingShown + padding;
        }
        return paddingShown + string;
    } else {
        return string
    }
}
module.exports = paddingLeft;