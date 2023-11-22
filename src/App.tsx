import React from 'react';
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './redux';
import './App.css';
import { Suspense } from 'react';
import { RouterProvider } from 'react-router-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { router } from './routes';
import { RouterLinks } from './const/RouterLinks';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import Combo from './pages/mathang/combo/Combo';
import DanhMucHang from './pages/mathang/danhmuc/DanhMucHang';
import KhuyenMai from './pages/khuyenmai/KhuyenMai';
import DanhSachKhachHang from './pages/khachhang/danhsachkhachhang';
import DanhsachMatHang from './pages/mathang/danhsachmathang/DanhSachMatHang';
import Layout from './layouts/Layout';
function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <PersistGate loading={null} persistor={persistor}>
          <div className='MainApp'>

            <div className='ContentApp'>
              <Routes>
                <Route path={RouterLinks.LOGIN} element={<Login />} />
                <Route path={RouterLinks.REGISTER} element={<Register />} />
                <Route path={RouterLinks.HOME_PAGE} element={<Layout />}>
                  <Route path={RouterLinks.COMBO} element={<Suspense fallback={null}><Combo /></Suspense>} />
                  <Route path={RouterLinks.DANH_MUC} element={<Suspense fallback={null}><DanhMucHang /></Suspense>} />
                  <Route path={RouterLinks.MAT_HANG} element={<Suspense fallback={null}><DanhsachMatHang /></Suspense>} />
                  <Route path={RouterLinks.KHUYEN_MAI} element={<Suspense fallback={null}><KhuyenMai /></Suspense>} />
                  <Route path={RouterLinks.DANH_SACH_KHACH_HANG} element={<Suspense fallback={null}><DanhSachKhachHang /></Suspense>} />


                </Route>

              </Routes>

            </div>
          </div>
        </PersistGate>
      </BrowserRouter>

    </Provider>
  );
}

export default App;
