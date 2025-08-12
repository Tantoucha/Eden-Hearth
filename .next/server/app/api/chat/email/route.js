"use strict";(()=>{var e={};e.id=209,e.ids=[209],e.modules={399:e=>{e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},517:e=>{e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},1212:e=>{e.exports=require("async_hooks")},1282:e=>{e.exports=require("child_process")},4770:e=>{e.exports=require("crypto")},7702:e=>{e.exports=require("events")},2048:e=>{e.exports=require("fs")},629:e=>{e.exports=require("fs/promises")},9801:e=>{e.exports=require("os")},5315:e=>{e.exports=require("path")},6162:e=>{e.exports=require("stream")},4175:e=>{e.exports=require("tty")},1764:e=>{e.exports=require("util")},4492:e=>{e.exports=require("node:stream")},8653:(e,r,t)=>{t.r(r),t.d(r,{originalPathname:()=>g,patchFetch:()=>v,requestAsyncStorage:()=>m,routeModule:()=>h,serverHooks:()=>f,staticGenerationAsyncStorage:()=>x});var o={};t.r(o),t.d(o,{GET:()=>d,POST:()=>u});var s=t(9303),n=t(8716),a=t(670),i=t(7070),p=t(8554),l=t(6495);let c=process.env.RESEND_API_KEY?new l.R(process.env.RESEND_API_KEY):null;async function u(e){try{if(!c)return i.NextResponse.json({error:"Email service is not configured"},{status:503});let r=await (0,p.zA)();if(!r)return i.NextResponse.json({error:"Database not available for transcript retrieval"},{status:503});let{chatId:t}=await e.json();if(!t)return i.NextResponse.json({error:"Chat ID is required"},{status:400});let o=await r.chat.findUnique({where:{id:t},include:{messages:{orderBy:{createdAt:"asc"}}}});if(!o)return i.NextResponse.json({error:"Chat not found"},{status:404});if(!o.email)return i.NextResponse.json({error:"No email address associated with this chat"},{status:400});let s=o.messages.map(e=>`${e.role.toUpperCase()}: ${e.content}`).join("\n\n"),n=`
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
    `,a=[o.email];return process.env.CONTACT_TO&&process.env.CONTACT_TO!==o.email&&a.push(process.env.CONTACT_TO),await c.emails.send({from:"Eden & Hearth <noreply@eden-hearth.co.uk>",to:a,subject:"Your Eden & Hearth Chat Transcript",html:n}),i.NextResponse.json({success:!0})}catch(e){return console.error("Email API error:",e),i.NextResponse.json({error:"Failed to send transcript"},{status:500})}}async function d(){return i.NextResponse.json({error:"Method not allowed"},{status:405})}let h=new s.AppRouteRouteModule({definition:{kind:n.x.APP_ROUTE,page:"/api/chat/email/route",pathname:"/api/chat/email",filename:"route",bundlePath:"app/api/chat/email/route"},resolvedPagePath:"/Users/tantoucha/eden-heather/app/api/chat/email/route.ts",nextConfigOutput:"",userland:o}),{requestAsyncStorage:m,staticGenerationAsyncStorage:x,serverHooks:f}=h,g="/api/chat/email/route";function v(){return(0,a.patchFetch)({serverHooks:f,staticGenerationAsyncStorage:x})}},8554:(e,r,t)=>{t.d(r,{zA:()=>p});var o=t(9885);let s=null,n=!1,a=!1;async function i(){if(s&&n)return s;try{if(!process.env.DATABASE_URL)return process.env.VERCEL&&!a&&(console.warn("[db] DATABASE_URL not found in Vercel environment"),a=!0),null;return s||(s=new o.PrismaClient({log:["error"]})),!n&&(await s.$queryRaw`SELECT 1`,n=!0,process.env.VERCEL&&console.log("[db] ✅ Connected to Supabase PostgreSQL")),s}catch(e){return process.env.VERCEL&&!a&&(console.warn("[db] connection failed, check DATABASE_URL or run migrations"),console.warn("[db] Error:",e instanceof Error?e.message:"Unknown error"),a=!0),null}}async function p(){return await i()}}};var r=require("../../../../webpack-runtime.js");r.C(e);var t=e=>r(r.s=e),o=r.X(0,[948,972,920],()=>t(8653));module.exports=o})();