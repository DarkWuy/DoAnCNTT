import express from "express";
import homeController from '../controller/homeController.js';
const router = express.Router();

const initWebRoute = (app) => {
    router.get('/', homeController.getHomepage);
    router.get('/dangnhap', homeController.getDangNhap);
    router.get('/dangky', homeController.getDangKy);
    router.get('/trangbaihoc', homeController.gettrangbaihoc);
    router.get('/trangkiemtra', homeController.getTrangKT);
    router.get('/trangbaitap', homeController.getTrangBT);
    router.get('/gioithieuchude', homeController.getTrangLienKetnd);
    router.get('/caidat', homeController.getTrangCD);
    router.get('/baihoc1',homeController.getBaiHoc1);
    router.get('/admin',homeController.getTrangad);
    router.get('/dangxuat', (req, res) => {
   
        req.session.isLoggedIn = false; 
        req.session.isAdminLoggedIn=false;
        res.redirect('/');
     
       
    });


    return app.use('/', router);
};

export default initWebRoute;
