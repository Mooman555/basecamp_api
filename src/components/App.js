import {React,useEffect} from 'react';
var OAuth = require('@zalando/oauth2-client-js');


const App = () => {
   var baseCampAuth = new OAuth.Provider({
        id: 'baseCamp_555',   
        authorization_url: 'https://launchpad.37signals.com/authorization/new'
    });
   var request = new OAuth.Request({
        client_id: '640fa6ff3d500a005dcbeda2ea5c1c96bbc462c7',  
        redirect_uri: 'http://myapp.com/oauth'
    });
     var uri = baseCampAuth.requestToken(request);
     console.log(uri);
     baseCampAuth.remember(request);
    // window.location.href = uri;
   // var response = baseCampAuth.parse(window.location.hash);
    //console.log(response,"response");

    const token =  baseCampAuth.getAccessToken("https://launchpad.37signals.com/authorization/token");
    console.log(token,"token");
    // const ACCESS_TOKEN = "675405211005-5itu990qis4u19b92vpms1hg0io5pa0s.apps.googleusercontent.com";
    // useEffect(() => {
    //     fetch('https://3.basecampapi.com/999999999/projects.json',{
    //        headers : {
    //         'Authorization' : 'Bearer 675405211005-5itu990qis4u19b92vpms1hg0io5pa0s.apps.googleusercontent.com',
    //         'Content-Type' : 'application/json',
    //         'Access-Control-Allow-Origin' : 'http://localhost:3000',
    //         'Access-Control-Allow-Methods' : 'GET,HEAD,OPTIONS,POST,PUT',
    //         'Access-Control-Allow-Credentials' : 'true',
    //        },
    //        mode:'no-cors',
           
    //     })
    //     .then( async response => {
    //         const data = await response.json();
    //         console.log(data,"api data");      
    //     })
    //     .catch( error => {
    //         console.error('There was an error!', error);
    //     });
        
    // },[]);

    return (
        <div>
            Hello
        </div>
    )
}

export default App
