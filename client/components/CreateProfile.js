import React, {Component} from 'react';
import {connect} from 'react-redux';
import {createProfileAccoun} from '../store/account';


class CreateProfile extends Component{
    constructor(props){
        super(props);
        const {auth} = this.props;
        this.state = {
            id: auth ? auth.id : '',
            name: '',
            email: '',
            industry: '',
            // gitHub: '',
            description: '',
            zipcode: '',
        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    onChange(event){
        const change = {};
        change[event.target.name] = event.target.value;
        console.log(change)
        this.setState(change);
    }
    onSubmit(event){
        event.preventDefault();
        const {id, name, email, industry, description, zipcode} = this.state;
        const {createProfileAccount} = this.props;
        if(name === ''){
            window.alert('Name is required')
        }
        else{
            createProfileAccount(id, name, email, industry, description, zipcode)
        }
    }
    render(){
        const {name, email, industry, description, zipcode} = this.state;
        const {industries} = this.props;
        const {onChange, onSubmit} = this
        return(
            <div>
                <form name='createProfileAccount' onSubmit={onSubmit}>
                    <label>Name:</label>
                    <input value={name} name='name' onChange={onChange}/>
                    <label>Email:</label>
                    <input value={email} name='email' onChange={onChange}/>
                    <label>Industry:</label>
                    <select value={industry} name='industry' onChange={onChange}>
                        <option value=''>----</option>
                        {industries.map((industry, idx) => {
                            return(
                                <option value={industry.name} key={idx}>
                                    {industry.name}
                                </option>
                            )}
                        )}
                    </select>
                    <label>About Me:</label>
                    <input value={description} name='description' onChange={onChange}/>
                    <label>Zipcode:</label>
                    <input value={zipcode} name='zipcode' onChange={onChange}/>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return state;
}

const mapDispatchToProps = (dispatch, {history}) =>{
    return {
        createProfileAccount : (id, name, email, industry, description, zipcode) =>{
            dispatch(createProfileAccount(id, name, email, industry, description, zipcode, history))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UpdateProfile)