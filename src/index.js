import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/index.scss';
import imageAbout from './images/about-us.png';
import authorImage from './images/author.png';
import logo from './images/logo.svg';
import bannerImage from './images/banner-image.png';
import itemImageOne from './images/process-item-1.png';
import itemImageSec from './images/process-item-2.png';
import itemImageThird from './images/process-item-3.png';
import bannerImageAnother from './images/banner-another-image.png';
import customersIconOne from './images/custom-icons-1.svg';
import customersIconSec from './images/custom-icons-2.svg';
import customersIconThr from './images/custom-icons-3.svg';
import customersIconFif from './images/custom-icons-4.svg';
import bannerImageThird from './images/banner-third.png';
import featuredImageOne from './images/featured-image-1.png';
import featuredImageSec from './images/featured-image-2.png';
import featuredImageThr from './images/featured-image-3.png';
import authorImageSec from './images/author-2.png';
import authorImageThr from './images/author-3.png';
import authorImageFrt from './images/author-4.png';
import authorImageFif from './images/author-5.png';
import twitterIcon from './images/twitter.png';
import instagramIcon from './images/instagram.png';
import facebookIcon from './images/facebook.png';

let menu = [
  {
    link: "#", 
    text: "Projects", 
    id: 1},
  {
    link: "#",
    text: "About", 
    id: 2
  },
  {
    link: "#",
    text: "News", 
    id: 3
  },
  {
    link: "#", 
    text: "Team", 
    id: 4
  },
  {
    link: "#", 
    text: "Contact",
    id: 5
  }
],
aboutLink = {
    url: '#',
    target: '_self',
    title: 'Read more'
},
textFirm = ['Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.',<br/>,<br/>, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.', <br/>,<br/>, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.'],
bannerPosition = true,
bannerText = ['REEDING HOUSE', <br/>, 'Lorem ipsum dolor sit amet, dolor sit amet dolor sit amet.'],
processTitle = 'How we do what we do.',
processSubtitle = 'Our process',
processItems = [
  {
    itemImage: itemImageThird, 
    itemTitle: 'Building', 
    itemText: 'Nulla ut tristique libero. Lorem ipsum ut tristique libero. Nulla luctus sapien ac arcu tempor, vitae lorem ipsum dolor leo iaculis.', 
    id: 1
  },
  {
    itemImage: itemImageSec, 
    itemTitle: 'Finalizing', 
    itemText: 'Adipiscing elit. Nulla ut tristique libero. Nulla vitae tempor leo iaculis luctus sapien ac arcu tempor, vitae.', 
    id: 2
  },
  {
    itemImage: itemImageOne, 
    itemTitle: 'Sketching', 
    itemText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut tristique libero. Nulla luctus sapien ac arcu tempor, vitae tempor leo iaculis.', 
    id: 3
  },
],
bannerTextAnother = ['THE MARBLE STAIRCASE', <br/>, 'Lorem ipsum dolor sit amet, dolor sit amet dolor sit amet.'],
bannerPositionAnother = true,
customTitle = 'Happy customers.',
customSubtitle = 'prior clients',
customtext = 'Morbi neque ex, condimentum dapibus congue et, vulputate ut ligula. Vestibulum sit amet urna turpis. Mauris euismod elit et nisi ultrices, ut faucibus orci tincidunt.',
customImage = [
  {
    icons: customersIconOne, 
    id: 1
  },
  {
    icons: customersIconSec, 
    id: 2
  },
  {
    icons: customersIconThr, 
    id: 3
  },
  {
    icons: customersIconFif, 
    id: 4
  },
],
bannerTextThird = ['THE SWIRLING STAIRCASE', <br/>, 'Lorem ipsum dolor sit amet, dolor sit amet dolor sit amet.'],
bannerPositionThird = false,
featuredTitle = 'Featured projects',
featuredSubTitle = 'Some of the latest and greatest projects from us here at Wishbone+Partners.',
featuredItems = [
  {
    image: featuredImageOne, 
    title: 'Big Road Brewery', 
    subtitle: 'New York', 
    button: {
      title: 'Read more', 
      url: '#', 
      target: '_self'
    }, 
    id: 1
  },
  {
    image: featuredImageSec, 
    title: 'Big Road Brewery', 
    subtitle: 'New York', 
    button: {
      title: 'Read more', 
      url: '#', 
      target: '_self'
    }, 
    id: 2
  },
  {
    image: featuredImageThr, 
    title: 'Big Road Brewery', 
    subtitle: 'New York', 
    button: {
      title: 'Read more', 
      url: '#', 
      target: '_self'
    }, 
    id: 3
  }
],
featuredMore = {
  title: 'View all projects',
  url: '#',
  target: '_self'
},
OurTeamTitle = 'Meet our team',
OurTeamText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis.',
OurTeamLink = {
  title: 'See team',
  url: '#',
  target: '_self'
},
Ourteams = [
  {
    image: authorImage, 
    authorName: 'Stephen Collier', 
    authorQA: 'Senior Partner'
  },
  {
    image: authorImageFrt, 
    authorName: 'Nolan Peters', 
    authorQA: 'Associate'
  },
  {
    image: authorImageSec, 
    authorName: 'Ferris Wonder', 
    authorQA: 'Associate Partner'
  },
  {
    image: authorImageFif, 
    authorName: 'Aria Stone', 
    authorQA: 'Senior Partner'
  },
  {
    image: authorImageThr, 
    authorName: 'Niko Ferry', 
    authorQA: 'Partner'
  },
],
footerTopSubtitle = 'Get in touch',
footerTopTitle = 'Think we would be a good fit for your next project?',
footerTopLink = {
  title: 'Get in touch',
  url: '#',
  target: '_self',
},
footerBtmLogo = logo,
footerBtmRights = ['Powered by Webflow.', <br/>, 'All rights reserved Wishbone+Partners, Inc.Licensing.'],
footerBtmSocial = [
  {
    icons: twitterIcon,
    url: '#',
    target: '_self',
  },
  {
    icons: instagramIcon,
    url: '#',
    target: '_self',
  },
  {
    icons: facebookIcon,
    url: '#',
    target: '_self',
  }
];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App 
      logo = {logo}
      imageAbout = {imageAbout} 
      authorImage = {authorImage}
      menu = {menu}
      aboutLink = {aboutLink}
      textFirm = {textFirm}
      bannerPosition = {bannerPosition}
      bannerImage = {bannerImage}
      bannerText = {bannerText}
      processTitle = {processTitle}
      processSubtitle = {processSubtitle}
      processItems = {processItems}
      bannerPositionAnother = {bannerPositionAnother}
      bannerImageAnother = {bannerImageAnother}
      bannerTextAnother = {bannerTextAnother}
      customTitle = {customTitle}
      customSubtitle = {customSubtitle}
      customtext = {customtext}
      customImage = {customImage}
      bannerImageThird = {bannerImageThird}
      bannerTextThird = {bannerTextThird}
      bannerPositionThird = {bannerPositionThird}
      featuredTitle = {featuredTitle}
      featuredSubTitle = {featuredSubTitle}
      featuredItems = {featuredItems}
      featuredMore = {featuredMore}
      OurTeamTitle = {OurTeamTitle}
      OurTeamText = {OurTeamText}
      OurTeamLink = {OurTeamLink}
      Ourteams = {Ourteams}
      footerTopSubtitle = {footerTopSubtitle}
      footerTopTitle = {footerTopTitle}
      footerTopLink = {footerTopLink}
      footerBtmLogo = {footerBtmLogo}
      footerBtmRights = {footerBtmRights}
      footerBtmSocial = {footerBtmSocial}
    />
  </React.StrictMode>
);

