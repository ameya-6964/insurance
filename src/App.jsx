import React, { useState } from 'react';
import { 
  Shield, 
  ChevronRight, 
  ChevronDown, 
  Code, 
  Database, 
  Lock, 
  Globe, 
  FileText, 
  Activity, 
  Key, 
  CreditCard,
  UserCheck,
  Zap,
  FolderOpen,
  FileCode,
  Info,
  Server,
  ArrowRight,
  ClipboardCheck,
  CheckCircle2,
  AlertCircle,
  Terminal,
  PlayCircle,
  Bug,
  Cpu,
  Workflow,
  Settings,
  ShieldCheck,
  FileSearch,
  Copy,
  Layers,
  DatabaseZap,
  Network,
  GitBranch,
  Table,
  Box,
  Eye,
  Command,
  FileJson,
  Braces,
  ShieldAlert,
  Users,
  Repeat,
  Unplug,
  Wrench,
  Coffee,
  KeyRound,
  Utensils,
  ChefHat,
  ScrollText,
  User,
  Lightbulb,
  XCircle,
  DollarSign,
  CloudLightning,
  MonitorCheck
} from 'lucide-react';

// ==========================================
// 1. HELPER COMPONENTS (DEFINED FIRST)
// ==========================================

const MetricCard = ({ title, value, detail }) => (
  <div className="p-8 bg-slate-900/40 border border-slate-800/60 rounded-3xl hover:bg-slate-900 transition-all cursor-default group hover:border-blue-500/30 text-left">
    <p className="text-[10px] font-black text-slate-600 uppercase tracking-widest mb-3 group-hover:text-blue-500 transition-colors">{title}</p>
    <p className="text-2xl font-black text-white mb-1 tracking-tight">{value}</p>
    <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest group-hover:text-slate-300 transition-colors">{detail}</p>
  </div>
);

const MVCCard = ({ type, title, subtitle, desc, icon, files }) => (
  <div className="p-8 bg-slate-900 border border-slate-800 rounded-[2.5rem] flex flex-col group hover:border-blue-500/30 transition-all shadow-xl text-left">
    <div className="flex items-center justify-between mb-8 text-left">
      <div className="w-12 h-12 rounded-2xl bg-slate-950 border border-slate-800 flex items-center justify-center text-xl font-black text-blue-500 shadow-xl group-hover:scale-110 transition-transform">
        {type}
      </div>
      {icon}
    </div>
    <h4 className="text-white font-black text-lg mb-1 uppercase tracking-tighter">{title}</h4>
    <p className="text-[10px] text-slate-500 font-black uppercase tracking-widest mb-4">{subtitle}</p>
    <p className="text-xs text-slate-400 leading-relaxed mb-8 flex-1">{desc}</p>
    <div className="pt-6 border-t border-slate-800/60 flex flex-wrap gap-2">
      {files.map(f => (
        <span key={f} className="text-[9px] bg-slate-950 px-2 py-1 rounded-lg text-slate-600 font-mono border border-slate-800 group-hover:text-slate-400 group-hover:border-slate-700 transition-colors">{f}</span>
      ))}
    </div>
  </div>
);

const ComplexLifecycleItem = ({ icon, title, desc }) => (
  <div className="flex gap-5 group">
    <div className="w-14 h-14 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform shadow-xl">
      {icon}
    </div>
    <div>
      <h4 className="font-black text-slate-100 text-sm mb-1 uppercase tracking-tight">{title}</h4>
      <p className="text-xs text-slate-500 leading-relaxed font-medium">{desc}</p>
    </div>
  </div>
);

const FolderItem = ({ name, children, isOpen, onToggle, desc }) => (
  <div className="mb-2">
    <button onClick={onToggle} className="flex items-center space-x-4 w-full text-left p-3 rounded-2xl hover:bg-slate-900 transition-all group">
      <span className="text-slate-700 group-hover:text-slate-400 transition-colors">{isOpen ? <ChevronDown size={14}/> : <ChevronRight size={14}/>}</span>
      <FolderOpen size={16} className="text-blue-500"/>
      <span className="font-black text-slate-300 text-sm tracking-tight">{name}/</span>
      {desc && <span className="text-[10px] text-slate-600 font-bold italic ml-3 opacity-0 group-hover:opacity-100 transition-opacity">— {desc}</span>}
    </button>
    {isOpen && <div className="ml-10 border-l border-slate-800/60 pl-6 py-2 space-y-2">{children}</div>}
  </div>
);

const FileItem = ({ name, bold, desc }) => (
  <div className="flex items-center space-x-4 py-2 px-3 hover:bg-slate-900/40 rounded-xl transition-colors group">
    <FileCode size={14} className="text-slate-600 group-hover:text-blue-400 transition-colors"/>
    <span className={`text-sm tracking-tight ${bold ? 'font-black text-white underline decoration-blue-500/50' : 'text-slate-500 group-hover:text-slate-300'}`}>{name}</span>
    {desc && <span className="text-[10px] text-slate-700 font-bold ml-3 italic opacity-60">— {desc}</span>}
  </div>
);

const MonitorRow = ({ label, status, color }) => (
  <div className="flex justify-between items-center text-[10px] font-bold">
    <span className="text-slate-600 uppercase tracking-widest">{label}</span>
    <span className={`${color} font-black tabular-nums tracking-widest`}>{status}</span>
  </div>
);

const StatusRow = ({ label, value }) => (
  <div className="flex justify-between items-center border-b border-slate-800/40 pb-4">
    <span className="text-slate-600 font-black text-[10px] uppercase tracking-[0.2em]">{label}</span>
    <span className="font-mono text-blue-100 text-[11px] font-bold">{value}</span>
  </div>
);

const DetailRow = ({ label, desc }) => (
  <div className="space-y-1">
    <p className="text-[10px] font-black text-white uppercase tracking-widest">{label}</p>
    <p className="text-[10px] text-slate-500 leading-relaxed font-medium">{desc}</p>
  </div>
);

const RoleAccessCard = ({ role, access }) => (
  <div className="bg-slate-900/50 border border-slate-800 p-4 rounded-2xl group hover:border-blue-500/40 transition-colors">
    <p className="text-[10px] font-black text-white uppercase tracking-widest mb-1 group-hover:text-blue-400">{role}</p>
    <p className="text-[9px] text-slate-500 font-bold italic">{access}</p>
  </div>
);

const ErrorLogicItem = ({ code, desc }) => (
  <div className="flex gap-4 group">
    <div className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-1.5 flex-shrink-0 shadow-[0_0_8px_rgba(244,63,94,0.4)]"></div>
    <div>
      <p className="text-xs font-black text-slate-200 uppercase tracking-widest mb-1 group-hover:text-rose-400 transition-colors">{code}</p>
      <p className="text-[10px] text-slate-500 leading-relaxed font-medium">{desc}</p>
    </div>
  </div>
);

const ApiSection = ({ title, children, color, description }) => {
  const c = color === 'blue' ? 'border-blue-900 bg-blue-900/5 text-blue-400' : 
            color === 'rose' ? 'border-rose-900 bg-rose-900/5 text-rose-400' : 
            color === 'emerald' ? 'border-emerald-900 bg-emerald-900/5 text-emerald-400' :
            'border-indigo-900 bg-indigo-900/5 text-indigo-400';
  return (
    <div className={`border-2 rounded-[3rem] overflow-hidden ${c} transition-all hover:shadow-2xl text-left`}>
      <div className="px-10 py-6 font-black text-xs uppercase tracking-[0.2em] border-b border-inherit bg-slate-950 text-white flex justify-between items-center text-left">
        {title}
        <span className="text-[9px] opacity-40 italic font-medium normal-case tracking-normal italic">{description}</span>
      </div>
      <div className="p-10 space-y-6 bg-slate-950/20 text-left">{children}</div>
    </div>
  );
};

