const loginPage = require("../pages/loginPage");

describe('Teste de login do sistema Energia', function () {

    it('Usuario incorreto', function () {
        browser.waitForAngularEnabled(false);
        loginPage.get('https://energy-flex.netlify.app/');

        loginPage.enterUserName('flexx');
        loginPage.enterPassword('123456');
        loginPage.clickGo();
        
       // browser.sleep(2000)

    });

    it('Senha incorreta', function () {
        browser.waitForAngularEnabled(false);
        loginPage.get('https://energy-flex.netlify.app/');

        loginPage.enterUserName('flex');
        loginPage.enterPassword('1234568');
        loginPage.clickGo();
        
     //   browser.sleep(2000)

    });

    it('Ambos incorretos', function () {
        browser.waitForAngularEnabled(false);
        loginPage.get('https://energy-flex.netlify.app/');

        loginPage.enterUserName('flexx');
        loginPage.enterPassword('123456866');
        loginPage.clickGo();
        
      //  browser.sleep(2000)

    });

    it('Usuario invalido', function () {
        browser.waitForAngularEnabled(false);
        loginPage.get('https://energy-flex.netlify.app/');

        loginPage.enterUserName('');
        loginPage.enterPassword('123456');
        loginPage.clickGo();
        
      //  browser.sleep(2000)

    });

    it('Senha invalida', function () {
        browser.waitForAngularEnabled(false);
        loginPage.get('https://energy-flex.netlify.app/');

        loginPage.enterUserName('flex');
        loginPage.enterPassword('');
        loginPage.clickGo();
        
    //    browser.sleep(2000)

    });

    it('Ambos Invalidos', function () {
        browser.waitForAngularEnabled(false);
        loginPage.get('https://energy-flex.netlify.app/');

        loginPage.enterUserName('');
        loginPage.enterPassword('');
        loginPage.clickGo();
        
     //   browser.sleep(2000)

    });

    it('Login correto', function () {
        browser.waitForAngularEnabled(false);
        loginPage.get('https://energy-flex.netlify.app/');

        loginPage.enterUserName('flex');
        loginPage.enterPassword('123456');
        loginPage.clickGo();
        
    //    browser.sleep(2000)

    });

   

});