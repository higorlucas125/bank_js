const mapResut = new Map();

const executProject = (inputData) => {
  inputData.forEach((element) => {
    switch (element.type) {
      case "CREATE_ACCOUNT":
        createAccount(element);
        break;
      case "DEPOSIT":
        createDepoist(element);
        break;
      case "WITHDRAW":
        createWithdraw(element);
        break;
      default:
        console.log("Don't exist type account");
    }
  });

  return mapResut;
};

const createAccount = (bank) => {
  if (validateExistBank(bank)) {
    mapResut.set(bank.document, bank);
  }

  returnMapAccount(bank);
};

const createDepoist = (bank) => {
  let olderBank = returnMapAccount(bank);
  if (!!olderBank) {
    olderBank.amount = bank.amount + olderBank.amount;
    mapResut.set(olderBank.document, olderBank);
  }

  console.log("Don't deposit this account, beacouse not exist");
};

const createWithdraw = (bank) => {
  let olderBank = returnMapAccount(bank);
  if (!!olderBank) {
    olderBank.amount =  olderBank.amount - bank.amount;
    mapResut.set(olderBank.document, olderBank);
  }

  console.log("Don't deposit this account, beacouse not exist");
};

const returnMapAccount = (bank) => {
  if (!!bank && !!bank.document) {
    return mapResut.get(bank.document);
  }
};

const validateExistBank = (bank) => {
  let existThisBank = returnMapAccount(bank);
  return (
    !!bank && !!bank.document && !!bank.amount && !!bank.type && !existThisBank
  );
};


module.exports = executProject;