const ApiDetail = ({ method, url, title, desc, reqBody, resBody, reqHeaders }) => {
  const [open, setOpen] = useState(false);
  const color = method === 'POST' ? 'bg-emerald-600' : method === 'GET' ? 'bg-blue-600' : method === 'PATCH' ? 'bg-orange-600' : 'bg-red-600';
  
  return (
    <div className="bg-slate-950/80 border border-slate-800 rounded-[2rem] overflow-hidden transition-all hover:border-slate-600">
      <button onClick={() => setOpen(!open)} className="w-full px-8 py-5 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 text-left group">
        <div className="flex items-center space-x-6 text-left">
          <span className={`${color} text-white text-[9px] font-black px-3 py-1 rounded-xl uppercase tracking-widest shadow-lg`}>{method}</span>
          <div className="text-left">
            <p className="text-xs font-black text-slate-200 mb-1 tracking-tight group-hover:text-blue-400 transition-colors uppercase tracking-widest">{title}</p>
            <span className="font-mono text-[10px] text-slate-500 font-bold">{url}</span>
          </div>
        </div>
        <div className="flex items-center space-x-6">
          <span className="text-[11px] font-bold text-slate-600 hidden md:block">{desc}</span>
          {open ? <ChevronDown size={16} className="text-slate-500"/> : <ChevronRight size={16} className="text-slate-500"/>}
        </div>
      </button>
      
      {open && (
        <div className="p-8 pt-0 grid grid-cols-1 lg:grid-cols-2 gap-8 animate-in slide-in-from-top-4 duration-300">
          <div className="space-y-6">
            {reqHeaders && (
              <div className="bg-slate-900 p-6 rounded-[1.5rem] border border-slate-800">
                <p className="text-[9px] font-black text-slate-500 uppercase mb-3 tracking-widest">Required Headers</p>
                <pre className="text-indigo-400 text-[10px] font-mono whitespace-pre-wrap">
                  {JSON.stringify(reqHeaders, null, 2)}
                </pre>
              </div>
            )}
            <div className="bg-slate-900 p-6 rounded-[1.5rem] border border-slate-800">
              <p className="text-[9px] font-black text-slate-500 uppercase mb-3 tracking-widest">Request Payload</p>
              <pre className="text-blue-400 text-[10px] font-mono whitespace-pre-wrap overflow-auto max-h-[250px] scrollbar-hide">
                {JSON.stringify(reqBody, null, 2)}
              </pre>
            </div>
          </div>
          <div className="bg-slate-900 p-6 rounded-[1.5rem] border border-slate-800 shadow-inner">
            <p className="text-[9px] font-black text-slate-500 uppercase mb-3 tracking-widest">Expected Result</p>
            <pre className="text-emerald-400 text-[10px] font-mono whitespace-pre-wrap overflow-auto max-h-[400px] scrollbar-hide">
              {JSON.stringify(resBody, null, 2)}
            </pre>
          </div>
        </div>
      )}
    </div>
  );
};

const FlowStepDetail = ({ step, title, api, logic, impact }) => (
  <div className="flex gap-12 group relative text-left">
    <div className="flex-shrink-0 z-10 pt-1 text-left">
      <div className="w-20 h-20 rounded-[2.5rem] bg-slate-950 border-2 border-slate-800 text-white flex items-center justify-center font-black text-2xl shadow-2xl group-hover:border-blue-500/50 group-hover:scale-110 group-hover:rotate-3 transition-all duration-700">
        {step}
      </div>
    </div>
    <div className="flex-1 pb-16 border-b border-slate-800/40 text-left">
      <h4 className="font-black text-white text-2xl mb-8 tracking-tighter group-hover:text-blue-400 transition-colors uppercase text-left">{title}</h4>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
        <div className="bg-slate-900/50 p-8 rounded-[2.5rem] border border-slate-800/60 shadow-xl group-hover:bg-slate-900 transition-all text-left">
          <p className="text-[10px] font-black text-blue-500 uppercase mb-5 tracking-[0.2em] text-left">Interface</p>
          <p className="text-sm font-mono text-slate-200 font-bold mb-4 text-left">{api}</p>
          <div className="pt-6 border-t border-slate-800/60 text-left">
            <p className="text-[10px] text-slate-500 font-black uppercase tracking-widest mb-1 text-left">State Result:</p>
            <p className="text-[10px] text-emerald-500 font-black uppercase tracking-widest leading-relaxed text-left">{impact}</p>
          </div>
        </div>
        <div className="bg-slate-950/80 p-8 rounded-[2.5rem] border border-slate-800 flex flex-col justify-center text-left">
          <p className="text-[10px] font-black text-indigo-500 uppercase mb-4 tracking-[0.2em] flex items-center gap-2 text-left">
            <Cpu size={14}/> Implementation Logic
          </p>
          <p className="text-xs text-slate-400 leading-loose font-medium italic text-left">{logic}</p>
        </div>
      </div>
    </div>
  </div>
);

const DenseTestCard = ({ title, icon, children, type }) => {
  const c = type === 'success' ? 'border-emerald-900/30 bg-emerald-900/5' : type === 'error' ? 'border-rose-900/30 bg-rose-900/5' : 'border-amber-900/30 bg-amber-900/5';
  return (
    <div className={`border-2 p-10 rounded-[3rem] shadow-2xl transition-all hover:-translate-y-2 ${c} text-left`}>
      <div className="flex items-center gap-4 mb-8 text-left text-white">
        {icon}
        <h5 className="font-black mb-0 text-xs uppercase tracking-[0.2em] text-left text-white">{title}</h5>
      </div>
      <div className="text-xs font-medium text-slate-500 leading-loose text-left">
        {children}
      </div>
    </div>
  );
};

const StatusIndicator = ({ label, status, color }) => (
  <div className="flex justify-between items-center text-[10px] font-black border-b border-white/5 pb-3 last:border-0 last:pb-0">
    <span className="text-slate-600 uppercase tracking-widest">{label}</span>
    <span className={`${color} uppercase tracking-widest`}>{status}</span>
  </div>
);

const AnalogyCard = ({ icon, role, tech, desc }) => (
  <div className="p-6 bg-slate-950 rounded-3xl border border-slate-800 shadow-xl">
    <div className="flex items-center gap-4 mb-4">
      {icon}
      <h5 className="text-xs font-black text-white uppercase tracking-widest">{role}</h5>
    </div>
    <code className="block text-[9px] text-blue-400 bg-slate-900/50 p-2 rounded-lg mb-4 font-mono">{tech}</code>
    <p className="text-xs text-slate-500 leading-relaxed">{desc}</p>
  </div>
);

const BenefitItem = ({ title, desc }) => (
  <li className="flex items-start gap-4">
    <CheckCircle2 size={16} className="text-emerald-500 mt-0.5 flex-shrink-0" />
    <div>
      <p className="text-xs font-bold text-slate-200 mb-1">{title}</p>
      <p className="text-[10px] text-slate-500 leading-relaxed">{desc}</p>
    </div>
  </li>
);

const ConceptBlock = ({ title, icon, desc, children }) => (
  <div className="p-10 bg-slate-900/50 border border-slate-800/60 rounded-[3rem] text-left group hover:bg-slate-900 transition-all">
    <div className="flex items-center gap-5 mb-6">
      <div className="p-3 bg-slate-950 rounded-2xl border border-slate-800 shadow-xl">{icon}</div>
      <h3 className="text-xl font-black text-white uppercase tracking-tighter">{title}</h3>
    </div>
    <p className="text-sm text-slate-400 leading-relaxed max-w-3xl mb-8">{desc}</p>
    {children}
  </div>
);

