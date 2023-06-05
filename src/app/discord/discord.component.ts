import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-discord',
  templateUrl: './discord.component.html',
  styleUrls: ['./discord.component.css']
})
export class DiscordComponent {

  discordIcon : string = '/assets/images/discordneww.png';
  sectionOne : string = '/assets/images/discord-1-decore.jpg';
  discordTwoDecore : string = '/assets/images/discord-2-decore.jpg';
  discordThreeDecore : string = '/assets/images/discord-3-decore.jpg';
  dsFourDecore : string = '/assets/images/discord-4-decore.jpg';
  twitterICon : string = '/assets/images/twitter-icon.png';
  igIcon : string = '/assets/images/insta-icon.png';
  fbIcon : string = '/assets/images/fb-icon.png';
  ytIcon : string = '/assets/images/yt-icon.png';
  dsBlack : string = '/assets/images/discord-icon-black.png';



  section_variable : boolean = false;
  section_variableTwo : boolean = false;
  section_variableThree : boolean = false;
  section_variableFour : boolean = false;

  @HostListener("document:scroll")
  scrollFunction(){
    let pos = document.documentElement.scrollTop;
    let calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrollValue = Math.round((pos * 100) / calcHeight);
    console.log(scrollValue)

    if(scrollValue > 2 ){
      this.section_variable = true;
    }else {
      this.section_variable = false;
    };

    if(scrollValue > 19) {
      this.section_variableTwo = true;
    }else {
      this.section_variableTwo = false;
    };

    if(scrollValue > 34) {
      this.section_variableThree = true;
    }else {
      this.section_variableThree = false;
    };

    if(scrollValue > 53) {
      this.section_variableFour = true;
    }else {
      this.section_variableFour = false;
    }

  }

}
