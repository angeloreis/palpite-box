import { GoogleSpreadsheet } from "google-spreadsheet";
import moment from 'moment'

import { credentials } from '../../utils'

const doc = new GoogleSpreadsheet(process.env.SHEET_DOC_ID);

const generateCoupon = () => {
  const codeBrute = parseInt(moment().format('YYMMDDHHmmssSSS')).toString(16).toUpperCase()
  const finalCode = codeBrute.substr(0,4).concat('-').concat(codeBrute.substr(4,4).concat('-').concat(codeBrute.substr(8,4)))
  return finalCode
}

export default async (req, res) => {
  try {
    await doc.useServiceAccountAuth(credentials)
    await doc.loadInfo()
    const sheet = doc.sheetsByIndex[1]
    const data = JSON.parse(req.body)
    
    const sheetConfig = doc.sheetsByIndex[2]
    await sheetConfig.loadCells('A2:B2')
    
    const mostrarPromoCell = sheetConfig.getCell(1,0)
    const textoPromoCell = sheetConfig.getCell(1,1)
    
    let Cupom = 'SEM CUPOM PROMOCIONAL ATIVO'
    let Promo = 'SEM TEXTO PROMOCIONAL'

    if (mostrarPromoCell.value === 'VERDADEIRO') {
        Cupom = generateCoupon()
        Promo = textoPromoCell.value
    }

    await sheet.addRow({
      Nome: data.Nome,
      Email: data.Email,
      Whatsapp: data.Whatsapp,
      Comentario: data.Comentario,
      Nota: data.Nota,
      Cupom,
      Promo,
      'Data Preenchimento': moment().format('DD/MM/YYYY, HH:mm:ss')      
    });

    res.end(JSON.stringify({
      showCoupon: Cupom !== '',
      Cupom,
      Promo
    }));
  } catch (error) {
    console.log(error);
    res.end("error");
  }
};
