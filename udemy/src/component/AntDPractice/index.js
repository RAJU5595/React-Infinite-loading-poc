import {Button, Table, Space, Modal , Input} from 'antd'
import { useState } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import {EditOutlined,DeleteOutlined, SearchOutlined} from '@ant-design/icons'

const AntDPractice = () =>{
    const [dataSource,setDataSource] = useState([
        {
            id : 1,
            name : 'John',
            email : 'john@gmail.com',
            address : 'John address',
            percentage : '60.5%'
        },
        {
            id : 2,
            name : 'David',
            email : 'david@gmail.com',
            address : 'David address',
            percentage : '10.9%'
        },
        {
            id : 3,
            name : 'James',
            email : 'james@gmail.com',
            address : 'James address',
            percentage : '39.0%'
        },
        {
            id : 4,
            name : 'Sam',
            email : 'sam@gmail.com',
            address : 'Sam address',


            percentage : '20.0%'
        }
    ])

    const columns = [
        {
            key : '1',
            title : 'ID',
            dataIndex : 'id'
        },
        {
            key : '2',
            title : 'Name',
            dataIndex : 'name',
            sorter: (a,b)=>{
                return a.name.localeCompare(b.name);
            }
        },
        {
            key : '3',
            title : 'Email',
            dataIndex : 'email'
        },
        {
            key : '4',
            title : 'Percentage',
            dataIndex : 'percentage',
            sorter : (a,b)=>{
                return a.percentage.match(/(\d+.\d+)/)[0] - b.percentage.match(/(\d+.\d+)/)[0]
                
            }
        },
        {
            key : '5',
            title : 'Address',
            dataIndex : 'address',
            filterDropdown : ({setSelectedKeys, selectedKeys, confirm , clearFilters})=>{
                return (
                    <Space>
                    <Input autoFocus
                        placeholder='Search address' 
                        value={selectedKeys[0]}
                        onChange={(event)=>{
                            setSelectedKeys(event.target.value ? [event.target.value] : [])
                            confirm({closeDropdown : false})
                         }}
                        onPressEnter={()=>{
                            confirm()
                        }}
                        onBlur={()=>{
                            confirm()
                        }}
                    >
                    </Input>
                    <Button onClick={()=> {confirm()}} type='primary'>Search</Button>
                    <Button onClick={()=> {clearFilters()}} type='primary'>Reset</Button>
                    </Space>
                    )
            },
            filterIcon : ()=>{
                return <SearchOutlined/>
            },
            onFilter : (value,record)=>{
                return record.address.toLowerCase().includes(value.toLowerCase())
            }
        },
        {
            key : '5',
            title : 'Actions',
            render : (record)=>{
                return (
                <Space>
                    <EditOutlined onClick={()=>{onEditStudent(record)}}/>
                    <DeleteOutlined onClick={()=>{onDeleteStudent(record)}} style={{color : 'red'}}/>
                </Space>
                )
            }
        }
    ]

    const [isEditing,setIsEditing] = useState(false)
    const [editingStudent, setEditingStudent] = useState(null)

    const onAddStudentHandler = () => {
        const randomNumber = parseInt(Math.random()*100)
        const newStudent = {
            id : randomNumber,
            name : "Name "+randomNumber,
            email : randomNumber +"@gmail.com",
            address : randomNumber+" Address",
            percentage : randomNumber + ".5%"
        }
        setDataSource((prevState)=>{
            return [...prevState,newStudent]
        })
    }

    const onDeleteStudent = (record) =>{
        Modal.confirm({
            title : 'Are you sure , you want to delete this record !',
            okText :'Yes',
            okType :'danger',
            onOk : ()=>{
                setDataSource((prevState)=>{
                    return prevState.filter((student)=> student.id !== record.id)
                   })
            }
        })
    }

    const onEditStudent = (record) => {
        setIsEditing(true)
        setEditingStudent({...record})
    }

    const fetchMoreData = () => {
        // a fake async api call like which sends
        // 20 more records in 1.5 secs
        setDataSource(prevState => {
            return [...prevState]
        })
      };

    return (
        <div>
            <Button onClick={onAddStudentHandler}>Add New Student</Button>
            <div id="scrollableDiv" style={{ height: 300, overflow: "auto" }}>
                <InfiniteScroll
                    dataLength={dataSource.length}
                    next={fetchMoreData}
                    hasMore={true}
                    loader={<h4>Loading...</h4>}
                    scrollableTarget="scrollableDiv"
                >
                    <Table 
                        columns={columns} 
                        dataSource={dataSource}
                        onRow = {(record)=>{
                            return {
                                onClick : (e)=>{
                                    e.preventDefault()
                                console.log(e)
                            }
                        }
                    }
                    }
                        pagination={false}
                        style={
                            {
                                display : 'flex',flex:1,margin:10
                            }
                        }
                />
                </InfiniteScroll>
            </div>
        <Modal
        title = 'Edit Student'
        open = {isEditing}
        okText = 'Save'
        onCancel = {()=>{
            setIsEditing(false)
            setEditingStudent(null)
        }}
        onOk= {()=>{
            setDataSource((prevState)=>{
                return prevState.map((student)=>{
                    if(student.id === editingStudent.id){
                        return editingStudent
                    }
                    return student
                })
            })
            setIsEditing(false)
            setEditingStudent(null)
        }}
        >
            <Space
            direction="vertical"
            size="middle"
            style={{
              display: 'flex',
            }}
            >
                <Input value={editingStudent?.name} onChange={(e)=>{
                    setEditingStudent((prevState)=>{
                        return {...prevState,name : e.target.value}
                    })
                }} />
                <Input value={editingStudent?.email} onChange={(e)=>{
                    setEditingStudent((prevState)=>{
                        return {...prevState,email : e.target.value}
                    })
                }}/>
                <Input value={editingStudent?.address} onChange={(e)=>{
                    setEditingStudent((prevState)=>{
                        return {...prevState,address : e.target.value}
                    })
                }}/>
            </Space>
        </Modal>
        </div> 
    )
}

export default AntDPractice