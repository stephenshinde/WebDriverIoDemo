const elementUtil = require('../Util/ElementUtil');
const constants = require('../Util/Constants');


class MillionMorePage {
    //page locators:
    
    get Accept_btn() { return $("//button[@title='Accept']") }
    get Car_link() { return $("//em[.='Cars']") }
    get Volvo_link() { return $("//a[contains(@data-autoid,'nav:siteNavLogoMain')]") }
    get Ideas_MainHeader() { return $("//h1[contains(text(),'Ideas that')]") }
    get SafetyBelt_Para() { return $("//p[contains(.,'After we introduced the 3-point')]") }
    get SpeedCap_Title() { return $("//em[.='Speed cap']") }
    get HighwayPilot_Title() { return $("//em[contains(.,'Highway pilot')]") }
    get DriverMonitoringCamera_Title() { return $("//em[.='Driver monitoring cameras']") }
    get CareKey_Title() { return $("//em[contains(.,'Care Key')]") }
    

    //page actions:

    clicAcceptbutton(){
        return elementUtil.doClick(this.Accept_btn)
    }
    getPageTitle() {
        return elementUtil.doGetPageTitle(constants.Million_PAGE_TITLE)

    }
    isCarLinkExist() {
        return elementUtil.doIsDisplayed(this.Car_link)
    }

    isVolvoLinkExist() {
        return elementUtil.doIsDisplayed(this.Volvo_link)
    }

    getSpeedCapTitleText() {
        return elementUtil.doGetText(this.SpeedCap_Title)
    }

    getHighwayPilotTitleText() {
        return elementUtil.doGetText(this.HighwayPilot_Title)
    }

    getDriverMonitoringCameraTitleText() {
        return elementUtil.doGetText(this.DriverMonitoringCamera_Title)
    }

    isCarKeyTitleExist() {
        return elementUtil.doIsDisplayed(this.CareKey_Title)
    }
    
}
module.exports = new MillionMorePage()