import { useState, useCallback, useEffect } from 'react';
import { Code, Play, RefreshCw, Copy, CheckCircle, Terminal } from 'lucide-react';

interface CodeEditorProps {
  initialCode: string;
  expectedOutput: string;
  hints: string[];
  solution?: string;
}

export function CodeEditor({ initialCode, expectedOutput, hints, solution }: CodeEditorProps) {
  const [code, setCode] = useState(initialCode);
  const [output, setOutput] = useState('');
  const [isRunning, setIsRunning] = useState(false);
  const [copied, setCopied] = useState(false);
  const [showSolution, setShowSolution] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    async function loadPyodide() {
      const pyodideScript = document.createElement('script');
      pyodideScript.src = 'https://cdn.jsdelivr.net/pyodide/v0.26.0/full/pyodide.js';
      pyodideScript.onload = () => {
        (window as any).loadPyodide().then((pyodide: any) => {
          (window as any).pyodide = pyodide;
        });
      };
      document.head.appendChild(pyodideScript);
      return () => {
        document.head.removeChild(pyodideScript);
      };
    }
    loadPyodide();
  }, []);

  const handleRun = useCallback(async () => {
    setOutput('');
    setError('');
    
    if (!(window as any).pyodide) {
      setError('Pyodide 正在加载中，请稍候...');
      return;
    }

    setIsRunning(true);
    
    try {
      const pyodide = (window as any).pyodide;
      await pyodide.loadPackage(['pandas', 'numpy']);
      
      const fullCode = `
import sys
from io import StringIO

# 捕获输出
old_stdout = sys.stdout
captured_output = StringIO()
sys.stdout = captured_output

# 用户代码
${code}

# 恢复输出
sys.stdout = old_stdout

# 获取捕获的输出
captured_output.getvalue()
`;
      
      const result = await pyodide.runPythonAsync(fullCode);
      setOutput(result);
    } catch (err) {
      setError(String(err));
    } finally {
      setIsRunning(false);
    }
  }, [code]);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleReset = () => {
    setCode(initialCode);
    setOutput('');
    setError('');
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent-green to-accent-cyan flex items-center justify-center">
          <Code className="text-white" size={24} />
        </div>
        <div>
          <h2 className="text-xl font-bold text-soft-text">在线代码练习</h2>
          <p className="text-soft-muted text-sm">编写Python代码并运行查看结果</p>
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between mb-2 px-4 py-2 bg-slate-900 rounded-t-xl">
          <span className="text-xs text-slate-400">practice.py</span>
          <div className="flex items-center gap-2">
            <button
              onClick={handleCopy}
              className="flex items-center gap-1 text-xs text-slate-400 hover:text-white transition-colors"
            >
              {copied ? (
                <>
                  <CheckCircle size={14} className="text-green-400" />
                  <span className="text-green-400">已复制</span>
                </>
              ) : (
                <>
                  <Copy size={14} />
                  <span>复制</span>
                </>
              )}
            </button>
            <button
              onClick={handleReset}
              className="flex items-center gap-1 text-xs text-slate-400 hover:text-white transition-colors"
            >
              <RefreshCw size={14} />
              <span>重置</span>
            </button>
            <button
              onClick={handleRun}
              disabled={isRunning}
              className="flex items-center gap-1 px-3 py-1 bg-gradient-to-r from-orange-500 to-amber-500 text-white text-xs rounded-lg hover:shadow-lg transition-all disabled:opacity-50"
            >
              {isRunning ? (
                <>
                  <RefreshCw size={14} className="animate-spin" />
                  <span>运行中...</span>
                </>
              ) : (
                <>
                  <Play size={14} />
                  <span>运行</span>
                </>
              )}
            </button>
          </div>
        </div>
        <textarea
          value={code}
          onChange={(e) => setCode(e.target.value)}
          className="w-full h-64 bg-slate-900 text-slate-300 p-4 rounded-b-xl font-mono text-sm resize-none focus:outline-none focus:ring-2 focus:ring-primary-500/50"
          placeholder="在此输入Python代码..."
          spellCheck={false}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div>
          <h3 className="text-sm font-semibold text-soft-text mb-3 flex items-center gap-2">
            <Terminal className="text-accent-green" size={18} />
            运行输出
          </h3>
          <div className={`min-h-40 rounded-xl p-4 font-mono text-sm ${
            error ? 'bg-red-50 text-red-600' : output ? 'bg-slate-50 text-soft-text' : 'bg-slate-100 text-slate-400'
          }`}>
            {isRunning ? (
              <span className="text-primary-600">正在运行...</span>
            ) : error ? (
              <pre>{error}</pre>
            ) : output ? (
              <pre>{output}</pre>
            ) : (
              <span>点击运行按钮查看输出结果</span>
            )}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-soft-text mb-3">预期输出</h3>
          <div className="min-h-40 bg-slate-50 rounded-xl p-4 font-mono text-sm text-soft-text">
            <pre>{expectedOutput}</pre>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-sm font-semibold text-soft-text mb-3">提示</h3>
        <ul className="space-y-2">
          {hints.map((hint, index) => (
            <li key={index} className="flex items-start gap-2 text-sm text-soft-muted">
              <span className="w-5 h-5 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center text-xs flex-shrink-0 mt-0.5">
                {index + 1}
              </span>
              <span>{hint}</span>
            </li>
          ))}
        </ul>
      </div>

      {solution && (
        <div>
          <button
            onClick={() => setShowSolution(!showSolution)}
            className="flex items-center gap-2 px-4 py-2 bg-primary-100 text-primary-600 rounded-xl hover:bg-primary-200 transition-colors"
          >
            {showSolution ? '隐藏答案' : '查看答案'}
          </button>

          {showSolution && (
            <div className="mt-4">
              <h3 className="text-sm font-semibold text-soft-text mb-3">参考答案</h3>
              <div className="bg-slate-900 rounded-xl p-4 overflow-x-auto">
                <pre className="text-sm text-slate-300 whitespace-pre-wrap">
                  <code>{solution}</code>
                </pre>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}