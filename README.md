# healthcare-blockchain
 Smart agriculture using IOT Tool- NodeRed
— In olden Days Farmers used to figure the ripeness of soil and influenced
suspicions to develop which to kind of yield. They didn't think about the humidity, level of
water and especially climate condition which terrible a farmer increasingly The Internet of
things (IOT) is remodeling the agribusiness empowering the agriculturists through the
extensive range of strategies, for example, accuracy as well as practical farming to deal with
challenges in the field. IOT utilize farmers to get related with his residence from wherever
and at whatever point


Proposed Solution:
To improve the efficiency of the product there by supporting both rancher and country we
need to utilize the innovation which appraises the nature of harvest and giving
recommendations. The Internet of things (IOT) is revamping the agribusiness engaging the
farmers by the broad assortment of techniques, for instance, accuracy and conservative
cultivation to go up against challenges in the field. In this project, on a farm, management
can monitor different environmental parameters effectively using sensor devices such as
temperature sensor, relative humidity sensor and soil moisture sensor. Periodically (30
seconds) the sensors are collecting information of agriculture field area and are being logged
and stored online using cloud computing and Internet of Things. By using wireless
transmission, the sensed data forwarded towards to web server database. If irrigation is
automated, then that means if the moisture and temperature fields fall below of the potential
range. The user can monitor and control the system remotely with the help of application
which provides a web interface to the user.







Software Designing:
a. Watson IoT Platform
Two devices have been created in Watson IoT Platform. One for sending command to the User
and another to receive the data from an IoT simulator (Temperature, humidity & soil moisture)
and Open Weather API (recent weather information of the farm). Device is connected to the IoT
Simulator to get the simulator data.

b. Node Red
Node-RED is a programming tool for wiring together hardware devices, APIs and online services
in new and interesting ways. It provides a browser-based editor that makes it easy to wire together
flows using the wide range of nodes in the palette that can be deployed to its runtime in a singleclick. Device is connected to
Node red is installed on the PC and required nodes is installed in the node red to configure the
device to display the received data from simulator and open weather api to user interface
dashboard.

c. Web App
A web application is created which displays the temperature, humidity, and soil moisture data of
past one hour that is received by the device from the IoT simulator. It also displays live weather
parameters of the farm using open weather api.
There are set of buttons on the web application that can be used to control the motor and light on
the farm to turn them ON/OFF remotely.
A python code is written to track down the commands (like turning motor and light ON/OFF) that
are being sent by the user through web application.




By implementing the latest sensing and IoT technologies in agriculture practices,
every aspect of traditional farming methods can be fundamentally changed.
Currently, seamless integration of wireless sensors and the IoT in smart agriculture
can raise agriculture to levels which were previously unimaginable. By following
the practices of smart agriculture, IoT can help to improve the solutions of many
traditional farming issues, like drought response, yield optimization, land
suitability, irrigation, and pest control. Figure 9 lists a hierarchy of major
applications, services and wireless sensors being used for smart agriculture
applications.
Open weather api link:
api.openweathermap.org/data/2.5/weather?q=Samastipur,IN&appid=b8a325a0016e0
76761f7088f63eb1c5c

Screenshots:

![image](https://github.com/aparnasahu5/healthcare-blockchain/assets/95071662/4fb51d18-52bc-47c5-88a8-c7eff0db356e)

![image](https://github.com/aparnasahu5/healthcare-blockchain/assets/95071662/a0807867-beb1-4349-9a49-060306d5e817)

![image](https://github.com/aparnasahu5/healthcare-blockchain/assets/95071662/0a8ac47e-5bed-414d-9dc5-b20f6c44f610)

![image](https://github.com/aparnasahu5/healthcare-blockchain/assets/95071662/8dd2eb8a-3dcc-4e65-a78d-c92f688cdff0)

![image](https://github.com/aparnasahu5/healthcare-blockchain/assets/95071662/9df3ddc8-0041-4b8a-a7f0-a0c70f528311)

![image](https://github.com/aparnasahu5/healthcare-blockchain/assets/95071662/9dc51342-1fbe-4602-ae41-00c33ab21bdf)


Web App:

![image](https://github.com/aparnasahu5/healthcare-blockchain/assets/95071662/cde91184-40e3-42e5-bab8-327adda0acac)

![image](https://github.com/aparnasahu5/healthcare-blockchain/assets/95071662/f9d59ad1-6497-461f-8f2b-1be85e140300)

![image](https://github.com/aparnasahu5/healthcare-blockchain/assets/95071662/6afe6d21-7295-4692-951b-eca55a9a2876)

![image](https://github.com/aparnasahu5/healthcare-blockchain/assets/95071662/c34f1d38-477d-4d41-a4e4-342749ed7ecf)

![image](https://github.com/aparnasahu5/healthcare-blockchain/assets/95071662/76eb8c89-9c36-4fdd-8ea2-c0ce4b3faa2e)

![image](https://github.com/aparnasahu5/healthcare-blockchain/assets/95071662/52fc05a6-ee5b-44b1-b313-adf51c62aeaf)

![image](https://github.com/aparnasahu5/healthcare-blockchain/assets/95071662/c21c97a9-42a5-43a1-911f-e8aaa23345dd)

![image](https://github.com/aparnasahu5/healthcare-blockchain/assets/95071662/985bd9e5-a571-43d0-97f8-ef0a6f055c9c)

