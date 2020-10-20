/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react'
import { Table } from 'antd';
import { GetSchoolList } from '../../services'

const SchoolManage = (props) => {
    const columns = [
        { title: 'ID', dataIndex: 'school_id', width: 50 },
        { title: '名称', dataIndex: 'school_name', width: 150 },
        { title: '省市', dataIndex: 'school_province', width: 150 },
        { title: '类型', dataIndex: 'school_level', width: 150 },
        { title: '排名', dataIndex: 'school_rank', width: 150 }
    ]

    // Note: useState 中的 setState(), 在执行 setState() 后, 并不马上更新 State的值, 而是会记住 当前State值, 当重新渲染组件后, 再把 更新的State 传进去 
    // 因此, 不能在 函数中 setState() 后马上 getState() 取值
    const [loading, setLoading] = useState(false)
    const [schoolList, setSchoolList] = useState([])
    const [pageInfo, setPageInfo] = useState({
        school_name:'',
        page:1,
        limit:20,
        total:0
    })

    const getSchoolList = async(pagination) => {
        let currentPageInfo = null
        if (pagination) {
            currentPageInfo = {...pageInfo, page: pagination.current, limit: pagination.pageSize}
            setPageInfo(currentPageInfo)
        }
        setLoading(true)
        const result = await GetSchoolList(currentPageInfo || pageInfo)
        setLoading(false)
        if (result) {
            setSchoolList(result.data)
            setPageInfo(currentPageInfo ? {...currentPageInfo, total: result.total} : {...pageInfo, total: result.total})
        }
    }

    useEffect( () => {
        getSchoolList()
    }, [] )
    // 第二个参数为空数组时, 表示 getSchoolList() 只执行一次

    return (
        <Table 
            columns={columns} 
            dataSource={schoolList} 
            pagination={{ pageSize: pageInfo.limit, total: pageInfo.total }} 
            scrollToFirstRowOnChange={true} 
            rowKey={record => { return record.school_id }}
            scroll={{ y: 'calc(100vh - 14.5em)' }}
            onChange={ getSchoolList }
            loading={loading}
        />
    )
}

export default SchoolManage