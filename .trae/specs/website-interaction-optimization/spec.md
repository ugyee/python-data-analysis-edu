# 网站优化 Spec（严格遵守改动限制）

## 改动限制（绝对不动）
- ❌ 不改任何间距、颜色、字体、按钮大小、卡片尺寸
- ❌ 不改首屏Hero区域
- ❌ 不做响应式适配
- ❌ 不修改任何现有布局结构
- ❌ 不添加浮动元素、侧边栏、弹窗（除非是可关闭的临时提示）

## 允许改动的内容
- `<head>`中的meta/title/link
- 按钮的disabled状态和文字
- 追加loading提示元素
- 增加JS交互反馈
- 增加本地存储
- 增加可折叠区域
- 增加sitemap.xml/robots.txt
- 增加代码运行时错误友好提示

## What Changes

### 🔴 高优先级
1. **SEO基础补齐**：更新<head>中的title、meta description、keywords、author
2. **点击反馈优化**：开始学习按钮添加loading状态和disabled
3. **环境加载失败降级**：8秒超时后显示友好提示条

### 🟡 中优先级
4. **课程设计者简介**：页面底部添加<details>折叠区域
5. **学习进度本地存储**：localStorage记录已完成项目，显示✅角标
6. **运行示例代码测试**：验证环境是否正常

### 🟢 低优先级
7. **sitemap.xml和robots.txt**：SEO友好
8. **结构化数据JSON-LD**：在<head>中追加

## Impact
- Affected code: index.html, 现有页面JS逻辑
- 不影响任何CSS样式和布局结构

## ADDED Requirements

### Requirement: SEO基础补齐
在<head>中添加meta标签。

#### Scenario: SEO标签
- **WHEN** 搜索引擎爬虫访问
- **THEN** title为"Pandas数据分析实战训练营 | 10个实战项目 浏览器内运行代码"
- **THEN** meta description包含相关关键词

### Requirement: 按钮点击反馈
开始学习按钮添加loading状态。

#### Scenario: 按钮点击
- **WHEN** 用户点击"开始学习"按钮
- **THEN** 按钮文字变为"⏳ 加载中..."并设置disabled
- **THEN** 防止重复点击

### Requirement: 环境加载失败降级
加载超时时显示友好提示。

#### Scenario: 加载失败
- **WHEN** Pyodide加载超时（>8秒）
- **THEN** 显示可关闭的提示条

### Requirement: 课程设计者简介
页面底部添加可折叠区域。

#### Scenario: 展开简介
- **WHEN** 用户点击"课程设计者"
- **THEN** 展开显示简介内容

### Requirement: 学习进度存储
localStorage记录已完成项目。

#### Scenario: 标记完成
- **WHEN** 用户点击"标记完成"
- **THEN** localStorage保存项目ID
- **THEN** 刷新后显示✅角标

### Requirement: 环境测试按钮
代码编辑器上方增加测试按钮。

#### Scenario: 测试环境
- **WHEN** 用户点击"测试运行"
- **THEN** 运行import pandas测试代码
- **THEN** 显示成功或失败提示

### Requirement: sitemap.xml和robots.txt
创建SEO文件。

#### Scenario: 搜索引擎访问
- **WHEN** 搜索引擎爬虫访问
- **THEN** robots.txt允许抓取
- **THEN** sitemap.xml提供URL列表

### Requirement: 结构化数据
在<head>添加JSON-LD。

#### Scenario: 结构化数据
- **WHEN** 搜索引擎解析页面
- **THEN** JSON-LD提供课程列表信息
