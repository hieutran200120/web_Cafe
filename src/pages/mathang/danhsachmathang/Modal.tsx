import React, { Fragment, useEffect, useState } from "react";
import { Form, Row, Col, Modal, Input, DatePicker, Select, Button, Upload } from 'antd'
import { categoryServices } from "../../../utils/services/categoryServices";
import { message } from "antd";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { UploadOutlined } from '@ant-design/icons';
import type { UploadFile } from 'antd/es/upload/interface';
import dayjs from "dayjs";
import { Tabs } from "antd"
const FormItem = Form.Item


interface Props {
    curData: any,
    open: boolean,
    handleModal: Function,
    action: string,
    getData: any,
    category: any

}
const fileList: UploadFile[] = [

];
const ModalAddMatHang = (props: Props) => {
    const [messageApi, contextHolder] = message.useMessage();
    const [form] = Form.useForm()
    const { curData, open, handleModal, action, getData } = props
    useEffect(() => {
        if (curData) {

            form.setFieldsValue({
                name: curData?.name ? curData?.name : "",
                price: curData?.price ? curData?.price : "",
                unit: curData?.unit ? curData?.unit : "",
                description: curData?.description ? curData?.description : "",
                image: curData?.image ? curData?.image : "",
            })
        }
    }, [curData, form])
    const onFinish = async (values: any) => {
        try {
            if (action === "Add") {
                const res = await categoryServices.create({
                    ...values,
                    role_id: "U"
                })
                if (res.status) {
                    getData()
                    handleModal()
                    message.success("Thêm mới thành công")
                } else {
                    message.error(res.message)
                }
            } else {

                const res = await categoryServices.update(curData.id, values)
                if (res.status) {
                    getData()
                    handleModal()
                    message.success("Chỉnh sửa thành công")
                } else {
                    message.error(res.message)
                }
            }
        } catch (err: any) {
            console.log(err)
            message.error(" thất bại")
        }

    }
    return <Fragment>
        {contextHolder}
        <Modal
            title={action === "Add" ? "Thêm mới các mặt hàng" : "Chỉnh sửa mặt hàng"}
            open={open}
            footer={null}
            onCancel={() => handleModal()}
        >
            <Form onFinish={onFinish} layout="vertical" form={form} >
                <Tabs defaultActiveKey="tab1">
                    <Tabs.TabPane tab="Mặt hàng" key="tab 1">
                        <Row gutter={16}>
                            <Col span={12} className="gutter-row">
                                <FormItem
                                    style={{ marginBottom: "4px" }}
                                    label={
                                        "Tên mặt hàng"
                                    }
                                    name='name'
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Nhập tên mặt hàng'
                                        }
                                    ]}
                                >
                                    <Input placeholder='Nhập tên mặt hàng' />
                                </FormItem>
                                <FormItem
                                    style={{ marginBottom: "4px" }}
                                    label={
                                        "Giá"
                                    }
                                    name='price'
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Nhập giá'
                                        }
                                    ]}
                                >
                                    <Input placeholder='Nhập giá' />
                                </FormItem>
                            </Col>
                            <Col span={12} className="gutter-row">
                                <FormItem
                                    style={{ marginBottom: "4px" }}
                                    label={
                                        "đơn vị tính"
                                    }
                                    name='unit'
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Nhập đơn vị tính'
                                        }
                                    ]}
                                >
                                    <Input placeholder='Nhập đơn vị tính' />
                                </FormItem>
                                <FormItem
                                    style={{ marginBottom: "4px" }}
                                    label={
                                        "Loại mặt hàng "
                                    }
                                    name='id'
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Hãy nhập tên loại mặt hàng '
                                        }
                                    ]}
                                >
                                    <Select options={props.category} placeholder="Chọn tên loại mặt hàng" />
                                </FormItem>
                            </Col>
                        </Row>



                    </Tabs.TabPane>
                    <Tabs.TabPane tab="Mô tả" key="tab 2">
                        <Form.Item
                            style={{ marginBottom: '4px' }}
                            label='Mô tả'
                            name='description'
                            rules={[
                                {
                                    required: true,
                                    message: 'Nhập mô tả',
                                },
                            ]}
                        >
                            <CKEditor
                                editor={ClassicEditor}
                                data="<p>Start typing here...</p>"
                                onChange={(event, editor) => {
                                    const data = editor.getData();
                                    form.setFieldsValue({ description: data });
                                }}
                            />
                        </Form.Item>
                    </Tabs.TabPane>
                    <Tabs.TabPane tab="Ảnh" key="tab 3">
                        <FormItem
                            style={{ marginBottom: "4px" }}
                            label={
                                "Ảnh"
                            }
                            name='image'
                            rules={[
                                {
                                    required: true,
                                    message: 'Nhập ảnh'
                                }
                            ]}
                        >
                            <Upload
                                action="/home/treant1/Pictures/Screenshots/Screenshot"
                                listType="picture"
                                defaultFileList={[...fileList]}
                            >
                                <Button icon={<UploadOutlined />}>Upload</Button>
                            </Upload>
                            <br />

                        </FormItem>
                    </Tabs.TabPane>
                </Tabs>


                <Row>

                    <Col span={4}></Col>
                    <Col span={16}
                    >
                        <Form.Item>
                            <div style={{ display: "flex", marginTop: "10px", alignItems: "center", justifyContent: "center" }}>

                                {
                                    action === "Add" ? <Button type="primary" htmlType="submit">Thêm mới</Button> : <Button style={{ width: "80px" }} type="primary" htmlType="submit">Lưu</Button>
                                }
                                <Button style={{ width: "80px", marginLeft: "7px" }} onClick={() => handleModal()}>Hủy</Button>

                            </div>
                        </Form.Item>

                    </Col>
                    <Col span={4}></Col>

                </Row>
            </Form>

        </Modal>
    </Fragment>
};

export default ModalAddMatHang
