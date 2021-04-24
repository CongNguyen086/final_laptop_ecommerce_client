export const sortObjectByField = (data, field, startDirection) => {
    if (startDirection == 'asc') {
        data.sort((a, b) => {
            const fieldA = a[field]
            const fieldB = b[field]
            if (fieldA > fieldB) return 1
            if (fieldA < fieldB) return -1
            return 0
        })
    } else {
        data.sort((a, b) => {
            const fieldA = a[field]
            const fieldB = b[field]
            if (fieldB > fieldA) return 1
            if (fieldB < fieldA) return -1
            return 0
        })
    }
}
// 6 -> 6.00, 5.1 -> 5.10
export const addZeroes = (number) => {
    const dec = String(number).split('.')
    const len = dec[1] && dec[1].length > 2 ? dec[1].length : 2
    return Number(number).toFixed(len)
}
export const arrayBufferToBase64 = (buffer) => {
    let base64Flag = 'data:image/jpeg;base64,'
    let binary = ''
    var bytes = new Uint8Array(buffer)
    bytes.forEach(byte => binary += String.fromCharCode(byte))
    let imgStr = window.btoa(binary)
    return (base64Flag + imgStr)
    
}