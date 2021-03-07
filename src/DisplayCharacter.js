import React, { Component } from 'react'

export default class DisplayCharacter extends Component {
    constructor(props){
        super(props)
    }

    render() {
        const {data, getQuote}=this.props
        console.log('data', data)
        return (
            <div>
{/* { data.map(el=>console.log(el))} */}
<p>quote:{data.quote}</p>
<img src={data.image} alt={data.character}/>
<p>NAME: {data.character}</p>
<button onClick={ getQuote}>Change quote </button>
            </div>
        )
    }
}
