import react from 'react';

class FeaturedItem extends react.Component {
    constructor(props){
        super(props);
        this.title = this.props.title;
        this.subtitle = this.props.subtitle;
        this.image = this.props.image;
        this.button = {
            url: this.props.button.url,
            title: this.props.button.title,
            target: this.props.button.target
        }
    }
    render() {
        return(
            <div className='item'>
                <div className='background'>
                    <img src={this.image} alt='item-image' />
                </div>
                <div className='content'>
                    <div className='top'>
                        <div className='subtitle'>
                            <p>{this.subtitle}</p>
                        </div>
                        <div className='title'>
                            <h4>{this.title}</h4>
                        </div>
                    </div>
                    <a 
                        className='button'
                        href={this.button.url} 
                        target={this.button.target}
                    >
                        {this.button.title}
                    </a>         
                </div>
            </div>
        )
    }
}

export default FeaturedItem;