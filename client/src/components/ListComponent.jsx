import React, { useEffect, useState } from 'react';
import {Link} from '@reach/router';
import axios from 'axios';

const ListComponent = props => {
    const [authorList, setAuthorList] = useState([]);
    const [deleteState, setDeleteState] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:8000/api/authors')
            .then(res => setAuthorList(res.data))
            .catch(err => console.log(err));
    }, [deleteState])
    
    const handleDelete = author_id => {
        axios.delete('http://localhost:8000/api/authors/'+author_id)
            .then(res => setDeleteState(!deleteState))
            .catch(err => console.log(err))
    };

    return (
        <table>
            <thead>
                <tr>
                    <th>Author</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    authorList.map((author, i) => {
                        return (
                            <tr key={i}>
                                <td>{author.firstName} {author.lastName}</td>
                                <td>
                                    <Link style={{margin: 3 +'px'}} to={`/edit/${author._id}`}>Edit</Link>
                                    <button style={{margin: 3 +'px'}} onClick={() => handleDelete(author._id)}>Delete</button>
                                </td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    )
};
export default ListComponent;