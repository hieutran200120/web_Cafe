import Sider from "antd/es/layout/Sider";
import { Image, Menu } from "antd";
import { Link, useNavigate } from "react-router-dom";
import logo from '../../assets/logo.png'
import { RouterLinks } from "../../const/RouterLinks";
import {
  ReconciliationOutlined,
  HomeOutlined,
  InboxOutlined,
  UsergroupAddOutlined,
  ShopOutlined,
  SettingOutlined,
  TableOutlined,
  ClockCircleOutlined,
} from "@ant-design/icons";
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import SubMenu from "antd/es/menu/SubMenu";

interface props {
  collapsed: any,
  setCollapsed: any
}
const menuItems = [
  {
    key: RouterLinks.BAO_CAO_DOANH_THU,
    label: "Tổng Quan",
    icon: (
      <ShopOutlined style={{ fontSize: "1.3rem", paddingRight: "0.5rem" }} />
    ),
  },
  {
    key: "qlttb",
    label: "Báo Cáo",
    icon: (
      <ShopOutlined style={{ fontSize: "1.3rem", paddingRight: "0.5rem" }} />
    ),
    children: [
      {
        key: RouterLinks.BAO_CAO_DOANH_THU,
        label: "Báo cáo doanh thu",
      },
      {
        key: RouterLinks.BAO_CAO_MAT_HANG,
        label: "Báo cáo mặt hàng",
      },
      {
        key: RouterLinks.BAO_CAO_KHO_HANG,
        label: "Báo cáo kho hàng",
      },
      {
        key: RouterLinks.BAO_CAO_TAI_CHINH,
        label: "Báo cáo tài chính",
      },
      {
        key: RouterLinks.KHUYEN_MAI,
        label: "Báo cáo khuyễn mãi",
      },
      {
        key: RouterLinks.BAO_CAO_NHAN_VIEN,
        label: "Báo cáo nhân viên",
      },
    ],
  },

  {
    key: "muontra",
    label: "Mặt hàng",
    icon: (
      <ShopOutlined style={{ fontSize: "1.3rem", paddingRight: "0.5rem" }} />
    ),
    children: [
      {
        key: RouterLinks.MAT_HANG,
        label: "Danh sách mặt hàng",
      },
      {
        key: RouterLinks.THUC_DON,
        label: "Thực đơn ",
      },
      {
        key: RouterLinks.DANH_MUC,
        label: "Danh mục",
      },
      {
        key: RouterLinks.LUA_CHON,
        label: "Nhóm lựa chọn",
      },
      {
        key: RouterLinks.COMBO,
        label: "combo",
      },
    ],
  },

  {
    key: RouterLinks.DAT_BAN,
    label: "Đặt bàn",
    icon: (
      <ShopOutlined style={{ fontSize: "1.3rem", paddingRight: "0.5rem" }} />
    ),

  },
  {
    key: "Nhanvien",
    label: "Nhân viên",
    icon: (
      <ShopOutlined style={{ fontSize: "1.3rem", paddingRight: "0.5rem" }} />
    ),

  },
  {
    key: RouterLinks.DANH_SACH_KHACH_HANG,
    label: "Khách hàng",
    icon: (
      <ShopOutlined style={{ fontSize: "1.3rem", paddingRight: "0.5rem" }} />
    ),
    children: [
      {
        key: RouterLinks.DANH_SACH_KHACH_HANG,
        label:"Danh sách khách hàng"
      }
    ]

  },
  {
    key: RouterLinks.KHUYEN_MAI,
    label: "Khuyến mãi ",
    icon: (
      <ShopOutlined style={{ fontSize: "1.3rem", paddingRight: "0.5rem" }} />
    ),

  },
  {
    key: "Kho",
    label: "Kho ",
    icon: (
      <ShopOutlined style={{ fontSize: "1.3rem", paddingRight: "0.5rem" }} />
    ),
    children: [
      {
        key: RouterLinks.KHO_HANG,
        label: "Danh sách tồn kho",
      },
      {
        key: RouterLinks.NHAP_KHO,
        label: "Nhập kho ",
      },
      {
        key: RouterLinks.XUAT_KHO,
        label: "xuất kho",
      },
      {
        key: RouterLinks.KIEM_KE,
        label: "Kiểm kê kho",
      },
      // {
      //   key: RouterLinks.,
      //   label: "Lịch sử kho",
      // },
    ],

  },
  {
    key: "Thuchi",
    label: "Thu chi",
    icon: (
      <ShopOutlined style={{ fontSize: "1.3rem", paddingRight: "0.5rem" }} />
    ),

  },
];
const Sidebar = (props: props) => {
  const { collapsed, setCollapsed } = props
  const navigate = useNavigate();
  const onClick = (e: any) => {
    // console.log(e.key)
    navigate(e.key)
  }
  console.log(window.location.pathname.split("/")[1] + '/' + window.location.pathname.split("/")[2])
  return (
    <Sider width={300} trigger={null} collapsible collapsed={collapsed}>
      <Image src={logo} preview={false} style={{ padding: 5 }} />
      <Menu

        selectedKeys={['/' + window.location.pathname.split("/")[1] + '/' + window.location.pathname.split("/")[2]]}
        theme="dark"
        mode="inline"
        defaultSelectedKeys={['1']}
        items={menuItems}
        onClick={onClick}
      >

        {menuItems.map((item) => {
          if (item.children) {
            return (
              <SubMenu
                key={item.key}
                title={
                  <span>
                    {" "}
                    {item.icon}
                    {item.label}
                  </span>
                }
              >
                {item.children.map((childItem) => (
                  <Menu.Item
                    key={childItem.key}

                  >
                    {/* <Link to={childItem.url}>{childItem.label}</Link> */}
                    {item.label}
                  </Menu.Item>
                ))}
              </SubMenu>
            );
          } else {
            return (
              <Menu.Item
                key={item.key}
                icon={item.icon}
              >
                {item.label}
                {/* <Link to={item.url}>{item.label}</Link> */}
              </Menu.Item>
            );
          }
        })}
      </Menu>

    </Sider>
  );
};

export default Sidebar;
