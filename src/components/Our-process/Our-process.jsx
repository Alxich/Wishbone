import React from 'react';
import ProcessItem from './Process-item/Process-item'

class OurProcess extends React.Component {
    constructor(props) {
        super(props);
        this.processTitle = this.props.processTitle;
        this.processSubtitle = this.props.processSubtitle;
        this.processItems = this.props.processItems;
    }
    
    render() {
        const processItems = this.processItems
            .map((item) => <ProcessItem itemImage={item.itemImage} itemTitle={item.itemTitle} itemText={item.itemText} />)

        return(
            <section id='our-process'>
                <div className='subtite'>
                    <p>{this.processSubtitle}</p>
                </div>
                <div className='title'>
                    <h3>{this.processTitle}</h3>
                </div>
                <div className='container'>
                    {processItems}
                </div>
            </section>
        )
    }
}

export default OurProcess;