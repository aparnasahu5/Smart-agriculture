[{"id":"dadc2d89.a365f","type":"tab","label":"Button","disabled":false,"info":""},{"i
d":"d18c3c36.1928e","type":"ibmiot
out","z":"dadc2d89.a365f","authentication":"apiKey","apiKey":"d0aff632.bd4ba8","
outputType":"cmd","deviceId":"Device_2","deviceType":"Agriculture_1","eventCo
mmandType":"command","format":"json","data":"data","qos":0,"name":"Send
Device
Command","service":"registered","x":450,"y":240,"wires":[]},{"id":"930dc039.5ec5
a","type":"ui_button","z":"dadc2d89.a365f","name":"Motor
On","group":"95805140.519ec","order":1,"width":3,"height":3,"passthru":false,"labe
l":"Motor
ON","tooltip":"","color":"","bgcolor":"green","icon":"","payload":"{\"command\":\"
motoron\"}","payloadType":"json","topic":"","x":190,"y":200,"wires":[["d18c3c36.1
928e","a17b48e0.e0dd58","30c795ab.dd7d5a","74d62360.ebabdc"]]},{"id":"4237cc
02.29eb04","type":"ui_button","z":"dadc2d89.a365f","name":"","group":"95805140.
519ec","order":2,"width":3,"height":3,"passthru":false,"label":"Motor
Off","tooltip":"","color":"","bgcolor":"red","icon":"","payload":"{\"command\":\"mo
toroff\"}","payloadType":"json","topic":"","x":200,"y":300,"wires":[["d18c3c36.192
8e","a17b48e0.e0dd58","8e234f0c.e9a7","74d62360.ebabdc"]]},{"id":"a17b48e0.e0
dd58","type":"debug","z":"dadc2d89.a365f","name":"","active":true,"tosidebar":true,
"console":false,"tostatus":false,"complete":"false","x":440,"y":340,"wires":[]},{"id":
"64c6f68f.a06f08","type":"ibmiot
out","z":"dadc2d89.a365f","authentication":"apiKey","apiKey":"d0aff632.bd4ba8","
outputType":"cmd","deviceId":"Device_2","deviceType":"Agriculture_1","eventCo
mmandType":"command","format":"json","data":"data","qos":0,"name":"Send
Device
Command","service":"registered","x":430,"y":480,"wires":[]},{"id":"b40c887b.2fdd
c8","type":"ui_button","z":"dadc2d89.a365f","name":"Light
On","group":"96425cfd.aac64","order":1,"width":3,"height":3,"passthru":false,"label
":"Light
ON","tooltip":"","color":"","bgcolor":"green","icon":"","payload":"{\"command\":\"l
ighton\"}","payloadType":"json","topic":"","x":170,"y":440,"wires":[["64c6f68f.a06
f08","50d14c8f.e441e4","f82903ec.4693d","1e7fe298.02204d"]]},{"id":"a34746e7.7
75968","type":"ui_button","z":"dadc2d89.a365f","name":"","group":"96425cfd.aac6
4","order":2,"width":3,"height":3,"passthru":false,"label":"Light
Off","tooltip":"","color":"","bgcolor":"red","icon":"","payload":"{\"command\":\"lig
htoff\"}","payloadType":"json","topic":"","x":180,"y":540,"wires":[["64c6f68f.a06f0
8","50d14c8f.e441e4","fd23dcd9.b4f7f","1e7fe298.02204d"]]},{"id":"50d14c8f.e44
1e4","type":"debug","z":"dadc2d89.a365f","name":"","active":true,"tosidebar":true,"
console":false,"tostatus":false,"complete":"false","x":420,"y":580,"wires":[]},{"id":"
30c795ab.dd7d5a","type":"ui_toast","z":"dadc2d89.a365f","position":"top
right","displayTime":"3","highlight":"green","sendall":true,"outputs":0,"ok":"OK","c
ancel":"","raw":true,"topic":"Motor ON command sent","name":"Motor
On","x":200,"y":160,"wires":[]},{"id":"8e234f0c.e9a7","type":"ui_toast","z":"dadc2
d89.a365f","position":"top
right","displayTime":"3","highlight":"red","sendall":true,"outputs":0,"ok":"OK","can
cel":"","raw":true,"topic":"Motor OFF command sent","name":"Motor
Off","x":200,"y":340,"wires":[]},{"id":"f82903ec.4693d","type":"ui_toast","z":"dadc
2d89.a365f","position":"top
right","displayTime":"3","highlight":"green","sendall":true,"outputs":0,"ok":"OK","c
ancel":"","raw":true,"topic":"Light ON command sent","name":"Light
On","x":160,"y":400,"wires":[]},{"id":"fd23dcd9.b4f7f","type":"ui_toast","z":"dadc
2d89.a365f","position":"top
right","displayTime":"3","highlight":"red","sendall":true,"outputs":0,"ok":"OK","can
cel":"","raw":true,"topic":"Light OFF command sent","name":"Light
off","x":180,"y":580,"wires":[]},{"id":"74d62360.ebabdc","type":"ui_text","z":"dadc
2d89.a365f","group":"95805140.519ec","order":3,"width":0,"height":0,"name":"Mot
or","label":"","format":"{{msg.payload}}","layout":"rowleft","x":570,"y":100,"wires":[]},{"id":"1e7fe298.02204d","type":"ui_text","z":"dad
c2d89.a365f","group":"96425cfd.aac64","order":3,"width":0,"height":0,"name":"Lig
ht","label":"","format":"{{msg.payload}}","layout":"rowleft","x":650,"y":440,"wires":[]},{"id":"d0aff632.bd4ba8","type":"ibmiot","z":"","na
me":"Device_2","keepalive":"60","serverName":"0lsrz8.messaging.internetofthings.i
bmcloud.com","cleansession":true,"appId":"","shared":false},{"id":"95805140.519ec
","type":"ui_group","z":"","name":"Motor","tab":"5ef95238.4eb5bc","order":2,"disp
":true,"width":"6","collapse":false},{"id":"96425cfd.aac64","type":"ui_group","z":""
,"name":"Light","tab":"5ef95238.4eb5bc","order":2,"disp":true,"width":"6","collapse
":false},{"id":"5ef95238.4eb5bc","type":"ui_tab","z":"","name":"Button","icon":"mi
-videogame_asset","order":5,"disabled":false,"hidden":false}]