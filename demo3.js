<?xml version="1.0" encoding="UTF-8"?><Component componentId="6942e96c-3448-4882-a22c-6ef61a531b18" createdBy="hardik.shah@icruxsystem.com" createdDate="2023-03-30T07:32:38Z" currentVersion="true" deleted="false" folderFullPath="Go - ICRUXSYSTEM INC/DIVDUB PRA/Github" folderId="Rjo1NzI1MDgz" folderName="Github" modifiedBy="hardik.shah@icruxsystem.com" modifiedDate="2023-04-03T11:58:51Z" name="Github demo" type="process" version="17" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:type="bns:Component" xmlns="http://api.platform.boomi.com/"><bns:encryptedValues xmlns:bns="http://api.platform.boomi.com/"/><bns:description xmlns:bns="http://api.platform.boomi.com/"/><bns:object xmlns:bns="http://api.platform.boomi.com/"><process allowSimultaneous="false" enableUserLog="false" processLogOnErrorOnly="false" purgeDataImmediately="false" updateRunDates="true" workload="general" xmlns=""><shapes><shape image="start" name="shape1" shapetype="start" userlabel="" x="16.0" y="128.0"><configuration><noaction/></configuration><dragpoints><dragpoint name="shape1.dragpoint1" toShape="shape8" x="160.0" y="136.0"/></dragpoints></shape><shape image="message_icon" name="shape2" shapetype="message" userlabel="" x="16.0" y="224.0"><configuration><message combined="false"><msgTxt>'{
"Request URL": "https://platform.boomi.com",
"Request method": "POST",
"Accept": "*/*",
"content-type": "application/json",
"User-Agent: GitHub"-"Hookshot/1b49b7c",
"X-GitHub-Delivery": "be684770-cf03-11ed-8b72-1eca55167e10",
"X-GitHub-Event": "ping",
"X-GitHub-Hook-ID": "407555571",
"X-GitHub-Hook-Installation"-"Target-ID: 621195864",
"X-GitHub-Hook-Installation"-"Target-Type: repository"
}'</msgTxt><msgParameters/></message></configuration><dragpoints><dragpoint name="shape2.dragpoint1" toShape="unset" x="52.0" y="233.0"/></dragpoints></shape><shape image="stop_icon" name="shape3" shapetype="stop" x="352.0" y="304.0"><configuration><stop continue="true"/></configuration><dragpoints/></shape><shape image="connectoraction_icon" name="shape4" shapetype="connectoraction" userlabel="" x="352.0" y="176.0"><configuration><connectoraction actionType="POST" allowDynamicCredentials="NONE" connectionId="dae2cd3c-0079-4fec-9e7b-1ae49aaa03bb" connectorType="officialboomi-X3979C-github-prod" hideSettings="false" operationId="5f20e892-64a2-4b48-a9e9-f492185dbea9"><parameters/><dynamicProperties/></connectoraction></configuration><dragpoints><dragpoint name="shape4.dragpoint1" toShape="unset" x="399.0" y="186.0"/></dragpoints></shape><shape image="connectoraction_icon" name="shape6" shapetype="connectoraction" userlabel="" x="160.0" y="272.0"><configuration><connectoraction actionType="Send" allowDynamicCredentials="NONE" connectionId="7ba71c5d-bd6f-45cc-819b-e0a3ede29251" connectorType="http" hideSettings="false" operationId="bf9cf5e4-047f-47af-b152-f04bf385a367" parameter-profile="EMBEDDED|HttpParameterChooser|bf9cf5e4-047f-47af-b152-f04bf385a367"><parameters/><dynamicProperties/></connectoraction></configuration><dragpoints><dragpoint name="shape6.dragpoint1" toShape="shape3" x="336.0" y="312.0"/></dragpoints></shape><shape image="notify_icon" name="shape7" shapetype="notify" userlabel="" x="32.0" y="336.0"><configuration><notify disableEvent="true" enableUserLog="false" perExecution="false" title=""><notifyMessage>{1}</notifyMessage><notifyMessageLevel>INFO</notifyMessageLevel><notifyParameters><parametervalue key="0" valueType="profile"><profileelement elementId="3" elementName="text (Root/Object/text)" profileId="a220a13e-ecb1-4ef7-a83f-2f3c8c63e5d2" profileType="profile.json"/></parametervalue></notifyParameters></notify></configuration><dragpoints><dragpoint name="shape7.dragpoint1" toShape="unset" x="96.0" y="346.0"/></dragpoints></shape><shape image="message_icon" name="shape8" shapetype="message" userlabel="" x="176.0" y="128.0"><configuration><message combined="false"><msgTxt>'{
"message":"Sample Commit",
"content":"Demo"
}'</msgTxt><msgParameters/></message></configuration><dragpoints><dragpoint name="shape8.dragpoint1" toShape="shape6" x="144.0" y="280.0"/></dragpoints></shape></shapes></process></bns:object><bns:processOverrides xmlns:bns="http://api.platform.boomi.com/"/></Component>