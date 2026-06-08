import { useState } from 'react';
import { Copy, CheckCircle, Code, Terminal } from 'lucide-react';

interface PracticeBlockProps {
  title: string;
  objective: string;
  codeTemplate: string;
  expectedOutput: string;
}

export function PracticeBlock({ title, objective, codeTemplate, expectedOutput }: PracticeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(codeTemplate);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-gradient-to-br from-primary-50 to-purple-50/30 rounded-2xl p-5 mb-6 border border-primary-100">
      <div className="flex items-center gap-2 mb-4">
        <Code size={20} className="text-primary-600" />
        <h3 className="font-semibold text-soft-text">{title}</h3>
      </div>

      <div className="mb-4">
        <span className="text-sm font-medium text-soft-muted">练习目标</span>
        <p className="text-soft-text mt-1">{objective}</p>
      </div>

      <div className="bg-slate-900 rounded-xl p-4 mb-4">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
          </div>
          <button
            onClick={handleCopy}
            className="flex items-center gap-1.5 px-3 py-1 text-xs text-slate-400 hover:text-white transition-colors"
          >
            {copied ? (
              <>
                <CheckCircle size={14} className="text-green-400" />
                <span className="text-green-400">已复制</span>
              </>
            ) : (
              <>
                <Copy size={14} />
                <span>复制代码</span>
              </>
            )}
          </button>
        </div>
        <pre className="text-sm text-slate-300 overflow-x-auto">
          <code>{codeTemplate}</code>
        </pre>
      </div>

      <div className="bg-white rounded-xl p-4 border border-primary-100">
        <div className="flex items-center gap-2 mb-2">
          <Terminal size={16} className="text-green-500" />
          <span className="text-sm font-medium text-soft-muted">预期输出</span>
        </div>
        <pre className="text-sm text-soft-text bg-slate-50 rounded-lg p-3">
          {expectedOutput}
        </pre>
      </div>
    </div>
  );
}
