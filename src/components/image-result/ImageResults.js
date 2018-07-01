import React, { Component } from 'react'
import PropTypes from 'prop-types'
import GridList from '@material-ui/core/GridList'
import GridListTile from '@material-ui/core/GridListTile'
import GridListTileBar from '@material-ui/core/GridListTileBar'
import IconButton from '@material-ui/core/IconButton'
import ZoomIn from '@material-ui/icons/ZoomIn'
import Dialog from '@material-ui/core/Dialog'


class ImageResults extends Component {

    constructor (props) {
        super(props)
        this.state={
            open:false,
            currentImage:''
        }
    }

    handleOpen = img =>{
        this.setState({open: true, currentImg: img})
    }

    
    handleClose = () => {
        this.setState({ open: false });
    };
    

    render () {
        let imageListContent
        const {images, classes, onClose, selectedValue, ...other} = this.props
        
        if(images){
            imageListContent =(
                <GridList cols={3}>
                    {images.map(img =>(
                        <GridListTile
                           key={img.id} 
                        >
                        <img src={img.largeImageURL} />
                        <GridListTileBar
                            title={img.tags}
                            subtitle={<span>by: {img.user}</span>}
                            actionIcon={
                                <IconButton onClick={()=>this.handleOpen(img.largeImageURL)}>
                                    <ZoomIn color="white"/>
                                </IconButton>
                            }
                        />

                        </GridListTile>
                    ))}
                </GridList>
            )
        }else{
            imageListContent = null;
        }
        return (
            <div>
                {imageListContent}
                <Dialog
                    open={this.state.open}
                    onClose={this.handleClose}
                    
                >
                    <img src={this.state.currentImg} alt="" style={{width:'100%'}}/>
                </Dialog>
            </div>
        )
    }
}

ImageResults.propTypes={
    images: PropTypes.array.isRequired
}

export default ImageResults