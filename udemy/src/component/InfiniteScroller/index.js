import { useEffect, useState } from "react"
import axios from 'axios'
import {Table,Spin} from 'antd'
import InfiniteScroll from 'react-infinite-scroll-component';
import { Header } from "antd/es/layout/layout";

const API = 'https://api.instantwebtools.net/v1/passenger'
const PAGE_SIZE = 10


const columns = [
    {
        key : '1',
        title : 'ID',
        dataIndex : '_id'
    },
    {
        key : '2',
        title : 'Name',
        dataIndex : 'name',
    },
    {
        key : '3',
        title : 'Trips',
        dataIndex : 'trips'
    }
]

const InfiniteScroller = () =>{
    const [users,setUsers] = useState([])
    const [pageNo,setPageNo] = useState(1)

    const queryParams = '?page='+pageNo+"&size="+PAGE_SIZE

    const getTheData = async() =>{
        const response = await axios.get(API+queryParams)
        const data = response?.data?.data
        setUsers(prevState => {
            return [...prevState,...data]
        })
    }

    const fetchMoreData = () => {
        setPageNo(prevState => prevState+1)
      };

    useEffect(()=>{
       getTheData()
    },[pageNo])

    console.log(pageNo)

    return (
        <div id="scrollableDiv" style={{ height: 500, overflow: "auto" }}>
                <InfiniteScroll
                    dataLength={users.length}
                    next={fetchMoreData}
                    hasMore={true}
                    loader={<h4>Loading...</h4>}
                    scrollableTarget="scrollableDiv"
                >
                    <Table 
                        columns={columns} 
                        dataSource={users}
                        pagination={false}
                        style={
                            {
                                display : 'flex',flex:1,margin:10,
                            }
                        }
                />
                </InfiniteScroll>
            </div>
    )
}
export default InfiniteScroller