const DetailBox = ({ title, value, color }) => (
  <div className="p-5 bg-slate-950 rounded-2xl border border-slate-800 text-left">
    <p className={`text-[9px] font-black uppercase mb-2 tracking-widest ${color || 'text-blue-500'}`}>{title}</p>
    <p className="text-xs text-slate-300 font-bold">{value}</p>
  </div>
);

const RestFeature = ({ title, desc }) => (
  <div className="flex gap-4 text-left">
    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 flex-shrink-0 shadow-[0_0_10px_rgba(16,185,129,0.5)]"></div>
    <div>
      <p className="text-xs font-black text-slate-100 uppercase tracking-widest mb-1">{title}</p>
      <p className="text-[10px] text-slate-500 leading-relaxed">{desc}</p>
    </div>
  </div>
);

const StatusMap = ({ code, label, desc }) => (
  <div className="flex items-center justify-between text-[10px] border-b border-white/5 pb-2 last:border-0 last:pb-0">
    <div className="flex items-center gap-3">
       <span className="font-mono font-bold text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded">{code}</span>
       <span className="font-black text-slate-400 uppercase tracking-widest">{label}</span>
    </div>
    <span className="text-slate-600 italic">{desc}</span>
  </div>
);

const RoleDetailCard = ({ role, access, desc, caps, color }) => (
  <div className="p-10 bg-slate-950 border border-slate-800 rounded-[2.5rem] flex flex-col md:flex-row gap-10 group hover:bg-slate-900/50 transition-colors text-left">
    <div className="md:w-1/3 text-left">
      <div className="bg-slate-900/50 border border-slate-800 p-6 rounded-3xl mb-4 group-hover:border-blue-500/20 transition-all">
        <h4 className={`font-black tracking-tighter text-xl mb-1 ${color}`}>{role}</h4>
        <p className="text-[10px] text-slate-500 font-black uppercase tracking-widest">{access}</p>
      </div>
      <p className="text-xs text-slate-500 leading-relaxed italic">{desc}</p>
    </div>
    <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4">
      {caps.map((c, i) => (
        <div key={i} className="flex items-center gap-3 bg-slate-900/30 p-4 rounded-2xl border border-slate-800/40 shadow-inner group-hover:border-slate-700/60 transition-colors">
          <CheckCircle2 size={14} className="text-emerald-500" />
          <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{c}</span>
        </div>
      ))}
    </div>
  </div>
);

const FooterLink = ({ label }) => (
  <a href="#" className="text-[10px] font-black text-slate-600 uppercase tracking-widest hover:text-blue-500 transition-colors">
    {label}
  </a>
);

const PurposeItem = ({ title, desc }) => (
  <li className="flex gap-5 group text-left">
    <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0 shadow-[0_0_8px_rgba(59,130,246,0.5)] group-hover:scale-150 transition-transform"></div>
    <div className="text-left">
      <p className="text-xs font-black text-slate-200 uppercase tracking-widest mb-1 group-hover:text-blue-400 transition-colors">{title}</p>
      <p className="text-[10px] text-slate-500 leading-relaxed font-medium">{desc}</p>
    </div>
  </li>
);

const ModelDetailCard = ({ title, fields, icon, color, logic }) => {
  const colors = {
    blue: "border-blue-900/40 bg-blue-900/5 text-blue-400",
    indigo: "border-indigo-900/40 bg-indigo-900/5 text-indigo-400",
    emerald: "border-emerald-900/40 bg-emerald-900/5 text-emerald-400",
    rose: "border-rose-900/40 bg-rose-900/5 text-rose-400",
    amber: "border-amber-900/40 bg-amber-900/5 text-amber-400",
  };
  return (
    <div className={`p-8 border rounded-[3rem] shadow-xl ${colors[color]} hover:-translate-y-2 transition-all flex flex-col h-full group hover:shadow-blue-900/10 text-left`}>
      <div className="flex items-center gap-5 mb-8 text-left">
        <div className="p-4 bg-slate-950 rounded-2xl border border-white/5 shadow-2xl group-hover:scale-110 transition-transform text-left">{icon}</div>
        <h4 className="font-black text-white uppercase tracking-widest text-sm text-left">{title}</h4>
      </div>
      <div className="space-y-4 mb-10 flex-1 text-left">
        {fields.map((f, i) => (
          <div key={i} className="flex items-center gap-3 text-[10px] font-bold opacity-60 uppercase tracking-widest text-left">
            <div className="w-1 h-1 bg-current rounded-full" /> {f}
          </div>
        ))}
      </div>
      <div className="pt-6 border-t border-white/5 text-left">
        <p className="text-[9px] font-black text-slate-500 uppercase tracking-widest mb-2 text-left">Internal logic:</p>
        <p className="text-[10px] text-slate-400 leading-relaxed italic font-medium text-left">{logic}</p>
      </div>
    </div>
  );
};

// ==========================================
// 2. MAIN APP COMPONENT
// ==========================================

