import React, { Component } from 'react'

import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

import {API_CALL_REQUEST} from '../../Constants'
import {connect} from 'react-redux'
import ImageResults from '../image-result/ImageResults'

class Search extends Component {
    constructor(props) {
        super(props);
        this.state={
            searchText:'',
            amount: 5,
           
        }
    }

    onTextChange =(e)=>{
        this.setState({[e.target.name]: e.target.value},()=>{
            this.props.dispatch({type: API_CALL_REQUEST, amount: this.state.amount, searchText: this.state.searchText})
        })
    }

    onAmountChange = event => {
        this.setState({ [event.target.name]: event.target.value },()=>{
            this.props.dispatch({type: API_CALL_REQUEST, amount: this.state.amount, searchText: this.state.searchText})
        });
      }
    
    render () {
        console.log(this.props.images)
        return (
            <div>
                
                <TextField
                    name="searchText"
                    value={this.state.searchText}
                    onChange={this.onTextChange}
                    fullWidth={true}
                    placeholder= "Search for images" 
                    margin="normal"               
                />
                <br/>
                <Select
                    value={this.state.amount}
                    onChange={this.onAmountChange}
                    inputProps={{
                        name: 'amount',
                        id: 'amount-simple',
                    }}
                >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                </Select>
                <br/>
                {this.props.images.length > 0 ? (<ImageResults images={this.props.images}/>) : null}
            </div>
        )
    }
}

const mapStateToProps = state =>{
    return{
        fetching: state.fetching,
        images: state.images,
        error: state.error
    }
}

export default connect(mapStateToProps)(Search)