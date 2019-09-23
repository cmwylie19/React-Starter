import React, { Fragment } from 'react'
import { useAuth, useTheme } from '../reducers'
import Logo from '../assets/hatLogo.png'
import { config } from '../config';
export const TopPanel = props => {
    const Auth = useAuth();
    const Theme = useTheme();

    //Declare style constant
    const TopPanelStyle = {
        position: "absolute",
        height: '70px',
        width: '100% !important',
        left: 0,
        right: 0,
        backgroundColor: Theme.backgroundColor,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: "15px",
        color: config.color
    }

    const buttonStyle = bg => ({
        fontSize: '1em',
        backgroundColor: bg,
        margin: '20px',
        borderRadius: '15px',
        height: '50px',
        width: '120px'
    })

    return (
        <div style={TopPanelStyle}>
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
            }}>
                <img src={Logo} style={{ height: "80px" }} />
                <h2 style={{
                    padding: '10px',
                    fontFamily: 'Red Hat Display'
                }}>
                    {config.title}
                </h2>
            </div>

            <div style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
            }}>
                <div>
                <button
                style={buttonStyle(config.backgroundColor)}
                onClick={()=>Theme.setCustom()}>
                    Custom
                </button>
                <button
                onClick={()=>Theme.setOrange()}
                style={buttonStyle("orange")}
                >Orange</button> 
                <button
                onClick={()=>Theme.setBlue()}
                style={buttonStyle("blue")}>Blue</button>
                </div>
            <div style={{
                display: 'flex',
                flexDirection: "column",
                alignItems: "center"
            }}>
                <img src={Auth.avatar} style={{ borderRadius:'20px',height: "60px", width: "60px" }} />
                <div>{Auth.name}</div>
            </div>
            </div>
        </div>
    )
}