const express = require("express");
const exceljs = require("exceljs");
const app = express();

app.get("/export", (req, res) => {
  const workbook = new exceljs.Workbook();
  const sheet = workbook.addWorksheet("sample");

  sheet.columns = [
    { header: "TITLE", key: "title", width: 40 },
    { header: "AUTHOR", key: "author", width: 40 },
  ];
  
  sheet.addRow({ title: "Hello", author: "Pavan" });
  sheet.addRow({ title: "Hello2", author: "Pavan2" });
  sheet.addRow({ title: "Hello3", author: "Pavan3" });

  res.header("Content-Type", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet")
    .header("Content-Disposition", "attachment; filename=mydata.xlsx");

  workbook.xlsx.write(res);
});

app.listen(9000, () => console.log("Running on port 9000..."));
