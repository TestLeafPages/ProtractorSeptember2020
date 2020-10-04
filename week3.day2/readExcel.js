const xlsx = require("xlsx")

function getExcelData(path, sheetName) {
    let wb =  xlsx.readFile(path);
    let wsheet = wb.Sheets[sheetName];
    let values = xlsx.utils.sheet_to_json(wsheet);
    values.forEach(data => { console.log(data) })
}

getExcelData("./TC001.xlsx","Sheet1");