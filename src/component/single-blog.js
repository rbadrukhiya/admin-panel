import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import axios from "axios";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';


function Single() {
    const [data, setdata] = useState([]);
    const [name, setname] = useState('');
    const [comment, setcomment] = useState('');
    const [view_comment, set_view_comment] = useState([]);
    var status = 1;
    const { id } = useParams()
    useEffect(() => {
        axios.get(`http://localhost/admin-panel/view.php`)
            .then(function (response) {
                setdata(response.data.phpresult)
            })
            .catch(function (error) {
                console.log(error);
            })
    }, [])

    useEffect(() => {
        axios.get('http://localhost/admin-panel/comment-view.php')
            .then(function (response) {
                // console.log(response)
                set_view_comment(response.data.data)
                console.log(view_comment);
            })
            .catch(function (error) {
                console.log(error);
            })
    }, [])




    function submit(e) {
        e.preventDefault();
        axios.post('http://localhost/admin-panel/comment.php', {
            name: name,
            comment: comment,
            u_id: id,
            status: status

        })
            .then(function (response) {
                console.log(response)
                window.location.reload()
            })
            .catch(function (error) {
                console.log(error);
            })
            
        }
        
       
    return (

        <>

            <div className="main-single-blog">

                <header>
                    <div className="container">
                        <div className="row justify-content-between align-items-center">
                            <div className="col-auto">
                                <div className="img ">
                                    <img src={require('../img/logo.jpg')} className='img-fluid mt-4' alt="" />
                                </div>
                            </div>
                            <div className="col-auto d-none d-md-block">
                                <div className="menu">
                                    <ul className='d-flex list-unstyled'>
                                        <li><a href="#" className='me-5'>home</a></li>
                                        <li><a href="#" className='me-5'>blog</a></li>
                                        <li><a href="#" className='me-5'>gallery</a></li>
                                        <li><a href="#" className='me-5'>contact</a></li>
                                        <li><a href="#" className='me-5'>about</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-auto d-md-none">
                                <div className="toggle">
                                    toggle
                                </div>
                            </div>
                            <div className="col-auto d-none d-md-block">
                                <ul className='d-flex list-unstyled'>
                                    <li><a href="#" className='me-3'>
                                        <i class="fa-brands fa-facebook"></i>
                                    </a></li>
                                    <li><a href="#" className='me-3'>
                                        <i class="fa-brands fa-instagram"></i>
                                    </a></li>
                                    <li><a href="#" className='me-3'>
                                        <i class="fa-brands fa-twitter"></i>
                                    </a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </header>
                {
                    data.map((i) => {
                        if (i.id == id) {
                            return (
                                <>
                                    <div className="single">
                                        <div className="container mt-3">
                                            <div className="row justify-content-between row-cols-xxl-2 row-cols-xl-2 row-cols-lg-2 row-cols-md-2 row-cols-sm-1 ">
                                                <div className="col-auto">
                                                    <div className="img mt-2">
                                                        <img src={`http://localhost/admin-panel/image/${i.image}`} className='rounded-2 ' alt="" />
                                                    </div>
                                                </div>
                                                <div className="col-auto">
                                                    <div className="title">
                                                        <p style={{ textAlign: 'left', fontSize: '30px', fontWeight: '500' }}>Title :</p>  <p style={{ color: 'black', textAlign: 'left' }}>{i.title}</p>
                                                    </div>
                                                    <div className="description">
                                                        <p className=" text-left " style={{ fontSize: '30px', fontWeight: '500' }}> description : </p> <p style={{ color: 'black', textAlign: 'left' }} className='mb-3'>{i.description}</p>
                                                    </div>
                                                    
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )
                        }
                    })
                }
                <div className="comment-view">
                    {
                        view_comment.map((i) => {
                            if (i.status == 1 && i.u_id == id)
                                return (
                                    <>
                                        <div className="row ms-5">
                                            <div className="col-4">
                                                <Card>
                                                    <Card.Body>
                                                        <p>{i.comment}</p>
                                                        <footer className="blockquote-footer">
                                                            Written bY... <cite title="Source Title">Mr . {i.name}</cite>
                                                        </footer>
                                                    </Card.Body>
                                                    <Card.Footer >
                                                        <small className="text-muted ">Last updated 3 mins ago</small>
                                                    </Card.Footer>
                                                </Card>
                                            </div>
                                        </div>
                                    </>
                                )
                        })
                    }
                </div>


                <div className="row justify-content-between align-items-center mt-5 ms-5 ">
                    <div className="col-auto comment">

                        <Form>
                            <h1 style={{ color: '#fff' }}>Add Comment...</h1>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Name :</Form.Label>
                                <Form.Control type="text" placeholder="Enter Name" name="name" onChange={(e) => setname(e.target.value)} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Comment :</Form.Label>
                                <Form.Control type="text" placeholder="comment" name="comment" onChange={(e) => setcomment(e.target.value)} />
                            </Form.Group>
                            <Button variant="primary" type="submit" onClick={submit}>
                                Submit
                            </Button>

                        </Form>

                        {/* <Box
                            component="form"
                            sx={{
                                '& > :not(style)': { m: 1, width: '25ch' },
                            }}
                            noValidate
                            autoComplete="off"
                        >
                            <h1 style={{ color: '#fff' }}>Add Comment...</h1><br/>
                              <TextField id="outlined-basic" label="name"  variant="outlined" type='text' onChange={(e)=>setname(e.target.value)}/><br/>

                         <TextField id="filled-basic" label="comment" variant="filled" type='text' onChange={(e)=>setcomment(e.target.value)}/><br/>
                            <Button variant="primary" type="submit" onClick={submit}>
                                Submit
                            </Button>
                        </Box> */}
                    </div>
                </div>

            </div>
        </>
    )
}
export default Single