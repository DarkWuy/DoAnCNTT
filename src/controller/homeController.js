import moment from 'moment';
import mssql from 'mssql';
const homeController = {
    getHomepage: (req, res) => {
      const isLoggedIn = req.session.isLoggedIn || false;
    return res.render('lmkhung.ejs',{isLoggedIn});
    },
  
    getDangNhap: (req, res) => {
      return res.render('dangnhap.ejs');
    },
    
    getDangKy: (req, res)=>{
      return res.render('dangky.ejs');
    },
    getmenu: (req,res)=>{

      return res.render('menu.ejs');
    },
    gettrangbaihoc: (req, res) => {
      const isLoggedIn = req.session.isLoggedIn || false;
      if(isLoggedIn)
      {
        return res.render('trangbaihoc.ejs');
      }
      else{
        return res.redirect('/dangnhap');
      }
          
  },
    getTrangLienKetnd:(req,res)=>{
        return res.render('NoiDungLienKet/gioithieuchude.ejs');
    },
    getBaiHoc1:(req,res)=>{
      return res.render('TrangBaiHoc/Unit1.ejs');
  },

    getTrangKT:(req,res)=>{
      return res.render('TrangKiemTra/BaiKTThu.ejs');
    },
    getTrangad: async (req, res) => {
      const isAdminLoggedIn = req.session.isAdminLoggedIn || false;
  
      if (isAdminLoggedIn) {
          try {
              const request = new mssql.Request();
              
              // Query to get users
              const getUsersQuery = 'SELECT * FROM DOAN';
              const result = await request.query(getUsersQuery);
              const users = result.recordset.map(user => ({
                  ...user,
                  NgaySinhFormatted: moment(user.NgaySinh).format('DD-MM-YYYY')
              }));
  
              // Query to get UserResults
              const getUsersQuery1 = 'SELECT * FROM UserResults';
              const result1 = await request.query(getUsersQuery1);
              const users1 = result1.recordset.map(user => ({
                  ...user,
                  NgaySinhFormatted: moment(user.daytime).format('DD-MM-YYYY')
              }));
               
              const getUsersQuery2 = 'SELECT * FROM UserResultsnghe';
              const result2 = await request.query(getUsersQuery2);
              const users2 = result2.recordset.map(user => ({
                  ...user,
                  NgaySinhFormatted: moment(user.daytime).format('DD-MM-YYYY')
              }));


  
              res.render('admin.ejs', { users, users1,users2 }); // Sửa user1 thành users1
          } catch (err) {
              console.log("Lỗi truy vấn SQL:", err);
              res.status(500).send('Lỗi truy vấn SQL');
          }
      } else {
          res.redirect('/dangnhap');
      }
  },
  
    getTrangCD:(req,res)=>{
      const isLoggedIn = req.session.isLoggedIn || false;
      if (isLoggedIn) {
        const userData = req.session.userData;
        const hoten = userData.HoTen;
        const tendangnhap = userData.TenDangNhap;
        const ngaysinh= moment(userData.NgaySinh).format('DD-MM-YYYY') ;
        const sodienthoai= userData.Sdt;
        const email = userData.Email;
        const diachi = userData.DiaChi;
        const gioitinh =userData.GioiTinh;
        console.log(hoten);
        res.render('caidat.ejs', {hoten, tendangnhap, ngaysinh, sodienthoai, email, diachi, gioitinh});
    } else {
        res.redirect('/dangnhap');
    }
  
    },

    getTrangBT:(req,res)=>{
      const isLoggedIn = req.session.isLoggedIn || false;
      if(isLoggedIn)
      {
        const userData = req.session.userData;
        const tendangnhap = userData.TenDangNhap;
        const id = userData.id;
    
        return res.render('trangbaitap.ejs',{id, tendangnhap});
      }
      else{
        return res.redirect('/dangnhap');
      }
    }
  };
  
  export default homeController;
  
