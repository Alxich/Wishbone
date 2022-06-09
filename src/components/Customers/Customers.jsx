import React from 'react';

class Customers extends React.Component {
    constructor(props) {
        super(props);
        this.title = this.props.title;
        this.subTitle = this.props.subTitle;
        this.text = this.props.text;
        this.images = this.props.images;
        
    }
    render() {
        const customersIcon = this.images
            .map((item) => <div className='icon'><img src={item.icons} alt='item-icons'/></div>);
        return(
            <section id='customers'>
                <div className='container'>
                    <div className='lt-side'>
                        <div className='subtitle'>
                            <p>{this.subTitle}</p>
                        </div>
                        <div className='title'>
                            <h3>{this.title}</h3>
                        </div>
                        <div className='text-block'>
                            <p>{this.text}</p>
                        </div>
                    </div>
                    <div className='rt-side'>
                        {customersIcon}
                    </div>
                </div>
            </section>
        )
    }
}

export default Customers;