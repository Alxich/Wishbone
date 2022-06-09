import React from 'react';
import AboutUs from '../About-us/AboutUs';
import AboutFirm from '../About-firm/AboutFirm';
import Bannertext from '../Banner-text/Banner-text';
import OurProcess from '../Our-process/Our-process';
import Customers from '../Customers/Customers';
import Featured from '../Featured/Featured';
import OurTeam from '../Our-team/Our-team';

class Homepage extends React.Component {
    constructor(props) {
        super(props);
        this.imageAbout = this.props.imageAbout;
        this.aboutLink = this.props.aboutLink;
        this.textFirm = this.props.textFirm;
        this.authorImage = this.props.authorImage;
        this.bannerImage = this.props.bannerImage;
        this.bannerImageAnother = this.props.bannerImageAnother;
        this.bannerTextAnother = this.props.bannerTextAnother;
        this.bannerText = this.props.bannerText;
        this.bannerPosition = this.props.bannerPosition;
        this.processTitle = this.props.processTitle;
        this.processSubtitle = this.props.processSubtitle;
        this.processItems = this.props.processItems;
        this.customTitle = this.props.customTitle;
        this.customSubtitle = this.props.customSubtitle;
        this.customtext = this.props.customtext;
        this.customImage = this.props.customImage;
        this.bannerPositionAnother = this.props.bannerPositionAnother;
        this.bannerImageThird = this.props.bannerImageThird;
        this.bannerTextThird = this.props.bannerTextThird;
        this.bannerPositionThird = this.props.bannerPositionThird;
        this.featuredTitle = this.props.featuredTitle;
        this.featuredSubTitle = this.props.featuredSubTitle;
        this.featuredItems = this.props.featuredItems;
        this.featuredMore = this.props.featuredMore;
        this.OurTeamTitle = this.props.OurTeamTitle;
        this.OurTeamText = this.props.OurTeamText;
        this.OurTeamLink = this.props.OurTeamLink;
        this.Ourteams = this.props.Ourteams;
    }
    render() {
        return(
            <div className='sectons'>
                <AboutUs
                    brandTitle = 'Wishbone+Partners'
                    title = 'The home of beautiful architecture.'
                    text = 'We are an architecture firm with a focus on beautiful but functional design. At its heart, we believe design is about usability and accessibility — these are the guiding principles for our work. Read more about our previous projects, our process and our team below.'
                    link = {this.aboutLink}
                    image = {this.imageAbout}
                />        
                <AboutFirm 
                    title = 'Our firm'
                    text = {this.textFirm}
                    authorName = 'Stephen Collier'
                    authorQA = 'Senior Partner'
                    image = {this.authorImage}
                />    
                <Bannertext 
                    bannerImage = {this.bannerImage}
                    bannerText = {this.bannerText}
                    position = {this.bannerPosition}
                />
                <OurProcess 
                    processTitle = {this.processTitle}
                    processSubtitle = {this.processSubtitle}
                    processItems = {this.processItems}
                />
                 <Bannertext 
                    bannerImage = {this.bannerImageAnother}
                    bannerText = {this.bannerTextAnother}
                    position = {this.bannerPositionAnother}
                />
                <Customers 
                    title = {this.customTitle}
                    subTitle = {this.customSubtitle}
                    text = {this.customtext}
                    images = {this.customImage}
                />
                <Bannertext 
                    bannerImage = {this.bannerImageThird}
                    bannerText = {this.bannerTextThird}
                    position = {this.bannerPositionThird}
                />
                <Featured
                    featuredTitle = {this.featuredTitle}
                    featuredSubTitle = {this.featuredSubTitle}
                    featuredItems = {this.featuredItems}
                    featuredMore = {this.featuredMore}
                />
                <OurTeam 
                    OurTeamTitle = {this.OurTeamTitle}
                    OurTeamText = {this.OurTeamText}
                    OurTeamLink = {this.OurTeamLink}
                    Ourteams = {this.Ourteams}
                />
            </div>
        )
    }
}

export default Homepage;