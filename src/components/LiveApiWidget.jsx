import React, { useState } from 'react';
import { Play, Terminal, Check, Copy, RefreshCw, Send, ArrowRight, Server, ShieldCheck, Database, CheckCircle2 } from 'lucide-react';

const ENDPOINTS = [
  {
    id: 'auth',
    method: 'POST',
    path: '/api/v1/auth/login',
    title: 'Employee Authentication (JWT)',
    payload: {
      email: "raji.developer@company.org",
      password: "••••••••••••"
    },
    response: {
      status: 200,
      statusText: "OK",
      time: "46ms",
      data: {
        success: true,
        message: "Authentication successful",
        tokenType: "Bearer",
        accessToken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJyYWppQGRldmVsb3Blci5jb20iLCJyb2xlcyI6WyJST0xFX0VNUExPWUVFIl0sImlhdCI6MTczMDQ1NjAwMCwiZXhwIjoxNzMwNDk5MjAwfQ...",
        expiresInSeconds: 86400,
        user: {
          id: "EMP-409",
          name: "Rajyalakshmi Devarala",
          role: "ROLE_EMPLOYEE",
          department: "Backend Engineering",
          leaveBalance: {
            casual: 12,
            medical: 8,
            annual: 15
          }
        }
      }
    }
  },
  {
    id: 'apply',
    method: 'POST',
    path: '/api/v1/leaves/apply',
    title: 'Apply for Leave (Transactional)',
    payload: {
      leaveType: "CASUAL",
      startDate: "2026-09-15",
      endDate: "2026-09-17",
      daysCount: 3,
      reason: "Attending Java & JVM internals technical symposium"
    },
    response: {
      status: 201,
      statusText: "CREATED",
      time: "62ms",
      data: {
        success: true,
        leaveId: "LV-2026-0982",
        status: "PENDING_APPROVAL",
        appliedAt: "2026-09-05T10:45:00Z",
        applicant: "Rajyalakshmi Devarala (EMP-409)",
        leaveType: "CASUAL",
        requestedDays: 3,
        remainingBalance: 9,
        workflowState: {
          currentAssignee: "Engineering Manager (MGR-102)",
          slaHours: 24
        }
      }
    }
  },
  {
    id: 'my-leaves',
    method: 'GET',
    path: '/api/v1/leaves/my-requests',
    title: 'Query Leave History',
    payload: null,
    response: {
      status: 200,
      statusText: "OK",
      time: "38ms",
      data: {
        totalRecords: 2,
        records: [
          {
            id: "LV-2026-0811",
            type: "MEDICAL",
            days: 2,
            dates: "2026-07-10 to 2026-07-11",
            status: "APPROVED",
            approvedBy: "MGR-102",
            approvalTimestamp: "2026-07-09T14:20:00Z"
          },
          {
            id: "LV-2026-0982",
            type: "CASUAL",
            days: 3,
            dates: "2026-09-15 to 2026-09-17",
            status: "PENDING_APPROVAL",
            approvedBy: null
          }
        ]
      }
    }
  },
  {
    id: 'approve',
    method: 'PUT',
    path: '/api/v1/leaves/LV-2026-0982/approve',
    title: 'Manager Approval (RBAC)',
    payload: {
      approverComments: "Approved. Enjoy the symposium!",
      action: "APPROVE"
    },
    response: {
      status: 200,
      statusText: "OK",
      time: "54ms",
      data: {
        success: true,
        leaveId: "LV-2026-0982",
        status: "APPROVED",
        auditedBy: "MGR-102 (Manager)",
        auditTimestamp: "2026-09-05T11:00:00Z",
        balanceDeducted: true,
        notificationDispatched: true
      }
    }
  }
];

