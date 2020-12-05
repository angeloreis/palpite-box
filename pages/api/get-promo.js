import { GoogleSpreadsheet } from "google-spreadsheet";
import { credentials } from '../../utils'

const doc = new GoogleSpreadsheet(process.env.SHEET_DOC_ID);

export default async (req, res) => {
  try {
    await doc.useServiceAccountAuth(credentials);
    await doc.loadInfo();

    const sheet = doc.sheetsByIndex[2];
    await sheet.loadCells("A2:B2");

    const mostrarPromoCell = sheet.getCell(1, 0);
    const textoCell = sheet.getCell(1, 1);

    res.end(
      JSON.stringify({
        showCoupon: mostrarPromoCell.value === "VERDADEIRO",
        message: textoCell.value,
      })
    );
  } catch (error) {
    res.end(
      JSON.stringify({
        showCoupon: false,
        message: error
      })
    );
  }
};
