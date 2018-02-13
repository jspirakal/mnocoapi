
const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
let app=express();
const role = [	
    { label: 'User', value: 'user' },
    { label: '  Teacher', value: 'teacher' },
]
const operation=[
    { label: 'Create', value: 'create' },
	{ label: 'Update', value: 'update' },
	{ label: 'Put', value: 'put' },
	{ label: 'Delete', value: 'delete' }
];
const table=[
    { label: 'User', value: 'user'},
    { label: '  Teacher', value: 'teacher'},
];
const colum=[
    {table_id:'user',label:'U_id',value:'id'},
    {table_id:'user',label:'U_username',value:'username'},
    {table_id:'teacher',label:'U_id',value:'id'},
    {table_id:'teacher',label:'U_username',value:'username'}
];
app.use(cors());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:'false'}));
app.get('/role',(req,res)=>{
    res.json(role);
})
app.get('/table',(req,res)=>{
    res.json(table);
})
app.get('/operation',(req,res)=>{
    res.json(operation);
})
app.post('/colum',(req,res)=>{
    console.log(req.body);
    let col=[];
    if(req.body.table.length===0 || req.body.table===''){
        res.status(200).json([]); 
        console.log('empty');           
    } else{
        if(Array.isArray(req.body.table)){

        } else{
            req.body.table=req.body.table.split(',');
        } 
        for (const t of req.body.table) {
            for (const c of colum) {
                if(t===c.table_id){
                    col.push(c);
                }
            }
        }
        console.log(col);
        res.status(200).json(col);
    }
})
let server = app.listen(6300,()=>{
    console.log('Waiting for connecction at localhost:'+server.address().port);
});