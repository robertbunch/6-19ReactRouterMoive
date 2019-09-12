import React, { Component } from 'react';
import Axios from 'axios';

class NavBar extends Component{
    constructor(){
        super();
        this.state = {searchTerm: ""}
    }
    changeSearch = (e)=>{
        this.setState({searchTerm: e.target.value})
    }
    search = (e)=>{
        e.preventDefault();
        const searchUrl = `/search/${this.state.searchTerm}`
        console.log(this.props.history)
        // to programmatically move the browser to a new page
        this.props.history.push(searchUrl);
    }
    render(){
        return(
            <div>
                <form onSubmit={this.search}>
                    <input onChange={this.changeSearch} type="text" value={this.state.searchTerm} placeholder="ENter a movie Title" />
                    <input type="submit" value="Search!" />
                </form>
            </div>
        )
    }
}


export default NavBar;