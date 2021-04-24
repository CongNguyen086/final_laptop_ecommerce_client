import React, { useState, useEffect } from 'react'
import { Form, Input, Select, Row, Col, message } from 'antd'
import { BASE_URL } from '../../../config/api'
import { sizeList, colorList } from '../../../_mocks/filterOptions'
import styled from 'styled-components'
import './form.css'
// Components
import FormItem from '../../components/FormItem'
import UploadPhoto from '../../components/UploadPhoto'
import DefaultButton from '../../components/DefaultButton'
import LightButton from '../../components/LightButton'
import MultipleSelectBox from '../../components/MultipleSelectBox'

const Label = styled.span`
    font-weight: bold;
    font-size: 12px;
    color: #202124;
`;
const PhotoDescription = styled.span`
    color: #acacac;
`;

const productApiUrl = BASE_URL + '/products'
const categoryApiUrl = BASE_URL + '/categories'
const brandApiUrl = BASE_URL + '/brands'
const validateMessages = {
    required: '${name} is required!',
    whitespace: 'Please enter a valid ${name}!',
    types: {
        string: 'Please enter a valid ${name}!',
        email: 'Please enter a valid ${name}!',
    },
    string: {
        min: 'Your ${name} must be more than 10 characters!'
    },
    pattern: {
        mismatch: 'Please enter a valid ${name}!',
    },
}

const FormItemList = ({ categoryList, brandList }) => {
    return (
        <React.Fragment>
            <FormItem
                name='name'
                label='name'
            >
                <Input className='seller-form-input' />
            </FormItem>
            <FormItem
                name='categories'
                label='categories'
            >
                {/* <MultipleSelectBox
                    list={categoryList}
                    placeholder='Select categories'
                /> */}
                <Select
                    mode='multiple'
                    placeholder='Select categories'
                    className='select-status'
                >
                    {categoryList.map(item => (
                        <Select.Option key={item._id} value={item._id}>{item.name}</Select.Option>
                    ))}
                </Select>
            </FormItem>
            <FormItem
                name='brand'
                label='brand'
            >
                <Select
                    placeholder='Select brand'
                    className='select-status'
                >
                    {brandList.map(item => (
                        <Select.Option key={item._id} value={item._id}>{item.name}</Select.Option>
                    ))}
                </Select>
            </FormItem>
            <FormItem
                name='price'
                label='price ($)'
            >
                <Input className='seller-form-input' type='number' />
            </FormItem>
            <FormItem
                name='sizes'
                label='sizes'
            >
                <Select
                    mode='multiple'
                    placeholder='Select sizes'
                    className='select-status'
                >
                    {sizeList.map(item => (
                        <Select.Option key={item} value={item}>{item}</Select.Option>
                    ))}
                </Select>
            </FormItem>
            <FormItem
                name='colors'
                label='colors'
            >
                <Select
                    mode='multiple'
                    placeholder='Select colors'
                    className='select-status'
                >
                    {colorList.map(item => (
                        <Select.Option key={item.value} value={item.value}>{item.color}</Select.Option>
                    ))}
                </Select>
            </FormItem>
            <FormItem
                name='quantity'
                label='quantity'
            >
                <Input className='seller-form-input' type='number' />
            </FormItem>
            <FormItem
                name='description'
                label='Description'
                rules={[{
                    type: 'string',
                    min: 11
                }]}
            >
                <Input.TextArea className='register-input' />
            </FormItem>
        </React.Fragment>
    )
}

export default function CreateForm() {
    const [form] = Form.useForm()
    const [fileList, setFileList] = useState([])
    const [categoryList, setCategoryList] = useState([])
    const [brandList, setBrandList] = useState([])
    const [isShow, setShowPhoto] = useState(false)

    const categorySlug = 'ladies-dress'
    const categoryId = '5ec3a6a57cf6a83484edb51c'
    useEffect(() => {
        fetch(categoryApiUrl + `/${categorySlug}`)
            .then(res => res.json())
            .then(categories => { setCategoryList(categories) })
        fetch(brandApiUrl)
            .then(res => res.json())
            .then(brands => { setBrandList(brands) })
    }, [])
    const uploadEventHandler = {
        beforeUpload: file => {
            const isValidFileType = file.type === 'image/jpeg' || file.type === 'image/png'
            console.log(file)
            if (!isValidFileType) {
                message.error('You can only upload JPG/PNG file!');
            } else {
                setFileList([...fileList, file])
            }
            // if (file.name.match(/\.(jpeg|jpg|png)$/)) {
            //     console.log(file.name)
            //     setFileList([...fileList, file])
            // }
            return false
        },
        onRemove: file => {
            const newList = [...fileList]
            const index = newList.indexOf(file)
            newList.splice(index, 1)
            setFileList(newList)
        },
    }
    const handleReset = () => {
        form.resetFields()
    }

    const addNewProduct = async (formData) => {
        const config = {
            method: 'POST',
            body: formData
        }
        const res = await fetch(productApiUrl + '/create', config)
        const product = await res.json()
        console.log(product.productId)
        return product.productId
    }
    const addNewProductToSubcategory = async (categoryId, subCategoryList, productId) => {
        const config = {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                categoryId,
                subCategoryList,
                productId
            })
        }
        fetch(categoryApiUrl + '/addproduct', config)
            .then(res => res.json())
            .then(result => {
                console.log(result)
                handleReset()
                onSuccess('Create successfully')
            })
            .catch(err => err)
    }
    const onFinish = async (value) => {
        console.log(value)
        const formData = new FormData()
        fileList.forEach(file => {
            formData.append('photos', file)
        })
        formData.append('category', categoryId)
        for (const property in value) {
            if (property == 'colors' || property == 'sizes') {
                value[property].forEach(item => {
                    formData.append(`${property}[]`, item)
                })
            } else {
                formData.append(`${property}`, value[property])
            }
        }
        const productId = await addNewProduct(formData)
        addNewProductToSubcategory(categoryId, value.categories, productId)
        // form.resetFields()
    }
    const onSuccess = msg => {
        message.success(msg)
    }

    const layout = {
        labelCol: {
            span: 3,
        },
        wrapperCol: {
            span: 21,
        },
    }
    return (
        <Form
            {...layout}
            form={form}
            name='product_form'
            validateMessages={validateMessages}
            onFinish={onFinish}
            className='seller-form-custom'
        >
            <Row gutter={10}>
                <Col span={3} style={{ textAlign: 'end', marginTop: 40 }}>
                    <Label>PHOTOS</Label>
                </Col>
                <Col span={21} style={{ marginBottom: 24 }}>
                    <UploadPhoto uploadEventHandler={uploadEventHandler} fileList={fileList} />
                    <PhotoDescription>
                        You can add up to 8 photos. The 1st photo will be set as cover (main photo).
                    </PhotoDescription>
                </Col>
            </Row>

            <FormItemList categoryList={categoryList} brandList={brandList} />

            <Form.Item wrapperCol={{ offset: 14, span: 10 }}>
                <Row gutter={12} align='middle' className='form-button-group'>
                    <Col span={12}>
                        <LightButton
                            htmlType='button'
                            name='Cancel'
                            onClick={handleReset}
                            style={{ padding: '12px 54px' }}
                        />
                    </Col>
                    <Col span={12}>
                        <DefaultButton
                            htmlType='submit'
                            name='Complete'
                            style={{ padding: '12px 54px' }}
                        />
                    </Col>
                </Row>
            </Form.Item>
        </Form>
    )
}
