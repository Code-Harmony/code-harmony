import React, {Component} from 'react';
import {connect} from 'react-redux';

class ProfileResults extends Component{
    constructor(props){
        super(props)
        // this.state ={
        //     lookingForIndustries: [],
        //     lookingForSkills: [],
        // }
    }

    render(){
        const {accounts, userIndustries, userSkills, industries, skills, match} = this.props;

        const matchFilter = match.params.filter;
        if(matchFilter){
            console.log(JSON.parse(matchFilter))
            const arr = Object.keys(JSON.parse(matchFilter))
            console.log(arr)
        }
       
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
        const skillsArrId = []
        
        arr.map(item =>{
            return(
                console.log(skills.find(skill =>{
                    skill.name === item
                    }))
                // skillsArrId.push(
                //     skills.find(skill =>{
                //         skill.name === item
                //     }).id
                // )
            )
        })

        console.log(arr)
        console.log(skillsArrId)
        userSkills.forEach(userSkill =>{
            
            // if(userSkill.skillId === )
        })
        // const filteredAccounts = accounts.filter(account =>{

        // })

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