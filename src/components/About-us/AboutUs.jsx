import React from 'react';

class AboutUs extends React.Component {
    constructor(props) {
        super(props);
        this.brandTitle = this.props.brandTitle;
        this.title = this.props.title;
        this.text = this.props.text;
        this.link = {
            url: this.props.link.url,
            title: this.props.link.title,
            target: this.props.link.target
        }
        this.image = this.props.image
    }
    render() {
        return(
            <section id="about-us">
                <div className='container'>
                    <div className='lt-side'>
                        <div className='container'>
                            <div className='brand-title'>
                                <p>{this.brandTitle}</p>
                            </div>
                            <div className='title'>
                                <h1>
                                    {this.title}
                                </h1>
                            </div>
                            <div className='text-block'>
                                <p>{this.text}</p>
                            </div>
                            <a 
                                className='link' 
                                href={this.link.url} 
                                target={this.link.target}
                            >
                                {this.link.title}
                            </a>
                        </div>
                    </div>
                    <div className='rt-side'>
                        <img src={this.image} alt='about-us-image'/>
                    </div>
                </div>
            </section>
        )
    }
}

export default AboutUs;