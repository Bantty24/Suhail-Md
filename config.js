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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348086183209";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_09_52_06_20_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICA1NixcbiAgICAgICAgMTE0LFxuICAgICAgICAxNDgsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjM1LFxuICAgICAgICA3NixcbiAgICAgICAgNyxcbiAgICAgICAgMjM5LFxuICAgICAgICA1MSxcbiAgICAgICAgMTMxLFxuICAgICAgICA2MyxcbiAgICAgICAgMjA3LFxuICAgICAgICAxMzAsXG4gICAgICAgIDUwLFxuICAgICAgICA5MyxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyNDUsXG4gICAgICAgIDMzLFxuICAgICAgICA1NCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNDgsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxNTcsXG4gICAgICAgIDE4MSxcbiAgICAgICAgOTMsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTc3LFxuICAgICAgICAyMTYsXG4gICAgICAgIDQzLFxuICAgICAgICA3MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzQsXG4gICAgICAgIDE5LFxuICAgICAgICAyMjcsXG4gICAgICAgIDUwLFxuICAgICAgICAxNzEsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjM4LFxuICAgICAgICA4MyxcbiAgICAgICAgMTE1LFxuICAgICAgICAxNDgsXG4gICAgICAgIDEyLFxuICAgICAgICAyMjQsXG4gICAgICAgIDI0LFxuICAgICAgICAxNjcsXG4gICAgICAgIDEwLFxuICAgICAgICA1OCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMjQsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTc5LFxuICAgICAgICAxMTcsXG4gICAgICAgIDI0MixcbiAgICAgICAgNTMsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjQwLFxuICAgICAgICAxMzEsXG4gICAgICAgIDQ5LFxuICAgICAgICA2NixcbiAgICAgICAgMTUsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTc4LFxuICAgICAgICA2NlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDE4LFxuICAgICAgICAxNzksXG4gICAgICAgIDIyNCxcbiAgICAgICAgODgsXG4gICAgICAgIDI5LFxuICAgICAgICAxMjIsXG4gICAgICAgIDIxNixcbiAgICAgICAgODQsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjA5LFxuICAgICAgICAzMyxcbiAgICAgICAgOTYsXG4gICAgICAgIDIyMyxcbiAgICAgICAgNzAsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjIzLFxuICAgICAgICAyNDksXG4gICAgICAgIDIwOCxcbiAgICAgICAgNjMsXG4gICAgICAgIDMwLFxuICAgICAgICAyNTIsXG4gICAgICAgIDk3LFxuICAgICAgICAxOTMsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjQsXG4gICAgICAgIDExMyxcbiAgICAgICAgNzQsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTA1LFxuICAgICAgICA2NyxcbiAgICAgICAgNjRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY1LFxuICAgICAgICA5MixcbiAgICAgICAgMTQwLFxuICAgICAgICAxMjcsXG4gICAgICAgIDQ4LFxuICAgICAgICA5OCxcbiAgICAgICAgMTAxLFxuICAgICAgICAxMzUsXG4gICAgICAgIDEwNyxcbiAgICAgICAgNTAsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjYsXG4gICAgICAgIDY0LFxuICAgICAgICAxMTAsXG4gICAgICAgIDI3LFxuICAgICAgICAyMDcsXG4gICAgICAgIDk3LFxuICAgICAgICAxNjksXG4gICAgICAgIDE0MCxcbiAgICAgICAgNTMsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjcsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTEyLFxuICAgICAgICAzNixcbiAgICAgICAgNDMsXG4gICAgICAgIDgxLFxuICAgICAgICA5MCxcbiAgICAgICAgNjcsXG4gICAgICAgIDEwMCxcbiAgICAgICAgNixcbiAgICAgICAgNzVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDcyLFxuICAgICAgICAyNDksXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjE4LFxuICAgICAgICAyNCxcbiAgICAgICAgMTY3LFxuICAgICAgICA3MSxcbiAgICAgICAgMjAwLFxuICAgICAgICAyMTgsXG4gICAgICAgIDI1MCxcbiAgICAgICAgNDcsXG4gICAgICAgIDE0MCxcbiAgICAgICAgOSxcbiAgICAgICAgMTY0LFxuICAgICAgICAyMTgsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTgsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjQ1LFxuICAgICAgICA3OSxcbiAgICAgICAgMzIsXG4gICAgICAgIDk4LFxuICAgICAgICA4NixcbiAgICAgICAgMTQxLFxuICAgICAgICAxNDMsXG4gICAgICAgIDQ2LFxuICAgICAgICAxNTgsXG4gICAgICAgIDM0LFxuICAgICAgICAxMjksXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjgsXG4gICAgICAgIDc1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzNCxcbiAgICAgICAgNTQsXG4gICAgICAgIDI0LFxuICAgICAgICAxODAsXG4gICAgICAgIDUwLFxuICAgICAgICAxODIsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTEsXG4gICAgICAgIDIxMixcbiAgICAgICAgNTMsXG4gICAgICAgIDEzMixcbiAgICAgICAgNjgsXG4gICAgICAgIDIzLFxuICAgICAgICAxMzUsXG4gICAgICAgIDUsXG4gICAgICAgIDEyNCxcbiAgICAgICAgNzYsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTI2LFxuICAgICAgICAyNDgsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTIxLFxuICAgICAgICAxNzAsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTQwLFxuICAgICAgICAxNzMsXG4gICAgICAgIDU3LFxuICAgICAgICAyMDcsXG4gICAgICAgIDQ1LFxuICAgICAgICA2MixcbiAgICAgICAgMjUyLFxuICAgICAgICAxMjBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMTA1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE0LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDE4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMjAsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTcwLFxuICAgICAgICA2MCxcbiAgICAgICAgMTUwLFxuICAgICAgICAxMDEsXG4gICAgICAgIDYyLFxuICAgICAgICAyMTgsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTgsXG4gICAgICAgIDMwLFxuICAgICAgICAxNDAsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjIsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTMyLFxuICAgICAgICAxNDEsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjEyLFxuICAgICAgICAyMjYsXG4gICAgICAgIDExMSxcbiAgICAgICAgNjYsXG4gICAgICAgIDE3NixcbiAgICAgICAgNTcsXG4gICAgICAgIDE3LFxuICAgICAgICAyLFxuICAgICAgICAyNCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxNzMsXG4gICAgICAgIDk0LFxuICAgICAgICAxNDcsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTMwLFxuICAgICAgICAxMjEsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjAxLFxuICAgICAgICA4LFxuICAgICAgICA2MixcbiAgICAgICAgNzQsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTEzLFxuICAgICAgICA0OCxcbiAgICAgICAgMTE2LFxuICAgICAgICAxMzIsXG4gICAgICAgIDE1LFxuICAgICAgICA1NixcbiAgICAgICAgMjMsXG4gICAgICAgIDIzOCxcbiAgICAgICAgNDYsXG4gICAgICAgIDY2LFxuICAgICAgICAxNTksXG4gICAgICAgIDI0MCxcbiAgICAgICAgNDYsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTUyLFxuICAgICAgICAxNzIsXG4gICAgICAgIDMsXG4gICAgICAgIDIyNSxcbiAgICAgICAgNjIsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTgwLFxuICAgICAgICAxMDgsXG4gICAgICAgIDZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDI1MCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJMSFZRUGE2alpmZCtiL1NpdjEvSThUQm5qcDN3OE14by9vQ3I2dzNRcXNJPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDgwODYxODMyMDlAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkRDQkQ1MEVCODQ5QkUzMTZCOTk3NDhFQTdBOTlFN0I1XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcxODg3NzEyNFxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDgwODYxODMyMDlAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkRGN0YzRTA2NzZDQjA4OEY4Qzc5RkVCNEExMDRCNTRDXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcxODg3NzEyNVxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDgwODYxODMyMDlAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkUyMjlEN0UxNjJBRjI2OUZDQ0QxQzBBQjMxMTRGMzZBXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcxODg3NzEyOVxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJteTJLdG1uYlFZcUhVVGx5R0ZESDZ3XCIsXG4gIFwicGhvbmVJZFwiOiBcImJkODQxYTE4LTU3ZmItNGM2Ny04Y2Y5LTNmZThlYjc5NjU4Y1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNCxcbiAgICAgIDk5LFxuICAgICAgNjEsXG4gICAgICAyMDIsXG4gICAgICAxMDIsXG4gICAgICAyMTQsXG4gICAgICAyMDMsXG4gICAgICA0NCxcbiAgICAgIDE0MixcbiAgICAgIDk0LFxuICAgICAgMTQ3LFxuICAgICAgOSxcbiAgICAgIDIzNCxcbiAgICAgIDI0MSxcbiAgICAgIDIyMSxcbiAgICAgIDI0LFxuICAgICAgMjA3LFxuICAgICAgMTQ0LFxuICAgICAgOTksXG4gICAgICAxNjhcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNjksXG4gICAgICA1OCxcbiAgICAgIDI1LFxuICAgICAgMTEzLFxuICAgICAgMzEsXG4gICAgICAxMzgsXG4gICAgICAxMTMsXG4gICAgICAyMTksXG4gICAgICAyNTQsXG4gICAgICAxMDYsXG4gICAgICAyMzEsXG4gICAgICAyMTgsXG4gICAgICAyMzcsXG4gICAgICAxODgsXG4gICAgICAxMDUsXG4gICAgICAxNzgsXG4gICAgICA2MyxcbiAgICAgIDE0NCxcbiAgICAgIDI1LFxuICAgICAgMTU4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjlWV1FIQUtUXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ4MDg2MTgzMjA5OjZAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjk5MjYxNTI2MTEwNDM4OjZAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwiQElzYWlhaFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ012eHM4VUdFTDczejdNR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwia1N3Zkh1L0dxcUpQUUxRbnl5RS9vN3dGMUZZb3BaRVJyaUVTcU1Lb1YwTT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJWcy9oeC8zK2ZORWJXZWU0a0IzUERIdnVrRkxJMWpXNmZyTXo0R2ZJcHlGZDFxYTdQUlRTTFd0SndFL2d2TW1hZVgxR2VDeWFqWTVVcUZRZmwzTWxCdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJ2YXpoUVVQVjhabS9NZzUwbURMTExQMGpyNWZmeEdqVWYzcWVyNnZJT1ArR0c2RjZqRngvTDE2OEZ4MFREN0NjTHl3RSs2SEJDQWVHNWtFRnhYVVREQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ4MDg2MTgzMjA5OjZAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICA4NixcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICA2N1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE4ODc3MTIyLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBTnhzXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFOeHMuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJ5VjdXdXF3Y3BxR2FrNFhzc2p6b1p5K1hRTFhyb1l4VXJuRWVyNmVCeUJBPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE3NTYxNjYzNDcsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcxODg3NzEyNDgwOFwifSIKfQ=="  // PUT your SESSION_ID 


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
