import React, { Component } from 'react'
import { Upload, Modal } from 'antd'
import { PlusOutlined } from '@ant-design/icons'

const UploadButton = () => (
    <div>
        <PlusOutlined />
        <div className="ant-upload-text">Add photo</div>
    </div>
)

export default class UploadPhoto extends Component {
    constructor(props) {
        super(props)
        this.state = {
            previewVisible: false,
            previewImage: '',
            previewTitle: '',
        }
    }

    getBase64(file) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = error => reject(error);
        });
    }

    handleCancel = () => this.setState({ previewVisible: false });

    handlePreview = async file => {
        if (!file.url && !file.preview) {
            file.preview = await this.getBase64(file.originFileObj);
        }

        this.setState({
            previewImage: file.url || file.preview,
            previewVisible: true,
            previewTitle: file.name || file.url.substring(file.url.lastIndexOf('/') + 1),
        });
    };

    // handleChange = ({ fileList }) => this.setState({ fileList }, () => { console.log(this.state.fileList) });
    
    render() {
        const { previewVisible, previewImage, previewTitle } = this.state;
        const { uploadEventHandler, fileList, isShow } = this.props
        console.log(fileList)
        return (
            <div className="clearfix">
                <Upload
                    {...uploadEventHandler}
                    accept='image/*'
                    listType="picture-card"
                    onPreview={this.handlePreview}
                    // name='photo'
                    // fileList={fileList}
                    // onChange={this.handleChange}
                >
                    {fileList.length >= 8 ? null : <UploadButton />}
                </Upload>
                <Modal
                    visible={previewVisible}
                    title={previewTitle}
                    footer={null}
                    onCancel={this.handleCancel}
                >
                    <img alt="room_photo" style={{ width: '100%' }} src={previewImage} />
                </Modal>
            </div>
        )
    }
}
