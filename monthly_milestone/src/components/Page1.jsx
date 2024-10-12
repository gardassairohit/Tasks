import React, { useState, useEffect } from 'react';
import { DatePicker, Input, Table, Button, Modal, Form, message, Card, Row, Col, Typography } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import moment from 'moment';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const { RangePicker } = DatePicker;
const { Title } = Typography;

const Page1 = () => {
  const [startDate, setStartDate] = useState(moment().subtract(7, 'days'));
  const [endDate, setEndDate] = useState(moment());
  const [search, setSearch] = useState('');
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [form] = Form.useForm();
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('https://dummyjson.com/products')
      .then(response => {
        setProducts(response.data.products);
        setFilteredProducts(response.data.products);
      });
  }, []);

  const handleDateChange = (dates) => {
    setStartDate(dates[0]);
    setEndDate(dates[1]);
  };

  const handleSearch = (e) => {
    setSearch(e.target.value);
    const filtered = products.filter(product =>
      product.title.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  const openModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    form.validateFields().then(values => {
      navigate('/page2', { state: { product: values } });
    }).catch(() => {
      message.error('Please fill out the form correctly.');
    });
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const columns = [
    { title: 'Product Name', dataIndex: 'title', key: 'title' },
    { title: 'Price', dataIndex: 'price', key: 'price' },
    { title: 'Category', dataIndex: 'category', key: 'category' },
  ];

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
      <Title level={2} style={{ textAlign: 'center', marginBottom: '40px' }}>Product Management</Title>

      <Card style={{ marginBottom: '20px', padding: '20px' }}>
        <Row gutter={16}>
          <Col span={12}>
            <RangePicker
              defaultValue={[startDate, endDate]}
              onChange={handleDateChange}
              disabledDate={(current) => current && current > moment().endOf('day')}
              style={{ width: '100%' }}
            />
          </Col>
          <Col span={8}>
            <Input 
              placeholder="Search product..." 
              value={search} 
              onChange={handleSearch} 
              style={{ width: '100%' }} 
            />
          </Col>
          <Col span={4}>
            <Button 
              type="primary" 
              icon={<PlusOutlined />} 
              onClick={openModal} 
              style={{ width: '100%' }}
            >
              Add Product
            </Button>
          </Col>
        </Row>
      </Card>

      <Card>
        <Table dataSource={filteredProducts} columns={columns} rowKey="id" />
      </Card>

      <Modal 
        title="Add New Product" 
        visible={isModalVisible} 
        onOk={handleOk} 
        onCancel={handleCancel}
        transitionName="ant-fade"
        maskTransitionName="ant-fade"
      >
        <Form form={form} layout="vertical">
          <Form.Item 
            name="title" 
            label="Product Name" 
            rules={[{ required: true, message: 'Please input product name!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item 
            name="price" 
            label="Price" 
            rules={[{ required: true, message: 'Please input price!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item 
            name="category" 
            label="Category" 
            rules={[{ required: true, message: 'Please input category!' }]}
          >
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default Page1;
