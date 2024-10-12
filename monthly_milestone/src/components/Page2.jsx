import React from 'react';
import { Descriptions, Button, message, Card } from 'antd';
import { useLocation, useNavigate } from 'react-router-dom';
import { ArrowLeftOutlined, CheckOutlined } from '@ant-design/icons';
import axios from 'axios';

const Page2 = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const product = location.state?.product || {};

  const handleConfirm = () => {
    axios.post('https://dummyjson.com/products/add', product)
      .then(() => {
        message.success('Product added successfully!');
        navigate('/');
      })
      .catch(() => {
        message.error('Failed to add product.');
      });
  };

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
      <Card title="Confirm Product Details" bordered={false} style={{ marginTop: '20px' }}>
        <Descriptions bordered>
          <Descriptions.Item label="Product Name">{product.title}</Descriptions.Item>
          <Descriptions.Item label="Price">{product.price}</Descriptions.Item>
          <Descriptions.Item label="Category">{product.category}</Descriptions.Item>
        </Descriptions>

        <div style={{ textAlign: 'center', marginTop: '20px' }}>
          <Button 
            type="default" 
            icon={<ArrowLeftOutlined />} 
            onClick={() => navigate('/')}
          >
            Back to Products
          </Button>
          <Button 
            type="primary" 
            icon={<CheckOutlined />} 
            onClick={handleConfirm} 
            style={{ marginLeft: '10px' }}
          >
            Confirm & Add Product
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default Page2;
