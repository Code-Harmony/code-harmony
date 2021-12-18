import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';


import ErrorIcon from '@mui/icons-material/Error';
import BugReportIcon from '@mui/icons-material/BugReport';

import { Typography } from '@mui/material';

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
        //const { industries, skills, match} = this.props;

        const matchFilter = match.params.filter;
        let arr = []
        if(matchFilter){
            console.log(JSON.parse(matchFilter))
            arr = Object.keys(JSON.parse(matchFilter))
        }

        if(userIndustries.length === 0){
            return(
            <div>
            <BugReportIcon/>
            <Typography variant="h5" gutterBottom component="div">
                No userIndustries found here :(
            </Typography></div>
            )
        }
        if(userSkills.length === 0){
            return(
                <div>
                    <BugReportIcon/>
                    <Typography variant="h5" gutterBottom component="div">
                        No userSkills found here :(
                    </Typography>
                </div>
            )
        }

        // matches the industry name from match param to the industryId - put in arr
        const industryArrId = []
        arr.map(item =>{
            const industryFound = industries.find(industry => industry.name === item)
            if(industryFound){
                industryArrId.push(industryFound.id)
                // return(
                //     console.log(industryFound.id)
                // )
            }
        })

        const industryArrNames = []
        arr.map(item=>{
            const industryFound = industries.find(industry => industry.name === item)
            if(industryFound){
                industryArrNames.push(industryFound.name)
                // return(
                //     // console.log(industryFound.name)
                // )
            }
        })

        console.log('industryArrNames', industryArrNames)


        // matches the skill name from match param to the skillId - put in arr
        const skillsArrId = []
        arr.map(item =>{
            //C++
            if(item === 'CPlusPlus'){
                const skillFound = skills.find(skill => skill.name === 'C++')
                if(skillFound){
                    skillsArrId.push(skillFound.id)
                    // return(
                    //     console.log(skillFound.id)
                    // )
                }
            }
            //C# 
            if(item === 'CSharp'){
                const skillFound = skills.find(skill => skill.name === 'CSharp')
                if(skillFound){
                    skillsArrId.push(skillFound.id)
                    // return(
                    //     console.log(skillFound.id)
                    // )
                }
            }
            // All else
            const skillFound = skills.find(skill => skill.name === item)
            if(skillFound){
                skillsArrId.push(skillFound.id)
                // return(
                //     console.log(skillFound.id)
                // )
            }
        })

        console.log("skills", skillsArrId)
        console.log("industries", industryArrId)
        
        //Takes arr of skill ids - matches to userId of users with that skill
        const skillUserId = []
        userSkills.map(userSkillPair =>{
            skillsArrId.map(skillId =>{
                if(userSkillPair.skillId === skillId){
                    skillUserId.push(userSkillPair.userId)
                    console.log(userSkillPair.userId)
                }
            })
        })

        console.log('skillUserId', skillUserId)
        
        
        //Takes arr of industry ids - matches to UserId of users with that industry
        const industryUserId = []
        userIndustries.map(userIndustryPair =>{
            industryArrId.map(industryId =>{
                if(userIndustryPair.industryId === industryId){
                    industryUserId.push(userIndustryPair.userId)
                //  console.log(userIndustryPair.userId)
                }
            })
        })
        console.log('industryUserId', industryUserId)


        //Check which user is in both filters.
        let both = []
        // if(skillUserId.length === 0 && industryUserId.length !== 0){
        //     if(!both.includes(industryUserId)){
        //         both.push(industryUserId)
        //         console.log(both)
        //     }
        // }
        // else if(industryUserId.length === 0 && skillUserId !== 0){
        //     both = skillUserId
        //     console.log(both)
        // }
        {
            skillUserId.map(userSkillId =>{
                if(!both.includes(userSkillId)){
                    both.push(userSkillId)
                    console.log(both)
                }
            })
            // industryUserId.map(userIndustryId =>{
            //     if(!both.includes(userIndustryId)){
            //         both.push(userIndustryId)
            //         console.log(both)
            //     } 
            // })
            accounts.map(account =>{
                industryArrNames.map(industryName =>{
                    console.log('account.industry', account.industry)
                    console.log('industryName', industryName)

                    if(account.industry === industryName){
                        both.push(account.id)
                    }
                })
            })
            
        }
        // console.log(both)

        if(both.length === 0){
            return(
            <div>
            <ErrorIcon/>
            <Typography variant="h5" gutterBottom component="div">
                No users found... try searching again!
            </Typography>
            </div>)
            
        }
        return(
            <div>
                <div>
                    <ul>
                    {accounts.map(singleAccount =>{
                        return(
                        both.map(userId =>{
                            if(singleAccount.id *1 === userId*1 ){
                                return(
                                <li>
                                    <div>
                                    Image: <img className='accountImg' src={singleAccount.photoUrl ? singleAccount.photoUrl : 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'}/>
                                    </div>
                                    <div>
                                    Name: {singleAccount.name}
                                    </div>
                                    <div>
                                    GitHub: {singleAccount.github}
                                    </div>
                                    <div>
                                    Description: {singleAccount.description}
                                    </div>
                                    <div>
                                        <Link to={`/viewProfile/${userId}`}>View Profile</Link>
                                    </div>
                                </li>
                                )
                            }
                        })
                        )
                    })}
                    </ul>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) =>{
    return state;
}

export default connect(mapStateToProps)(ProfileResults)