import React, {Component} from 'react';
import {connect} from 'react-redux';

class ProfileResults extends Component{
    constructor(props){
        super(props)
        this.state ={
            lookingForIndustries: [],
            lookingForSkills: [],
        }
    }

    render(){
        const {accounts, userIndustries, userSkills, industries, skills, lookingFor} = this.props;

        if(userIndustries.length === 0){
            return(
            <div>No userIndustries found here :(</div>
            )
        }
        if(userSkills.length === 0){
            return(
            <div>No userSkills found here :(</div>
            )
        }
        const filteredAccounts = accounts.filter(account =>{

            //arr of userIndustry.userId & userIndustry.industryId
            let accountIndustries = userIndustries.filter(userIndustry => userIndustry.industryId === account.id)
            // if(){
            // return()
            // }
        })

        return(
            <div>

            </div>
        )


    }



}

const mapStateToProps = (state) =>{
    return state;
}

export default connect(mapStateToProps)(ProfileResults)