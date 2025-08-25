"use client";
import { useRef, useState, useEffect } from "react";
export default function Chatbot(){
  const [messages,setMessages]=useState<{role:"user"|"assistant";content:string}[]>([{role:"assistant",content:"Ask about the course, the stack, or deployment. I’ll keep it concise."}]);
  const [question,setQuestion]=useState(""); const inputRef=useRef<HTMLInputElement>(null); const liveRef=useRef<HTMLDivElement>(null);
  useEffect(()=>{ inputRef.current?.focus(); },[]);
  function onSubmit(e:React.FormEvent){ e.preventDefault(); const q=question.trim(); if(!q) return; const next=[...messages,{role:"user" as const,content:q}]; setMessages([...next,{role:"assistant",content:"Stubbed reply. We’ll wire up the backend later."}]); setQuestion(""); inputRef.current?.focus(); }
  const canSend = question.trim().length>0;
  return(<div><div ref={liveRef} aria-live="polite" aria-busy="false" role="log" style={{minHeight:220,marginBottom:12}}>{messages.map((m,i)=><div key={i} className="small">{m.role==="user"?"You: ":"Assistant: "}{m.content}</div>)}</div><form onSubmit={onSubmit} style={{display:"flex",gap:8}} aria-label="Chat input"><input ref={inputRef} type="text" placeholder="Ask a question…" value={question} onChange={(e)=>setQuestion(e.target.value)} aria-label="Ask the chatbot a question"/><button type="submit" aria-label="Send message" disabled={!canSend}>Send</button></form><p className="small" style={{marginTop:8}}>Press <kbd>Enter</kbd> to send. I disable the button when the input is empty to avoid accidental submits.</p></div>);
}
