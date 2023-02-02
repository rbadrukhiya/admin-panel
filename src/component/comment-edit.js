import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"
import '../component/edit.css'
function Comment_edit() {
    const { id } = useParams()
    const update_id = `${id}`
    const [name, setname] = useState('')
    const [comment, setcomment] = useState('')
    const [status, setstatus] = useState('')
    const [result, setResult] = useState('')
    const [u_id , setu_id] = useState('')
    useEffect(() => {
        axios.post('http://localhost/admin-panel/comment-edit.php', {
            edit_id: update_id
        })
            .then(function (response) {
                console.log(response)
                setname(response.data.name)
                setcomment(response.data.comment)
                setstatus(response.data.status)
                setu_id(response.data.u_id)
                // setResult(response.data)
            })
            .catch(function (error) {
                console.log(error);
            })
    }, [])
    function submit(e) {
        // e.preventDefault();
        axios.post('http://localhost/admin-panel/comment.php', {
            name: name,
            comment: comment,
            status: status,
            u_id: u_id,
            edit_id: update_id
        })
            .then(function (response) {
                console.log(response)
            })
            .catch(function (error) {
                console.log(error);
            })
    }
    return (
        <>

            <div className="edit_data">
                <div className="container">
                    <div className="child">
                        <h1>Welcome back</h1>
                        <p>Please edit your Comment</p>
                        <label>Title</label>
                        <br />
                        <input type="text" value={name} onChange={(i) => setname(i.target.value)} placeholder="Enter your name" />
                        <br />
                        <label htmlFor="text" >comment</label>
                        <br />
                        <textarea cols="55" value={comment} onChange={(i) => setcomment(i.target.value)} placeholder='Enter comment'></textarea>
                        <br />
                        <label htmlFor="text">Status</label>
                        <br />
                        <input type="number" max={1} min={0} value={status} onChange={(i) => setstatus(i.target.value)} />
                        <br />


                        <button type="submit" className="mt-5" onClick={submit}> submit</button>

                    </div>
                </div>
            </div>
            {/* <input type="text" value={name} onChange={(i) => setname(i.target.value)} /> */}

        </>
    )
}
export default Comment_edit