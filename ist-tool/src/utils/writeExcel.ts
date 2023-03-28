import * as XLSX from 'xlsx';

export function writeToExcel(startTime: Date, endTime: Date, timeTaken: string, selectedValue: String) {
  
 
    const fileName = 'clinical_results.xlsx';
    const filePath =  '';


    let workbook: XLSX.WorkBook;
    try {
        workbook = XLSX.readFile(fileName);
    } 
    catch (error) {
        workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, XLSX.utils.json_to_sheet([{ startTime: 'Start Time', endTime: 'End Time',timeTaken: 'Time Taken', result:' Result' }]), 'Timesheet');
    }


    const worksheet = workbook.Sheets['Timesheet'];
    const newRow = { startTime: startTime.toString(), endTime: endTime.toString(),timeTaken: timeTaken, result: selectedValue };
    const rowIndex = XLSX.utils.sheet_add_json(worksheet, [newRow], { skipHeader: true, origin: -1 });


    XLSX.writeFile(workbook, fileName);

}