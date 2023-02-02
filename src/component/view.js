import { useEffect, useState } from "react"
import axios from "axios";
function View() {
    const [user, setuser] = useState([]);

    // const show = async () => {
    //     const result = await axios.post('http://localhost/admin-panel/view.php')
    //     setuser(result.data.phpresult)
    //     console.log(user)

    // }
    // useEffect(() => {
    //     show();
    // }, []);

    useEffect(() => {
        axios.get('http://localhost/admin-panel/view.php')
            .then(function (response) {
                setuser(response.data.phpresult)
                // console.log(user);
            })
            .catch(function (error) {
                console.log(error);
            })

    }, [])

    return (
        <>




            <center>
                <table>
                    <tr>
                        <th>id</th>
                        <th>title</th>
                        <th>description</th>
                        
                        <th>image</th>
                        <th>delete</th>
                        <th>edit</th>
                        <th>status approval</th>
                    </tr>
                    {
                        user.map((i) => {
                            return (
                                <>
                                    <tr>
                                        <td>{i.id}</td>
                                        <td>{i.title}</td>
                                        <td>{i.description}</td>
                                        <td><img src={`http://localhost/admin-panel/image/${i.image}`} /></td>
                                        <td><a href="#">delete</a></td>
                                        <td><a href="#"> edit</a></td>
                                        <td>{i.status}</td>
                                        
                                    </tr>
                                </>
                            )
                        })
                    }
                </table>
            </center>

        </>
    )
}
export default View