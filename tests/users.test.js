const {getAllChats} = require('../controller/users')

describe('getAllChats', ()=>{
    test('check if getAllChats request for specific user is working ', ()=>{

        const res = getAllChats();
        console.log(res)
        expect((typeof res).toBe('array'))

    })
});