import React, { Fragment } from 'react'
import { useTheme } from '../reducers'
import { config } from '../config';
export const BottomPanel = props => {
    const Theme = useTheme();

    return <div style={{
        position:"absolute",
        height: '70px',
        width: '100% !important',
        left: 0,
        right:0,
        bottom:0,
        backgroundColor: Theme.backgroundColor,
        display: 'flex',
        justifyContent:'center',
        alignItems: 'center',
        color: Theme.color
        }}>
           Send me an e-<a href={"mailto: "+config.email+"?&subject=SiteTemplate&body=Nice..."}><div>{" "}</div> mail</a>
        </div>
}