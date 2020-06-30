const generateRadomString = () => {
    const chars = 'abcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let pass = ''
    for(let i = 0; i<10; i++)
        pass += chars.charAt(Math.random() * 61)
    return pass
}

export default generateRadomString