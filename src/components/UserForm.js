import React, { Fragment } from 'react'
import { AuthConsumer } from '../reducers/AuthReducer'
import { useHistory } from '../reducers'
export const UserForm = () => {
    const history = useHistory();
    return (
        <AuthConsumer>
            {auth => (
                <Fragment
                    style={{
                        height: '100vh',
                        width: '100% !important',
                        display: "flex",
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        alignContent: 'center'
                    }}>
                    <form style={{
                        height: '100vh',
                     
                        width:'100%',
                        display: "flex",
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        textAlign: "left"
                    }}>
                        <div
                        style={{
                            padding: '10px',
                            borderRadius: '15px',
                            border:"1px solid black"}}>
                        <label>
                            <h5 style={{textAlign:"center"}}>User Form</h5>
                            Name: {" "}
                            <input
                                type="text"
                                onChange={event => auth.setName(event.target.value)}
                                name="name"
                                value={auth.name} />
                        </label>
                        <br />
                        <label> Avatar {" "}
                            <input type="file" onChange={event => auth.setAvatar(URL.createObjectURL(event.target.files[0]))} />
                        </label>
                        <br />
                        <br />
                        <br />
                        <input
                            onClick={()=>history.push('/home')}
                            style={{width: '100%'}}
                            type="submit"
                            value="Submit" />
                        </div>
                     
                    </form>
                </Fragment>
            )}

        </AuthConsumer>
    )
}

