import React from "react";
import Teams from "./Teams/Teams"

class OurTeam extends React.Component {
    constructor(props){
        super(props)
        this.OurTeamTitle = this.props.OurTeamTitle;
        this.OurTeamText = this.props.OurTeamText;
        this.Ourteams = this.props.Ourteams;
        this.OurTeamLink = {
            url: this.props.OurTeamLink.url,
            title: this.props.OurTeamLink.title,
            target: this.props.OurTeamLink.target
        }
    }
    render() {
        const ourTeams = this.Ourteams
            .map((item) => <Teams image={item.image} authorName={item.authorName} authorQA={item.authorQA} />)
        return(
            <section id="our-team">
                <div className="container">
                    <div className="lt-side">
                        <div className="title">
                            <h3>{this.OurTeamTitle}</h3>
                        </div>
                        <div className="text-block">
                            <p>{this.OurTeamText}</p>
                        </div>
                        <a 
                            className='link' 
                            href={this.OurTeamLink.url} 
                            target={this.OurTeamLink.target}
                        >
                            {this.OurTeamLink.title}
                        </a>
                    </div>
                    <div className="rt-side">
                        {ourTeams}
                    </div>
                </div>
            </section>
        )
    }
}

export default OurTeam;