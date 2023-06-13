const index = require('./index');

const inputData1 = [
    { type: "CREATE_ACCOUNT", document: "1", amount: 300 },
    { type: "CREATE_ACCOUNT", document: "2", amount: 300 },
    { type: "CREATE_ACCOUNT", document: "2", amount: 300 },
    { type: "DEPOSIT", document: "2", amount: 200 },
    { type: "WITHDRAW", document: "1", amount: 100 },
  ];
  
const inputData2 = [
    { type: "CREATE_ACCOUNT", document: "1", amount: 300 },
    { type: "CREATE_ACCOUNT", document: "2", amount: 300 },
    { type: "CREATE_ACCOUNT", document: "2", amount: 300 },
    { type: "DEPOSIT", document: "2", amount: 200 },
    { type: "WITHDRAW", document: "1", amount: 100 },
  ];
  
describe('Switch Testing',()=>{
    test('check if the first account has 200 amount and second 500',() => {
        let result = index(inputData1);
        expect(result.get("1").amount).toBe(200)
        expect(result.get("2").amount).toBe(500)
    
    })

    test('check if the first account has 100 amount and second 700',() => {
        let result = index(inputData2);
        expect(result.get("1").amount).toBe(100)
        expect(result.get("2").amount).toBe(700)
    })
})

