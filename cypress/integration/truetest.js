import Login from "../support/pageobject/login";
import Project from "../support/pageobject/project"; 
import Logout from "../support/pageobject/logout";
import Outstock from "../support/pageobject/out.stock";
import Guest from "../support/pageobject/guest";       


describe('', () => {
    const login = new Login();
    const project = new Project();
    const logout = new Logout();
    const outstock = new Outstock();
    const guest = new Guest();


    it('this for real senario', () => {
        login.enterurl();
        login.resgister();
        logout.newlogout();
        login.login();
        project.mainfunction();
        
        
    });

    it('cheak for out of stock', () => {
        login.enterurl();
        login.login();
        outstock.iphone();
        logout.newlogout();

        
    });

    it('check for guest', () => {
        login.enterurl();
        guest.newguest();
        
        
    });
    
        


    
});