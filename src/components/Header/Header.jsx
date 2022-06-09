import React from 'react';
import MenuNav from './Links/Links';

class Header extends React.Component {
    constructor(props) {
        super(props)
        this.logo = this.props.logo
        this.menu = this.props.menu
    }

    render() {
        const menuLinks = this.props.menu
            .map((links) => <MenuNav link={links.link} text={links.text} id={links.id} />)

        return(
            <header>
                <div className='container'>
                    <div className='logo'>
                        <img src={this.logo} alt="brand-logo" />
                    </div>
                    <div className='navigation'>
                        <ul>
                            {menuLinks}
                        </ul>
                    </div>
                    <a className='button' href='#' target='_self'>
                        Get template
                    </a>
                </div>
            </header>
        );
    }
}

export default Header;