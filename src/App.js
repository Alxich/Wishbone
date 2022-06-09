import React from "react";
import Header from "./components/Header/Header";
import Footer from './components/Footer/Footer';
import Homepage from "./components/Homepage/Homepage";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.menu = this.props.menu;
    this.logo = this.props.logo;
    this.imageAbout = this.props.imageAbout;
    this.aboutLink = this.props.aboutLink;
    this.textFirm = this.props.textFirm;
    this.authorImage = this.props.authorImage;
    this.bannerPosition = this.props.bannerPosition;
    this.bannerImage = this.props.bannerImage;
    this.bannerText = this.props.bannerText;
    this.processTitle = this.props.processTitle;
    this.processSubtitle = this.props.processSubtitle;
    this.processItems = this.props.processItems;
    this.bannerPositionAnother = this.props.bannerPositionAnother;
    this.bannerImageAnother = this.props.bannerImageAnother;
    this.bannerTextAnother = this.props.bannerTextAnother;
    this.customTitle = this.props.customTitle;
    this.customSubtitle = this.props.customSubtitle;
    this.customtext = this.props.customtext;
    this.customImage = this.props.customImage;
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
    this.footerTopSubtitle = this.props.footerTopSubtitle;
    this.footerTopTitle = this.props.footerTopTitle;
    this.footerTopLink = this.props.footerTopLink;
    this.footerBtmLogo = this.props.footerBtmLogo;
    this.footerBtmRights = this.props.footerBtmRights;
    this.footerBtmSocial = this.props.footerBtmSocial;
  }
  render() {
    return (
      <div className="App">
          <Header 
            logo = {this.logo} 
            menu = {this.menu} 
          />
          <Homepage 
            imageAbout = {this.imageAbout} 
            aboutLink = {this.aboutLink}
            textFirm = {this.textFirm}
            authorImage = {this.authorImage}
            bannerPosition = {this.bannerPosition}
            bannerImage = {this.bannerImage}
            bannerText = {this.bannerText}
            processTitle = {this.processTitle}
            processSubtitle = {this.processSubtitle}
            processItems = {this.processItems}
            bannerPositionAnother = {this.bannerPositionAnother}
            bannerImageAnother = {this.bannerImageAnother}
            bannerTextAnother = {this.bannerTextAnother}
            customTitle = {this.customTitle}
            customSubtitle = {this.customSubtitle}
            customtext = {this.customtext}
            customImage = {this.customImage}
            bannerImageThird = {this.bannerImageThird}
            bannerTextThird = {this.bannerTextThird}
            bannerPositionThird = {this.bannerPositionThird}
            featuredTitle = {this.featuredTitle}
            featuredSubTitle = {this.featuredSubTitle}
            featuredItems = {this.featuredItems}
            featuredMore = {this.featuredMore}
            OurTeamTitle = {this.OurTeamTitle}
            OurTeamText = {this.OurTeamText}
            OurTeamLink = {this.OurTeamLink}
            Ourteams = {this.Ourteams}
          />
          <Footer 
              footerTopSubtitle = {this.footerTopSubtitle}
              footerTopTitle = {this.footerTopTitle}
              footerTopLink = {this.footerTopLink}
              footerBtmLogo = {this.footerBtmLogo}
              footerBtmRights = {this.footerBtmRights}
              footerBtmSocial = {this.footerBtmSocial}
            />
      </div>
    );
  }
}

export default App;