export default function LiveApiWidget() {
  const [selectedEndpoint, setSelectedEndpoint] = useState(ENDPOINTS[0]);
  const [isSending, setIsSending] = useState(false);
  const [packetProgress, setPacketProgress] = useState(0);
  const [responseOutput, setResponseOutput] = useState(ENDPOINTS[0].response);
  const [copied, setCopied] = useState(false);
  const [customServerUrl, setCustomServerUrl] = useState('');
  const [useRealServer, setUseRealServer] = useState(false);

  const handleSendRequest = async () => {
    setIsSending(true);
    setPacketProgress(0);

    // Animate packet along path: 0% -> 50% (Client to Server) -> 100% (Server to Client)
    const startTime = Date.now();
    const duration = 750;

    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(100, Math.round((elapsed / duration) * 100));
      setPacketProgress(progress);

      if (progress >= 100) {
        clearInterval(interval);
        setIsSending(false);

        // If real URL specified and toggled, attempt real fetch, otherwise return verified schema payload
        if (useRealServer && customServerUrl) {
          fetch(`${customServerUrl.replace(/\/$/, '')}${selectedEndpoint.path}`, {
            method: selectedEndpoint.method,
            headers: {
              'Content-Type': 'application/json',
              'Authorization': 'Bearer demo-token'
            },
            body: selectedEndpoint.payload ? JSON.stringify(selectedEndpoint.payload) : undefined
          })
          .then(res => res.json())
          .then(data => {
            setResponseOutput({
              status: 200,
              statusText: "OK (LIVE_SERVER)",
              time: `${Date.now() - startTime}ms`,
              data: data
            });
          })
          .catch(err => {
            setResponseOutput({
              status: 503,
              statusText: "NETWORK_ERROR",
              time: `${Date.now() - startTime}ms`,
              data: { error: err.message, note: "Check if your local/remote Spring Boot server is running on CORS." }
            });
          });
        } else {
          setResponseOutput(selectedEndpoint.response);
        }
      }
    }, 20);
  };

  const handleSelectEndpoint = (ep) => {
    setSelectedEndpoint(ep);
    setResponseOutput(ep.response);
    setPacketProgress(0);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(JSON.stringify(responseOutput.data, null, 2));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="rounded-xl border border-[#2A3441] bg-[#0B0F14] overflow-hidden shadow-2xl">
      
      {/* Terminal Bar */}
      <div className="bg-[#121821] px-4 py-3 border-b border-[#2A3441] flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <Terminal className="w-4 h-4 text-[#3ECF8E]" />
          <span className="font-mono text-xs font-bold text-[#E6EDF3]">
            SPRING_BOOT_API_TESTER // CLIENT_TRACE
          </span>
        </div>
        <div className="flex items-center gap-2 text-[11px] font-mono">
          <span className="text-[#8B96A5]">TARGET:</span>
          <span className="text-[#3ECF8E] font-semibold">
            {useRealServer && customServerUrl ? customServerUrl : 'REST_CONTAINER (EMBEDDED)'}
          </span>
        </div>
      </div>

      {/* Endpoint Selector Tabs */}
      <div className="bg-[#121821]/60 px-4 py-2 border-b border-[#2A3441] flex gap-2 overflow-x-auto">
        {ENDPOINTS.map((ep) => {
          const isSelected = selectedEndpoint.id === ep.id;
          return (
            <button
              key={ep.id}
              onClick={() => handleSelectEndpoint(ep)}
              className={`px-3 py-1.5 rounded text-xs font-mono whitespace-nowrap transition-all flex items-center gap-2 border ${
                isSelected
                  ? 'bg-[#0B0F14] border-[#3ECF8E] text-[#3ECF8E] font-bold shadow-sm'
                  : 'bg-transparent border-transparent text-[#8B96A5] hover:text-[#E6EDF3] hover:bg-[#121821]'
              }`}
            >
              <span className={`text-[10px] px-1 py-0.2 rounded font-bold ${
                ep.method === 'POST' ? 'bg-[#3ECF8E]/20 text-[#3ECF8E]' :
                ep.method === 'GET' ? 'bg-[#58A6FF]/20 text-[#58A6FF]' : 'bg-[#F5A623]/20 text-[#F5A623]'
              }`}>
                {ep.method}
              </span>
              <span>{ep.path}</span>
            </button>
          );
        })}
      </div>

      {/* Packet Travel Visualization Bus */}
      <div className="p-4 bg-[#0B0F14] border-b border-[#2A3441]">
        <div className="flex items-center justify-between text-xs font-mono text-[#8B96A5] mb-2">
          <span className="flex items-center gap-1.5 text-[#58A6FF]">
            <Terminal className="w-3.5 h-3.5" /> Client Node (HTTP)
          </span>
          <span className="text-[10px] text-[#3ECF8E]">
            {isSending ? `PACKET_IN_TRANSIT: ${packetProgress}%` : 'PACKET_IDLE // READY'}
          </span>
          <span className="flex items-center gap-1.5 text-[#3ECF8E]">
            <Server className="w-3.5 h-3.5" /> Spring Boot 6 Server (Port 8080)
          </span>
        </div>

        {/* Animated Track SVG */}
        <div className="relative w-full h-8 bg-[#121821] rounded-lg border border-[#2A3441] overflow-hidden flex items-center px-4">
          <div className="w-full h-[2px] bg-[#2A3441] relative">
            {/* Packet progress line */}
            <div 
              className="h-[2px] bg-[#3ECF8E] shadow-[0_0_8px_#3ECF8E] transition-all duration-75"
              style={{ width: `${packetProgress}%` }}
            />
            {/* Traveling packet dot */}
            <div 
              className="absolute -top-[5px] w-3 h-3 rounded-full bg-[#3ECF8E] shadow-[0_0_10px_#3ECF8E] border border-[#0B0F14] transition-all duration-75"
              style={{ left: `calc(${packetProgress}% - 6px)` }}
            />
          </div>
        </div>
      </div>

      {/* Request Bar & Trigger Button */}
      <div className="p-4 bg-[#121821]/40 border-b border-[#2A3441] flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
        <div className="flex-1 flex items-center gap-2 font-mono text-xs bg-[#0B0F14] px-3 py-2 rounded border border-[#2A3441] overflow-x-auto">
          <span className="text-[#3ECF8E] font-bold">{selectedEndpoint.method}</span>
          <span className="text-[#E6EDF3]">{selectedEndpoint.path}</span>
          <span className="text-[#8B96A5] text-[11px] ml-auto">HTTP/1.1</span>
        </div>

        <button
          onClick={handleSendRequest}
          disabled={isSending}
          className="px-5 py-2 rounded bg-[#3ECF8E] text-[#0B0F14] hover:bg-[#32b57a] font-mono text-xs font-bold tracking-wider transition-all duration-200 flex items-center justify-center gap-2 shadow-glow-green disabled:opacity-50"
        >
          {isSending ? (
            <>
              <RefreshCw className="w-3.5 h-3.5 animate-spin" />
              <span>DISPATCHING...</span>
            </>
          ) : (
            <>
              <Send className="w-3.5 h-3.5" />
              <span>SEND REQUEST</span>
            </>
          )}
        </button>
      </div>

      {/* Split Request / Response Panes */}
      <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-[#2A3441]">
        
        {/* Request Payload Pane */}
        <div className="p-4 bg-[#0B0F14]/70 space-y-2">
          <div className="flex items-center justify-between text-xs font-mono text-[#8B96A5]">
            <span>REQUEST BODY [JSON]</span>
            <span>Content-Type: application/json</span>
          </div>
          <pre className="font-mono text-xs text-[#E6EDF3] bg-[#080B0F] p-3 rounded border border-[#2A3441] overflow-x-auto min-h-[140px] leading-relaxed">
            {selectedEndpoint.payload 
              ? JSON.stringify(selectedEndpoint.payload, null, 2)
              : '// GET request contains no body payload\n// Headers:\n// Authorization: Bearer <JWT>'
            }
          </pre>
        </div>

        {/* Response Pane */}
        <div className="p-4 bg-[#0B0F14] space-y-2">
          <div className="flex items-center justify-between text-xs font-mono">
            <div className="flex items-center gap-2">
              <span className="text-[#8B96A5]">STATUS:</span>
              <span className="px-2 py-0.5 rounded bg-[#3ECF8E]/10 border border-[#3ECF8E]/30 text-[#3ECF8E] font-bold">
                {responseOutput.status} {responseOutput.statusText}
              </span>
              <span className="text-[11px] text-[#8B96A5]">({responseOutput.time})</span>
            </div>
            
            <button
              onClick={handleCopy}
              className="text-[#8B96A5] hover:text-[#3ECF8E] flex items-center gap-1 text-[11px] transition-colors"
              title="Copy JSON Response"
            >
              {copied ? <Check className="w-3 h-3 text-[#3ECF8E]" /> : <Copy className="w-3 h-3" />}
              <span>{copied ? 'COPIED' : 'COPY'}</span>
            </button>
          </div>

          <pre className="font-mono text-xs text-[#3ECF8E] bg-[#080B0F] p-3 rounded border border-[#2A3441] overflow-x-auto min-h-[140px] leading-relaxed">
            {JSON.stringify(responseOutput.data, null, 2)}
          </pre>
        </div>

      </div>

      {/* Optional Custom Server Toggle (Ready for when Raji runs or deploys her backend) */}
      <div className="px-4 py-2.5 bg-[#121821] border-t border-[#2A3441] flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
        <div className="flex items-center gap-2">
          <span className="text-[#8B96A5]">CUSTOM SERVER:</span>
          <input 
            type="text"
            placeholder="http://localhost:8080 or https://your-render-url.com"
            value={customServerUrl}
            onChange={(e) => setCustomServerUrl(e.target.value)}
            className="bg-[#0B0F14] border border-[#2A3441] rounded px-2.5 py-1 text-xs text-[#E6EDF3] focus:border-[#3ECF8E] outline-none w-64"
          />
          <button
            onClick={() => setUseRealServer(!useRealServer)}
            className={`px-2 py-1 rounded text-[10px] border transition-colors ${
              useRealServer 
                ? 'bg-[#3ECF8E]/10 border-[#3ECF8E] text-[#3ECF8E]' 
                : 'bg-[#0B0F14] border-[#2A3441] text-[#8B96A5]'
            }`}
          >
            {useRealServer ? 'MODE: LIVE URL' : 'MODE: EMBEDDED SIMULATION'}
          </button>
        </div>
        <span className="text-[11px] text-[#8B96A5]">
          Spring Boot 3.x + JWT Filter Active
        </span>
      </div>

    </div>
  );
}
