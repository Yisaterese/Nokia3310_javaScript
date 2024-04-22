const readline = require('readline');

class Nokia_3310 {
  constructor() {
    this.userInput = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });
  }

  startPhone() {
    this.userInput.question('Press 1 to display front screen: ', (num) => {
      if(parseInt(num) === 1){
        this._screenDisplay();
        this.userInput.close();
      } else {
        console.log("Press a valid number.");
        this.startPhone();
      }
    });
  }

  _screenDisplay() {
    console.log("\tWelcome to Nokia_3310");
    var dateTime = "2024-04-20";
    console.log("DATE " + new Date(dateTime));
  }
  
  displayMenu() {
    this.userInput.question("Press 2 to display menu: ", (num) => {
      try {
        if (parseInt(num) === 2) {
          let menu = "\tMENU\n1. Phone book\n2. Messages\n3. Chat\n4. Call Register\n5. Tones\n6. Settings\n7. Call Divert\n8. Games\n9. Calculator\n10. Reminder\n11. Clock\n12. Profiles\n13. Sim Services";
          console.log(menu);
          this.menuOptions();
        } else {
          throw new Error("Enter a valid number.");
        }
      } catch (error) {
        console.error(error.message);
        this.displayMenu();
      }
    });
  }

  menuOptions() {
    this.userInput.question("Select option between 1 - 13 on the menu: ", (number) => {
      if (parseInt(number) >= 1 && parseInt(number) <= 13) {
        switch (parseInt(number)) {
          case 1:
            this.displayPhoneBookOptions();
            this.phoneBookOptions();
            break;
          case 2:
            this.displayMessageOptions();
            break;
          case 3:
            this.chat();
            break;
    
          default:
            console.log("Enter a valid option.");
            this.menuOptions();
            break;
        }
      } else {
        console.log("Enter a valid option.");
        this.menuOptions();
      }
    });
  }

  displayPhoneBookOptions() {
    console.log(`\tPHONEBOOK
    1. Search
    2. Services
    3. Add name
    4. Erase
    5. Edit
    6. Assign tone
    7. Send b'card
    8. Options
    9. Speed dials
    10. Voice tags`);
  }

  phoneBookOptions() {
    this.userInput.question("Select option in phonebook: ", (number) => {
      if (parseInt(number) >= 1 && parseInt(number) <= 10) {
        switch (parseInt(number)) {
          case 1:
            console.log("Search");
            break;
          case 2:
            console.log("Service Nos");
            break;
          case 3:
            console.log("Add name")
            break 
          case 4:
            console.log("Erase")
            break
          case 5:
            console.log("Edit")
            break 
          case 6:
            console.log("Assign tone")   
            break
          case 7:
            console.log("Send b'card") 
            break
          case 8:
            console.log("Options")
                  

          default:
            console.log("Enter a valid option.");
            break;
        }
      } else {
        console.log("Enter a valid option.");
        this.phoneBookOptions();
      }
    });
  }

  displayMessageOptions() {
    console.log(`\tMESSAGES
    1. Write message
    2. Inbox
    3. Outbox
    4. Picure messages
    5. Templates
    6. Smileys
    7. Message settings
    8. Info services
    9. Voice mailbox number
    10. Service command editor`);
    this.messageOptions();
  }

  messageOptions() {
    this.userInput.question("Enter between 1 and 10 to select options in message: ", (option) => {
      if (parseInt(option) >= 1 && parseInt(option) <= 10) {
        switch (parseInt(option)) {
          case 1:
            console.log("Write message");
            break;
          case 2:
            console.log("Inbox");
            break;
        
          default:
            console.log("Enter a valid option.");
            this.messageOptions();
            break;
        }
      } else {
        console.log("Enter a valid option.");
        this.messageOptions();
      }
    });
  }

  chat() {
    console.log("Chat");
  }
}

myNokia = new Nokia_3310();
myNokia.displayMenu();

module.exports = Nokia_3310;
