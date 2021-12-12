import React, {Component} from 'react';
import {connect} from 'react-redux';
import {updateAccount} from '../store/account';


class UpdateProfile extends Component{
    constructor(props){
        super(props);
        const {auth, account} = this.props;
        this.state = {
            id: auth ? auth.id : '',
            photoUrl: auth ? auth.photoUrl : '',
            name: auth ? auth.name : '',
            email: auth? auth.email : '',
            industry: auth? auth.industry : '',
            // gitHub: '',
            description: auth? auth.description : '',
            zipcode: auth? auth.address : '',
        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    componentDidMount(){
        this.el.addEventListener('change', (event) =>{
            const file = event.target.files[0];
            const reader = new FileReader();
            reader.addEventListener('load', () =>{
                this.setState({photoUrl: reader.result});
            })
            reader.readAsDataURL(file);
            console.log(event.target.file)
        })
    }
    onChange(event){
        const change = {};
        change[event.target.name] = event.target.value;
        //console.log(change)
        this.setState(change);
    }
    onSubmit(event){
        event.preventDefault();
        const {id, photoUrl, name, email, industry, description, zipcode} = this.state;
        const {updateAccount} = this.props;
        if(name === ''){
            window.alert('Name is required')
        }
        else{
            updateAccount(id, photoUrl, name, email, industry, description, zipcode)
        }
    }
    render(){
        const {photoUrl, name, email, industry, description, zipcode} = this.state;
        const {industries, auth, accounts} = this.props;
        const {onChange, onSubmit} = this
        console.log(auth)
        // console.log(accounts)
        return(
            <div>
                <form name='updateAccount' onSubmit={onSubmit}>
                    <img className='accountImg' src={photoUrl ? photoUrl : 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'}/>
                    <br/>
                    <input type='file' ref={el => this.el = el}></input>
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
                    <br/><br/>
                    <button onSubmit={this.onSubmit}>Update Profile</button>
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
        updateAccount : (id, photoUrl, name, email, industry, description, zipcode) =>{
            dispatch(updateAccount(id, photoUrl, name, email, industry, description, zipcode, history))
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(UpdateProfile)