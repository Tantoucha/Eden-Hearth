"use strict";(()=>{var e={};e.id=209,e.ids=[209],e.modules={399:e=>{e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},517:e=>{e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},1212:e=>{e.exports=require("async_hooks")},1282:e=>{e.exports=require("child_process")},4770:e=>{e.exports=require("crypto")},7702:e=>{e.exports=require("events")},2048:e=>{e.exports=require("fs")},629:e=>{e.exports=require("fs/promises")},9801:e=>{e.exports=require("os")},5315:e=>{e.exports=require("path")},6162:e=>{e.exports=require("stream")},4175:e=>{e.exports=require("tty")},1764:e=>{e.exports=require("util")},4492:e=>{e.exports=require("node:stream")},8653:(e,t,r)=>{r.r(t),r.d(t,{originalPathname:()=>v,patchFetch:()=>y,requestAsyncStorage:()=>x,routeModule:()=>m,serverHooks:()=>g,staticGenerationAsyncStorage:()=>f});var s={};r.r(s),r.d(s,{GET:()=>h,POST:()=>d});var o=r(9303),a=r(8716),n=r(670),i=r(7070),p=r(9885),l=r(6495);let u=null;try{process.env.DATABASE_URL&&(u=new p.PrismaClient)}catch(e){console.warn("Prisma initialization failed, database features disabled:",e)}let c=process.env.RESEND_API_KEY?new l.R(process.env.RESEND_API_KEY):null;async function d(e){try{if(!c)return i.NextResponse.json({error:"Email service is not configured"},{status:503});if(!u)return i.NextResponse.json({error:"Database not available for transcript retrieval"},{status:503});let{chatId:t}=await e.json();if(!t)return i.NextResponse.json({error:"Chat ID is required"},{status:400});let r=await u.chat.findUnique({where:{id:t},include:{messages:{orderBy:{createdAt:"asc"}}}});if(!r)return i.NextResponse.json({error:"Chat not found"},{status:404});if(!r.email)return i.NextResponse.json({error:"No email address associated with this chat"},{status:400});let s=r.messages.map(e=>`${e.role.toUpperCase()}: ${e.content}`).join("\n\n"),o=`
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <div style="text-align: center; margin-bottom: 30px;">
          <h1 style="color: #0F2E1D; font-size: 24px; margin-bottom: 10px;">Eden & Hearth</h1>
          <p style="color: #666; font-size: 16px;">Your Chat Transcript</p>
        </div>
        
        <div style="background: #f8f9fa; border-radius: 8px; padding: 20px; margin-bottom: 20px;">
          <h2 style="color: #0F2E1D; font-size: 18px; margin-bottom: 15px;">Conversation</h2>
          <div style="white-space: pre-wrap; font-family: 'Courier New', monospace; font-size: 14px; line-height: 1.6;">${s}</div>
        </div>
        
        <div style="border-top: 1px solid #eee; padding-top: 20px; text-align: center;">
          <p style="color: #666; font-size: 14px; margin-bottom: 10px;">
            Need more help? Get in touch with us:
          </p>
          <p style="margin: 5px 0;">
            <strong>Phone:</strong> 
            <a href="tel:+447721142355" style="color: #7CB518;">+44 7721 142 355</a> |
            <a href="tel:+447879296048" style="color: #7CB518;">+44 7879 296 048</a> |
            <a href="tel:+447802487781" style="color: #7CB518;">+44 7802 487 781</a>
          </p>
          <p style="margin: 5px 0;">
            <strong>Email:</strong> 
            <a href="mailto:hello@eden-hearth.co.uk" style="color: #7CB518;">hello@eden-hearth.co.uk</a>
          </p>
          <p style="color: #666; font-size: 12px; margin-top: 15px;">
            Eden & Hearth - Kitchens & Landscaping in Greater Manchester
          </p>
        </div>
      </div>
    `,a=[r.email];return process.env.CONTACT_TO&&process.env.CONTACT_TO!==r.email&&a.push(process.env.CONTACT_TO),await c.emails.send({from:"Eden & Hearth <noreply@eden-hearth.co.uk>",to:a,subject:"Your Eden & Hearth Chat Transcript",html:o}),i.NextResponse.json({success:!0})}catch(e){return console.error("Email API error:",e),i.NextResponse.json({error:"Failed to send transcript"},{status:500})}}async function h(){return i.NextResponse.json({error:"Method not allowed"},{status:405})}let m=new o.AppRouteRouteModule({definition:{kind:a.x.APP_ROUTE,page:"/api/chat/email/route",pathname:"/api/chat/email",filename:"route",bundlePath:"app/api/chat/email/route"},resolvedPagePath:"/Users/tantoucha/eden-heather/app/api/chat/email/route.ts",nextConfigOutput:"",userland:s}),{requestAsyncStorage:x,staticGenerationAsyncStorage:f,serverHooks:g}=m,v="/api/chat/email/route";function y(){return(0,n.patchFetch)({serverHooks:g,staticGenerationAsyncStorage:f})}}};var t=require("../../../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),s=t.X(0,[948,972,920],()=>r(8653));module.exports=s})();