import React, {Component} from 'react';
import {connect} from 'react-redux';
//import {Link} from 'react-router-dom';

class SingleProfile extends Component{
    constructor(props){
        super(props);
    }
    render(){
        const {accounts, auth} = this.props;
        console.log(this.props)
        if(accounts.length === 0){
            return(
                <div>
                    No one found here :(
                </div>
            )
        }
        //fix logic here...
        const account = accounts.find(account => account.id === auth.id)
        // const account = accounts[0]
        console.log(account)
        if(account === undefined){
            return(
            <div>
                    Whoops...No one found here :(
            </div>
            )
        }
        return(
            <div>
                <div>
                    <img src={accounts.image}/>
                </div>
                <div>
                <div>Name: {account.name}</div>
                <div>Email: {account.email}</div>
                <div>Job Title: {account.industry}</div>
                <div>About Me: {account.description}</div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) =>{
    return state;
}

export default connect(mapStateToProps)(SingleProfile)