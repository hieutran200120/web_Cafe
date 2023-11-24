import React, { useEffect, useState } from "react";
import { Card, Row, Col, Table, Breadcrumb, Divider, Popconfirm, Space, Tooltip, Button, Select, Typography, Input } from "antd"
import { useDispatch, useSelector } from "react-redux";
import useAction from "../../../redux/useActions";
import { DeleteOutlined, EditOutlined } from '@ant-design/icons'
import { ColumnProps } from "antd/es/table";
import dayjs from "dayjs";
import { message } from "antd";
import { productServices } from "../../../utils/services/productServices ";
import { categoryServices } from "../../../utils/services/categoryServices";
import { materialService } from "../../../utils/services/materialService";
interface DataType {
    key: number;
    createdAt: Date;
    name: string;
}
const DanhsachMatHang = () => {
    const loading = useSelector((state: any) => state.state.loadingState)
    const [currentPage, setCurrentPage] = useState(1)
    const [rowsPerPage, setRowsPerpage] = useState(9)
    const [search, setSearch] = useState<string>('')
    const [openModalAdd, setOpenModalAdd] = useState(false)
    const [openModalEdit, setOpenModalEdit] = useState(false)
    const [curData, setCurData] = useState({})
    const [data, setData] = useState([])
    const [category, setCategory] = useState([])
    const [material, setMaterial] = useState([])
    const [count, setCount] = useState(0)
    const [messageApi, contextHolder] = message.useMessage();
    const getcategory = () => {
        categoryServices.get({
            page: 1,
            size: 100
        }).then((res: any) => {
            if (res.status) {
                const temp = res.data.data.map((item: any) => {
                    return {
                        ...item,
                        value: item.id,
                        label: item.name
                    }
                })
                setCategory(temp);
            }
        })
    }
    const getmaterial = () => {
        materialService.get(
            {
                page: 1,
                size: 100
            }
        ).then((res: any) => {
            if (res.status) {
                const temp = res.data.data.map((item: any) => {
                    return {
                        ...item,
                        value: item.id,
                        label: item.name
                    }
                })
                setMaterial(temp);
            }
        })
    }
    console.log(material)
    const getData = () => {
        productServices.get({
            page: currentPage,
            size: rowsPerPage,
            ...(search && search !== "" && { name: search })
        }).then((res: any) => {
            if (res.status) {
                setCount(res.data.count)
                setData(res.data.data)
                console.log(res.data)
            }
        }).catch((err: any) => {
            console.log(err)
        })
    }

    const hanldeModalAdd = () => {
        setOpenModalAdd(false)
    }
    const handleModalEdit = () => {
        setOpenModalEdit(false)
    }

    const hanldUpdate = (data: any) => {

        setCurData(data)
        setOpenModalEdit(true)
    }

    const hanldeDelete = async (id: number) => {
        try {
            const res = await productServices.deleteById(id)
            if (res.status) {
                getData()
            } else {
                message.error(res.message)
            }
        } catch (err: any) {
            console.log(err)
            message.error("Xóa thất bại")
        }
    }


    const columns: ColumnProps<DataType>[] = [
        {
            title: "TT",
            dataIndex: "ID",
            width: 30,
            align: 'center',
            render: (text, record, index) => <span>{(((currentPage - 1) * rowsPerPage) + index + 1)}</span>
        },
        {
            title: "Mặt hàng",
            dataIndex: "name",
            align: "center"
        },
        {
            title: "Ảnh",
            dataIndex: "image",
            render: (text) => <img src={text} width={80} height={60} />,
        },
        {
            title: "Giá",
            dataIndex: "price",
            align: "center",
            render: (text) => (
                <div>
                    {new Intl.NumberFormat("vi-VN", {
                        style: "currency",
                        currency: "VND",
                    }).format(text)}
                </div>
            ),
        },
        {
            title: "Đơn vị",
            dataIndex: "unit",
            align: "center"
        },

        {
            title: "Ngày nhập",
            dataIndex: "createdAt",
            align: 'center',
            width: '20%',
            render: (text, record, index) => <span>{text ? dayjs(text).format("DD/MM/YYYY") : ""}</span>
        },

        {
            title: 'Thao tác',
            width: '108px',
            render: (record: any, index: any) => <div style={{ display: 'flex', justifyContent: 'space-around', paddingRight: '20px', paddingLeft: '20px' }}>

                <EditOutlined onClick={() => hanldUpdate(record)} style={{ marginRight: '1rem', color: '#036CBF', cursor: 'pointer' }} />
                <Popconfirm onConfirm={() => hanldeDelete(record.id)} title="Bạn chắc chắn xóa?" cancelText='Hủy' okText='Đồng ý'>
                    <DeleteOutlined style={{ color: 'red', cursor: 'point' }} />
                </Popconfirm>
            </div>
        }
    ]

    useEffect(() => {
        getData(),
            getcategory(),
            getmaterial()

    }, [currentPage, rowsPerPage])
    return <div className="ds_canbo">
        {contextHolder}
        <Row>
            <Breadcrumb
                style={{ margin: "auto", marginLeft: 0 }}
                items={[
                    {
                        title: "Quản lý mặt hàng",
                    },
                    {
                        title: (
                            <span style={{ fontWeight: "bold" }}>Danh sách các mặt hàng</span>
                        ),
                    },
                ]}
            />
            <Button
                type="primary"
                style={{ marginLeft: "auto", width: 100 }}
                className="blue-button"
                onClick={() => {
                    setOpenModalAdd(true)
                    setCurData({})
                }}
            >
                Thêm mới
            </Button>
            <Divider style={{ margin: "10px" }}></Divider>
        </Row>
        <Row>
            <Col span={6}>
                <Space direction="vertical" style={{ width: "100%" }}>
                    <Typography.Text>Các Mặt hàng</Typography.Text>
                    <Input
                        type="text"
                        placeholder="Tìm kiếm"
                        style={{ height: "34px" }}
                        onChange={(e) => {
                            if (e.target.value === "") {
                                setSearch('')
                            }
                        }}
                        onKeyPress={(e: any) => {
                            if (e.key === "Enter") {
                                setSearch(e.target?.value)
                                setCurrentPage(1)
                            }
                        }}
                    />
                </Space>
            </Col>
            <Divider style={{ margin: "10px" }}></Divider>
        </Row>
        <Row>

            <Table
                loading={loading}
                style={{ width: "100%" }}
                rowClassName={() => 'editable-row'}
                bordered
                dataSource={data}
                columns={columns}
                pagination={{
                    current: currentPage,
                    pageSize: rowsPerPage,
                    defaultPageSize: rowsPerPage,
                    showSizeChanger: true,
                    pageSizeOptions: ["10", "20", "30", '100'],
                    total: count,
                    locale: { items_per_page: "/ trang" },
                    showTotal: (total, range) => <span>Tổng số: {total}</span>,
                    onShowSizeChange: (current, pageSize) => {
                        setCurrentPage(current)
                        setRowsPerpage(pageSize)
                    },
                    onChange: (pageNumber) => {
                        setCurrentPage(pageNumber)
                    }
                }}
            />

        </Row>
        <Modal category={category} material={material} curData={curData} action="Add" handleModal={hanldeModalAdd} open={openModalAdd} getData={getData}
        />
        <Modal category={category} material={material} curData={curData} action="Edit" handleModal={handleModalEdit} open={openModalEdit} getData={getData}
        />

    </div>;
};

const Modal = React.lazy(() => import("./Modal"))

export default DanhsachMatHang;
