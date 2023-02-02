import { useEffect, useRef } from "react"
import { useState } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"
import '../component/edit.css'

function Edit() {
    const [title, settitle] = useState('')
    const [desc, setdesc] = useState('')
    const [status, setstatus] = useState('')
    const [imgname , setimgname] = useState('')

    const { id } = useParams();
    const u_id = `${id}`

    useEffect(() => {
        axios.post('http://localhost/admin-panel/edit.php', {
            edit_id: u_id
        })
            .then(function (response) {
                console.log(response)
                settitle(response.data.title)
                setstatus(response.data.status)
                setdesc(response.data.description)
                setimgname(response.data.image)
            })
            .catch(function (error) {
                console.log(error);
            })

    }, [])
    const image = useRef();

    function submit(e) {
        
        e.preventDefault()
        if(image.current.files[0] == undefined)
        {
            // alert('yes')
            const data = new FormData()

        // data.append('image', image.current.files[0])
        data.append('image', imgname)

        data.append('title', title)
        data.append('desc', desc)
        data.append('status', status)
        data.append('edit_id', u_id)

        

        axios.post('http://localhost/admin-panel/blog.php',
            data)
            .then(function (response) {
                console.log(response);

            })
            .catch(function (error) {
                console.log(error);
            }, [])
        }
        else
        {
            // alert('no')
            const data = new FormData()
        data.append('image', image.current.files[0])

        data.append('title', title)
        data.append('desc', desc)
        data.append('status', status)
        data.append('edit_id', u_id)

        

        axios.post('http://localhost/admin-panel/blog.php',
            data)
            .then(function (response) {
                console.log(response);

            })
            .catch(function (error) {
                console.log(error);
            }, [])
        }
        
        // window.location.href = '/dashboard'
    }
    return (
        <>
            <form method="post" onSubmit={submit}>
                 <div className="edit_data">

                <div className="container">
                    <div className="child">
                        <h1>Welcome back</h1>
                        <p>Please edit your details</p>
                            <label htmlFor="text" >Title</label>
                            <br />
                            <input type="text"  value={title} onChange={(i) => settitle(i.target.value)}  placeholder="Enter your title"  />
                            <br />
                            <label htmlFor="text" >Description</label>
                            <br />
                            <textarea cols="55"   value={desc} onChange={(i) => setdesc(i.target.value)} placeholder='Enter description'></textarea>
                            <br />
                            <label htmlFor="text">Status</label>
                            <br />
                            <input type="number" max={1} min={0}  value={status} onChange={(i) => setstatus(i.target.value)}/>
                            <br/>
                            <label htmlFor="text">image</label>
                            <br />
                            <input type="file"  ref={image} />
                            <br/>
                            
                    <button type="submit" className="mt-5">submit</button>
                          
                    </div>
                </div>
                </div>


            </form>
        </>
    )
}
export default Edit