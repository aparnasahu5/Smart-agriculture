[{"id":"e0c4cafb.80e828","type":"tab","label":"Open
Weather","disabled":false,"info":""},{"id":"e8c189ab.1af4b8","type":"inject","z":"e0
c4cafb.80e828","name":"","topic":"","payload":"1","payloadType":"num","repeat":"
60","crontab":"","once":true,"onceDelay":0.1,"x":630,"y":500,"wires":[["9a8bdeec.4
5db5"]]},{"id":"7ba1364.b2b5dc8","type":"ui_gauge","z":"e0c4cafb.80e828","name
":"","group":"787e4a0d.66efb4","order":2,"width":6,"height":3,"gtype":"gage","title
":"Temperature","label":"°C","format":"{{value}}","min":"-
5","max":"50","colors":["#0080ff","#008040","#ca3838"],"seg1":"5","seg2":"25","x
":1210,"y":440,"wires":[]},{"id":"1defb102.9e74af","type":"function","z":"e0c4cafb.
80e828","name":"Temp in c","func":"var msg = { payload:msg.payload.tempc
};\nreturn
msg","outputs":1,"noerr":0,"x":1000,"y":440,"wires":[["7ba1364.b2b5dc8"]],"output
Labels":["Temp Max"]},{"id":"8abd4c1c.28033","type":"http
request","z":"e0c4cafb.80e828","name":"weather","method":"GET","ret":"obj","payt
oqs":false,"url":"api.openweathermap.org/data/2.5/weather?q=Samastipur,IN&appid
=b8a325a0016e076761f7088f63eb1c5c","tls":"","persist":false,"proxy":"","authType
":"","x":840,"y":240,"wires":[["18c02920.0c7ee7","7e610573.f6024c","5012b97a.1e
1fa8","9eb0dd61.e83ba"]]},{"id":"18c02920.0c7ee7","type":"debug","z":"e0c4cafb.
80e828","name":"","active":false,"tosidebar":true,"console":false,"tostatus":false,"co
mplete":"false","x":1090,"y":240,"wires":[]},{"id":"7e8499da.74e728","type":"inject
","z":"e0c4cafb.80e828","name":"","topic":"","payload":"","payloadType":"date","re
peat":"60","crontab":"","once":true,"onceDelay":0.1,"x":600,"y":240,"wires":[["8abd
4c1c.28033"]]},{"id":"551f8467.60efac","type":"ui_gauge","z":"e0c4cafb.80e828","
name":"","group":"40b0008e.a464b","order":1,"width":6,"height":3,"gtype":"donut",
"title":"Humidity","label":"%","format":"{{value}}","min":0,"max":"100","colors":[
"#00b500","#e6e600","#ca3838"],"seg1":"","seg2":"","x":1170,"y":100,"wires":[]},{
"id":"92c4d373.2cf15","type":"ui_gauge","z":"e0c4cafb.80e828","name":"","group":
"203d5632.c5c42a","order":1,"width":6,"height":3,"gtype":"compass","title":"Wind
Speed","label":"meter/sec","format":"{{value}}","min":0,"max":10,"colors":["#00b5
00","#e6e600","#ca3838"],"seg1":"","seg2":"","x":1180,"y":360,"wires":[]},{"id":"7
e610573.f6024c","type":"function","z":"e0c4cafb.80e828","name":"Wind
Speed","func":"msg.payload=msg.payload.wind.speed\nreturn
msg;","outputs":1,"noerr":0,"x":970,"y":340,"wires":[["92c4d373.2cf15"]]},{"id":"5
012b97a.1e1fa8","type":"function","z":"e0c4cafb.80e828","name":"Humidity","func
":"msg.payload=msg.payload.main.humidity\nreturn
msg;","outputs":1,"noerr":0,"x":970,"y":80,"wires":[["551f8467.60efac"]]},{"id":"9e
b0dd61.e83ba","type":"function","z":"e0c4cafb.80e828","name":"Pressure","func":"
msg.payload=msg.payload.main.pressure\nreturn
msg;","outputs":1,"noerr":0,"x":1010,"y":180,"wires":[["dee32c20.a37b6"]]},{"id":"
dee32c20.a37b6","type":"ui_gauge","z":"e0c4cafb.80e828","name":"","group":"63e
6ba07.73d324","order":1,"width":6,"height":3,"gtype":"wave","title":"Pressure","lab
el":"
mb","format":"{{value}}","min":"900","max":"1500","colors":["#00b500","#e6e600
","#ca3838"],"seg1":"","seg2":"","x":1190,"y":180,"wires":[]},{"id":"9a8bdeec.45db
5","type":"openweathermap","z":"e0c4cafb.80e828","name":"","wtype":"current","l
on":"","lat":"","city":"SAMASTIPUR","country":"India","language":"en","x":810,"y
":500,"wires":[["1defb102.9e74af","66aba45c.f4f79c","84c5fa25.6ec828"]]},{"id":"
66aba45c.f4f79c","type":"debug","z":"e0c4cafb.80e828","name":"","active":true,"to
sidebar":true,"console":false,"tostatus":false,"complete":"false","x":910,"y":700,"wir
es":[]},{"id":"e3d71aad.878d88","type":"ui_text","z":"e0c4cafb.80e828","group":"5
c82ad29.88f2c4","order":2,"width":5,"height":1,"name":"","label":"Cloud","format":
"{{msg.payload}}","layout":"rowspread","x":1230,"y":480,"wires":[]},{"id":"84c5fa25.6ec828","type":"function","z":
"e0c4cafb.80e828","name":"Weather","func":"var msg1 = {
payload:msg.payload.detail };\nvar msg2 = { payload:msg.payload.tempk };\nvar
msg3 = { payload:msg.payload.tempc };\nvar msg4 = {
payload:msg.payload.humidity };\nvar msg5 = { payload:msg.payload.pressure
};\nvar msg6 = { payload:msg.payload.windspeed };\nvar msg7 = {
payload:msg.payload.winddirection };\nvar msg8 = { payload:msg.payload.location
};\nvar msg9 = { payload:msg.payload.description };\nreturn
[msg1,msg2,msg3,msg4,msg5,msg6,msg7,msg8,msg9];","outputs":9,"noerr":0,"x":1
000,"y":540,"wires":[["e3d71aad.878d88"],["52980bcd.20e7f4"],["5ddd8c91.e57694
"],["abff2149.c9442"],["ca7fdaba.7663a8"],["711be110.17e71"],["8c576c6e.d9bd7"]
,["dd90ec41.daae5"],["f358c086.497c4"]]},{"id":"52980bcd.20e7f4","type":"ui_text
","z":"e0c4cafb.80e828","group":"5c82ad29.88f2c4","order":3,"width":5,"height":1,
"name":"","label":"Temp (in K)","format":"{{msg.payload}}","layout":"rowspread","x":1390,"y":480,"wires":[]},{"id":"5ddd8c91.e57694","type":"ui_text","z":
"e0c4cafb.80e828","group":"5c82ad29.88f2c4","order":4,"width":5,"height":1,"nam
e":"","label":"Temp (in C)","format":"{{msg.payload}}","layout":"rowspread","x":1370,"y":520,"wires":[]},{"id":"abff2149.c9442","type":"ui_text","z":"e
0c4cafb.80e828","group":"5c82ad29.88f2c4","order":5,"width":5,"height":1,"name":
"","label":"Humidity","format":"{{msg.payload}}","layout":"rowspread","x":1160,"y":520,"wires":[]},{"id":"ca7fdaba.7663a8","type":"ui_text","z":"
e0c4cafb.80e828","group":"5c82ad29.88f2c4","order":6,"width":5,"height":1,"name
":"","label":"Pressure","format":"{{msg.payload}}","layout":"rowspread","x":1360,"y":560,"wires":[]},{"id":"711be110.17e71","type":"ui_text","z":"
e0c4cafb.80e828","group":"5c82ad29.88f2c4","order":7,"width":5,"height":1,"name
":"","label":"Wind Speed","format":"{{msg.payload}}","layout":"rowspread","x":1190,"y":560,"wires":[]},{"id":"8c576c6e.d9bd7","type":"ui_text","z":"e
0c4cafb.80e828","group":"5c82ad29.88f2c4","order":8,"width":5,"height":1,"name":
"","label":"Wind Direction","format":"{{msg.payload}}","layout":"rowspread","x":1320,"y":600,"wires":[]},{"id":"dd90ec41.daae5","type":"ui_text","z":"e
0c4cafb.80e828","group":"5c82ad29.88f2c4","order":1,"width":5,"height":1,"name":
"","label":"Location","format":"{{msg.payload}}","layout":"rowspread","x":1160,"y":620,"wires":[]},{"id":"f358c086.497c4","type":"ui_text","z":"e
0c4cafb.80e828","group":"f51a0ba5.1fe6f8","order":1,"width":0,"height":0,"name":"
","label":"","format":"{{msg.payload}}","layout":"rowspread","x":1330,"y":640,"wires":[]},{"id":"787e4a0d.66efb4","type":"ui_group","z"
:"","name":"Temperature","tab":"5ea6f63b.9bd0f8","order":1,"disp":true,"width":6,"
collapse":false},{"id":"40b0008e.a464b","type":"ui_group","z":"","name":"Humidit
y","tab":"5ea6f63b.9bd0f8","order":2,"disp":true,"width":6,"collapse":false},{"id":"
203d5632.c5c42a","type":"ui_group","z":"","name":"Wind
Speed","tab":"5ea6f63b.9bd0f8","order":3,"disp":true,"width":6,"collapse":false},{"i
d":"63e6ba07.73d324","type":"ui_group","z":"","name":"Pressure","tab":"5ea6f63b.
9bd0f8","order":4,"disp":true,"width":6,"collapse":false},{"id":"5c82ad29.88f2c4","t
ype":"ui_group","z":"","name":"Details","tab":"5ea6f63b.9bd0f8","order":6,"disp":tr
ue,"width":"5","collapse":false},{"id":"f51a0ba5.1fe6f8","type":"ui_group","z":"","n
ame":"Description","tab":"5ea6f63b.9bd0f8","order":7,"disp":true,"width":12,"colla
pse":false},{"id":"5ea6f63b.9bd0f8","type":"ui_tab","z":"","name":"Open Weather
Data","icon":"fa-tachometer","order":4,"disabled":false,"hidden":false}]
