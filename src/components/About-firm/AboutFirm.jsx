import React from 'react';

class AboutFirm extends React.Component {
    constructor(props) {
        super(props);
        this.title = this.props.title;
        this.text = this.props.text;
        this.image = this.props.image;
        this.authorName = this.props.authorName;
        this.authorQA = this.props.authorQA
    }

    render() {
        return(
            <section id='about-firm'>
                <div className='container'>
                    <div className='firm-title'>
                        <h3>{this.title}</h3>
                    </div>
                    <div className='content'>
                        <div className='text-block'>
                            <p>{this.text}</p>
                        </div>
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
                    </div>
                </div>
            </section>
        )
    }
}

export default AboutFirm;