import express from "express";

const configViewEngine = (app) => {
    app.use(express.static('./src/public'))
    app.set("view engine", "ejs");
    app.set("TrangKiemTra", "./src/views/TrangKiemTra");
    app.set("views", "./src/views");
    app.set("NoiDungLienKet","./src/views/NoiDungLienKet");
  

   
}
export default configViewEngine;