import { useState, useCallback, useEffect, useRef } from 'react';
import { Play, RefreshCw } from 'lucide-react';

export function MiniCodeRunner() {
  const [code, setCode] = useState(`import pandas as pd
import numpy as np
import matplotlib.pyplot as plt

# 示例：创建DataFrame
data = {'姓名': ['张三', '李四', '王五', '赵六'], 
        '年龄': [25, 30, 28, 32],
        '城市': ['北京', '上海', '广州', '深圳']}
df = pd.DataFrame(data)
print(df)

# 示例：绘图
plt.figure(figsize=(8, 5))
plt.bar(df['姓名'], df['年龄'], color='#8B5CF6')
plt.title('年龄分布')
plt.xlabel('姓名')
plt.ylabel('年龄')
plt.show()
`);
  const [output, setOutput] = useState('');
  const [isRunning, setIsRunning] = useState(false);
  const [hasLoaded, setHasLoaded] = useState(false);
  const [error, setError] = useState('');
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    async function loadPyodide() {
      const pyodideScript = document.createElement('script');
      pyodideScript.src = 'https://cdn.jsdelivr.net/pyodide/v0.26.0/full/pyodide.js';
      pyodideScript.onload = async () => {
        const pyodide = await (window as any).loadPyodide();
        (window as any).pyodide = pyodide;
        await pyodide.loadPackage(['pandas', 'numpy', 'matplotlib']);
        setHasLoaded(true);
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
      setError('Pyodide 加载中...');
      return;
    }

    setIsRunning(true);
    
    try {
      const pyodide = (window as any).pyodide;
      
      const fullCode = `
import matplotlib.pyplot as plt
import io
import sys
from io import StringIO

plt.switch_backend('Agg')

# 捕获输出
old_stdout = sys.stdout
captured_output = StringIO()
sys.stdout = captured_output

# 绘图函数
def show_plot():
    buf = io.BytesIO()
    plt.savefig(buf, format='png', bbox_inches='tight')
    buf.seek(0)
    import base64
    return base64.b64encode(buf.read()).decode('utf-8')

# 用户代码
${code}

# 恢复输出
sys.stdout = old_stdout

# 获取捕获的输出
output_text = captured_output.getvalue()

# 获取图片
plot_image = show_plot()

output_text, plot_image
`;
      
      const result = await pyodide.runPythonAsync(fullCode);
      
      if (result) {
        const [text, img] = result;
        setOutput(text);
        
        if (img && typeof img === 'string' && img.length > 0) {
          if (imgRef.current) {
            imgRef.current.src = `data:image/png;base64,${img}`;
          }
        }
      }
    } catch (err) {
      setError(String(err));
    } finally {
      setIsRunning(false);
    }
  }, [code]);

  const handleReset = () => {
    setCode(`import pandas as pd
import numpy as np
import matplotlib.pyplot as plt

# 示例：创建DataFrame
data = {'姓名': ['张三', '李四', '王五', '赵六'], 
        '年龄': [25, 30, 28, 32],
        '城市': ['北京', '上海', '广州', '深圳']}
df = pd.DataFrame(data)
print(df)

# 示例：绘图
plt.figure(figsize=(8, 5))
plt.bar(df['姓名'], df['年龄'], color='#8B5CF6')
plt.title('年龄分布')
plt.xlabel('姓名')
plt.ylabel('年龄')
plt.show()
`);
    setOutput('');
    setError('');
    if (imgRef.current) {
      imgRef.current.src = '';
    }
  };

  return (
    <div className="bg-white rounded-3xl p-5 shadow-card">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold text-soft-text">Python 在线运行</h3>
        <span className={`text-xs px-2 py-0.5 rounded-full ${hasLoaded ? 'bg-green-100 text-green-600' : 'bg-yellow-100 text-yellow-600'}`}>
          {hasLoaded ? '就绪' : '加载中'}
        </span>
      </div>
      
      <textarea
        value={code}
        onChange={(e) => setCode(e.target.value)}
        className="w-full h-64 bg-slate-900 text-slate-300 p-4 rounded-xl font-mono text-sm resize-none focus:outline-none focus:ring-2 focus:ring-primary-500/50 mb-4"
        placeholder="输入Python代码..."
        spellCheck={false}
      />
      
      <div className="flex items-center justify-between mb-4">
        <button
          onClick={handleRun}
          disabled={isRunning || !hasLoaded}
          className="flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-orange-500 to-amber-500 text-white text-sm rounded-lg hover:shadow-md transition-all disabled:opacity-50"
        >
          {isRunning ? (
            <>
              <RefreshCw size={16} className="animate-spin" />
              <span>运行中</span>
            </>
          ) : (
            <>
              <Play size={16} />
              <span>运行</span>
            </>
          )}
        </button>
        <button
          onClick={handleReset}
          className="flex items-center gap-2 px-5 py-2 bg-slate-100 text-slate-600 text-sm rounded-lg hover:bg-slate-200 transition-colors"
        >
          <RefreshCw size={16} />
          <span>重置</span>
        </button>
      </div>
      
      <div className="bg-slate-50 rounded-xl p-4 min-h-40 max-h-80 overflow-auto">
        <pre className={`text-sm font-mono whitespace-pre-wrap ${error ? 'text-red-600' : 'text-soft-text'}`}>
          {isRunning ? '运行中...' : error || output || '输出将显示在这里'}
        </pre>
        {imgRef.current?.src && (
          <img ref={imgRef} alt="plot" className="w-full mt-3 rounded-lg" />
        )}
      </div>
      
      <div className="mt-4 pt-4 border-t border-slate-100">
        <p className="text-sm text-soft-muted">支持: pandas, numpy, matplotlib</p>
      </div>
    </div>
  );
}