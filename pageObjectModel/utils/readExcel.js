const xlsx = require("xlsx")

class ReadExcel {
    getExcelData(path, sheetName){
        let wb = xlsx.readFile(path)
         let sheet = wb.Sheets[sheetName]
         return xlsx.utils.sheet_to_json(sheet)
    }
}

// getExcelData("./data.xlsx", "Sheet1")

exports.readExcel = ReadExcel