import React from 'react';




const Messages = (props) => {




    return (
            <div>
                <div>
                    <p id={props.id}>{props.message}</p>
                </div>
            </div>
    )
}
export default Messages;