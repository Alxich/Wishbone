import react from 'react';
import FeaturedItem from './FeaturedItem/FeaturedItem'

class Featured extends react.Component {
    constructor(props) {
        super(props);
        this.featuredTitle = this.props.featuredTitle;
        this.featuredSubTitle = this.props.featuredSubTitle;
        this.featuredItems = this.props.featuredItems;
        this.featuredMore = {
            url: this.props.featuredMore.url,
            title: this.props.featuredMore.title,
            target: this.props.featuredMore.target
        }
    }
    render() {
        const featuredItems = this.featuredItems
            .map((item) => 
                <FeaturedItem 
                    image={item.image} 
                    title={item.title} 
                    subtitle={item.subtitle} 
                    button={item.button} 
                />
            )

        return(
            <section id='featured'>
                <div className='container'>
                    <div className='title'>
                        <h3>{this.featuredTitle}</h3>
                    </div>
                    <div className='subtitle'>
                        <p>{this.featuredSubTitle}</p>
                    </div>
                    <div className='featured-cn'>
                        {featuredItems}
                    </div>
                    <a 
                        className='link' 
                        href={this.featuredMore.url} 
                        target={this.featuredMore.target}
                    >
                        {this.featuredMore.title}
                    </a>
                </div>
            </section>
        )
    }
}

export default Featured;