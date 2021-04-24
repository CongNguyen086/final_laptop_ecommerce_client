import React, { useState, useEffect } from 'react'
import { Modal, Form, Button, Divider } from 'antd'
import './authen.css'
// Components
import FormButton from './FormButton'

export default function FormModal({ visible, handleCancel, formName, validateMessages, onFinish, title,
                                    renderFormInput, extraComponent, loading, btnName, footer }) {
    const [form] = Form.useForm()
    const [, forceUpdate] = useState();

    // To disable submit button at the beginning.
    useEffect(() => {
        forceUpdate({});
    }, []);

    const onCancel = () => {
        form.resetFields()
        handleCancel()
    }

    return (
        <Modal
            visible={visible}
            footer={null}
            onCancel={onCancel}
            forceRender
            centered
            destroyOnClose
            className='modal-custom'
        >
            <Form
                form={form}
                layout='vertical'
                name={formName}
                validateMessages={validateMessages}
                onFinish={onFinish}
                className='form-custom'
            >
                <Form.Item>
                    <div className='modal-title'>{title}</div>
                </Form.Item>
                {renderFormInput}
                <Form.Item>
                    {extraComponent}
                </Form.Item>
                <Form.Item shouldUpdate={true}>
                    {() => (
                        <FormButton
                            disabled={
                                !form.isFieldsTouched(true) ||
                                form.getFieldsError().filter(({ errors }) => errors.length).length
                            }
                            loading={loading}
                            name={btnName}
                        />
                    )}
                </Form.Item>
                <Divider style={{ marginTop: 30, marginBottom: 20 }} />
                <Form.Item style={{ marginBottom: 0 }}>
                    {footer}
                </Form.Item>
            </Form>
        </Modal>
    )
}

