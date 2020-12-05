export const fromBase64 = value => {
    const buff = Buffer.from(value,'base64');
    return buff.toString('ascii');
}
  
  
export const credentials = {
    client_email: process.env.SHEET_CLIENT_EMAIL,
    private_key: fromBase64(process.env.SHEET_PRIVATE_KEY)
}