import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import Layouts from "../layouts/Layout";
import NotFound from "../pages/not-found/NotFound";
import { RouterLinks } from "../const/RouterLinks";
import Doanhthu from "../pages/baocao/Doanhthu";
import Mathang from "../pages/baocao/MatHang";
import Khohang from "../pages/baocao/KhoHang";
import TaiChinh from "../pages/baocao/TaiChinh";
import DanhSachHang from "../pages/mathang/DanhSachHang";
import ThucDon from "../pages/mathang/ThucDon";
import DanhMuc from "../pages/mathang/DanhMuc";
import LuaChon from "../pages/mathang/LuaChon";
import Combo from "../pages/mathang/Combo";
import DatBan from "../pages/datban/DatBan";
import Promotion from "../pages/promotion";
import DanhSachKhachHang from "../pages/khachhang/danhsachkhachhang";
import TonKho from "../pages/kho/TonKho";
import NhapKho from "../pages/kho/NhapKho";
import XuatKho from "../pages/kho/XuatKho";
import KiemKe from "../pages/kho/KiemKe";
import NhanVien from "../pages/baocao/NhanVien";
export const router = createBrowserRouter([
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "register",
    element: <Register />,
  },
  {
    path: "/",
    element: <Layouts />,
    errorElement: <NotFound />,
    children: [
      {
        path: RouterLinks.BAO_CAO_DOANH_THU,
        element: <Doanhthu />,
      },
      {
        path: RouterLinks.BAO_CAO_MAT_HANG,
        element: <Mathang />,
      },
      {
        path: RouterLinks.BAO_CAO_KHO_HANG,
        element: <Khohang />,
      },
      {
        path: RouterLinks.BAO_CAO_TAI_CHINH,
        element: <TaiChinh />,
      },
      {
        path: RouterLinks.BAO_CAO_NHAN_VIEN,
        element: <NhanVien />,
      },
      {
        path: RouterLinks.MAT_HANG,
        element: <DanhSachHang />,
      },
      {
        path: RouterLinks.THUC_DON,
        element: <ThucDon />,
      },
      {
        path: RouterLinks.DANH_MUC,
        element: <DanhMuc />,
      },
      {
        path: RouterLinks.LUA_CHON,
        element: <LuaChon />,
      },
      {
        path: RouterLinks.COMBO,
        element: <Combo />,
      },
      {
        path: RouterLinks.DAT_BAN,
        element: <DatBan />,
      },
      {
        path: RouterLinks.KHO_HANG,
        element: <TonKho />,
      },
      {
        path: RouterLinks.NHAP_KHO,
        element: <NhapKho />,
      },
      {
        path: RouterLinks.XUAT_KHO,
        element: <XuatKho />,
      },
      {
        path: RouterLinks.KIEM_KE,
        element: <KiemKe />,
      },
      {
        path: RouterLinks.KHUYEN_MAI,
        element: <Promotion />,
      },
      {
        path: RouterLinks.DANH_SACH_KHACH_HANG,
        element: <DanhSachKhachHang />,
      },
    ],
  },
]);
