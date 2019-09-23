import React from 'react'
import { AuthConsumer } from '../reducers/AuthReducer'
import { useHistory } from '../reducers'
export const Home = () => {
    const history = useHistory();
    return (
        <AuthConsumer>
            {auth => (
                <div
                    style={{
                        display: "flex",
                        height: '100vh',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                    <img
                        style={{ height: '150px', width: '150px' }}
                        src={auth.avatar} alt={auth.name} />
                    <h5>{auth.name}</h5>
                    <button onClick={() => history.push('/')}> Back </button>
                </div>
            )}

        </AuthConsumer>
    )
}

