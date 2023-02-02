import { useRef, useState } from "react"
import Menu from "./menu"
import axios from "axios";

function General_elements(e) {
    // e.preventDefault()
    const [title, settitle] = useState('')
    const [desc, setdesc] = useState('');
    const [status, setstatus] = useState('')

    const image = useRef();
    function submit()
    {
        const data = new FormData()
        data.append('image' , image.current.files[0])
        data.append('title' , title)
        data.append('desc' , desc)
        data.append('status' , status)
    axios.post('http://localhost/admin-panel/blog.php' , 
    data)
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  },[])

    }
    return (
        <>
            <div className="wrapper">
                <Menu />
                <div className="content-wrapper">
                   
                    <form encType="multipart/form-data" onSubmit={submit}>
                        <section className="content-header">
                            <div className="container-fluid">
                                <div className="row mb-2">
                                    <div className="col-sm-6">
                                        <h1>Add Blog</h1>
                                    </div>
                                    <div className="col-sm-6">
                                        <ol className="breadcrumb float-sm-right">
                                            <li className="breadcrumb-item"><a href="#">Home</a></li>
                                            <li className="breadcrumb-item active">Blog Form</li>
                                        </ol>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section className="content">
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="card card-primary">
                                            <div className="card-header">
                                                <h3 className="card-title">Blog Example</h3>
                                            </div>
                                            
                                                <div className="card-body">
                                                    <div className="form-group">
                                                        <label htmlFor="exampleInputEmail1">Title</label>
                                                        <input type="text" className="form-control" name="title" id="exampleInputEmail1" placeholder="Enter title" onChange={(i) => settitle(i.target.value)} />
                                                    </div>
                                                    <div className="form-group">
                                                        <label htmlFor="exampleInputFile">File input</label>
                                                        <div className="input-group">
                                                            <div className="custom-file">
                                                                <input type="file" className="custom-file-input" name="file" id="exampleInputFile" ref={image} />
                                                                <label className="custom-file-label" htmlFor="exampleInputFile">Choose file</label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="form-group">
                                                        <label htmlFor="exampleInputPassword1">Description</label>
                                                        <textarea name="description" id="exampleInputPassword1" cols="30" rows="5" className="form-control" onChange={(i) => setdesc(i.target.value)}></textarea>
                                                    </div>
                                                    <div className="form-group">
                                                        <label htmlFor="exampleInputPassword1">Status</label>
                                                        <input type="number" className="form-control" name="status" max={1} min={0} id="exampleInputPassword1" placeholder="Status" onChange={(i) => setstatus(i.target.value)} />
                                                    </div>
                                                    <div className="form-check">
                                                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                                        <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                                                    </div>
                                                </div>
                                                <div className="card-footer">
                                                    <button type="submit" className="btn btn-primary">Submit</button>
                                                </div>
                                        </div>

                                    </div>

                                </div>
                            </div>
                        </section>
                    </form>

                </div>
                <footer className="main-footer">
                    <div className="float-right d-none d-sm-block">
                        <b>Version</b> 3.2.0
                    </div>
                    <strong>Copyright © 2014-2021 <a href="https://adminlte.io">AdminLTE.io</a>.</strong> All rights reserved.
                </footer>
                <aside className="control-sidebar control-sidebar-dark">
                </aside>
            </div>



        </>
    )
}
export default General_elements