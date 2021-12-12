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
        //const { industries, skills, match} = this.props;

        const matchFilter = match.params.filter;
        let arr = []
        if(matchFilter){
            console.log(JSON.parse(matchFilter))
            arr = Object.keys(JSON.parse(matchFilter))
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

        //Takes arr of industry ids - matches to UserId of users with that industry
        const industryUserId = []
        userIndustries.map(userIndustryPair =>{
            industryArrId.map(industryId =>{
                if(userIndustryPair.industryId === industryId){
                    industryUserId.push(userIndustryPair.userId)
                    console.log(userIndustryPair.userId)
                }
            })
        })
        
        //Check which user is in both filters.
        let both = []
        if(skillUserId.length === 0 && industryUserId.length !== 0){
            both = industryUserId
        }
        else if(industryUserId.length === 0 && skillUserId !== 0){
            both = skillUserId
        }
        else{
            skillUserId.map(userSkillId =>{
                industryUserId.map(userIndustryId =>{
                    if(userSkillId === userIndustryId){
                        both.push(userSkillId)
                        console.log(both)
                    }
                })
            })
        }
        console.log(both)

        return(
            <div>
                <div>
                    <ul>
                    {accounts.map(singleAccount =>{
                        return(
                        both.map(userId =>{
                            console.log("singleAccount", singleAccount)
                            console.log("userId", userId)
                            if(singleAccount.id *1 === userId*1 ){
                                return(
                                <li>
                                    <div>
                                    Image: {singleAccount.image}
                                    </div>
                                    <div>
                                    Name: {singleAccount.name}
                                    </div>
                                    <div>
                                    Description: {singleAccount.description}
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