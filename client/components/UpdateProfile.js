import React, {Component} from 'react';
import {connect} from 'react-redux';
import {updateAccount} from '../store/account';


import { TextField } from '@mui/material';
import { MenuItem } from '@mui/material';

import { Button } from '@mui/material';
import SaveIcon from '@mui/icons-material/Save';

import { styled } from '@mui/material/styles';
const Input = styled('input')({
    display: 'none',
});

import PhotoIcon from '@mui/icons-material/Photo';

import { Grid } from '@mui/material';
import { Card } from '@mui/material';
// import Paper from '@mui/material/Paper';
// const Item = styled(Paper)(({ theme }) => ({
//     ...theme.typography.body2,
//     padding: theme.spacing(1),
//     textAlign: 'center',
//     color: theme.palette.text.secondary,
//   }));

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
            github: auth? auth.github : '',
            description: auth? auth.description : '',
            zipcode: auth? auth.zipcode : '',
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
        console.log(change)
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
        const {photoUrl, name, github, email, industry, description, zipcode} = this.state;
        const {industries, auth, accounts} = this.props;
        const {onChange, onSubmit} = this
        // console.log(accounts)
        return(
            <div>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} align="center" direction="column" padding={15} paddingTop={5}>
                    {/* <Grid item xs={8}> */}
                        {/* <Item> */}
                            <Card sx={{ minWidth: 275 }}>
                            <Grid item xs={8} padding={1}>
                                <img className='accountImg' src={photoUrl ? photoUrl : 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'}/>
                                <br/>
                            </Grid>
                            <Grid item xs={8} padding={1}>
                                <label htmlFor="contained-button-file">
                                    <Input accept="image/*" id="contained-button-file" multiple type="file" ref={el => this.el = el}/>
                                    <Button variant="contained" component="span" endIcon={<PhotoIcon />}>
                                    Upload
                                    </Button>
                                </label>
                            </Grid>
                            <Grid item xs={8} padding={1}>
                                <TextField id="outlined-helperText" label="Name" value={name} name='name' onChange={onChange}/>
                            </Grid>
                            <Grid item xs={8} padding={1}>
                                <TextField disabled id="outlined-disabled" label="Github" value={github} name='github' onChange={onChange}/>
                            </Grid>
                            <Grid item xs={8} padding={1}>
                                <TextField id="outlined-helperText" label="Email" value={email} name='Email' onChange={onChange}/>
                            </Grid>
                            <Grid item xs={8} padding={1}>
                                <TextField id="outlined-select-currency" select label="Industry" value={industry} name='industry' onChange={onChange}>
                                    {industries.map((industry, idx) => (
                                        <MenuItem value={industry.name} key={idx}>
                                            {industry.name}
                                        </MenuItem>
                                    ))}
                                </TextField>
                            </Grid>
                            <Grid item xs={8} padding={1}>
                                <TextField id="outlined-helperText" label="About Me" value={description} name='description' onChange={onChange}/>
                            </Grid>
                            <Grid item xs={8} padding={1}>
                                <TextField id="outlined-helperText" label="Zipcode" value={zipcode} name='zipcode' onChange={onChange}/>
                            </Grid>
                            <Grid item xs={8} padding={1}>
                                <Button variant="contained" endIcon={<SaveIcon />} onClick={this.onSubmit}>
                                    Update Profile
                                </Button>
                            </Grid>
                            </Card>
                        {/* </Item> */}
                    {/* </Grid> */}
                </Grid>
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