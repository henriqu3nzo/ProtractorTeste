let loginPage = function(){
    
    let username = element(by.css('input[id="login-username"]'));
    let password = element(by.css('input[id="login-password"]'));
    let entrarButton = element(by.css('button'));

    this.get = function(url){
        browser.get(url);
    }

    this.enterUserName = function(user){
        username.sendKeys(user);
    };

    this.enterPassword = function(pass){
        password.sendKeys(pass);
    };

    this.clickGo = function(){
        entrarButton.click();
    };


};

module.exports = new loginPage();