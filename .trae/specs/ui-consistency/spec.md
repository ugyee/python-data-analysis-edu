# UI一致性规范 Spec

## Why
确保所有新增页面都遵循统一的Modern Soft-Neo UI风格，并提供一致的导航体验（返回按钮）。

## What Changes
- 为所有页面添加返回按钮
- 保持Modern Soft-Neo UI风格一致性
- 确保新添加的功能页面符合设计规范

## Impact
- Affected specs: 所有页面组件
- Affected code: 所有页面tsx文件

## ADDED Requirements

### Requirement: 页面返回按钮
所有非首页页面必须提供返回导航功能。

#### Scenario: 返回导航
- **WHEN** 用户点击页面上的返回按钮
- **THEN** 页面返回到上一级页面

#### Scenario: 返回按钮设计
- **WHEN** 设计新的功能页面
- **THEN** 在页面顶部或导航栏添加返回按钮
- **AND** 返回按钮使用柔和的圆角设计
- **AND** 返回按钮图标清晰可见

### Requirement: Modern Soft-Neo UI风格
所有新增内容必须遵循Modern Soft-Neo UI风格。

#### Scenario: 颜色规范
- **WHEN** 设计新页面
- **THEN** 使用柔紫色系（#8C7CF0、#C6B9FF）作为主色调
- **AND** 使用柔绿、柔黄、淡橙作为强调色
- **AND** 背景使用浅灰白色（#FAFAFC）

#### Scenario: 布局规范
- **WHEN** 设计新页面
- **THEN** 使用圆角卡片设计（border-radius: 1.5rem左右）
- **AND** 使用柔和阴影（box-shadow）
- **AND** 保持大量留白
- **AND** 信息分组清晰

#### Scenario: 插画规范
- **WHEN** 需要添加装饰性元素
- **THEN** 使用现代扁平插画风格
- **AND** 人物采用大头身、圆润风格
- **AND** 颜色以柔紫系为主，暖色点缀

## MODIFIED Requirements

### Requirement: 页面设计规范
所有新增页面必须：
- 使用统一的颜色系统
- 使用圆角卡片布局
- 提供返回导航
- 使用柔和阴影效果
- 保持响应式设计
