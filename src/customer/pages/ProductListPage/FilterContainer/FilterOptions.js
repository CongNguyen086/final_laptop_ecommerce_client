import React from 'react'
import { Collapse } from 'antd'
// Components
import SizeFilter from '../../../components/Filter/SizeFilter'
import ColorFilter from '../../../components/Filter/ColorFilter'
import CheckboxFilter from '../../../components/Filter/CheckboxFilter'
import PriceFilter from '../../../components/Filter/PriceFilter'

const { Panel } = Collapse
export default function FilterOptions({ sizeProps, colorProps, brandProps, priceProps, statusProps }) {
    const renderFilterOptions = () => {
        return (
            <React.Fragment>
                <Panel key='Size' header='Size'>
                    <SizeFilter {...sizeProps} />
                </Panel>
                <Panel key='Color' header='Color'>
                    <ColorFilter {...colorProps} />
                </Panel>
                <Panel key='Brand' header='Brand'>
                    <CheckboxFilter {...brandProps} />
                </Panel>
                <Panel key='Price' header='Price'>
                    <PriceFilter {...priceProps} />
                </Panel>
                <Panel key='Available' header='Available'>
                    <CheckboxFilter {...statusProps} />
                </Panel>
            </React.Fragment>
        )
    }

    return (
        <div>
            <div className='menu-title'>Filter</div>
            <Collapse
                className='filter-menu'
                defaultSelectedKeys='All'
                expandIconPosition='right'
            >
                {renderFilterOptions()}
            </Collapse>
        </div>
    )
}
