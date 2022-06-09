import React from "react";

class Teams extends React.Component {
    constructor(props) {
        super(props)
        this.image = this.props.image;
        this.authorName = this.props.authorName;
        this.authorQA = this.props.authorQA;
    }

    render() {
        return(
            <div className='author'>
                <div className='thumbnail'>
                    <img src={this.image} alt='author-thumbnail' />
                </div>
                <div className='author-text'>
                    <div className='title'>
                        <p>{this.authorName}</p>
                    </div>
                    <div className='subtitle'>
                        <p>{this.authorQA}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Teams;