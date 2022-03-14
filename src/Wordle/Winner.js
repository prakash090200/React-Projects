import React from 'react'

export default function Winner(props) {
    const { sec, minute, winnerflag } = props;
    // or export default function Winner({sec,minute,winnerflag})
    return (
            <div className='winner' >
                <h1 >Winner</h1>
                <p><img src="images/excited.gif" /></p>
                <p >Your new Record is {minute < 10 ? "0" + minute : minute}:{sec < 10 ? "0" + sec : sec}</p>
            </div>
    )
}
