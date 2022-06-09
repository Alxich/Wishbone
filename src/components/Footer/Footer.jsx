import React from 'react';

class Footer extends React.Component {
    constructor(props) {
        super(props)
        this.footerTopSubtitle = this.props.footerTopSubtitle;
        this.footerTopTitle = this.props.footerTopTitle;
        this.footerTopLink = {
            url: this.props.footerTopLink.url,
            title: this.props.footerTopLink.title,
            target: this.props.footerTopLink.target
        }
        this.footerBtmLogo = this.props.footerBtmLogo;
        this.footerBtmRights = this.props.footerBtmRights;
        this.footerBtmSocial = this.props.footerBtmSocial;
    }

    render() {
        const socials = this.footerBtmSocial
            .map((item) => <a className='icon' href={item.url} target={item.target}><img src={item.icons} alt='item-icons'/></a>);

        return(
            <footer id='colophon'>
                <div className='top'>
                    <div className='container'>
                        <div className='lt-side'>
                            <div className='subtitle'>
                                <p>{this.footerTopSubtitle}</p>
                            </div>
                            <div className='title'>
                                <h3>{this.footerTopTitle}</h3>
                            </div>
                        </div>
                        <a 
                            className='link' 
                            href={this.footerTopLink.url} 
                            target={this.footerTopLink.target}
                        >
                            {this.footerTopLink.title}
                        </a>
                    </div>
                </div>
                <div className='bottom'>
                    <div className='container'>
                        <div className='lt-side'>
                            <div className='brand-logo'>
                                <img src={this.footerBtmLogo} alt='brand-logo'/>
                            </div>
                            <div className='copyrights'>
                                <p>{this.footerBtmRights}</p>
                            </div>
                        </div>
                        <div className='rt-side'>
                            {socials}
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer;