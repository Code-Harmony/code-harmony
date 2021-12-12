import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Redirect } from 'react-router';

class LookingFor extends Component{
    constructor(props){
        super(props)
        this.state = {
            lookingFor: []
        }
        this.onClick = this.onClick.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }
    onClick(name){
        const {lookingFor} = this.state;
        if(lookingFor.find(value => value === name) === undefined){
            lookingFor.push(name)
        }
        this.setState(lookingFor);
    }
    onSubmit(event){
        const {history} = this.props;
        event.preventDefault();
        const {lookingFor} = this.state;
        const obj = {}
        lookingFor.map(item =>{
            if(item === 'C#'){
                obj['CSharp'] = ''  
            }
            else if(item === 'C++'){
                obj['CPlusPlus'] = ''  
            }
            else{
                obj[item] = ''
            }
        })
        
        console.log(obj)

        history.push(`/profileResults/${JSON.stringify(obj)}`)
    }
    render(){
        const {accounts, lookingFor, industries, skills} = this.props;
        const {onClick, onSubmit} = this
        console.log(this.state.lookingFor)
        if(industries.length === 0){
            return(
                <div>No industries found here :(</div>
            )
        }
        if(skills.length === 0){
            return(
                <div>No skills found here :(</div>
            )
        }
        return(
            <div>
                <form>

                <ul>
                {industries.map((industry, idx) =>{
                    return(
                        <li key={idx} onClick={() =>{onClick(industry.name)}}>
                        {industry.name}
                    </li>
                    )
                })}
                </ul>
                <ul>
                {skills.map((skill, idx) =>{
                    return(
                        <li key={idx} onClick={() =>{onClick(skill.name)}}>
                        {skill.name}
                    </li>
                    )
                })}
                </ul>
                <button onClick={onSubmit}>Lets find people!</button>
                </form>

            </div>
        )
    }
}

const mapStateToProps = (state) =>{
    return state;
}

export default connect(mapStateToProps)(LookingFor)