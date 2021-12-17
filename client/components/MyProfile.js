import React, {Component} from 'react';
import {connect} from 'react-redux';
//import {Link} from 'react-router-dom';


import { Card } from '@mui/material';
import Typography from '@mui/material/Typography';

import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import WorkIcon from '@mui/icons-material/Work';
import InfoIcon from '@mui/icons-material/Info';


class MyProfile extends Component{
    constructor(props){
        super(props);
    }
    render(){
        const {accounts, auth, match} = this.props;
        if(accounts.length === 0){
            return(
                <div>
                    No one found here :(
                </div>
            )
        }
        const account = accounts.find(account => account.id === auth.id)
        if(account === undefined){
            return(
            <div>
                    Whoops...No one found here :(
            </div>
            )
        }
        return(
            <div>
                <Card sx={{ minWidth: 275 }}>
                    <img className='accountImg' src={account.photoUrl ? account.photoUrl : 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'}/>
                    <Typography variant="h4" gutterBottom component="div">
                    {account.name}
                    </Typography>
                    <EmailIcon/>
                    <Typography variant="caption" display="block" gutterBottom>Email:</Typography>
                    <Typography variant="body1" gutterBottom>{account.email}</Typography>
                </Card>  
                <Card sx={{ minWidth: 275 }}>
                <GitHubIcon/>
                <Typography variant="caption" display="block" gutterBottom>GitHub:</Typography>
                <Typography variant="body1" gutterBottom>{account.github}</Typography>
                <WorkIcon/>
                <Typography variant="caption" display="block" gutterBottom>Industry/Market:</Typography>
                <Typography variant="body1" gutterBottom>{account.industry}</Typography>
                </Card>
                <Card sx={{ minWidth: 275 }}>
                <InfoIcon/>
                <Typography variant="caption" display="block" gutterBottom>About Me:</Typography>
                <Typography variant="body1" gutterBottom>{account.description}</Typography>
                </Card>
            </div>
        )
    }
}

const mapStateToProps = (state) =>{
    return state;
}

export default connect(mapStateToProps)(MyProfile)