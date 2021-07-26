import React from 'react';

import UpdateComponent from '../components/UpdateComponent';

const UpdateAuthor = props => {
    const {id} = props;
    return (
        <div>
            <UpdateComponent id={id}/>
        </div>
    )
}
export default UpdateAuthor;