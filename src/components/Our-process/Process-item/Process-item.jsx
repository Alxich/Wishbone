import React from 'react';

class ProcessItem extends React.Component {
    constructor(props) {
        super(props);
        this.itemImage = this.props.itemImage;
        this.itemTitle = this.props.itemTitle;
        this.itemText = this.props.itemText;
    }

    render() {
        return(
            <div className='item'>
                <div className='icon'>
                    <img src={this.itemImage} alt='image-icon'/>
                </div>
                <div className='title'>
                    <h4>{this.itemTitle}</h4>
                </div>
                <div className='text-block'>
                    <p>{this.itemText}</p>
                </div>
            </div>
        )
    }
}

export default ProcessItem;