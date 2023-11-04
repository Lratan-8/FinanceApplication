import React from "react";
import { Button, Checkbox, Col, Form, Input, InputNumber, Row } from "antd";
import darktheme from "../../themes/darktheme";

const onFinish = (values) => {
  console.log("Success:", values);
};
const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};
const SignupForm = (props) => (
  <Form
    name="basic"
    layout="vertical"
    initialValues={{
      remember: true,
    }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
    <Row align='center'>
      <Col span={20}>
        <p style={{ color: props.theme.textColor }}>Enter your name</p>
        <Form.Item
          name="name"
          rules={[
            {
              required: true,
              message: "Please input your name!",
            },
          ]}
        >
          <Input />
        </Form.Item>
      </Col>

      <Col span={20}>
        <p style={{ color: props.theme.textColor }}>Enter your email</p>
        <Form.Item
          name="email"
          rules={[
            {
              required: true,
              message: "Please input your email!",
            },
          ]}
        >
          <Input type="email" />
        </Form.Item>
      </Col>
      <Col span={20}>
        <p style={{ color: props.theme.textColor }}>Username</p>
        <Form.Item
          name="username"
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },
          ]}
        >
          <Input />
        </Form.Item>
      </Col>
      <Col span={20}>
        <p style={{ color: props.theme.textColor }}>Password</p>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password />
        </Form.Item>
      </Col>

      <Col span={24}>
        <Form.Item
          wrapperCol={{
            offset: 10,
            span: 24,
          }}
        >
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Col>
    </Row>
  </Form>
);
export default SignupForm;
