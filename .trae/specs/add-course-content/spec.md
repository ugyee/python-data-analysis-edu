# 补充课程内容 Spec

## Why
用户提供了完整的Python数据分析十大实战项目教程，包含详细的学习目标、核心概念、Python代码实操案例和选择题。需要将这些内容补充到网页中。

## What Changes
- 更新mockData.ts，添加完整的课程内容
- 为每个项目添加学习目标
- 为每个项目添加核心概念说明
- 为每个项目添加Python代码实操案例
- 为每个项目添加3道选择题（含答案）

## Impact
- Affected specs: 课程体系模块、练习模块、测评模块
- Affected code: src/data/mockData.ts

## ADDED Requirements

### Requirement: 十个完整实战项目内容
每个项目应包含：

1. **学习目标**：明确的学习要点
2. **核心概念**：通俗易懂的解释
3. **Python代码实操**：完整的可运行代码
4. **选择题**：每项目3道单选题（含答案）

#### Scenario: 浏览课程详情
- **WHEN** 学生点击某个课程
- **THEN** 显示该课程的完整内容，包括学习目标、核心概念、代码示例和选择题

#### Scenario: 完成学习后做题
- **WHEN** 学生完成课程学习后做练习题
- **THEN** 可以对照课程内容完成选择题

## MODIFIED Requirements

### Requirement: mockData课程详情
更新mockCourseDetails，添加完整的项目内容：
- 数据清洗实战
- 分组聚合分析
- 购物篮分析
- 客户聚类分析
- 数据可视化
- A/B测试分析
- 时间序列分析
- 特征工程
- 异常值检测
- 多数据集合并
