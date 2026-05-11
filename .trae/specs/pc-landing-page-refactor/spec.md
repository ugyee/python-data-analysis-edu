# PC端单页网站重构 Spec

## Why
当前网站是基于React的SPA应用，但用户需要一个纯PC端的静态页面网站，只考虑宽度≥1200px的显示效果。需要创建一个简洁高效的单页网站，包含所有内容、导航和交互功能。

## What Changes
1. **排版文字优化**：统一标题层级、关键内容高亮、段落间距、页面宽度和配色
2. **导航结构重构**：左侧固定侧边栏、顶部导航、章节切换按钮
3. **代码高亮优化**：使用highlight.js实现语法高亮
4. **项目分类标签**：入门/进阶/综合三个难度标签
5. **辅助功能**：回到顶部按钮、模块分隔线、进度提示

## Impact
- Affected specs: 首页、课程概览、项目详情
- Affected code: 新建 index.html（完全重构）

## ADDED Requirements

### Requirement: 排版规范
页面应遵循统一的排版规范。

#### Scenario: 标题层级展示
- **WHEN** 用户访问页面
- **THEN** 一级标题28px粗体、二级标题22px粗体、三级标题18px粗体

#### Scenario: 关键内容高亮
- **WHEN** 页面渲染
- **THEN** 关键知识点用strong标签+蓝色(#3b82f6)高亮

#### Scenario: 正文样式
- **WHEN** 页面渲染
- **THEN** 正文16px、行高1.6、段落间距16px

#### Scenario: 页面布局
- **WHEN** 页面渲染
- **THEN** 最大宽度1400px居中、背景色#f9fafb、主文字色#1f2937

### Requirement: 左侧固定侧边栏
左侧应有固定侧边栏显示所有章节链接。

#### Scenario: 侧边栏导航
- **WHEN** 用户滚动页面
- **THEN** 侧边栏固定显示（宽度260px、白色背景、阴影）
- **THEN** 当前阅读区域对应条目高亮

### Requirement: 顶部导航栏
顶部应有简单导航栏。

#### Scenario: 顶部导航
- **WHEN** 用户访问页面
- **THEN** 顶部固定半透明导航栏
- **THEN** 包含首页、知识点大全、实战项目三个链接

### Requirement: 章节切换按钮
每个模块结束后应有上一节/下一节按钮。

#### Scenario: 章节切换
- **WHEN** 用户点击"下一节"按钮
- **THEN** 平滑滚动到下一个模块

### Requirement: 代码高亮
代码块应使用highlight.js进行语法高亮。

#### Scenario: 代码展示
- **WHEN** 页面渲染代码块
- **THEN** 深色背景(#1e1e1e)、浅色文字(#d4d4d4)
- **THEN** 关键字高亮为#569cd6、字符串#ce9178、注释#6a9955

### Requirement: 项目难度标签
每个项目应有难度标签。

#### Scenario: 难度标签展示
- **WHEN** 用户查看项目列表
- **THEN** 入门项目显示绿色标签
- **THEN** 进阶项目显示橙色标签
- **THEN** 综合项目显示红色标签

### Requirement: 复制代码按钮
每个代码块应有复制按钮。

#### Scenario: 复制代码
- **WHEN** 用户点击复制按钮
- **THEN** 代码复制到剪贴板并显示提示

### Requirement: 回到顶部按钮
右下角应有回到顶部按钮。

#### Scenario: 回到顶部
- **WHEN** 用户滚动超过300px
- **THEN** 显示回到顶部按钮
- **WHEN** 用户点击按钮
- **THEN** 平滑滚动到页面顶部

### Requirement: 模块分隔线
主要模块之间应有分隔线。

#### Scenario: 模块分隔
- **WHEN** 页面渲染
- **THEN** 大模块之间用2px浅灰色虚线分隔

### Requirement: 进度提示
侧边栏底部显示当前学习进度。

#### Scenario: 进度展示
- **WHEN** 用户访问页面
- **THEN** 侧边栏底部显示"已完成 0/10 项目"

## MODIFIED Requirements
无

## REMOVED Requirements
- React SPA架构 → 纯HTML单页应用
- 移动端适配 → 仅PC端（≥1200px）