const App = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [expandedFolders, setExpandedFolders] = useState(['root', 'controllers', 'models', 'routes', 'middlewares', 'utils']);

  const toggleFolder = (folder) => {
    if (expandedFolders.includes(folder)) {
      setExpandedFolders(expandedFolders.filter(f => f !== folder));
    } else {
      setExpandedFolders([...expandedFolders, folder]);
    }
  };

  const navItems = [
    { id: 'overview', label: 'System Overview', icon: <Globe size={18} /> },
    { id: 'mvc', label: 'MVC Architecture', icon: <Layers size={18} /> },
    { id: 'roles', label: 'Roles & Permissions', icon: <UserCheck size={18} /> },
    { id: 'concepts', label: 'Core Concepts (JWT/REST)', icon: <Cpu size={18} /> },
    { id: 'structure', label: 'Complete File List', icon: <FolderOpen size={18} /> },
    { id: 'models', label: 'Database & Schema', icon: <Table size={18} /> },
    { id: 'api', label: 'API Encyclopedia', icon: <Terminal size={18} /> },
    { id: 'flow', label: 'E2E Lifecycle', icon: <Workflow size={18} /> },
    { id: 'testing', label: 'QA Testing Suite', icon: <Bug size={18} /> },
  ];

  return (
    <div className="min-h-screen bg-[#020617] flex flex-col font-sans text-slate-300 selection:bg-blue-500/30">
      {/* Header */}
      <header className="bg-slate-950/80 backdrop-blur-xl border-b border-slate-800/60 text-white sticky top-0 z-50">
        <div className="container mx-auto px-6 py-3 flex justify-between items-center text-left">
          <div className="flex items-center space-x-4">
            <div className="bg-gradient-to-br from-blue-600 to-indigo-700 p-2.5 rounded-xl shadow-lg shadow-blue-900/40">
              <Shield className="text-white" size={24} />
            </div>
            <div>
              <h1 className="text-lg font-black leading-tight tracking-tight text-white uppercase italic">Insurance PAS Core</h1>
              <p className="text-[10px] text-blue-400 font-bold uppercase tracking-[0.25em]">Implementation Manifesto</p>
            </div>
          </div>
          <div className="hidden lg:flex items-center space-x-6">
            <div className="flex items-center space-x-2 bg-slate-900 px-4 py-1.5 rounded-full border border-slate-800">
              <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.6)]"></div>
              <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Environment: Distributed Core</span>
            </div>
            <div className="flex items-center space-x-2 bg-slate-900 px-4 py-1.5 rounded-full border border-slate-800 text-blue-400 font-bold text-[10px] uppercase tracking-widest">
              <Activity size={12}/> REST: Operational
            </div>
          </div>
        </div>
      </header>

      <div className="flex-1 flex flex-col md:flex-row container mx-auto px-4 md:px-6 py-8 gap-8">
        {/* Navigation Sidebar */}
        <nav className="w-full md:w-72 flex-shrink-0">
          <div className="sticky top-24 space-y-2">
            <p className="text-[10px] font-black text-slate-600 uppercase tracking-[0.3em] px-4 mb-4">Master Menu</p>
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center justify-between px-5 py-4 rounded-2xl transition-all duration-300 group relative overflow-hidden ${
                  activeTab === item.id 
                  ? 'bg-blue-600 text-white shadow-2xl shadow-blue-900/50 scale-[1.02]' 
                  : 'text-slate-500 hover:bg-slate-900 hover:text-slate-100'
                }`}
              >
                <div className="flex items-center space-x-3 relative z-10">
                  <span className={`${activeTab === item.id ? 'text-white' : 'text-slate-600 group-hover:text-blue-400'}`}>
                    {item.icon}
                  </span>
                  <span className="font-bold text-sm tracking-tight">{item.label}</span>
                </div>
                {activeTab === item.id && <ChevronRight size={14} className="relative z-10 animate-pulse" />}
                {activeTab === item.id && (
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 opacity-50"></div>
                )}
              </button>
            ))}

            <div className="mt-12 p-6 bg-slate-950 border border-slate-800/60 rounded-[2.5rem] shadow-2xl relative group">
              <h4 className="text-[10px] font-black text-blue-500 uppercase tracking-widest mb-6">Backend Status</h4>
              <div className="space-y-4">
                <StatusIndicator label="Auth Engine" status="JWT Stateless" color="text-green-400" />
                <StatusIndicator label="Integrity" status="Idempotent" color="text-green-400" />
                <StatusIndicator label="API Arch" status="RESTful" color="text-blue-400" />
              </div>
            </div>
          </div>
        </nav>

        {/* Content Area */}
        <main className="flex-1 min-w-0 pb-24 text-left">
          
          {/* OVERVIEW TAB */}
          {activeTab === 'overview' && (
            <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <section className="bg-slate-950 p-12 rounded-[3.5rem] border border-slate-800/60 relative overflow-hidden shadow-2xl">
                <div className="absolute top-0 right-0 p-12 opacity-[0.03] text-blue-500">
                  <Shield size={320} />
                </div>
                <div className="relative z-10">
                  <span className="bg-blue-500/10 text-blue-400 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest border border-blue-500/20 mb-8 inline-block shadow-[0_0_15px_rgba(59,130,246,0.1)]">
                    System Introduction
                  </span>
                  <h2 className="text-6xl font-black mb-8 text-white tracking-tighter leading-none">Insurance Core PAS</h2>
                  <p className="text-xl text-slate-400 leading-relaxed mb-12 max-w-3xl">
                    The Insurance PAS Core is a mission-critical backend engine. It orchestrates risk ingestion, dynamic premium rating, contractual binding, and claim-loss settlement within a high-security REST architecture.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    <MetricCard title="Arch Type" value="RESTful" detail="Stateless APIs" />
                    <MetricCard title="Protocol" value="JWT" detail="Bearer Auth" />
                    <MetricCard title="Safety" value="Idempotent" detail="Repeat-Safe" />
                    <MetricCard title="Flow" value="E2E" detail="Full Lifecycle" />
                  </div>
                </div>
              </section>

              <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
                <div className="xl:col-span-2 bg-slate-950 p-10 rounded-[2.5rem] border border-slate-800 shadow-xl">
                  <h3 className="text-xl font-black text-white mb-8 flex items-center gap-3">
                    <Network className="text-blue-500" size={24} />
                    System Ecosystem
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-6">
                      <ComplexLifecycleItem icon={<UserCheck className="text-blue-500"/>} title="Identity & Auth" desc="Multi-role authentication (ADMIN, AGENT, CUSTOMER) with bcrypt encryption and JWT state management." />
                      <ComplexLifecycleItem icon={<Zap className="text-amber-500"/>} title="Rating Engine" desc="Dynamic logic calculating premiums based on age, asset value, and product base rates in real-time." />
                    </div>
                    <div className="space-y-6">
                      <ComplexLifecycleItem icon={<ShieldCheck className="text-emerald-500"/>} title="Issuance Flow" desc="Atomic conversion of quotes to policies with Idempotency protection to prevent duplicate billing." />
                      <ComplexLifecycleItem icon={<Activity className="text-rose-500"/>} title="Claims Orchestration" desc="Full FNOL (First Notice of Loss) workflow with adjuster oversight and settlement status tracking." />
                    </div>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-indigo-900/40 to-slate-950 p-8 rounded-[2.5rem] border border-blue-900/30 shadow-2xl relative overflow-hidden flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-black mb-6 text-blue-400 flex items-center gap-2">
                      <Settings size={20} /> Core Stack
                    </h3>
                    <div className="space-y-4">
                      <StatusRow label="Runtime" value="Node.js 20 LTS" />
                      <StatusRow label="Framework" value="Express 4.18" />
                      <StatusRow label="ODM" value="Mongoose 8.x" />
                      <StatusRow label="Auth" value="jsonwebtoken" />
                      <StatusRow label="Tracing" value="UUID v4" />
                    </div>
                  </div>
                  <div className="mt-8 pt-8 border-t border-slate-800/60">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
                        <Code size={20} className="text-blue-400" />
                      </div>
                      <div>
                        <p className="text-xs font-black text-white uppercase tracking-widest">OpenAPI 3.0</p>
                        <p className="text-[10px] text-slate-500">Full Swagger UI Integration</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Environment Setup Section */}
              <div className="bg-slate-900/50 p-10 rounded-[2.5rem] border border-slate-800 flex flex-col gap-8">
                <div className="flex items-center gap-4">
                  <CloudLightning className="text-emerald-400" size={32} />
                  <div>
                    <h3 className="text-xl font-black text-white uppercase tracking-tighter">Environment Configuration</h3>
                    <p className="text-xs text-slate-400">Required variables for local and production deployment.</p>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800">
                    <code className="text-xs font-mono text-emerald-400 block mb-2">MONGO_URI</code>
                    <p className="text-[10px] text-slate-500">Connection string for MongoDB Atlas Cluster.</p>
                  </div>
                  <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800">
                    <code className="text-xs font-mono text-emerald-400 block mb-2">JWT_SECRET</code>
                    <p className="text-[10px] text-slate-500">Private key for signing authentication tokens.</p>
                  </div>
                  <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800">
                    <code className="text-xs font-mono text-emerald-400 block mb-2">PORT</code>
                    <p className="text-[10px] text-slate-500">Server listening port (Default: 5000).</p>
                  </div>
                  <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800">
                    <code className="text-xs font-mono text-emerald-400 block mb-2">NODE_ENV</code>
                    <p className="text-[10px] text-slate-500">development / production (Toggles error stack traces).</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* MVC TAB */}
          {activeTab === 'mvc' && (
            <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-500 pb-20">
              <section className="bg-slate-950 p-12 rounded-[3.5rem] border border-slate-800/60 shadow-2xl">
                <h2 className="text-3xl font-black mb-12 text-white uppercase tracking-tighter">MVC Architectural Paradigm</h2>
                
                {/* Analogy Block */}
                <div className="bg-slate-900/50 p-10 rounded-[3rem] border border-slate-800 mb-12">
                  <h4 className="text-xs font-black text-blue-400 uppercase tracking-widest mb-6 flex items-center gap-2">
                    <Utensils size={16}/> The Restaurant Analogy
                  </h4>
                  <p className="text-sm text-slate-400 leading-loose mb-8 max-w-4xl">
                    Software Architecture can be complex. To understand <strong>MVC (Model-View-Controller)</strong>, think of a high-end restaurant. 
                    You (the User) don't go into the kitchen to cook (Direct Database Access). You sit at a table and order through a waiter.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <AnalogyCard 
                      icon={<User className="text-indigo-400" />} 
                      role="The Waiter (Controller)" 
                      tech="quoteController.js"
                      desc="Takes your order (Request). Checks if you're VIP (Auth). Tells the kitchen what to cook. Brings you the food."
                    />
                    <AnalogyCard 
                      icon={<ChefHat className="text-rose-400" />} 
                      role="The Kitchen (Model)" 
                      tech="Quote.js / Policy.js"
                      desc="Knows the recipes (Schema). Has the raw ingredients (Data). Cooks the meal (Database Operations)."
                    />
                    <AnalogyCard 
                      icon={<ScrollText className="text-emerald-400" />} 
                      role="The Plating (View)" 
                      tech="ApiResponse.js"
                      desc="Ensures the food looks good (JSON Format). You don't eat from a frying pan; you eat from a clean plate."
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <MVCCard 
                    type="M" title="Models" subtitle="Data Definitions"
                    icon={<Database className="text-indigo-500" />}
                    desc="Defines the Blueprints for our data in MongoDB. Handles constraints (e.g. required fields, unique emails) and encryption logic (hashing passwords)."
                    files={['User.js', 'Quote.js', 'Policy.js', 'Claim.js', 'Product.js']}
                  />
                  <MVCCard 
                    type="V" title="Views" subtitle="The Interface"
                    icon={<Eye className="text-emerald-500" />}
                    desc="In a Backend API, the View is the JSON response sent to the user. We use a unified class (ApiResponse.js) to ensure every response has the same format."
                    files={['ApiResponse.js']}
                  />
                  <MVCCard 
                    type="C" title="Controllers" subtitle="The Logic"
                    icon={<Cpu className="text-blue-500" size={24} />}
                    desc="The Brains of the application. Controllers process user inputs, perform calculations (Pricing Engine), and coordinate between the Model and the View."
                    files={['authController.js', 'quoteController.js', 'claimController.js', 'policyController.js']}
                  />
                </div>

                <div className="mt-12 bg-slate-950 p-8 rounded-[2.5rem] border border-slate-800 shadow-inner">
                  <h4 className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-4">Why do we separate them?</h4>
                  <ul className="space-y-4">
                    <BenefitItem title="Organization" desc="If the database changes, we only update the Model. If the business rules change, we only update the Controller." />
                    <BenefitItem title="Security" desc="The Controller acts as a gatekeeper. It sanitizes inputs before they ever touch the sensitive Database." />
                    <BenefitItem title="Teamwork" desc="One developer can work on the API logic (Controller) while another designs the Database Schema (Model)." />
                  </ul>
                </div>
              </section>
            </div>
          )}

          {/* CORE CONCEPTS TAB */}
          {activeTab === 'concepts' && (
            <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-500 pb-20">
              <section className="bg-slate-950 p-12 rounded-[3.5rem] border border-slate-800/60 shadow-2xl">
                <h2 className="text-3xl font-black mb-12 text-white uppercase tracking-tighter">Backend Core Concepts: Demystified</h2>
                
                <div className="grid grid-cols-1 gap-16">
                  
                  {/* JWT Section */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <ConceptBlock 
                      title="1. JSON Web Token (JWT)"
                      icon={<Key className="text-blue-500" />}
                      desc="A secure way to transmit information between parties as a JSON object."
                    >
                      <h4 className="text-xs font-black text-blue-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                        <KeyRound size={14}/> Layman Example: The Hotel Key Card
                      </h4>
                      <p className="text-xs text-slate-400 leading-loose mb-6">
                        Imagine checking into a hotel. The receptionist verifies your ID (Login) and gives you a <strong>Key Card (JWT)</strong>. 
                        The hotel doors (API Endpoints) don't know who you are; they just check if your card is valid and if it opens <em>this specific room</em>. 
                        If the card expires, you must go back to the desk (Login again).
                      </p>
                      <div className="p-4 bg-slate-950 rounded-2xl border border-slate-800 font-mono text-[10px] text-emerald-400">
                        Authorization: Bearer &lt;your_key_card_token&gt;
                      </div>
                    </ConceptBlock>
                    
                    <div className="bg-slate-900/50 p-10 rounded-[3rem] border border-slate-800 flex flex-col justify-center">
                      <h4 className="text-xs font-black text-white uppercase tracking-widest mb-6">Technical Anatomy</h4>
                      <div className="space-y-4">
                        <DetailBox title="1. Header" value="Algorithm (HS256) & Type (JWT)" color="text-rose-400" />
                        <DetailBox title="2. Payload" value="Data (User ID, Role, Expire Time)" color="text-indigo-400" />
                        <DetailBox title="3. Signature" value="Hashed(Header + Payload + Secret)" color="text-emerald-400" />
                      </div>
                    </div>
                  </div>

                  {/* Idempotency Section */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <div className="bg-slate-900/50 p-10 rounded-[3rem] border border-slate-800 flex flex-col justify-center">
                      <h4 className="text-xs font-black text-white uppercase tracking-widest mb-6">The "Double-Click" Problem</h4>
                      <div className="bg-slate-950 p-6 rounded-3xl border border-slate-800 relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-6 opacity-10">
                          <Repeat size={100} className="text-indigo-500" />
                        </div>
                        <p className="text-xs text-slate-400 leading-loose relative z-10">
                          <strong>Without Idempotency:</strong><br/>
                          Agent clicks "Issue Policy". Wi-Fi lags. Agent clicks again. <br/>
                          <span className="text-rose-500 font-bold">Result: Customer is charged twice. Two policies created.</span>
                        </p>
                        <hr className="border-slate-800 my-4"/>
                        <p className="text-xs text-slate-400 leading-loose relative z-10">
                          <strong>With Idempotency-Key:</strong><br/>
                          Agent sends Key: "req_123". Server processes it. Agent clicks again with "req_123". <br/>
                          <span className="text-emerald-500 font-bold">Result: Server sees "req_123" is done. Returns original success. No double charge.</span>
                        </p>
                      </div>
                    </div>

                    <ConceptBlock 
                      title="2. Idempotency Protocol"
                      icon={<Repeat className="text-indigo-500" />}
                      desc="Ensuring that making the same request multiple times produces the same result as making it once."
                    >
                      <h4 className="text-xs font-black text-indigo-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                        <Coffee size={14}/> Layman Example: The Coffee Shop
                      </h4>
                      <p className="text-xs text-slate-400 leading-loose mb-6">
                        You order a Latte. The barista writes "Order #55" on the cup. 
                        If you shout "I want a Latte!" again, the barista checks the list. 
                        They see "Order #55" is already being made. They don't make a second coffee; they just give you the first one when it's ready.
                      </p>
                    </ConceptBlock>
                  </div>

                  {/* REST Section */}
                  <ConceptBlock 
                    title="3. REST Architecture (Representational State Transfer)"
                    icon={<Unplug className="text-emerald-500" />}
                    desc="A set of rules for how computers talk to each other over the web."
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-8">
                       <div>
                          <h4 className="text-xs font-black text-emerald-400 uppercase tracking-widest mb-4">Key Characteristics</h4>
                          <div className="space-y-6">
                             <RestFeature title="Statelessness" desc="The server has no memory of past requests. Every request must include the JWT token." />
                             <RestFeature title="Uniform Interface" desc="We use standard verbs (GET, POST) so any developer knows how to use the API without guessing." />
                             <RestFeature title="Resource-Based" desc="URLs represent 'Things' (Nouns), not actions. /policies, not /getPolicies." />
                          </div>
                       </div>
                       <div className="bg-slate-950 p-8 rounded-[2rem] border border-slate-800 shadow-inner">
                          <p className="text-[10px] font-black text-emerald-400 uppercase tracking-[0.2em] mb-6">HTTP Status Cheat Sheet</p>
                          <div className="space-y-4">
                             <StatusMap code="200" label="OK" desc="Success. Here is your data." />
                             <StatusMap code="201" label="Created" desc="Success. New record (Quote/Policy) created." />
                             <StatusMap code="400" label="Bad Request" desc="You sent invalid data (missing fields)." />
                             <StatusMap code="401" label="Unauthorized" desc="Who are you? (Missing/Invalid Token)." />
                             <StatusMap code="403" label="Forbidden" desc="I know who you are, but you can't do this." />
                             <StatusMap code="404" label="Not Found" desc="The ID you asked for doesn't exist." />
                             <StatusMap code="500" label="Server Error" desc="Something broke on our end." />
                          </div>
                       </div>
                    </div>
                  </ConceptBlock>
                </div>
              </section>
            </div>
          )}

          {/* ROLES TAB */}
          {activeTab === 'roles' && (
            <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500 pb-20">
              <section className="bg-slate-950 p-12 rounded-[3.5rem] border border-slate-800/60 shadow-2xl">
                <h2 className="text-3xl font-black mb-12 text-white flex items-center gap-4 uppercase tracking-tighter">
                   <Users className="text-blue-500" size={32} /> Role & Permission Matrix
                </h2>
                
                <div className="grid grid-cols-1 gap-6">
                  <RoleDetailCard 
                    role="ADMIN" access="Super User" color="text-indigo-400"
                    desc="System overseer. Full CRUD on all records. Manages Product base rates."
                    caps={['User Management', 'Master Data Updates', 'Universal Deletion']}
                  />
                  <RoleDetailCard 
                    role="UNDERWRITER" access="Risk Governance" color="text-emerald-400"
                    desc="Technical role responsible for reviewing large quotes and complex risk assessments."
                    caps={['Review High-Value Quotes', 'Modify Risk Flags', 'Underwriting Approval']}
                  />
                  <RoleDetailCard 
                    role="CLAIMS_ADJUSTER" access="Operations" color="text-rose-400"
                    desc="Technical role focused on loss investigation and financial settlement."
                    caps={['Update Claim Status', 'Set Reserves', 'Audit Loss Details']}
                  />
                  <RoleDetailCard 
                    role="AGENT" access="Sales Front-Office" color="text-blue-400"
                    desc="The primary transactional role. Connects customers to policies."
                    caps={['Create Quotes', 'Issue Policies', 'Portfolio View']}
                  />
                  <RoleDetailCard 
                    role="CUSTOMER" access="Self-Service" color="text-slate-400"
                    desc="End-user restricted strictly to their own data."
                    caps={['View Own Policies', 'Register Loss (FNOL)', 'Profile Updates']}
                  />
                </div>
              </section>
            </div>
          )}

          {/* STRUCTURE TAB */}
          {activeTab === 'structure' && (
            <div className="bg-slate-950 p-12 rounded-[3rem] border border-slate-800/60 shadow-2xl animate-in fade-in slide-in-from-bottom-4 duration-500">
              <h2 className="text-3xl font-black text-white mb-12 uppercase tracking-tighter">Project Hierarchy (100% File List)</h2>
              
              <div className="bg-slate-950 p-10 rounded-[2.5rem] font-mono text-xs border border-slate-800 shadow-inner overflow-x-auto">
                <FolderItem name="root" isOpen={expandedFolders.includes('root')} onToggle={() => toggleFolder('root')}>
                  <FileItem name="app.js" bold desc="Core express app initialization & Swagger documentation mounting." />
                  <FileItem name="server.js" bold desc="Start script: Binds database connection and launches HTTP listener." />
                  <FileItem name="db.js" bold desc="Mongoose connection utility." />
                  <FileItem name="seed.js" bold desc="Development utility to populate DB with master products and roles." />

                  <FolderItem name="controllers" isOpen={expandedFolders.includes('controllers')} onToggle={() => toggleFolder('controllers')}>
                    <FileItem name="authController.js" desc="Identity handshake: Handles Bcrypt validation and JWT issuance." />
                    <FileItem name="claimController.js" desc="Claim Lifecycle: Manages FNOL registration and status updates." />
                    <FileItem name="masterController.js" desc="Lookups: Serves Product and LOB lists to the client." />
                    <FileItem name="policyController.js" desc="Contract Management: Paginated lists and detail retrieval." />
                    <FileItem name="quoteController.js" desc="The Logic Core: Rating engine algorithm and atomic conversion." />
                  </FolderItem>

                  <FolderItem name="models" isOpen={expandedFolders.includes('models')} onToggle={() => toggleFolder('models')}>
                    <FileItem name="User.js" desc="Schema: Multi-role configuration and password hashing hooks." />
                    <FileItem name="Claim.js" desc="Schema: Loss event records and reserve tracking." />
                    <FileItem name="Policy.js" desc="Schema: Binding contracts with active/expired state." />
                    <FileItem name="Product.js" desc="Schema: Master rate dictionary." />
                    <FileItem name="Quote.js" desc="Schema: Risk assessment snapshots." />
                  </FolderItem>

                  <FolderItem name="routes" isOpen={expandedFolders.includes('routes')} onToggle={() => toggleFolder('routes')}>
                    <FileItem name="authRoutes.js" desc="/auth/* endpoints." />
                    <FileItem name="claimRoutes.js" desc="/claims/* endpoints." />
                    <FileItem name="masterRoutes.js" desc="/master/* endpoints." />
                    <FileItem name="policyRoutes.js" desc="/policies/* endpoints." />
                    <FileItem name="quoteRoutes.js" desc="/quotes/* endpoints." />
                    <FileItem name="utilityRoutes.js" desc="/utils/* endpoints (Health, Mock payments)." />
                  </FolderItem>

                  <FolderItem name="middlewares" isOpen={expandedFolders.includes('middlewares')} onToggle={() => toggleFolder('middlewares')}>
                    <FileItem name="auth.js" desc="Security: JWT decoding and RBAC permission checks." />
                    <FileItem name="correlationId.js" desc="Observability: Appending tracing ID to every req/res header." />
                    <FileItem name="errorHandler.js" desc="Resilience: Catching Mongoose errors and formatting JSON." />
                  </FolderItem>

                  <FolderItem name="utils" isOpen={expandedFolders.includes('utils')} onToggle={() => toggleFolder('utils')}>
                    <FileItem name="ApiResponse.js" desc="Standardization: The blueprint for all outgoing JSON." />
                  </FolderItem>
                </FolderItem>
              </div>
            </div>
          )}

          {/* API TAB */}
          {activeTab === 'api' && (
            <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-500 pb-20">
              <h2 className="text-4xl font-black flex items-center gap-4 text-white uppercase tracking-tighter">
                <Terminal size={36} className="text-blue-500" />
                Complete API Catalog
              </h2>
              
              <ApiSection title="1. Identity Management" color="blue" description="Endpoints for JWT session lifecycles.">
                <ApiDetail 
                  method="POST" url="/auth/register" title="User Onboarding"
                  desc="Creates a new account. Password is auto-hashed."
                  reqBody={{ name: "Ameya", email: "ameya@test.com", password: "p@ssword", role: "AGENT" }}
                  resBody={{ success: true, message: "User registered" }}
                />
                <ApiDetail 
                  method="POST" url="/auth/login" title="Credential Swap"
                  desc="Validates salted hash. Returns token valid for 7 days."
                  reqBody={{ email: "ameya@test.com", password: "password123" }}
                  resBody={{ success: true, token: "eyJhbGc...", user: { role: "AGENT" } }}
                />
                <ApiDetail 
                  method="GET" url="/auth/me" title="Identity Verification"
                  desc="Decodes current bearer token to return user profile."
                  reqHeaders={{ Authorization: "Bearer <token>" }}
                  resBody={{ success: true, data: { name: "Ameya", role: "AGENT" } }}
                />
              </ApiSection>

              <ApiSection title="2. Policy Administration" color="indigo" description="Managing the journey from risk to contract.">
                <ApiDetail 
                  method="POST" url="/quotes" title="Rating Ingestion"
                  desc="Submits risk data. Server calculates premium."
                  reqBody={{ productId: "65...", riskDetails: { age: 45, carValue: 60000 } }}
                  resBody={{ success: true, data: { quoteNo: "QTE-123", premium: 9000 } }}
                />
                <ApiDetail 
                  method="GET" url="/quotes/:id" title="Get Quote"
                  desc="Retrieves a specific quote by ID."
                  resBody={{ success: true, data: { quoteNo: "QTE-123", status: "NEW" } }}
                />
                <ApiDetail 
                  method="GET" url="/quotes/by-quote-no/:quoteNo" title="Get Quote by Business Key"
                  desc="Lookup quote using readable ID (QTE-XXX)."
                  resBody={{ success: true, data: { quoteNo: "QTE-123", premium: 9000 } }}
                />
                <ApiDetail 
                  method="POST" url="/quotes/:id/convert" title="Atomic Conversion"
                  desc="Issues a real Policy. Checks Idempotency-Key header to prevent duplicate issuance."
                  reqHeaders={{ "Idempotency-Key": "unique-request-uuid-v4" }}
                  resBody={{ success: true, data: { policyNo: "POL-77D2", status: "ACTIVE" } }}
                />
                <ApiDetail 
                  method="GET" url="/policies" title="List Policies"
                  desc="Paginated list of active policies with filtering."
                  reqHeaders={{ Authorization: "Bearer <token>" }}
                  resBody={{ success: true, data: [{ policyNo: "POL-001" }, { policyNo: "POL-002" }] }}
                />
                <ApiDetail 
                  method="GET" url="/policies/:id" title="Get Policy Detail"
                  desc="Retrieve full contract details."
                  resBody={{ success: true, data: { policyNo: "POL-001", startDate: "..." } }}
                />
                <ApiDetail 
                  method="GET" url="/policies/:id/download" title="Download Policy"
                  desc="Stub endpoint for generating policy PDF documents."
                  resBody={{ success: true, message: "Download initiated" }}
                />
              </ApiSection>

              <ApiSection title="3. Claims Management" color="rose" description="Handling First Notice of Loss and Settlement.">
                <ApiDetail 
                  method="POST" url="/claims" title="FNOL Registration"
                  desc="Registers a new claim against an active policy."
                  reqBody={{ policyId: "65...", lossDate: "2026-01-10", lossType: "ACCIDENT" }}
                  resBody={{ success: true, data: { status: "REGISTERED" } }}
                />
                <ApiDetail 
                  method="GET" url="/claims/:id" title="Get Claim"
                  desc="Retrieves claim details."
                  resBody={{ success: true, data: { status: "REGISTERED", description: "Crash" } }}
                />
                <ApiDetail 
                  method="PATCH" url="/claims/:id/status" title="Adjuster Action"
                  desc="Updates claim status (APPROVED/REJECTED/SETTLED)."
                  reqBody={{ status: "APPROVED", reserveAmount: 5000 }}
                  resBody={{ success: true, message: "Status updated" }}
                />
              </ApiSection>

              <ApiSection title="4. Master Data & Utils" color="emerald" description="System configuration and helper tools.">
                <ApiDetail 
                  method="GET" url="/master/products" title="Get Products"
                  desc="List all available insurance products."
                  resBody={{ success: true, data: [{ name: "Motor Insurance", basePremium: 5000 }] }}
                />
                <ApiDetail 
                  method="GET" url="/master/lobs" title="Get Lines of Business"
                  desc="List valid LOB codes (MOTOR, HEALTH, TRAVEL)."
                  resBody={{ success: true, data: [{ code: "MOTOR" }] }}
                />
                <ApiDetail 
                  method="GET" url="/master/risk-types" title="Get Risk Dictionaries"
                  desc="List available risk configurations."
                  resBody={{ success: true, data: [{ code: "HIGH_RISK" }] }}
                />
                <ApiDetail 
                  method="GET" url="/utils/health" title="Health Check"
                  desc="Verifies API uptime."
                  resBody={{ success: true, data: { status: "UP" } }}
                />
                <ApiDetail 
                  method="POST" url="/utils/upload" title="File Upload Mock"
                  desc="Simulates file upload for testing."
                  resBody={{ success: true, message: "File uploaded" }}
                />
                <ApiDetail 
                  method="POST" url="/utils/webhook/payment" title="Payment Webhook"
                  desc="Simulates external payment gateway callback."
                  reqBody={{ paymentId: "PAY-123", status: "SUCCESS" }}
                  resBody={{ success: true, message: "Webhook received" }}
                />
                <ApiDetail 
                  method="GET" url="/utils/debug/500" title="Force Error"
                  desc="Forces a server error to test the global error handler."
                  resBody={{ success: false, message: "Forced Server Error" }}
                />
              </ApiSection>
            </div>
          )}

          {/* FLOW TAB */}
          {activeTab === 'flow' && (
            <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-500 pb-20 text-left">
              <section className="bg-slate-950 p-12 rounded-[3.5rem] border border-slate-800/60 shadow-2xl">
                <h2 className="text-3xl font-black mb-16 text-white text-center uppercase tracking-tighter">Real-World E2E Scenarios</h2>
                
                <div className="grid grid-cols-1 gap-16">
                  {/* Scenario 1 */}
                  <div>
                    <h4 className="text-sm font-black text-emerald-400 uppercase tracking-widest mb-8 border-b border-emerald-500/20 pb-4 flex items-center gap-2">
                      <Lightbulb size={16}/> Scenario A: The "Happy Path" (Issuance)
                    </h4>
                    <div className="space-y-8">
                      <FlowStepDetail 
                        step="1" title="Agent Login" 
                        api="POST /auth/login"
                        logic="System verifies Agent's credentials and issues a Session Token."
                        impact="Agent is now Authenticated."
                      />
                      <FlowStepDetail 
                        step="2" title="Create Quote" 
                        api="POST /quotes"
                        logic="Agent inputs customer data. Engine calculates $500 premium."
                        impact="Quote QTE-101 Created (Status: NEW)."
                      />
                      <FlowStepDetail 
                        step="3" title="Bind Policy" 
                        api="POST /quotes/../convert"
                        logic="Agent accepts price. System locks Quote and generates Policy."
                        impact="Policy POL-888 Created (Status: ACTIVE)."
                      />
                    </div>
                  </div>

                  {/* Scenario 2 */}
                  <div>
                    <h4 className="text-sm font-black text-rose-400 uppercase tracking-widest mb-8 border-b border-rose-500/20 pb-4 flex items-center gap-2">
                      <XCircle size={16}/> Scenario B: The "Rejection Path" (Risk Fail)
                    </h4>
                    <div className="space-y-8">
                      <FlowStepDetail 
                        step="1" title="Customer Login" 
                        api="POST /auth/login"
                        logic="Customer logs in to self-service portal."
                        impact="Customer Authenticated."
                      />
                      <FlowStepDetail 
                        step="2" title="Attempt Quote" 
                        api="POST /quotes"
                        logic="Customer inputs data. Logic detects 'High Risk' geography."
                        impact="Quote Created but flagged for Review."
                      />
                      <FlowStepDetail 
                        step="3" title="Underwriter Rejection" 
                        api="Manual Process"
                        logic="Underwriter reviews risk data and marks as declinable."
                        impact="Quote Status -> REJECTED."
                      />
                    </div>
                  </div>

                  {/* Scenario 3 */}
                  <div>
                    <h4 className="text-sm font-black text-blue-400 uppercase tracking-widest mb-8 border-b border-blue-500/20 pb-4 flex items-center gap-2">
                      <DollarSign size={16}/> Scenario C: The "Settlement Path" (Claims)
                    </h4>
                    <div className="space-y-8">
                      <FlowStepDetail 
                        step="1" title="FNOL Registration" 
                        api="POST /claims"
                        logic="Customer reports accident. System links it to Policy POL-888."
                        impact="Claim CLM-909 Created (Status: REGISTERED)."
                      />
                      <FlowStepDetail 
                        step="2" title="Adjuster Review" 
                        api="GET /claims/CLM-909"
                        logic="Adjuster pulls claim details and reviews evidence."
                        impact="Investigation Initiated."
                      />
                      <FlowStepDetail 
                        step="3" title="Payout Approval" 
                        api="PATCH /claims/../status"
                        logic="Adjuster sets reserve to $2000 and approves."
                        impact="Claim Status -> APPROVED. Payment triggered."
                      />
                    </div>
                  </div>
                </div>
              </section>
            </div>
          )}

          {/* MODELS TAB */}
          {activeTab === 'models' && (
            <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500 pb-20">
              <section className="bg-slate-950 p-12 rounded-[3rem] border border-slate-800/60 shadow-2xl">
                <h2 className="text-3xl font-black mb-12 text-white uppercase tracking-tighter">Data Schema Architecture</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                  <ModelDetailCard 
                    title="User" 
                    fields={['name (String)', 'email (String, Unique)', 'password (String, hidden)', 'role (Enum)']} 
                    icon={<UserCheck size={20}/>} 
                    color="blue" 
                    logic="Password automatically hashed via pre-save hook using Bcrypt (10 salts)."
                  />
                  <ModelDetailCard 
                    title="Quote" 
                    fields={['quoteNo (String)', 'productId (Ref)', 'riskDetails (Mixed Object)', 'premium (Number)', 'status (NEW/CONVERTED)']} 
                    icon={<Zap size={20}/>} 
                    color="indigo" 
                    logic="Captures the moment-in-time premium calculation for an applicant."
                  />
                  <ModelDetailCard 
                    title="Policy" 
                    fields={['policyNo (String)', 'quoteId (ObjectId)', 'startDate (Date)', 'endDate (Date)', 'status (ACTIVE/EXPIRED)']} 
                    icon={<FileCode size={20}/>} 
                    color="emerald" 
                    logic="Created only via Quote Conversion. Duration defaults to 365 days."
                  />
                  <ModelDetailCard 
                    title="Claim" 
                    fields={['policyId (Ref)', 'lossDate (Date)', 'lossType (Enum)', 'reserveAmount (Number)', 'status (REGISTERED/APPROVED/SETTLED)']} 
                    icon={<Activity size={20}/>} 
                    color="rose" 
                    logic="Validates policy activity before allowing registration of the loss."
                  />
                  <ModelDetailCard 
                    title="Product" 
                    fields={['name (String)', 'lob (MOTOR/HEALTH/PROPERTY)', 'basePremium (Number)']} 
                    icon={<Layers size={20}/>} 
                    color="amber" 
                    logic="Master dictionary used by the controller to pull base financial rates."
                  />
                </div>
              </section>
            </div>
          )}

          {/* TESTING TAB */}
          {activeTab === 'testing' && (
            <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-500 pb-20">
              <section className="bg-slate-950 p-12 rounded-[3.5rem] border border-slate-800/60 shadow-2xl">
                <h2 className="text-3xl font-black mb-12 text-white uppercase tracking-tighter">QA Testing & Bug Hunting Suite</h2>
                
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <DenseTestCard title="Success Paths" icon={<CheckCircle2 className="text-green-500"/>} type="success">
                    <p className="mb-4">Standard end-to-end journey verification.</p>
                    <ul className="space-y-3">
                      <li className="flex gap-3">• Login {'->'} Create Quote (Age 45) {'->'} Verify 20% Hike.</li>
                      <li className="flex gap-3">• Convert Quote {'->'} List Policy {'->'} Verify StartDate=Now.</li>
                      <li className="flex gap-3">• Submit Claim {'->'} Adjuster Approve {'->'} Verify settled status.</li>
                    </ul>
                  </DenseTestCard>
                  
                  <DenseTestCard title="Security & Rejection" icon={<Lock className="text-rose-500"/>} type="error">
                    <p className="mb-4">Verifying access controls and error handling.</p>
                    <ul className="space-y-3">
                      <li className="flex gap-3">• Attempt Claim Update as CUSTOMER (Expect 403).</li>
                      <li className="flex gap-3">• Attempt Quote Creation without Auth (Expect 401).</li>
                      <li className="flex gap-3">• Input invalid MongoDB ID (Expect 400 CastError).</li>
                    </ul>
                  </DenseTestCard>
                  
                  <DenseTestCard title="System Integrity" icon={<GitBranch className="text-amber-500"/>} type="warning">
                    <p className="mb-4">Race conditions and boundary testing.</p>
                    <ul className="space-y-3">
                      <li className="flex gap-3">• Re-use Idempotency-Key on conversion (Expect 400).</li>
                      <li className="flex gap-3">• Input CarValue exactly 50,000 (Verify threshold).</li>
                      <li className="flex gap-3">• Submit Claim on Expired Policy (Expect rejection).</li>
                    </ul>
                  </DenseTestCard>
                </div>

                <div className="mt-20 p-10 bg-slate-900 border border-slate-800 rounded-[3rem] relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-12 opacity-[0.05] text-blue-500 group-hover:scale-110 transition-transform duration-700">
                    <Bug size={200} />
                  </div>
                  <h4 className="text-blue-400 font-bold mb-6 flex items-center gap-3 uppercase tracking-widest text-xs">
                    <Layers size={18} />
                    Observability: Traceability Log
                  </h4>
                  <p className="text-sm text-slate-400 mb-10 leading-relaxed max-w-2xl">
                    Every request is stamped with a unique **X-Correlation-Id**. For multi-step automated tests, pass this ID across all related calls to generate a unified trace in the server logs.
                  </p>
                  <div className="bg-slate-950 p-8 rounded-2xl text-emerald-500 font-mono text-xs border border-slate-800 shadow-inner flex justify-between items-center">
                    <code>X-Correlation-Id: {crypto.randomUUID()}</code>
                    <span className="text-[10px] text-slate-600 uppercase font-black tracking-widest">Trace Generated</span>
                  </div>
                </div>
              </section>
            </div>
          )}
        </main>
      </div>

      <footer className="bg-slate-950 border-t border-slate-900/60 py-12">
        <div className="container mx-auto px-6 text-center">
          <p className="text-slate-600 text-[10px] font-black uppercase tracking-[0.5em] mb-4">Enterprise PAS technical manual</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
