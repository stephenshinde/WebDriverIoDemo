const millionmorePage = require('../Pages/MillionMorePage')
const constants = require('../Util/Constants');

describe('Million more page feature test', function(){
    // Retry all tests in this suite up to 2 times
    this.retries(2)
    
    before(() => {
        browser.url('/intl/v/car-safety/a-million-more');
        browser.maximizeWindow();
        browser.pause(5000);
        millionmorePage.clicAcceptbutton();

    })
    it('verify Million more page title', function(){
       
        const title = millionmorePage.getPageTitle();
        console.log('login page title is :', title);
        assert.equal(constants.Million_PAGE_TITLE, title, 'title is not found');
    })
    
    it('verify page element is available', function(){
    
       assert.equal(true, millionmorePage.isCarLinkExist(), 'Car link is not present on header');
       assert.equal(true, millionmorePage.isVolvoLinkExist(), 'Volvo link is not present on header');
       assert.equal(true, millionmorePage.isCarKeyTitleExist(), 'Car Key title is not present');
       
    })
    it('verify text is present', function(){
        const drivermonitoringcamera = millionmorePage.getDriverMonitoringCameraTitleText();
        const highwayPilot = millionmorePage.getHighwayPilotTitleText();
        const speedcap = millionmorePage.getSpeedCapTitleText();

        assert.equal(constants.Driver_Monitoring_Camera_Text, drivermonitoringcamera, 'Driver Monitoring Camera text is not found');
        assert.equal(constants.Highway_Pilot_Text, highwayPilot, 'Highway Pilot text is not found');
        assert.equal(constants.Speed_Cap_Text, speedcap, 'Speed Cap text is not found');
     })
})