import React, { Component } from 'react'
import axios from 'axios'

class Messages extends Component {
    constructor(...args) {
        super(...args)
        this.state = {
            response: ''
        }
        this.fetchRemote()
     }

    async fetchRemote(){
        axios.get("https://message.android.com").
        then((response)=>{
            console.log(response)
            this.setState({response: response})
        }).catch((error)=>{
            console.log(error)
            this.setState({response: error})

        })
     }

     render(){
         return(<h1></h1>)
     }
}

export default Messages 