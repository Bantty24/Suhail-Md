const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349155737244";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_21_02_06_28_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDk4LFxuICAgICAgICAxNzIsXG4gICAgICAgIDE0MCxcbiAgICAgICAgNCxcbiAgICAgICAgMTQ0LFxuICAgICAgICA3MSxcbiAgICAgICAgNTQsXG4gICAgICAgIDIwNSxcbiAgICAgICAgNDQsXG4gICAgICAgIDEyMCxcbiAgICAgICAgODQsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjQsXG4gICAgICAgIDE3MCxcbiAgICAgICAgNzgsXG4gICAgICAgIDMsXG4gICAgICAgIDEyNixcbiAgICAgICAgOTQsXG4gICAgICAgIDE4LFxuICAgICAgICAyMTEsXG4gICAgICAgIDcsXG4gICAgICAgIDkyLFxuICAgICAgICA0MixcbiAgICAgICAgOTEsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTM5LFxuICAgICAgICAyNTMsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTksXG4gICAgICAgIDY0LFxuICAgICAgICA4NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzOCxcbiAgICAgICAgNTIsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTkzLFxuICAgICAgICAyNDYsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjMwLFxuICAgICAgICAxOSxcbiAgICAgICAgOTUsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTU0LFxuICAgICAgICAxNDEsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjExLFxuICAgICAgICAxMjgsXG4gICAgICAgIDQyLFxuICAgICAgICAyNyxcbiAgICAgICAgOTEsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTgwLFxuICAgICAgICAyNTUsXG4gICAgICAgIDE2LFxuICAgICAgICAzNyxcbiAgICAgICAgMzgsXG4gICAgICAgIDE5NyxcbiAgICAgICAgOTYsXG4gICAgICAgIDM1LFxuICAgICAgICA4MyxcbiAgICAgICAgMTA5LFxuICAgICAgICA0MixcbiAgICAgICAgMTc1LFxuICAgICAgICAzMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTM5LFxuICAgICAgICAyMjIsXG4gICAgICAgIDYzLFxuICAgICAgICAyNDgsXG4gICAgICAgIDE0LFxuICAgICAgICAxOSxcbiAgICAgICAgMTU5LFxuICAgICAgICAyMTAsXG4gICAgICAgIDc0LFxuICAgICAgICAyNTQsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTcsXG4gICAgICAgIDgyLFxuICAgICAgICAyNDgsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTU0LFxuICAgICAgICAzNixcbiAgICAgICAgMjA3LFxuICAgICAgICAxNjksXG4gICAgICAgIDIzNCxcbiAgICAgICAgNTQsXG4gICAgICAgIDMzLFxuICAgICAgICAxNTIsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjQyLFxuICAgICAgICA1NyxcbiAgICAgICAgNSxcbiAgICAgICAgMjA5LFxuICAgICAgICAxNyxcbiAgICAgICAgMTA0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDYzLFxuICAgICAgICAxNTksXG4gICAgICAgIDcsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjEsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjUzLFxuICAgICAgICAyMTksXG4gICAgICAgIDE1NixcbiAgICAgICAgMTIzLFxuICAgICAgICA0MCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMzUsXG4gICAgICAgIDg1LFxuICAgICAgICAxMzgsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTQ0LFxuICAgICAgICA3MSxcbiAgICAgICAgMTU4LFxuICAgICAgICA1MyxcbiAgICAgICAgMTg4LFxuICAgICAgICA2MSxcbiAgICAgICAgMjQxLFxuICAgICAgICAyLFxuICAgICAgICAyNDEsXG4gICAgICAgIDY0LFxuICAgICAgICA4MSxcbiAgICAgICAgMTg3LFxuICAgICAgICA2MixcbiAgICAgICAgMjI0LFxuICAgICAgICAxNzYsXG4gICAgICAgIDQwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4LFxuICAgICAgICA1NyxcbiAgICAgICAgMTIyLFxuICAgICAgICAxNjgsXG4gICAgICAgIDExLFxuICAgICAgICAxNTIsXG4gICAgICAgIDMyLFxuICAgICAgICAxNjAsXG4gICAgICAgIDk0LFxuICAgICAgICAxODcsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTAyLFxuICAgICAgICA5NixcbiAgICAgICAgMjUyLFxuICAgICAgICAyNDgsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjM2LFxuICAgICAgICA1OCxcbiAgICAgICAgMSxcbiAgICAgICAgMjUzLFxuICAgICAgICA0LFxuICAgICAgICAxOTAsXG4gICAgICAgIDUxLFxuICAgICAgICAyMjYsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTYwLFxuICAgICAgICAxMyxcbiAgICAgICAgMjM0LFxuICAgICAgICAxMDAsXG4gICAgICAgIDkzLFxuICAgICAgICAyMjYsXG4gICAgICAgIDExM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDcsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjU0LFxuICAgICAgICA0MyxcbiAgICAgICAgNCxcbiAgICAgICAgMTgwLFxuICAgICAgICAyMTUsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyMTAsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTE4LFxuICAgICAgICAxODQsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjEsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTc5LFxuICAgICAgICAxNDIsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjI0LFxuICAgICAgICAxNjUsXG4gICAgICAgIDE2NSxcbiAgICAgICAgOTQsXG4gICAgICAgIDg2LFxuICAgICAgICAwLFxuICAgICAgICAxNjQsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTU2LFxuICAgICAgICAxMDAsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTI5LFxuICAgICAgICA2M1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA3MixcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAyLFxuICAgICAgICAgIDksXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgNCxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDEyNVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICA3NixcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgNDdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzcsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTI3LFxuICAgICAgICA2NyxcbiAgICAgICAgMTAwLFxuICAgICAgICA5NSxcbiAgICAgICAgMjAwLFxuICAgICAgICA5NyxcbiAgICAgICAgMTA1LFxuICAgICAgICA1OSxcbiAgICAgICAgODMsXG4gICAgICAgIDE3NixcbiAgICAgICAgOTMsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTI1LFxuICAgICAgICAxMTAsXG4gICAgICAgIDk3LFxuICAgICAgICAyMTUsXG4gICAgICAgIDE1LFxuICAgICAgICA3OSxcbiAgICAgICAgMTEyLFxuICAgICAgICAxMTgsXG4gICAgICAgIDYwLFxuICAgICAgICAxMjksXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTc5LFxuICAgICAgICAxNjQsXG4gICAgICAgIDc2LFxuICAgICAgICAyMDYsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjUyLFxuICAgICAgICAxNjMsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxNDMsXG4gICAgICAgIDgzLFxuICAgICAgICA2NyxcbiAgICAgICAgNTgsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTUxLFxuICAgICAgICA5MCxcbiAgICAgICAgMjA5LFxuICAgICAgICAyMzksXG4gICAgICAgIDExLFxuICAgICAgICA0OCxcbiAgICAgICAgMjIzLFxuICAgICAgICA4NixcbiAgICAgICAgMjIyLFxuICAgICAgICAxOCxcbiAgICAgICAgMjIwLFxuICAgICAgICAyMTQsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTY0LFxuICAgICAgICAxMzQsXG4gICAgICAgIDksXG4gICAgICAgIDEzMixcbiAgICAgICAgMjUsXG4gICAgICAgIDE1MSxcbiAgICAgICAgOTYsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjcsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTcwLFxuICAgICAgICA3XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxODMsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiRldXa1hjMlJ2bkpLVnZpNC9td3lWSXJ1anZzNm1oNllFRHVaRnpWRjBGST1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiYVNXTWgxNWlTRnUwMmhFVFBEckZ6d1wiLFxuICBcInBob25lSWRcIjogXCJiZDAzMjc0YS04YjY1LTRhZmYtODcxYi1iY2JiMmQyODk1YjVcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTgzLFxuICAgICAgMjQ3LFxuICAgICAgMjQ3LFxuICAgICAgMTAxLFxuICAgICAgNjMsXG4gICAgICAyNDEsXG4gICAgICAyMDYsXG4gICAgICAyNTMsXG4gICAgICAyMzMsXG4gICAgICA3MyxcbiAgICAgIDcwLFxuICAgICAgNjIsXG4gICAgICA2NyxcbiAgICAgIDEzMCxcbiAgICAgIDksXG4gICAgICAxNyxcbiAgICAgIDEzNyxcbiAgICAgIDY5LFxuICAgICAgMjEsXG4gICAgICAxOTBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTgwLFxuICAgICAgMTc5LFxuICAgICAgMTI0LFxuICAgICAgODUsXG4gICAgICAxMDgsXG4gICAgICA0MyxcbiAgICAgIDc2LFxuICAgICAgMjQ1LFxuICAgICAgMjQzLFxuICAgICAgMjM5LFxuICAgICAgMjQ3LFxuICAgICAgMTIxLFxuICAgICAgMTgzLFxuICAgICAgMTEzLFxuICAgICAgMzAsXG4gICAgICAyMTcsXG4gICAgICAyMjYsXG4gICAgICAxNTgsXG4gICAgICA5OCxcbiAgICAgIDk5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkhRMjZMSkNFXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ5MTU1NzM3MjQ0OjgyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiJElzYWlhaFwiLFxuICAgIFwibGlkXCI6IFwiMjUwNzEwMzEwNTgwMjcyOjgyQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0tqVXcvSUhFTy9KL0xNR0dBSWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwienJXRkphanlqd1k3WEQrMHRsRzFqd2dMdlFnQmsxL2JvSzlwU3VZNXNqQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJRMlcxcEl2bHU3UnNtK1dWQ2pqM2NLRzkvUjZ2K2VSbDZlNVRXV1ExcEFYclRMd09NbHplUDBzMGswMGtkTm50azN1cnVoWGllWFhDcGhiaHlOWi9CQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJjRXk5aUt3Y3BjNU1xR0ZIL1J5cFhtdmdlQVR5RG5ZS0ZoT09GZlY3WEE0NUc5RWpxSUpENUlDaEE3UUxGd1hPSDBwQ3E4OFpHaUIwalZlWU1tdVBCUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ5MTU1NzM3MjQ0OjgyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgNixcbiAgICAgICAgICA1OSxcbiAgICAgICAgICA5MixcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICA0OFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE5NjA4NTY0LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBTm5pXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFObmkuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJRZ1E1S1NqWGRJWS9LOHJsQzV1ZjFkQUFmOEFnckUwb090ZkVibkFRRjBJPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjIxMTkyMzIwNDAsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcxOTYwODUwMTIxMFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
