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

    const [schoolList, setSchoolList] = useState([])
    const [pageInfo, setPageInfo] = useState({
        school_name:'',
        page:1,
        limit:20,
        total:0
    })

    const getSchoolList = async() => {
        const result = await GetSchoolList(pageInfo)
        if (result) {
            setSchoolList(result.data)
            setPageInfo({...pageInfo, total: result.total})
        }
    }

    useEffect( () => {
        getSchoolList()
    }, [] )

    return (
        <Table columns={columns} dataSource={schoolList} pagination={{ pageSize: pageInfo.limit, total: pageInfo.total }} scroll={{ y: 743 }} />
    )
}

export default SchoolManage