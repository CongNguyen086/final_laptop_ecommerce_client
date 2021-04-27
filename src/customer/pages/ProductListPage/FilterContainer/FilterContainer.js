import React, { useState, useEffect } from 'react';
import { Collapse } from 'antd';
import { connect } from 'react-redux';
import actions from '../../../../redux/actions';
import selectors from '../../../../redux/selectors';
// Components
import CheckboxFilter from '../../../components/Filter/CheckboxFilter'
// Constant
import { FilterTypes } from '../../../../constants/filterOptions'
import { axiosInstance } from '../../../../axios'
import { BASE_URL } from '../../../../config/api';
import { mapDataToFilterOptions } from '../../../../utils';

const { Panel } = Collapse

function FilterContainer({ setFilterOptions, onFilter }) {
    const [filterList, setFilterList] = useState([]);

    useEffect(() => {
        axiosInstance(BASE_URL + '/product/getFilterOptions')
            .then((response) => {
                console.log("🚀 ~ file: FilterContainer.js ~ line 25 ~ useEffect ~ response.data", response.data)
                setFilterList(response.data)
            });
    }, []);

    const handleBrandFilter = (values) => {
        setFilterOptions({
            [FilterTypes.BRAND]: values,
        })
        onFilter();
    }

    const handleRamFilter = (values) => {
        setFilterOptions({
            [FilterTypes.RAM]: values,
        })
        onFilter();
    }

    const handleStorageFilter = (values) => {
        setFilterOptions({
            [FilterTypes.STORAGE]: values,
        })
        onFilter();
    }

    const handleCameraFilter = (values) => {
        setFilterOptions({
            [FilterTypes.CAMERA]: values,
        })
        onFilter();
    }

    const handleFeatureFilter = (values) => {
        setFilterOptions({
            [FilterTypes.SPECIAL_FEATURE]: values,
        })
        onFilter();
    }

    const handleAvailabilityFilter = (values) => {
        setFilterOptions({
            [FilterTypes.AVAILABILITY]: values,
        })
        onFilter();
    }

    // const handleAddBrandFilter = (option) => {
    //     const brandFilter = filterList.find(
    //         (filterObj) => filterObj.type === 'brand'
    //     );
    //     console.log("🚀 ~ file: FilterContainer.js ~ line 77 ~ brandFilter.options.forEach ~ brandFilter", brandFilter)
    //     brandFilter.options.forEach((brandObject) => {
    //         cloneOption.items.push({
    //             label: brandObject.label,
    //             values: [brandObject.label],
    //             type: 'brand',
    //         });
    //     });

    // };
    // const handleRamFilter = (values) => {
    //     setFilter('rams', values);
    //     onFilter();
    // }
    // const handleStorageFilter = (values) => {
    //     setFilter('storages', values);
    //     onFilter();
    // }
    // const handleCameraFilter = (values) => {
    //     setFilter('cameras', values);
    //     onFilter();
    // }
    // const handleSpecialFeatureFilter = (values) => {
    //     setFilter('specialFeatures', values);
    //     onFilter();
    // }
    // const handleAvailableFilter = (values) => {
    //     setFilter('available', values);
    //     onFilter();
    // }

    console.log("🚀 ~ file: FilterContainer.js ~ line 79 ~ returnFilterOptions.map ~ filterList", filterList)
    if (!filterList.length) return null;

    const optionData = mapDataToFilterOptions(filterList);
    const mapFilterOptionsToAction = {
        [FilterTypes.BRAND]: handleBrandFilter,
        [FilterTypes.RAM]: handleRamFilter,
        [FilterTypes.STORAGE]: handleStorageFilter,
        [FilterTypes.CAMERA]: handleCameraFilter,
        [FilterTypes.SPECIAL_FEATURE]: handleFeatureFilter,
        [FilterTypes.AVAILABILITY]: handleAvailabilityFilter,
    };
    return (
        <div>
            <div className='menu-title'>Filter</div>
            <Collapse
                className='filter-menu'
                defaultSelectedKeys='All'
                expandIconPosition='right'
            >
                {optionData.map((option, index) => {
                    const handleFilter = mapFilterOptionsToAction[option.type];
                    return (
                    <Panel key={index} header={option.title}>
                        <CheckboxFilter
                            list={option.data}
                            onChange={handleFilter}
                        />
                    </Panel>
                    );
                })}
            </Collapse>
        </div>
    )
}

const mapStateToProps = (state) => ({
    filterOptions: selectors.getCurrentFilterOptions(state),
});

const mapDispatchToProps = (dispatch) => ({
    setFilterOptions: (list) => dispatch(actions.setFilterOptions(list)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FilterContainer);