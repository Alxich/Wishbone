import React from 'react';

class Bannertext extends React.Component {
    constructor(props) {
        super(props);
        this.image = this.props.bannerImage;
        this.text = this.props.bannerText;
        this.position = this.props.position;
    }

    render() {
        return (
            <section class='banner-text' data-position={this.position}>
                <div className='background'>
                    <img src={this.image} alt='background-image'/>
                </div>
                <div className='container'>
                    <div className='text-block'>
                        <p>{this.text}</p>
                    </div>
                </div>
            </section>
        )
    }
}

export default Bannertext;