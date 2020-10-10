const xlsx = require("xlsx");

class ReadExcel{
    getData(path, sheetName){
        let wb = xlsx.readFile(path)
        let sheet = wb.Sheets[sheetName]
        return xlsx.utils.sheet_to_json(sheet);
    }
}

exports.readExcel = ReadExcel