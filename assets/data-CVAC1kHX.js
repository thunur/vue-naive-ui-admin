const e=[{field:"account",component:"NSelect",label:"付款账户",defaultValue:"1",componentProps:{options:[{label:"aso.design@example.com",value:"1"}]},rules:[{required:!0}]},{component:"NInputGroup",field:"fac",label:"收款账户",childrens:[{field:"pay",component:"NSelect",defaultValue:"zfb",componentProps:{style:"width:30%",clearable:!1,options:[{label:"支付宝",value:"zfb"},{label:"微信",value:"wechat"}]}},{field:"fac",component:"NInput",defaultValue:"test@example.com",componentProps:{style:"width:70%"}}],rules:[{required:!0}]},{field:"payeeName",component:"NInput",label:"收款人姓名",defaultValue:"aso.design",rules:[{required:!0}]},{field:"money",component:"NInput",label:"转账金额",defaultValue:"500",slot:"money",rules:[{required:!0,message:"请输入转账金额"}]}],l=[{field:"pwd",component:"NInput",label:"支付密码",defaultValue:"123456",componentProps:{type:"password","show-password-on":"mousedown"},rules:[{required:!0,message:"请输入密码"}]}];export{l as a,e as s};
