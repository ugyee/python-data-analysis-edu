# 页面布局优化 Spec

## Why
简化页面结构，将十个实战项目直接展示在首页，提升用户体验和访问效率。同时为所有非首页页面添加返回按钮，方便用户导航。

## What Changes
- 删除首页的课程分类模块
- 删除成就页面及相关导航
- 首页直接展示十个实战项目课程
- 为所有非首页页面添加返回按钮

## Impact
- Affected specs: 首页、成就页面、导航组件
- Affected code: src/pages/Home.tsx, src/pages/Achievements.tsx, src/components/Navbar.tsx, src/App.tsx

## ADDED Requirements

### Requirement: 首页展示十个项目
首页应直接展示十个实战项目课程，无需分类筛选。

#### Scenario: 访问首页
- **WHEN** 用户访问首页
- **THEN** 直接显示十个实战项目课程卡片

### Requirement: 页面返回按钮
所有非首页页面都应有返回按钮，方便用户返回上一页。

#### Scenario: 课程详情页返回
- **WHEN** 用户在课程详情页点击返回按钮
- **THEN** 返回到课程列表页或首页

#### Scenario: 学习页返回
- **WHEN** 用户在学习页点击返回按钮
- **THEN** 返回到课程详情页

## REMOVED Requirements

### Requirement: 课程分类模块
**Reason**: 简化首页结构，直接展示项目
**Migration**: 移除分类筛选组件

### Requirement: 成就页面
**Reason**: 简化平台功能，专注核心学习
**Migration**: 移除成就页面及相关导航链接
