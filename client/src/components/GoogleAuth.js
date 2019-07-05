import React from 'react'

class GoogleAuth extends React.Component {
    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '911820196491-u2dr1b182d3cdh65dsfi9ld0h1bmj6kj.apps.googleusercontent.com',
                scope: 'email'
            })
        })
    }

    render() {
        return <div>Google Auth</div>
    }
}

export default GoogleAuth
