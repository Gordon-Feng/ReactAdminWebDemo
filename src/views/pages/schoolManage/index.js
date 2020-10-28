/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react'
import { GetSchoolList } from '../../../services'
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TopMenu from '../../components/TopMenu';

const SchoolManage = (props) => {

    // Note: useState 中的 setState(), 在执行 setState() 后, 并不马上更新 State的值, 而是会记住 当前State值, 当重新渲染组件后, 再把 更新的State 传进去 
    // 因此, 不能在 函数中 setState() 后马上 getState() 取值
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
        const result = await GetSchoolList(currentPageInfo || pageInfo)
        if (result) {
            setSchoolList(result.data)
            setPageInfo(currentPageInfo ? {...currentPageInfo, total: result.total} : {...pageInfo, total: result.total})
        }
    }

    useEffect( () => {
        getSchoolList()
    }, [] )
    // 第二个参数为空数组时, 表示 getSchoolList() 只执行一次
    
    const useStyles = makeStyles({
        table: {
            minWidth: 650
        },
    });
    const classes = useStyles();

    return (
        <>
        <TopMenu/>
        <TableContainer component={Paper} data-testid="school-manage-page">
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell align="right">ID</TableCell>
                        <TableCell align="right">名称</TableCell>
                        <TableCell align="right">省市</TableCell>
                        <TableCell align="right">类型</TableCell>
                        <TableCell align="right">排名</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {schoolList.map((row) => (
                        <TableRow key={row.school_id}>
                            <TableCell component="th" scope="row">{row.school_id}</TableCell>
                            <TableCell align="right">{row.school_name}</TableCell>
                            <TableCell align="right">{row.school_province}</TableCell>
                            <TableCell align="right">{row.school_level}</TableCell>
                            <TableCell align="right">{row.school_rank}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
        </>
    )
}

export default SchoolManage