import React from 'react'

const New = (props:any) => {
  return (
    <div>
        <span style={{backgroundColor: props.bg}} className="bg-[#00FF66] text-[#FAFAFA] p-2 rounded">{props.text}</span>
    </div>
  )
}

export default New