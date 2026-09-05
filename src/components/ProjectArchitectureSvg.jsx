import React, { useState } from 'react';
import { Database, Server, ShieldCheck, Terminal, Cpu, Layers, Info } from 'lucide-react';

export default function ProjectArchitectureSvg({ type }) {
  const [hoveredNode, setHoveredNode] = useState(null);

  const architectures = {
    shelfbound: {
      title: "ShelfBound Layered MVC + DAO Pipeline",
      nodes: [
        { id: 'client', name: 'Browser / Client', role: 'Frontend UI', tech: 'AJAX / Fetch API, JSP Pages', detail: 'Executes asynchronous cart additions, wishlist mutations, and search queries without page reloads.', x: 45, y: 70 },
        { id: 'security', name: 'Auth & Filter', role: 'Security Layer', tech: 'BCrypt & Session Management', detail: 'Enforces role isolation (Admin vs Customer), hashes credentials via BCrypt, and validates session state.', x: 155, y: 70 },
        { id: 'controller', name: 'Controllers', role: 'Presentation MVC', tech: 'Jakarta Servlets & DTOs', detail: 'Dispatches 11 REST/JSP endpoints, decodes HTTP payloads, and validates incoming form fields.', x: 265, y: 70 },
        { id: 'service', name: 'Service / DAO', role: 'Business Engine', tech: 'DAO Pattern & Business Rules', detail: 'Houses 47 Java classes, the WELCOME20 coupon engine, real-time inventory checks, and 7-day return policy state machine.', x: 375, y: 70 },
        { id: 'orm', name: 'Persistence Layer', role: 'Data Access', tech: 'Hibernate & PreparedStatements', detail: 'Executes parameterized JDBC queries to prevent SQL injection and manages entity lifecycle states.', x: 485, y: 70 },
        { id: 'database', name: 'Relational Store', role: 'Storage', tech: 'MySQL (9-Table Schema)', detail: 'Normalized relational database tracking users, roles, books, categories, orders, order_items, cart, wishlist, and reviews.', x: 595, y: 70 }
      ]
    },
    'leave-system': {
      title: "Leave Management Spring Boot + JWT Pipeline",
      nodes: [
        { id: 'client', name: 'Client / Postman', role: 'API Consumer', tech: 'HTTP Client + Bearer Token', detail: 'Dispatches authenticated JSON requests with Authorization: Bearer <JWT> headers.', x: 45, y: 70 },
        { id: 'jwt', name: 'Security Filter', role: 'Token Verification', tech: 'Spring Security 6 & JWT', detail: 'Custom JwtAuthenticationFilter intercepts requests, parses HMAC-SHA256 signature, and injects SecurityContext.', x: 155, y: 70 },
        { id: 'controller', name: 'REST Controller', role: 'Endpoint Dispatch', tech: '@RestController & @Valid', detail: 'Handles /api/v1/auth and /api/v1/leaves, enforcing validation constraints and mapping to LeaveRequestDTOs.', x: 265, y: 70 },
        { id: 'service', name: 'Service Logic', role: 'Workflow Orchestration', tech: '@Service & @Transactional', detail: 'Enforces RBAC (Employee apply vs Manager approve), deducts leave balances atomically, and logs status audit trails.', x: 375, y: 70 },
        { id: 'repo', name: 'Repository', role: 'Data Abstraction', tech: 'Spring Data JPA', detail: 'Extends JpaRepository with custom derived query methods and optimistic locking mechanisms.', x: 485, y: 70 },
        { id: 'db', name: 'Database', role: 'Persistent Relational DB', tech: 'MySQL / H2 Database', detail: 'Stores Employee entities, LeaveAllocations, LeaveRequests, and Role permissions with foreign key referential integrity.', x: 595, y: 70 }
      ]
    }
  };

  const currentArch = architectures[type] || architectures.shelfbound;
  const nodes = currentArch.nodes;
  const activeDetail = nodes.find(n => n.id === hoveredNode) || nodes[2]; // Default to controller

  return (
    <div className="w-full bg-[#0B0F14] rounded-xl border border-[#2A3441] p-4 sm:p-6 my-6 shadow-inner">
      
      {/* Diagram Header */}
      <div className="flex flex-wrap items-center justify-between gap-2 pb-3 mb-4 border-b border-[#2A3441]">
        <div className="flex items-center gap-2">
          <Layers className="w-4 h-4 text-[#3ECF8E]" />
          <span className="font-mono text-xs font-semibold text-[#E6EDF3] tracking-wide">
            {currentArch.title}
          </span>
        </div>
        <span className="font-mono text-[10px] text-[#8B96A5] flex items-center gap-1">
          <Info className="w-3 h-3 text-[#3ECF8E]" /> Hover nodes for architectural specs
        </span>
      </div>

      {/* Interactive Desktop SVG Bus */}
      <div className="relative w-full overflow-x-auto py-2">
        <svg 
          viewBox="0 0 640 140" 
          className="w-full min-w-[580px] h-auto select-none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Base Connection Bus Line */}
          <line 
            x1="45" 
            y1="70" 
            x2="595" 
            y2="70" 
            stroke="#2A3441" 
            strokeWidth="3" 
            strokeDasharray="4 4"
          />

          {/* Flowing animated stream */}
          <line 
            x1="45" 
            y1="70" 
            x2="595" 
            y2="70" 
            stroke="#3ECF8E" 
            strokeWidth="2.5" 
            strokeDasharray="8 12"
            className="animate-flow-dash opacity-60"
          />

          {/* Render Nodes */}
          {nodes.map((node, idx) => {
            const isHovered = hoveredNode === node.id;

            return (
              <g 
                key={node.id} 
                className="cursor-pointer transition-transform duration-200"
                onMouseEnter={() => setHoveredNode(node.id)}
                onClick={() => setHoveredNode(node.id)}
              >
                {/* Node Target Halo */}
                <circle 
                  cx={node.x} 
                  cy={node.y} 
                  r={isHovered ? "26" : "20"} 
                  fill="#121821" 
                  stroke={isHovered ? "#3ECF8E" : "#2A3441"} 
                  strokeWidth={isHovered ? "2.5" : "1.5"}
                  className="transition-all duration-300"
                />

                {/* Inner Core */}
                <circle 
                  cx={node.x} 
                  cy={node.y} 
                  r={isHovered ? "11" : "7"} 
                  fill={isHovered ? "#3ECF8E" : "#8B96A5"}
                  className="transition-all duration-300"
                />

                {/* Top Role Header */}
                <text 
                  x={node.x} 
                  y={node.y - 34} 
                  textAnchor="middle" 
                  fill={isHovered ? "#3ECF8E" : "#8B96A5"}
                  className="font-mono text-[10px] font-bold tracking-wider transition-colors duration-200"
                >
                  {node.role}
                </text>

                {/* Bottom Node Name */}
                <text 
                  x={node.x} 
                  y={node.y + 36} 
                  textAnchor="middle" 
                  fill={isHovered ? "#E6EDF3" : "#8B96A5"}
                  className="font-mono text-[10px] transition-colors duration-200"
                >
                  {node.name}
                </text>

                {/* Step indicator */}
                <text 
                  x={node.x} 
                  y={node.y + 48} 
                  textAnchor="middle" 
                  fill="#8B96A5"
                  opacity="0.6"
                  className="font-mono text-[8px]"
                >
                  [0{idx + 1}]
                </text>
              </g>
            );
          })}
        </svg>
      </div>

      {/* Interactive Inspection Tooltip / Specification Panel */}
      <div className="mt-4 p-3.5 rounded-lg border border-[#3ECF8E]/30 bg-[#121821] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs font-bold text-[#3ECF8E]">
              &gt; {activeDetail.role}: {activeDetail.name}
            </span>
            <span className="px-2 py-0.5 rounded bg-[#3ECF8E]/10 border border-[#3ECF8E]/20 text-[10px] font-mono text-[#3ECF8E]">
              {activeDetail.tech}
            </span>
          </div>
          <p className="text-xs text-[#8B96A5] leading-relaxed">
            {activeDetail.detail}
          </p>
        </div>
        <div className="sm:text-right shrink-0">
          <span className="text-[10px] font-mono text-[#8B96A5] block">STATE</span>
          <span className="text-xs font-mono text-[#3ECF8E] font-semibold">VERIFIED // PASS</span>
        </div>
      </div>

    </div>
  );
}
