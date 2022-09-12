import { describe,expect,it } from 'vitest'
import { VerifyIfObjHasKeys } from './object.mjs'

const TestTable=[
    {obj:{foo:"monkey"},keys:["monkey"],expected:false},
    {obj:{monkey:""},keys:["ue"],expected:false},
    {obj:{monkey:""},keys:["ue","fmaksfjalskf","fkajsfkjaskfja"],expected:false},
    {obj:{foo:"alguma coisa",bar:"Jonh Doe"},keys:[],expected:false},
    {obj:{foo:"alguma coisa",bar:"Jonh Doe"},keys:["should fail"],expected:false},
    {obj:{foo:"alguma coisa",bar:"Jonh Doe"},keys:["should fail","shoukajsfkajsf"],expected:false},
    {obj:{foo:"alguma coisa",bar:"Jonh Doe"},keys:["should fail","shoukajsfkajsf","fjaksjfaksjf"],expected:false},
    {obj:{foo:"alguma coisa",bar:"Jonh Doe"},keys:["foo","bar"],expected:true},
    {obj:{},keys:["foo","bar"],expected:false},
    {obj:{},keys:[],expected:false},
    {obj:null,keys:["foo","bar"],expected:false},
    {obj:{foo:"ue"},keys:null,expected:false},
    {obj:12,keys:23,expected:false},
]

describe.each(TestTable)("Should Test Func VerifyIfObjHasKeys %j",({obj,keys,expected})=>{
    it("",()=>{
        expect(VerifyIfObjHasKeys(obj,keys)).toBe(expected) 
    })
    
})

