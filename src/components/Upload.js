
import React, { Fragment, useState } from 'react'
import './Upload.css'

export function Upload(props) {
    return (
        <Fragment>
            <div className="upload-btn-wrapper">
                <button>Upload </button>
                <input type="file" onChange={event => props.setAvatar(URL.createObjectURL(event.target.files[0]))} />
            </div>
        </Fragment>
    )
}
