import { Course, CourseDetail, Practice, PracticeDetail, Quiz, QuizDetail, Achievement, LeaderboardEntry } from '@/types';

export const mockCourses: Course[] = [
  {
    id: 'data-cleaning',
    title: '数据清洗实战',
    description: '掌握数据清洗核心技能，处理缺失值、重复值、异常值，让数据更加干净可靠',
    category: '数据处理',
    difficulty: 'beginner',
    coverImage: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Data cleaning process with bubbles and filters, clean data visualization&image_size=landscape_16_9',
    totalLessons: 8,
    duration: 240,
  },
  {
    id: 'group-aggregation',
    title: '分组聚合分析',
    description: '学习使用groupby和聚合函数进行数据分析，掌握数据分组统计的核心技巧',
    category: '数据分析',
    difficulty: 'intermediate',
    coverImage: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Data grouping and aggregation charts, colorful bar charts grouped together&image_size=landscape_16_9',
    totalLessons: 6,
    duration: 180,
  },
  {
    id: 'market-basket',
    title: '购物篮分析',
    description: '使用关联规则挖掘发现商品关联关系，掌握Apriori算法和FP-Growth算法',
    category: '数据挖掘',
    difficulty: 'intermediate',
    coverImage: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Shopping basket with products connected by lines, association rules visualization&image_size=landscape_16_9',
    totalLessons: 7,
    duration: 210,
  },
  {
    id: 'customer-clustering',
    title: '客户聚类分析',
    description: '使用K-Means等聚类算法进行客户分群，实现精准营销和个性化服务',
    category: '数据挖掘',
    difficulty: 'intermediate',
    coverImage: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Customer clustering visualization with colorful dots grouped in circles&image_size=landscape_16_9',
    totalLessons: 8,
    duration: 240,
  },
  {
    id: 'data-visualization',
    title: '数据可视化',
    description: '使用Matplotlib和Seaborn创建专业图表，让数据故事更加生动直观',
    category: '数据可视化',
    difficulty: 'beginner',
    coverImage: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Beautiful data visualization dashboard with multiple chart types&image_size=landscape_16_9',
    totalLessons: 10,
    duration: 300,
  },
  {
    id: 'ab-testing',
    title: 'A/B测试分析',
    description: '掌握A/B测试的设计与分析方法，用数据驱动产品决策',
    category: '数据分析',
    difficulty: 'intermediate',
    coverImage: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=A/B testing comparison with two versions, split test visualization&image_size=landscape_16_9',
    totalLessons: 6,
    duration: 180,
  },
  {
    id: 'time-series',
    title: '时间序列分析',
    description: '学习时间序列数据的分析与预测，掌握趋势、季节性和周期性分析',
    category: '数据分析',
    difficulty: 'advanced',
    coverImage: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Time series chart with trend line and forecast, stock market style&image_size=landscape_16_9',
    totalLessons: 9,
    duration: 270,
  },
  {
    id: 'feature-engineering',
    title: '特征工程',
    description: '掌握特征提取、转换和选择的技巧，为机器学习模型提供优质特征',
    category: '机器学习',
    difficulty: 'advanced',
    coverImage: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Feature engineering pipeline with gears and data transformation&image_size=landscape_16_9',
    totalLessons: 8,
    duration: 240,
  },
  {
    id: 'anomaly-detection',
    title: '异常值检测',
    description: '学习多种异常值检测方法，识别数据中的异常模式和离群点',
    category: '数据挖掘',
    difficulty: 'intermediate',
    coverImage: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Anomaly detection with red dots among blue dots, outlier visualization&image_size=landscape_16_9',
    totalLessons: 6,
    duration: 180,
  },
  {
    id: 'data-merging',
    title: '多数据集合并',
    description: '掌握数据合并、连接和整合技巧，处理来自多个数据源的信息',
    category: '数据处理',
    difficulty: 'beginner',
    coverImage: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Multiple data tables merging into one, database join visualization&image_size=landscape_16_9',
    totalLessons: 7,
    duration: 210,
  },
];

export const mockCourseDetails: Record<string, CourseDetail> = {
  'data-cleaning': {
    id: 'data-cleaning',
    title: '数据清洗实战',
    description: '数据清洗是数据分析的第一步，也是最关键的步骤。本课程将带你掌握处理缺失值、重复值、异常值的核心技能，让数据更加干净可靠。',
    category: '数据处理',
    difficulty: 'beginner',
    coverImage: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Data cleaning process with bubbles and filters, clean data visualization&image_size=landscape_16_9',
    totalLessons: 8,
    duration: 240,
    learningObjectives: [
      '理解什么是数据质量问题的四大类型（缺失值、重复值、异常值、格式不一致）',
      '掌握使用pandas检测和评估数据质量的方法',
      '学会处理缺失值的多种方法：删除、填充（前向/后向填充、固定值填充）',
      '掌握识别和处理重复值的操作',
      '掌握使用IQR和Z-score方法识别和处理异常值',
      '能够独立完成一个完整的数据清洗案例'
    ],
    chapters: [
      {
        id: 'ch1',
        title: '数据清洗基础',
        lessons: [
          { id: 'l1', title: '课程导学与核心概念', type: 'article', duration: 20, content: '# 数据清洗实战 - 课程导学\n\n## 学习目标\n\n1. 理解什么是数据质量问题的四大类型（缺失值、重复值、异常值、格式不一致）\n2. 掌握使用pandas检测和评估数据质量的方法\n3. 学会处理缺失值的多种方法：删除、填充（前向/后向填充、固定值填充）\n4. 掌握识别和处理重复值的操作\n5. 掌握使用IQR和Z-score方法识别和处理异常值\n6. 能够独立完成一个完整的数据清洗案例\n\n## 核心概念（通俗解释）\n\n数据清洗就像是给数据"洗澡"。就像我们买回家的蔬菜需要清洗才能食用一样，原始数据往往也存在各种"杂质"：\n\n- 有些数据是空的（**缺失值**）\n- 有些是重复的（**重复值**）\n- 有些明显不对劲（**异常值**）\n-还有些格式乱七八糟（**格式不一致**）\n\n通过数据清洗，我们可以把这些"脏数据"变成"干净数据"，让后续的分析更加准确可靠。\n\n## 为什么数据清洗如此重要？\n\n根据行业研究，数据科学家80%的时间都花在数据清洗上。原因很简单：\n\n- **Garbage in, Garbage out**：脏数据会导致错误的分析结论\n- 机器学习模型对数据质量非常敏感\n- 准确的数据才能支撑正确的商业决策' },
          { id: 'l2', title: 'Python环境准备', type: 'article', duration: 15, content: '# Python环境准备\n\n## 所需库\n\n```python\nimport pandas as pd\nimport numpy as np\n```\n\n## 创建示例数据集\n\n```python\nimport pandas as pd\nimport numpy as np\n\n# 1. 创建示例数据集\ndf = pd.DataFrame({\n    \'日期\': [\'2024-01-01\', \'2024-01-01\', \'2024-01-02\', None, \'2024-01-04\', \'2024-01-04\'],\n    \'产品\': [\'A\', \'B\', \'A\', \'C\', \'A\', \'A\'],\n    \'销量\': [100, 200, 150, 180, 120, 120],  # 注意：最后一个是重复的\n    \'单价\': [10, 20, 10, 15, None, 10]\n})\n\nprint("原始数据：")\nprint(df)\n```' },
        ],
      },
      {
        id: 'ch2',
        title: '缺失值处理',
        lessons: [
          { id: 'l3', title: '检测缺失值', type: 'article', duration: 20, content: '# 检测缺失值\n\n## 什么是缺失值\n\n缺失值是指数据集中值为空的数据。在Python中，缺失值通常表示为`None`或`np.nan`。\n\n## 检测缺失值的方法\n\n```python\n# 检测缺失值\nprint(df.isnull())  # 或 df.isna()\n\nprint("\\n缺失值统计：")\nprint(df.isnull().sum())\n\n# 计算缺失值比例\nprint("\\n缺失值比例：")\nprint(df.isnull().mean() * 100)\n```\n\n## 常见原因\n\n- 数据录入错误\n- 传感器故障\n- 用户未填写\n- 数据合并丢失' },
          { id: 'l4', title: '处理缺失值', type: 'article', duration: 25, content: '# 处理缺失值\n\n## 方法一：删除\n\n```python\n# 删除包含缺失值的行\ndf_clean = df.dropna()\n\n# 只删除特定列的缺失值\ndf_clean = df.dropna(subset=[\'日期\'])\n\n# 删除全为缺失值的行\ndf_clean = df.dropna(how=\'all\')\n```\n\n## 方法二：填充\n\n```python\n# 用固定值填充\ndf[\'单价\'] = df[\'单价\'].fillna(0)\n\n# 用均值填充\ndf[\'单价\'] = df[\'单价\'].fillna(df[\'单价\'].mean())\n\n# 用中位数填充\ndf[\'单价\'] = df[\'单价\'].fillna(df[\'单价\'].median())\n\n# 前向填充（用前一个值填充）\ndf[\'单价\'] = df[\'单价\'].fillna(method=\'ffill\')\n\n# 后向填充（用后一个值填充）\ndf[\'单价\'] = df[\'单价\'].fillna(method=\'bfill\')\n```\n\n## 选择哪种方法？\n\n- **缺失比例<5%**：可以考虑删除\n- **缺失比例5%-30%**：用均值、中位数或前后填充\n- **缺失比例>30%**：需要分析原因，可能不适合该列' },
        ],
      },
      {
        id: 'ch3',
        title: '重复值与异常值',
        lessons: [
          { id: 'l5', title: '处理重复值', type: 'article', duration: 20, content: '# 处理重复值\n\n## 什么是重复值\n\n重复值是指完全相同或几乎完全相同的记录。\n\n## 检测重复值\n\n```python\n# 检测是否有重复行\nprint(df.duplicated().sum())\n\n# 查看重复的行\nprint(df[df.duplicated()])\n\n# 基于特定列检测重复\nprint(df.duplicated(subset=[\'日期\', \'产品\']).sum())\n```\n\n## 删除重复值\n\n```python\n# 删除重复行，保留第一行\ndf_clean = df.drop_duplicates()\n\n# 删除重复行，保留最后一行\ndf_clean = df.drop_duplicates(keep=\'last\')\n\n# 基于特定列删除重复\ndf_clean = df.drop_duplicates(subset=[\'产品\'], keep=\'first\')\n```' },
          { id: 'l6', title: '识别异常值', type: 'article', duration: 25, content: '# 识别异常值\n\n## 什么是异常值\n\n异常值是明显偏离正常范围的数据点，可能是输入错误或真实的极端值。\n\n## 方法一：IQR方法\n\n```python\n# 计算IQR\nQ1 = df[\'销量\'].quantile(0.25)\nQ3 = df[\'销量\'].quantile(0.75)\nIQR = Q3 - Q1\n\n# 定义边界\nlower = Q1 - 1.5 * IQR\nupper = Q3 + 1.5 * IQR\n\nprint(f"正常范围: [{lower}, {upper}]")\n\n# 标记异常值\noutliers = df[(df[\'销量\'] < lower) | (df[\'销量\'] > upper)]\nprint("\\n异常值：")\nprint(outliers)\n```\n\n## 方法二：Z-Score方法\n\n```python\nfrom scipy import stats\nimport numpy as np\n\n# 计算Z分数\nz_scores = np.abs(stats.zscore(df[\'销量\']))\n\n# 标记异常值（Z分数 > 3）\noutliers = df[z_scores > 3]\nprint("\\n异常值（Z-Score方法）：")\nprint(outliers)\n```\n\n## 哪种方法更好？\n\n- **IQR方法**：对异常值更稳健，不受极端值影响\n- **Z-Score方法**：假设数据服从正态分布' },
          { id: 'l7', title: '处理异常值', type: 'article', duration: 20, content: '# 处理异常值\n\n## 方法一：删除\n\n```python\ndf_clean = df[(df[\'销量\'] >= lower) & (df[\'销量\'] <= upper)]\n```\n\n## 方法二：替换\n\n```python\n# 用边界值替换\ndf[\'销量\'] = df[\'销量\'].clip(lower, upper)\n\n# 用中位数替换\nmedian = df[\'销量\'].median()\ndf.loc[outliers.index, \'销量\'] = median\n```\n\n## 方法三：分箱处理\n\n```python\ndf[\'销量_分箱\'] = pd.cut(df[\'销量\'], \n                          bins=[0, 100, 200, 300, 400],\n                          labels=[\'低\', \'中\', \'高\', \'超高\'])\n```' },
          { id: 'l8', title: '实战案例：完整数据清洗', type: 'article', duration: 30, content: '# 实战案例：完整数据清洗\n\n## 完整代码示例\n\n```python\nimport pandas as pd\nimport numpy as np\n\n# 1. 创建示例数据集\ndf = pd.DataFrame({\n    \'日期\': [\'2024-01-01\', \'2024-01-01\', \'2024-01-02\', None, \'2024-01-04\', \'2024-01-04\'],\n    \'产品\': [\'A\', \'B\', \'A\', \'C\', \'A\', \'A\'],\n    \'销量\': [100, 200, 150, 180, 120, 120],  # 注意：最后一个是重复的\n    \'单价\': [10, 20, 10, 15, None, 10]\n})\n\nprint("原始数据：")\nprint(df)\n\n# 2. 检测缺失值\nprint("\\n缺失值统计：")\nprint(df.isnull().sum())\n\n# 3. 处理缺失值\ndf[\'单价\'].fillna(df[\'单价\'].mean(), inplace=True)  # 用均值填充\ndf.dropna(subset=[\'日期\'], inplace=True)  # 删除日期为空的行\n\n# 4. 处理重复值\ndf.drop_duplicates(inplace=True)\n\n# 5. 处理异常值（假设销量正常范围是50-250）\nQ1 = df[\'销量\'].quantile(0.25)\nQ3 = df[\'销量\'].quantile(0.75)\nIQR = Q3 - Q1\nlower = Q1 - 1.5 * IQR\nupper = Q3 + 1.5 * IQR\ndf = df[(df[\'销量\'] >= lower) & (df[\'销量\'] <= upper)]\n\nprint("\\n清洗后的数据：")\nprint(df)\n```\n\n## 数据清洗流程总结\n\n1. **加载数据**\n2. **数据探索**：了解数据基本情况\n3. **处理缺失值**：删除或填充\n4. **处理重复值**：删除重复记录\n5. **处理异常值**：删除、替换或标记\n6. **验证结果**：确认清洗效果', practice: { title: '数据清洗实操练习', description: '根据所学知识，完成数据清洗任务：处理缺失值、删除重复行、识别异常值', initialCode: 'import pandas as pd\nimport numpy as np\n\n# 创建含有各种问题的数据\ndf = pd.DataFrame({\n    \'姓名\': [\'张三\', \'李四\', \'王五\', None, \'赵六\', \'张三\'],\n    \'年龄\': [25, 30, None, 28, 35, 25],\n    \'工资\': [5000, 6000, 7000, 8000, 9000, 5000],\n    \'部门\': [\'销售\', \'技术\', \'销售\', \'技术\', \'管理\', \'销售\']\n})\n\n# TODO: 1. 检测并统计缺失值\nprint("缺失值统计：")\n\n# TODO: 2. 用均值填充年龄列的缺失值\n\n# TODO: 3. 删除姓名为空的行\n\n# TODO: 4. 删除重复行\n\n# TODO: 5. 输出最终结果\nprint("\\n处理后的数据：")\nprint(df)', expectedOutput: '缺失值统计：\n姓名    1\n年龄    1\n工资    0\n部门    0\ndtype: int64\n\n处理后的数据：\n   姓名    年龄    工资  部门\n0  张三  25.00  5000  销售\n1  李四  30.00  6000  技术\n2  王五  29.50  7000  销售\n4  赵六  35.00  9000  管理', hints: ['使用isnull().sum()统计缺失值', '使用fillna()填充缺失值', '使用dropna()删除空值行', '使用drop_duplicates()删除重复'], solution: 'import pandas as pd\nimport numpy as np\n\n# 创建含有各种问题的数据\ndf = pd.DataFrame({\n    \'姓名\': [\'张三\', \'李四\', \'王五\', None, \'赵六\', \'张三\'],\n    \'年龄\': [25, 30, None, 28, 35, 25],\n    \'工资\': [5000, 6000, 7000, 8000, 9000, 5000],\n    \'部门\': [\'销售\', \'技术\', \'销售\', \'技术\', \'管理\', \'销售\']\n})\n\n# 1. 检测并统计缺失值\nprint("缺失值统计：")\nprint(df.isnull().sum())\n\n# 2. 用均值填充年龄列的缺失值\ndf[\'年龄\'] = df[\'年龄\'].fillna(df[\'年龄\'].mean())\n\n# 3. 删除姓名为空的行\ndf = df.dropna(subset=[\'姓名\'])\n\n# 4. 删除重复行\ndf = df.drop_duplicates()\n\n# 5. 输出最终结果\nprint("\\n处理后的数据：")\nprint(df)' } },
        ],
      },
      {
        id: 'ch4',
        title: '章节测验',
        lessons: [
          { id: 'l9', title: '章节测验', type: 'quiz', duration: 10, content: '' },
        ],
      },
    ],
    quizQuestions: [
      {
        id: 'data-cleaning-q1',
        type: 'choice',
        question: '在pandas中，哪个方法可以检测缺失值？',
        options: [
          'checkna()',
          'isnull() 或 isna()',
          'missing()',
          'hasnull()'
        ],
        correctAnswer: 1,
        explanation: 'isnull()和isna()功能相同，都可以检测缺失值，返回布尔值。'
      },
      {
        id: 'data-cleaning-q2',
        type: 'choice',
        question: '使用IQR方法检测异常值时，正常数据的下界是多少？',
        options: [
          'Q1 - IQR',
          'Q1 - 1.5*IQR',
          'Q3 - 1.5*IQR',
          'mean - 2*std'
        ],
        correctAnswer: 1,
        explanation: 'IQR方法中，下界 = Q1 - 1.5*IQR，上界 = Q3 + 1.5*IQR。'
      },
      {
        id: 'data-cleaning-q3',
        type: 'choice',
        question: '删除重复行应该使用哪个方法？',
        options: [
          'remove_duplicates()',
          'drop_duplicates()',
          'delete_duplicates()',
          'clear_duplicates()'
        ],
        correctAnswer: 1,
        explanation: 'drop_duplicates()方法用于删除重复行，keep参数控制保留哪个副本。'
      }
    ]
  },
  'group-aggregation': {
    id: 'group-aggregation',
    title: '分组聚合分析',
    description: '分组聚合是数据分析的核心技能，本课程将带你掌握groupby操作和各种聚合函数的使用方法。',
    category: '数据分析',
    difficulty: 'intermediate',
    coverImage: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Data grouping and aggregation charts, colorful bar charts grouped together&image_size=landscape_16_9',
    totalLessons: 6,
    duration: 180,
    learningObjectives: [
      '理解分组聚合的概念和作用',
      '掌握groupby的基本语法和常用操作',
      '学会使用各种聚合函数（sum、mean、count、min、max等）',
      '掌握agg方法进行多函数聚合',
      '理解transform和apply的使用场景',
      '能够使用透视表和交叉表进行数据分析'
    ],
    chapters: [
      {
        id: 'ch1',
        title: '分组聚合基础',
        lessons: [
          { id: 'l1', title: '课程导学与核心概念', type: 'article', duration: 20, content: '# 分组聚合分析 - 课程导学\n\n## 学习目标\n\n1. 理解分组聚合的概念和作用\n2. 掌握groupby的基本语法和常用操作\n3. 学会使用各种聚合函数（sum、mean、count、min、max等）\n4. 掌握agg方法进行多函数聚合\n5. 理解transform和apply的使用场景\n6. 能够使用透视表和交叉表进行数据分析\n\n## 核心概念（通俗解释）\n\n分组聚合就像是给数据"分类统计"。想象你有一堆糖果，想要知道每种颜色糖果有多少颗，就需要先把糖果按颜色分好，然后数每堆的数量。\n\n数据分析中的分组聚合就是这样的原理：\n\n1. 先把数据按某个标准分成不同的组\n2. 然后对每个组进行统计计算\n\n这在商业分析中非常有用，比如：\n\n- 统计每个月的销售额\n- 计算每个地区的客户数量\n- 分析不同产品类别的利润率\n\n## 为什么需要分组聚合？\n\n原始数据往往是零散的记录，通过分组聚合可以：\n\n- **发现问题**：发现不同组之间的差异\n- **总结规律**：发现数据中的模式\n- **辅助决策**：为商业决策提供数据支持' },
          { id: 'l2', title: 'Python环境准备', type: 'article', duration: 15, content: '# Python环境准备\n\n## 创建示例数据\n\n```python\nimport pandas as pd\n\n# 1. 创建销售数据\ndf = pd.DataFrame({\n    \'月份\': [\'1月\', \'2月\', \'1月\', \'3月\', \'2月\', \'1月\'],\n    \'产品\': [\'手机\', \'手机\', \'电脑\', \'电脑\', \'手机\', \'电脑\'],\n    \'销售额\': [5000, 6000, 8000, 7500, 5500, 8200]\n})\n\nprint("原始数据：")\nprint(df)\n```' },
        ],
      },
      {
        id: 'ch2',
        title: 'groupby基础',
        lessons: [
          { id: 'l3', title: '基本分组操作', type: 'article', duration: 20, content: '# 基本分组操作\n\n## 什么是groupby\n\ngroupby是将数据按照某个或某些列的值进行分组的操作。\n\n## 基本语法\n\n```python\n# 单列分组\ndf.groupby(\'月份\')\n\n# 多列分组\ndf.groupby([\'月份\', \'产品\'])\n```\n\n## 分组后计算\n\n```python\n# 按月份分组统计\nmonthly_sales = df.groupby(\'月份\')[\'销售额\'].sum()\nprint("\\n按月份统计销售额：")\nprint(monthly_sales)\n\n# 按产品和月份分组\nproduct_monthly = df.groupby([\'产品\', \'月份\'])[\'销售额\'].sum()\nprint("\\n按产品和月份统计：")\nprint(product_monthly)\n```\n\n## 常用聚合函数\n\n```python\ndf.groupby(\'月份\')[\'销售额\'].sum()    # 求和\ndf.groupby(\'月份\')[\'销售额\'].mean()   # 均值\ndf.groupby(\'月份\')[\'销售额\'].count()   # 计数\ndf.groupby(\'月份\')[\'销售额\'].min()    # 最小值\ndf.groupby(\'月份\')[\'销售额\'].max()    # 最大值\ndf.groupby(\'月份\')[\'销售额\'].std()    # 标准差\ndf.groupby(\'月份\')[\'销售额\'].median()  # 中位数\n```' },
          { id: 'l4', title: 'agg多函数聚合', type: 'article', duration: 25, content: '# agg多函数聚合\n\n## 使用agg方法\n\n```python\n# 使用agg进行多指标统计\nsummary = df.groupby(\'月份\').agg({\n    \'销售额\': [\'sum\', \'mean\', \'count\']\n})\nprint("\\n按月份多指标统计：")\nprint(summary)\n```\n\n## 对不同列应用不同函数\n\n```python\n# 对不同列应用不同的聚合函数\nsummary = df.groupby(\'月份\').agg({\n    \'销售额\': [\'sum\', \'mean\'],\n    \'产品\': \'count\'\n})\n```\n\n## 自定义聚合函数\n\n```python\n# 自定义聚合函数\ndef range_func(x):\n    return x.max() - x.min()\n\nresult = df.groupby(\'月份\')[\'销售额\'].agg([\'sum\', range_func])\nprint(result)\n```\n\n## 常用快捷方式\n\n```python\n# 一次性计算多个统计量\ndf.groupby(\'月份\')[\'销售额\'].agg([\'sum\', \'mean\', \'std\', \'min\', \'max\'])\n```' },
        ],
      },
      {
        id: 'ch3',
        title: '高级操作',
        lessons: [
          { id: 'l5', title: 'transform方法', type: 'article', duration: 20, content: '# transform方法\n\n## transform的特点\n\ntransform返回与原数据**相同长度**的结果，而不是聚合后的结果。\n\n## 基本用法\n\n```python\n# 计算每个组内的销售额占比\ndf[\'销售额占比\'] = df.groupby(\'月份\')[\'销售额\'].transform(\n    lambda x: x / x.sum() * 100\n)\n\nprint(df)\n```\n\n## 用组内均值填充缺失值\n\n```python\n# 用每个月的平均销售额填充缺失值\ndf[\'销售额\'] = df.groupby(\'月份\')[\'销售额\'].transform(\n    lambda x: x.fillna(x.mean())\n)\n```\n\n## 与agg的区别\n\n```python\n# agg：返回分组后的结果（行数减少）\nagg_result = df.groupby(\'月份\')[\'销售额\'].agg(\'mean\')\n\n# transform：返回与原数据相同长度的结果\ntransform_result = df.groupby(\'月份\')[\'销售额\'].transform(\'mean\')\n```' },
          { id: 'l6', title: '透视表与交叉表', type: 'article', duration: 25, content: '# 透视表与交叉表\n\n## 创建透视表\n\n```python\n# 创建透视表\npivot = pd.pivot_table(\n    df, \n    values=\'销售额\', \n    index=\'月份\', \n    columns=\'产品\', \n    aggfunc=\'sum\'\n)\nprint("\\n透视表：")\nprint(pivot)\n```\n\n## 透视表参数说明\n\n- `values`: 要聚合的值\n- `index`: 行索引\n- `columns`: 列名\n- `aggfunc`: 聚合函数，默认是mean\n- `fill_value`: 填充缺失值\n- `margins`: 添加行列合计\n\n## 交叉表\n\n```python\n# 创建交叉表\ncrosstab = pd.crosstab(\n    df[\'月份\'], \n    df[\'产品\']\n)\nprint("\\n交叉表：")\nprint(crosstab)\n\n# 添加合计\ncrosstab_with_margins = pd.crosstab(\n    df[\'月份\'], \n    df[\'产品\'],\n    margins=True\n)\nprint("\\n带合计的交叉表：")\nprint(crosstab_with_margins)\n```' },
          { id: 'l7', title: '实战案例：完整分组聚合', type: 'article', duration: 30, content: '# 实战案例：完整分组聚合\n\n## 完整代码示例\n\n```python\nimport pandas as pd\n\n# 1. 创建销售数据\ndf = pd.DataFrame({\n    \'月份\': [\'1月\', \'2月\', \'1月\', \'3月\', \'2月\', \'1月\'],\n    \'产品\': [\'手机\', \'手机\', \'电脑\', \'电脑\', \'手机\', \'电脑\'],\n    \'销售额\': [5000, 6000, 8000, 7500, 5500, 8200]\n})\n\nprint("原始数据：")\nprint(df)\n\n# 2. 按月份分组统计\nmonthly_sales = df.groupby(\'月份\')[\'销售额\'].sum()\nprint("\\n按月份统计销售额：")\nprint(monthly_sales)\n\n# 3. 按产品和月份分组\nproduct_monthly = df.groupby([\'产品\', \'月份\'])[\'销售额\'].sum()\nprint("\\n按产品和月份统计：")\nprint(product_monthly)\n\n# 4. 使用agg进行多指标统计\nsummary = df.groupby(\'月份\').agg({\n    \'销售额\': [\'sum\', \'mean\', \'count\']\n})\nprint("\\n按月份多指标统计：")\nprint(summary)\n\n# 5. 创建透视表\npivot = pd.pivot_table(df, values=\'销售额\', index=\'月份\', columns=\'产品\', aggfunc=\'sum\')\nprint("\\n透视表：")\nprint(pivot)\n```\n\n## 分组聚合流程总结\n\n1. **明确分析目的**：确定要按什么分组、计算什么指标\n2. **选择分组列**：确定分组维度\n3. **选择聚合函数**：sum、mean、count等\n4. **使用agg进行多函数聚合**：获取更全面的统计\n5. **使用透视表**：快速创建汇总表格', practice: { title: '分组聚合实操练习', description: '根据销售数据，完成分组统计任务：计算每个地区的总销售额、平均销售额，并用透视表展示', initialCode: 'import pandas as pd\n\n# 创建销售数据\ndf = pd.DataFrame({\n    \'地区\': [\'华东\', \'华北\', \'华东\', \'华南\', \'华北\', \'华东\', \'华南\', \'华北\'],\n    \'产品\': [\'A\', \'A\', \'B\', \'A\', \'B\', \'B\', \'A\', \'B\'],\n    \'销售额\': [1000, 1200, 800, 900, 1100, 750, 1050, 1300]\n})\n\nprint("原始数据：")\nprint(df)\n\n# TODO: 1. 按地区分组，计算总销售额和平均销售额\nprint("\\n按地区统计：")\n\n# TODO: 2. 按地区和产品分组，计算总销售额\nprint("\\n按地区和产品统计：")\n\n# TODO: 3. 创建透视表，行为地区，列为产品，值为销售额总和\nprint("\\n透视表：")\n', expectedOutput: '原始数据：\n   地区 产品   销售额\n0  华东  A   1000\n1  华北  A   1200\n2  华东  B    800\n3  华南  A    900\n4  华北  B   1100\n5  华东  B    750\n6  华南  A   1050\n7  华北  B   1300\n\n按地区统计：\n      销售额          \n        sum         mean\n地区                     \n华东    2550   850.000000\n华北    3600  1200.000000\n华南    1950   975.000000\n\n按地区和产品统计：\n        销售额\n地区 产品     \n华东 A    1000\n    B    1550\n华北 A    1200\n    B    2400\n华南 A    1950\n\n透视表：\n产品     A     B\n地区            \n华东  1000  1550\n华北  1200  2400\n华南  1950   NaN', hints: ['使用groupby()进行分组', '使用agg()计算多个统计量', '使用pivot_table()创建透视表'], solution: 'import pandas as pd\n\n# 创建销售数据\ndf = pd.DataFrame({\n    \'地区\': [\'华东\', \'华北\', \'华东\', \'华南\', \'华北\', \'华东\', \'华南\', \'华北\'],\n    \'产品\': [\'A\', \'A\', \'B\', \'A\', \'B\', \'B\', \'A\', \'B\'],\n    \'销售额\': [1000, 1200, 800, 900, 1100, 750, 1050, 1300]\n})\n\nprint("原始数据：")\nprint(df)\n\n# 1. 按地区分组，计算总销售额和平均销售额\nprint("\\n按地区统计：")\nregion_stats = df.groupby(\'地区\').agg({\n    \'销售额\': [\'sum\', \'mean\']\n})\nprint(region_stats)\n\n# 2. 按地区和产品分组，计算总销售额\nprint("\\n按地区和产品统计：")\nregion_product = df.groupby([\'地区\', \'产品\'])[\'销售额\'].sum()\nprint(region_product)\n\n# 3. 创建透视表\nprint("\\n透视表：")\npivot = pd.pivot_table(df, values=\'销售额\', index=\'地区\', columns=\'产品\', aggfunc=\'sum\')\nprint(pivot)' } },
        ],
      },
      {
        id: 'ch4',
        title: '章节测验',
        lessons: [
          { id: 'l8', title: '章节测验', type: 'quiz', duration: 10, content: '' },
        ],
      },
    ],
    quizQuestions: [
      {
        id: 'group-aggregation-q1',
        type: 'choice',
        question: '在pandas中，哪个方法用于数据分组？',
        options: [
          'group()',
          'split()',
          'groupby()',
          'categorize()'
        ],
        correctAnswer: 2,
        explanation: 'groupby()是pandas中用于数据分组的方法，返回GroupBy对象。'
      },
      {
        id: 'group-aggregation-q2',
        type: 'choice',
        question: 'agg({\'销售额\': [\'sum\', \'mean\']}) 这种写法的作用是？',
        options: [
          '计算销售额的和，然后求均值',
          '同时计算销售额的和与均值',
          '选择销售额的和或均值',
          '过滤销售额数据'
        ],
        correctAnswer: 1,
        explanation: 'agg传入字典可以对不同列应用不同的聚合函数，这里对销售额同时计算sum和mean。'
      },
      {
        id: 'group-aggregation-q3',
        type: 'choice',
        question: 'transform和agg方法的区别是？',
        options: [
          '没有区别',
          'transform返回与原数据相同长度的结果，agg返回聚合后的结果',
          'agg返回与原数据相同长度的结果，transform返回聚合后的结果',
          'transform只能用于数值列'
        ],
        correctAnswer: 1,
        explanation: 'transform方法返回与原数据相同形状的结果，而agg返回分组聚合后的结果（通常更短）。'
      }
    ]
  },
  'market-basket': {
    id: 'market-basket',
    title: '购物篮分析',
    description: '购物篮分析是零售行业的经典数据分析方法，通过发现商品之间的关联关系，优化商品布局和营销策略。',
    category: '数据挖掘',
    difficulty: 'intermediate',
    coverImage: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Shopping basket with products connected by lines, association rules visualization&image_size=landscape_16_9',
    totalLessons: 7,
    duration: 210,
    learningObjectives: [
      '理解什么是关联规则挖掘及其商业应用场景',
      '掌握关联规则的三个核心指标：支持度、置信度、提升度',
      '了解Apriori算法的基本原理',
      '能够使用mlxtend库进行购物篮分析',
      '能够解读和应用分析结果'
    ],
    chapters: [
      {
        id: 'ch1',
        title: '关联规则基础',
        lessons: [
          { id: 'l1', title: '课程导学与核心概念', type: 'article', duration: 20, content: '# 购物篮分析 - 课程导学\n\n## 学习目标\n\n1. 理解什么是关联规则挖掘及其商业应用场景\n2. 掌握关联规则的三个核心指标：支持度、置信度、提升度\n3. 了解Apriori算法的基本原理\n4. 能够使用mlxtend库进行购物篮分析\n5. 能够解读和应用分析结果\n\n## 核心概念（通俗解释）\n\n购物篮分析就像发现"黄金搭档"。想象你去超市买东西，店员发现买面包的人经常同时买牛奶，那么把面包和牛奶放在一起可能会增加销售额。\n\n**购物篮分析就是用数学方法找出这些"一起买"的规律。**\n\n核心指标有三个：\n\n- **支持度**：表示这个组合有多常见\n- **置信度**：表示买了A的人有多大概率也会买B\n- **提升度**：表示这个规则有多大的价值（大于1表示有正向关联）\n\n## 应用场景\n\n- **商品推荐**：买了A商品的人可能会买B商品\n- **货架布局**：将关联商品放在一起促进购买\n- **促销策略**：捆绑销售相关商品\n- **库存管理**：预测商品需求' },
          { id: 'l2', title: '核心指标详解', type: 'article', duration: 25, content: '# 核心指标详解\n\n## 支持度 (Support)\n\n表示某个商品组合在所有交易中出现的频率。\n\n```python\n支持度 = 包含{A,B}的交易数 / 总交易数\n```\n\n**例子**：如果100笔交易中有20笔包含"面包+牛奶"，支持度 = 20/100 = 0.2\n\n## 置信度 (Confidence)\n\n表示购买了A商品的客户中，有多少也会购买B商品。\n\n```python\n置信度 = 包含{A,B}的交易数 / 包含A的交易数\n```\n\n**例子**：如果20笔交易包含"面包+牛奶"，其中30笔交易包含"面包"，置信度 = 20/30 = 0.67\n\n## 提升度 (Lift)\n\n表示A和B之间的关联强度。\n\n```python\n提升度 = 置信度 / P(B)\n```\n\n**解读**：\n- Lift > 1：正相关，A促进B的销售\n- Lift = 1：无关联\n- Lift < 1：负相关，A抑制B的销售' },
        ],
      },
      {
        id: 'ch2',
        title: 'Apriori算法',
        lessons: [
          { id: 'l3', title: 'Apriori算法原理', type: 'article', duration: 25, content: '# Apriori算法原理\n\n## 核心思想\n\n如果一个项集是**频繁的**，那么它的所有**子集**也是频繁的。\n\n反过来说：如果一个项集是**非频繁的**，那么它的所有**超集**都是非频繁的。\n\n## 算法步骤\n\n1. 扫描数据，找出频繁1-项集\n2. 用频繁k-项集生成候选(k+1)-项集\n3. 扫描数据，计算候选项集支持度\n4. 筛选出频繁(k+1)-项集\n5. 重复直到无法生成更大的频繁项集\n6. 从频繁项集中生成关联规则\n\n## 为什么叫Apriori？\n\n因为算法利用了先验知识（Prior Knowledge）：\n\n- 如果{牛奶}不频繁，那么{牛奶, 面包}也不频繁\n- 可以大幅减少候选项集的数量' },
          { id: 'l4', title: '使用mlxtend实现', type: 'article', duration: 30, content: '# 使用mlxtend实现购物篮分析\n\n## 安装mlxtend\n\n```bash\npip install mlxtend\n```\n\n## 完整代码示例\n\n```python\nimport pandas as pd\nfrom mlxtend.frequent_patterns import apriori, association_rules\nfrom mlxtend.preprocessing import TransactionEncoder\n\n# 1. 准备交易数据（每行是一笔交易，包含多个商品）\ntransactions = [\n    [\'牛奶\', \'面包\', \'尿布\'],\n    [\'可乐\', \'面包\', \'尿布\', \'啤酒\'],\n    [\'牛奶\', \'尿布\', \'啤酒\', \'鸡蛋\'],\n    [\'面包\', \'尿布\', \'啤酒\'],\n    [\'牛奶\', \'面包\', \'尿布\', \'鸡蛋\'],\n    [\'牛奶\', \'面包\', \'尿布\'],\n]\n\n# 2. 转换为适合分析的格式\nte = TransactionEncoder()\nte_ary = te.fit(transactions).transform(transactions)\ndf = pd.DataFrame(te_ary, columns=te.columns_)\n\nprint("转换后的数据：")\nprint(df)\n\n# 3. 挖掘频繁项集\nfrequent_itemsets = apriori(df, min_support=0.3, use_colnames=True)\nprint("\\n频繁项集：")\nprint(frequent_itemsets)\n\n# 4. 生成关联规则\nrules = association_rules(frequent_itemsets, metric=\"confidence\", min_threshold=0.6)\nprint("\\n关联规则：")\nprint(rules[[\'antecedents\', \'consequents\', \'support\', \'confidence\', \'lift\']])\n\n# 5. 筛选有价值的规则\nvaluable_rules = rules[rules[\'lift\'] > 1]\nprint("\\n有价值的规则（提升度>1）：")\nprint(valuable_rules[[\'antecedents\', \'consequents\', \'lift\']])\n```\n\n## 参数说明\n\n- `min_support`: 最小支持度阈值\n- `use_colnames`: 使用商品名称而非列索引\n- `metric`: 用于生成规则的指标（confidence, lift, support）\n- `min_threshold`: 指标的最小阈值' },
        ],
      },
      {
        id: 'ch3',
        title: '实战应用',
        lessons: [
          { id: 'l5', title: '分析结果解读', type: 'article', duration: 20, content: '# 分析结果解读\n\n## 如何筛选有价值的规则\n\n```python\n# 筛选条件\nrules_filtered = rules[\n    (rules[\'support\'] >= 0.05) &      # 支持度至少5%\n    (rules[\'confidence\'] >= 0.5) &    # 置信度至少50%\n    (rules[\'lift\'] > 1)               # 提升度大于1\n].sort_values(\'lift\', ascending=False)\n\nprint(rules_filtered[[\'antecedents\', \'consequents\', \n                      \'support\', \'confidence\', \'lift\']])\n```\n\n## 解读示例\n\n假设我们发现规则：尿布 → 啤酒\n\n- **支持度 0.5**：50%的交易包含尿布和啤酒\n- **置信度 0.7**：买了尿布的人中，70%也买了啤酒\n- **提升度 1.4**：买了尿布的人买啤酒的可能性是普通人的1.4倍\n\n**业务建议**：将啤酒货架放在尿布附近，或进行捆绑促销' },
          { id: 'l6', title: '实战案例：超市购物分析', type: 'article', duration: 30, content: '# 实战案例：超市购物分析\n\n## 业务背景\n\n某超市想要分析客户的购买行为，以优化商品摆放和促销策略。\n\n## 分析流程\n\n1. 收集交易数据\n2. 数据预处理（转换为布尔矩阵）\n3. 挖掘频繁项集\n4. 生成关联规则\n5. 筛选有价值的规则\n6. 提出业务建议\n\n## 关键发现\n\n通过分析，可能发现：\n\n- **强关联**：啤酒 ↔ 尿布（经典案例）\n- **同类关联**：不同品牌的同类商品\n- **互补关联**：不同品类的搭配购买\n\n## 业务应用\n\n1. **商品摆放**：将关联商品放在相邻位置\n2. **捆绑销售**：创建商品组合包\n3. **精准营销**：向购买A商品的客户推荐B商品\n4. **库存优化**：预测关联商品的需求', practice: { title: '购物篮分析实操练习', description: '使用mlxtend库进行购物篮分析，挖掘关联规则并筛选有价值的规则', initialCode: 'import pandas as pd\nfrom mlxtend.frequent_patterns import apriori, association_rules\nfrom mlxtend.preprocessing import TransactionEncoder\n\n# 交易数据\ntransactions = [\n    [\'面包\', \'牛奶\', \'鸡蛋\'],\n    [\'面包\', \'牛奶\'],\n    [\'牛奶\', \'鸡蛋\', \'饼干\'],\n    [\'面包\', \'鸡蛋\'],\n    [\'面包\', \'牛奶\', \'鸡蛋\', \'饼干\'],\n    [\'牛奶\', \'饼干\'],\n    [\'面包\', \'牛奶\', \'饼干\'],\n    [\'面包\', \'鸡蛋\', \'饼干\'],\n]\n\n# TODO: 1. 转换为布尔矩阵\n\n# TODO: 2. 挖掘频繁项集（最小支持度0.3）\n\n# TODO: 3. 生成关联规则（最小置信度0.6）\n\n# TODO: 4. 筛选提升度大于1的规则\n\n# TODO: 5. 输出结果\nprint("关联规则：")\n', expectedOutput: '关联规则：\n  antecedents consequents  support  confidence      lift\n0      (鸡蛋)      (面包)      0.50         0.80  1.142857\n1      (饼干)      (牛奶)      0.50         0.80  1.066667\n2      (面包)      (牛奶)      0.50         0.71  0.952381\n3      (面包)      (鸡蛋)      0.50         0.71  1.142857\n4      (牛奶)      (面包)      0.50         0.67  0.952381\n5      (牛奶)      (饼干)      0.50         0.67  1.066667', hints: ['使用TransactionEncoder转换数据', '使用apriori挖掘频繁项集', '使用association_rules生成规则', '使用条件筛选有价值的规则'], solution: 'import pandas as pd\nfrom mlxtend.frequent_patterns import apriori, association_rules\nfrom mlxtend.preprocessing import TransactionEncoder\n\n# 交易数据\ntransactions = [\n    [\'面包\', \'牛奶\', \'鸡蛋\'],\n    [\'面包\', \'牛奶\'],\n    [\'牛奶\', \'鸡蛋\', \'饼干\'],\n    [\'面包\', \'鸡蛋\'],\n    [\'面包\', \'牛奶\', \'鸡蛋\', \'饼干\'],\n    [\'牛奶\', \'饼干\'],\n    [\'面包\', \'牛奶\', \'饼干\'],\n    [\'面包\', \'鸡蛋\', \'饼干\'],\n]\n\n# 1. 转换为布尔矩阵\nte = TransactionEncoder()\nte_ary = te.fit(transactions).transform(transactions)\ndf = pd.DataFrame(te_ary, columns=te.columns_)\n\n# 2. 挖掘频繁项集\nfrequent_itemsets = apriori(df, min_support=0.3, use_colnames=True)\n\n# 3. 生成关联规则\nrules = association_rules(frequent_itemsets, metric=\"confidence\", min_threshold=0.5)\n\n# 4. 筛选提升度大于1的规则\nvaluable_rules = rules[rules[\'lift\'] > 1][[\n    \'antecedents\', \'consequents\', \n    \'support\', \'confidence\', \'lift\'\n]]\n\n# 5. 输出结果\nprint(\"关联规则：\")\nprint(valuable_rules.round(2))' } },
        ],
      },
      {
        id: 'ch4',
        title: '章节测验',
        lessons: [
          { id: 'l7', title: '章节测验', type: 'quiz', duration: 10, content: '' },
        ],
      },
    ],
    quizQuestions: [
      {
        id: 'market-basket-q1',
        type: 'choice',
        question: '购物篮分析中，支持度表示的是？',
        options: [
          '买了A商品后买B商品的概率',
          '同时包含A和B的交易占总交易的比例',
          'A和B的关联程度',
          '规则的有用程度'
        ],
        correctAnswer: 1,
        explanation: '支持度 = 包含{A,B}的交易数 / 总交易数，表示这个组合出现的频率。'
      },
      {
        id: 'market-basket-q2',
        type: 'choice',
        question: '置信度为0.8表示什么意思？',
        options: [
          '有80%的交易包含这两个商品',
          '买了A商品的人中，有80%也买了B商品',
          '这两个商品的关联程度是0.8',
          '规则有80%的可能是正确的'
        ],
        correctAnswer: 1,
        explanation: '置信度 = P(B|A)，表示在发生A的条件下，B发生的概率，即买了A后买B的概率。'
      },
      {
        id: 'market-basket-q3',
        type: 'choice',
        question: '提升度大于1意味着什么？',
        options: [
          '这两个商品互相排斥',
          '这两个商品没有关联',
          '这两个商品存在正相关关系',
          '这两个商品是完全独立的'
        ],
        correctAnswer: 2,
        explanation: '提升度 = 置信度 / P(B)。如果lift>1，说明A和B存在正相关，即A的存在提高了B发生的概率。'
      }
    ]
  },
  'customer-clustering': {
    id: 'customer-clustering',
    title: '客户聚类分析',
    description: '客户聚类是客户关系管理的重要技术，通过将客户分群实现精准营销和个性化服务。',
    category: '数据挖掘',
    difficulty: 'intermediate',
    coverImage: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Customer clustering visualization with colorful dots grouped in circles&image_size=landscape_16_9',
    totalLessons: 8,
    duration: 240,
    quizQuestions: [
      {
        id: 'customer-clustering-q1',
        type: 'choice',
        question: 'K-Means算法中的K值表示什么？',
        options: [
          '迭代次数',
          '聚类中心的数量',
          '数据维度',
          '样本数量'
        ],
        correctAnswer: 1,
        explanation: 'K值表示要将数据分成的簇的数量，即聚类中心的数量。'
      },
      {
        id: 'customer-clustering-q2',
        type: 'choice',
        question: '肘部法则用于确定什么？',
        options: [
          '数据的维度',
          '最佳聚类数K',
          '初始聚类中心',
          '收敛阈值'
        ],
        correctAnswer: 1,
        explanation: '肘部法则通过绘制不同K值的SSE曲线，找到曲线变平缓的点作为最佳K值。'
      },
      {
        id: 'customer-clustering-q3',
        type: 'choice',
        question: '在K-Means聚类前为什么需要标准化数据？',
        options: [
          '减少数据量',
          '消除量纲差异的影响',
          '增加数据噪声',
          '降低计算复杂度'
        ],
        correctAnswer: 1,
        explanation: '标准化可以确保各特征在相同尺度上，避免数值较大的特征主导聚类结果。'
      },
      {
        id: 'customer-clustering-q4',
        type: 'practical',
        question: '写出使用scikit-learn创建K-Means模型并设置5个聚类中心的代码。',
        correctAnswer: 'KMeans(n_clusters=5)',
        explanation: '创建KMeans实例时通过n_clusters参数指定聚类数量。'
      }
    ],
    chapters: [
      {
        id: 'ch1',
        title: '聚类分析基础',
        lessons: [
          { id: 'l1', title: '聚类分析概述', type: 'article', duration: 20, content: '# 聚类分析概述\n\n## 什么是聚类\n\n聚类是一种无监督学习方法，将相似的数据点归为一组。\n\n## 应用场景\n\n- **客户分群**：根据消费行为将客户分类\n- **市场细分**：识别不同的市场群体\n- **异常检测**：识别与大多数不同的数据点\n\n## 常用算法\n\n- K-Means\n- 层次聚类\n- DBSCAN' },
          { id: 'l2', title: 'K-Means算法原理', type: 'article', duration: 25, content: '# K-Means算法原理\n\n## 算法步骤\n\n1. 随机选择K个中心点\n2. 将每个点分配到最近的中心\n3. 重新计算每个簇的中心\n4. 重复步骤2-3直到收敛\n\n## Python实现\n\n```python\nfrom sklearn.cluster import KMeans\nimport numpy as np\n\n# 准备数据\nX = np.array([[1, 2], [1, 4], [1, 0],\n              [10, 2], [10, 4], [10, 0]])\n\n# 训练模型\nkmeans = KMeans(n_clusters=2, random_state=42)\nkmeans.fit(X)\n\n# 获取聚类结果\nlabels = kmeans.labels_\ncenters = kmeans.cluster_centers_\n\nprint("聚类标签:", labels)\nprint("聚类中心:", centers)\n```' },
        ],
      },
      {
        id: 'ch2',
        title: '客户分群实战',
        lessons: [
          { id: 'l3', title: 'RFM模型', type: 'article', duration: 25, content: '# RFM模型\n\n## RFM定义\n\n- **R (Recency)**：最近一次购买时间\n- **F (Frequency)**：购买频率\n- **M (Monetary)**：消费金额\n\n## 计算RFM\n\n```python\nimport pandas as pd\nfrom datetime import datetime\n\n# 加载交易数据\ndf = pd.read_csv(\'transactions.csv\')\ndf[\'date\'] = pd.to_datetime(df[\'date\'])\n\n# 计算RFM\nreference_date = df[\'date\'].max() + pd.Timedelta(days=1)\n\nrfm = df.groupby(\'customer_id\').agg({\n    \'date\': lambda x: (reference_date - x.max()).days,  # Recency\n    \'order_id\': \'count\',  # Frequency\n    \'amount\': \'sum\'  # Monetary\n})\n\nrfm.columns = [\'R\', \'F\', \'M\']\n```' },
          { id: 'l4', title: '确定最佳聚类数', type: 'article', duration: 25, content: '# 确定最佳聚类数\n\n## 肘部法则\n\n```python\nimport matplotlib.pyplot as plt\nfrom sklearn.cluster import KMeans\n\n# 计算不同K值的SSE\nsse = []\nK_range = range(1, 11)\n\nfor k in K_range:\n    kmeans = KMeans(n_clusters=k, random_state=42)\n    kmeans.fit(rfm_scaled)\n    sse.append(kmeans.inertia_)\n\n# 绘制肘部图\nplt.plot(K_range, sse, \'bx-\')\nplt.xlabel(\'k\')\nplt.ylabel(\'SSE\')\nplt.title(\'Elbow Method\')\nplt.show()\n```\n\n## 轮廓系数\n\n```python\nfrom sklearn.metrics import silhouette_score\n\nsilhouette_scores = []\nfor k in range(2, 11):\n    kmeans = KMeans(n_clusters=k, random_state=42)\n    labels = kmeans.fit_predict(rfm_scaled)\n    silhouette_scores.append(silhouette_score(rfm_scaled, labels))\n```' },
          { id: 'l5', title: '客户分群实现', type: 'article', duration: 30, content: '# 客户分群实现\n\n```python\nimport pandas as pd\nfrom sklearn.cluster import KMeans\nfrom sklearn.preprocessing import StandardScaler\nimport matplotlib.pyplot as plt\n\n# 1. 准备RFM数据\nrfm = pd.read_csv(\'customer_rfm.csv\')\n\n# 2. 数据标准化\nscaler = StandardScaler()\nrfm_scaled = scaler.fit_transform(rfm[[\'R\', \'F\', \'M\']])\n\n# 3. K-Means聚类\nkmeans = KMeans(n_clusters=4, random_state=42)\nrfm[\'Cluster\'] = kmeans.fit_predict(rfm_scaled)\n\n# 4. 分析各群体特征\ncluster_stats = rfm.groupby(\'Cluster\').agg({\n    \'R\': \'mean\',\n    \'F\': \'mean\',\n    \'M\': \'mean\',\n    \'customer_id\': \'count\'\n}).rename(columns={\'customer_id\': \'Count\'})\n\nprint(cluster_stats)\n\n# 5. 可视化\nplt.scatter(rfm[\'R\'], rfm[\'F\'], c=rfm[\'Cluster\'], cmap=\'viridis\')\nplt.xlabel(\'Recency\')\nplt.ylabel(\'Frequency\')\nplt.title(\'Customer Segments\')\nplt.show()\n```' },
        ],
      },
    ],
  },
  'data-visualization': {
    id: 'data-visualization',
    title: '数据可视化',
    description: '数据可视化是将数据转化为图形的艺术，让复杂的数据变得直观易懂。',
    category: '数据可视化',
    difficulty: 'beginner',
    coverImage: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Beautiful data visualization dashboard with multiple chart types&image_size=landscape_16_9',
    totalLessons: 10,
    duration: 300,
    quizQuestions: [
      {
        id: 'data-visualization-q1',
        type: 'choice',
        question: 'Matplotlib中创建折线图应该使用哪个函数？',
        options: [
          'plt.bar()',
          'plt.plot()',
          'plt.scatter()',
          'plt.hist()'
        ],
        correctAnswer: 1,
        explanation: 'plt.plot()用于绘制折线图，plt.bar()是柱状图，plt.scatter()是散点图，plt.hist()是直方图。'
      },
      {
        id: 'data-visualization-q2',
        type: 'choice',
        question: 'Seaborn是基于哪个库构建的？',
        options: [
          'Plotly',
          'Matplotlib',
          'ggplot2',
          'Bokeh'
        ],
        correctAnswer: 1,
        explanation: 'Seaborn是基于Matplotlib构建的高级统计可视化库。'
      },
      {
        id: 'data-visualization-q3',
        type: 'choice',
        question: '用于显示数据分布情况的图表是？',
        options: [
          '折线图',
          '柱状图',
          '直方图',
          '散点图'
        ],
        correctAnswer: 2,
        explanation: '直方图用于展示数据的分布情况，显示不同区间的数据频率。'
      },
      {
        id: 'data-visualization-q4',
        type: 'practical',
        question: '写出在Matplotlib中设置图表标题为"销售趋势"的代码。',
        correctAnswer: 'plt.title("销售趋势")',
        explanation: '使用plt.title()函数设置图表标题。'
      }
    ],
    chapters: [
      {
        id: 'ch1',
        title: 'Matplotlib基础',
        lessons: [
          { id: 'l1', title: 'Matplotlib入门', type: 'article', duration: 20, content: '# Matplotlib入门\n\n## 基本绑定\n\n```python\nimport matplotlib.pyplot as plt\nimport numpy as np\n\n# 创建数据\nx = np.linspace(0, 10, 100)\ny = np.sin(x)\n\n# 创建图形\nplt.figure(figsize=(10, 6))\nplt.plot(x, y)\nplt.title(\'Sin Wave\')\nplt.xlabel(\'X\')\nplt.ylabel(\'Y\')\nplt.show()\n```\n\n## 图形结构\n\n- **Figure**：整个图形窗口\n- **Axes**：单个图表\n- **Axis**：坐标轴' },
          { id: 'l2', title: '常用图表类型', type: 'article', duration: 30, content: '# 常用图表类型\n\n## 折线图\n\n```python\nplt.plot(x, y)\n```\n\n## 柱状图\n\n```python\ncategories = [\'A\', \'B\', \'C\', \'D\']\nvalues = [10, 25, 15, 30]\nplt.bar(categories, values)\n```\n\n## 散点图\n\n```python\nplt.scatter(x, y, c=colors, s=sizes, alpha=0.5)\n```\n\n## 饼图\n\n```python\nplt.pie(values, labels=categories, autopct=\'%1.1f%%\')\n```\n\n## 直方图\n\n```python\nplt.hist(data, bins=30, edgecolor=\'black\')\n```' },
          { id: 'l3', title: '图表美化', type: 'article', duration: 25, content: '# 图表美化\n\n## 设置样式\n\n```python\nplt.style.use(\'seaborn\')\n```\n\n## 添加图例\n\n```python\nplt.plot(x, y1, label=\'Line 1\')\nplt.plot(x, y2, label=\'Line 2\')\nplt.legend(loc=\'upper right\')\n```\n\n## 添加网格\n\n```python\nplt.grid(True, linestyle=\'--\', alpha=0.7)\n```\n\n## 调整颜色\n\n```python\nplt.plot(x, y, color=\'#FF6B6B\', linewidth=2)\n```\n\n## 保存图片\n\n```python\nplt.savefig(\'chart.png\', dpi=300, bbox_inches=\'tight\')\n```' },
        ],
      },
      {
        id: 'ch2',
        title: 'Seaborn进阶',
        lessons: [
          { id: 'l4', title: 'Seaborn简介', type: 'article', duration: 20, content: '# Seaborn简介\n\n## 安装和导入\n\n```python\nimport seaborn as sns\nimport matplotlib.pyplot as plt\n```\n\n## 内置数据集\n\n```python\ntips = sns.load_dataset(\'tips\')\niris = sns.load_dataset(\'iris\')\n```\n\n## 设置主题\n\n```python\nsns.set_theme(style="whitegrid")\n```' },
          { id: 'l5', title: '统计图表', type: 'article', duration: 30, content: '# 统计图表\n\n## 分布图\n\n```python\nsns.histplot(data=tips, x=\'total_bill\', kde=True)\n```\n\n## 箱线图\n\n```python\nsns.boxplot(data=tips, x=\'day\', y=\'total_bill\')\n```\n\n## 小提琴图\n\n```python\nsns.violinplot(data=tips, x=\'day\', y=\'total_bill\')\n```\n\n## 热力图\n\n```python\ncorr = df.corr()\nsns.heatmap(corr, annot=True, cmap=\'coolwarm\')\n```' },
          { id: 'l6', title: '多变量可视化', type: 'article', duration: 25, content: '# 多变量可视化\n\n## 散点图矩阵\n\n```python\nsns.pairplot(iris, hue=\'species\')\n```\n\n## 联合分布图\n\n```python\nsns.jointplot(data=tips, x=\'total_bill\', y=\'tip\', kind=\'reg\')\n```\n\n## 分面网格\n\n```python\ng = sns.FacetGrid(tips, col=\'time\', row=\'smoker\')\ng.map(sns.histplot, \'total_bill\')\n```' },
        ],
      },
    ],
  },
  'ab-testing': {
    id: 'ab-testing',
    title: 'A/B测试分析',
    description: 'A/B测试是产品优化的科学方法，通过对照实验验证产品改进的效果。',
    category: '数据分析',
    difficulty: 'intermediate',
    coverImage: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=A/B testing comparison with two versions, split test visualization&image_size=landscape_16_9',
    totalLessons: 6,
    duration: 180,
    quizQuestions: [
      {
        id: 'ab-testing-q1',
        type: 'choice',
        question: 'A/B测试中，p值的含义是？',
        options: [
          '实验成功的概率',
          '在原假设成立的情况下，观察到当前结果或更极端结果的概率',
          '两组数据的差异大小',
          '样本量的大小'
        ],
        correctAnswer: 1,
        explanation: 'p值表示在原假设（两组无差异）成立时，观察到当前数据或更极端数据的概率。'
      },
      {
        id: 'ab-testing-q2',
        type: 'choice',
        question: '通常将显著性水平设置为多少？',
        options: [
          '0.01',
          '0.05',
          '0.10',
          '0.15'
        ],
        correctAnswer: 1,
        explanation: '通常将显著性水平α设置为0.05，即当p<0.05时拒绝原假设。'
      },
      {
        id: 'ab-testing-q3',
        type: 'choice',
        question: 'A/B测试中，实验组和对照组的主要区别是？',
        options: [
          '样本量不同',
          '实验组接受新方案，对照组接受原方案',
          '数据收集方式不同',
          '分析方法不同'
        ],
        correctAnswer: 1,
        explanation: '实验组接受待测试的新方案，对照组保持原有方案，通过比较两者差异评估新方案效果。'
      },
      {
        id: 'ab-testing-q4',
        type: 'practical',
        question: '当p值为0.03时，是否拒绝原假设？（填写"是"或"否"）',
        correctAnswer: '是',
        explanation: 'p值0.03 < 显著性水平0.05，因此拒绝原假设，认为两组存在显著差异。'
      }
    ],
    chapters: [
      {
        id: 'ch1',
        title: 'A/B测试基础',
        lessons: [
          { id: 'l1', title: 'A/B测试概述', type: 'article', duration: 20, content: '# A/B测试概述\n\n## 什么是A/B测试\n\nA/B测试是一种对照实验，将用户随机分成两组，分别展示不同版本，比较效果差异。\n\n## 应用场景\n\n- 网页设计优化\n- 产品功能测试\n- 营销活动效果\n- 算法改进验证\n\n## 核心要素\n\n- **假设**：明确要验证的问题\n- **指标**：衡量效果的量化标准\n- **样本量**：确保统计显著性\n- **随机分组**：消除选择偏差' },
          { id: 'l2', title: '实验设计', type: 'article', duration: 25, content: '# 实验设计\n\n## 确定指标\n\n- **核心指标**：直接影响业务目标\n- **辅助指标**：帮助理解用户行为\n- **护栏指标**：确保不会产生负面影响\n\n## 样本量计算\n\n```python\nfrom statsmodels.stats.power import NormalIndPower\nfrom statsmodels.stats.proportion import proportion_effectsize\n\n# 计算所需样本量\npower = NormalIndPower()\neffect_size = proportion_effectsize(0.10, 0.12)  # 基准转化率10%，期望提升到12%\nsample_size = power.solve_power(effect_size, power=0.8, alpha=0.05)\n\nprint(f"每组需要样本量: {int(sample_size)}")\n```' },
        ],
      },
      {
        id: 'ch2',
        title: '结果分析',
        lessons: [
          { id: 'l3', title: '统计显著性检验', type: 'article', duration: 30, content: '# 统计显著性检验\n\n## Z检验\n\n```python\nimport numpy as np\nfrom scipy import stats\n\n# A组和B组数据\nn_A = 1000  # A组样本量\nn_B = 1000  # B组样本量\nx_A = 100   # A组转化数\nx_B = 120   # B组转化数\n\n# 计算转化率\np_A = x_A / n_A\np_B = x_B / n_B\n\n# 合并转化率\np_pool = (x_A + x_B) / (n_A + n_B)\n\n# 计算标准误\nse = np.sqrt(p_pool * (1 - p_pool) * (1/n_A + 1/n_B))\n\n# Z统计量\nz = (p_B - p_A) / se\n\n# P值\np_value = stats.norm.sf(abs(z)) * 2\n\nprint(f"Z统计量: {z:.4f}")\nprint(f"P值: {p_value:.4f}")\n```' },
          { id: 'l4', title: '置信区间计算', type: 'article', duration: 25, content: '# 置信区间计算\n\n## 差异的置信区间\n\n```python\nimport numpy as np\nfrom scipy import stats\n\n# 计算差异的标准误\nse_diff = np.sqrt(p_A*(1-p_A)/n_A + p_B*(1-p_B)/n_B)\n\n# 差异\ndiff = p_B - p_A\n\n# 95%置信区间\nz = stats.norm.ppf(0.975)\nci_lower = diff - z * se_diff\nci_upper = diff + z * se_diff\n\nprint(f"转化率差异: {diff:.4f}")\nprint(f"95%置信区间: [{ci_lower:.4f}, {ci_upper:.4f}]")\n```\n\n## 结果解读\n\n- 置信区间不包含0：差异显著\n- 置信区间全为正：B组更好\n- 置信区间全为负：A组更好' },
          { id: 'l5', title: '实战案例：按钮颜色测试', type: 'article', duration: 30, content: '# 实战案例：按钮颜色测试\n\n```python\nimport pandas as pd\nfrom scipy import stats\nimport numpy as np\n\n# 加载实验数据\ndf = pd.read_csv(\'ab_test_results.csv\')\n\n# 分组统计\nsummary = df.groupby(\'group\').agg({\n    \'user_id\': \'count\',\n    \'converted\': \'sum\'\n})\nsummary[\'rate\'] = summary[\'converted\'] / summary[\'user_id\']\n\nprint(summary)\n\n# 提取数据\nn_A = summary.loc[\'control\', \'user_id\']\nn_B = summary.loc[\'treatment\', \'user_id\']\nx_A = summary.loc[\'control\', \'converted\']\nx_B = summary.loc[\'treatment\', \'converted\']\n\n# 卡方检验\ncontingency = np.array([[x_A, n_A-x_A], [x_B, n_B-x_B]])\nchi2, p_value, dof, expected = stats.chi2_contingency(contingency)\n\nprint(f"\\n卡方检验结果:")\nprint(f"卡方值: {chi2:.4f}")\nprint(f"P值: {p_value:.4f}")\n\nif p_value < 0.05:\n    print("结论: 差异显著，建议采用新版本")\nelse:\n    print("结论: 差异不显著，需要更多数据或保持原版本")\n```' },
        ],
      },
    ],
  },
  'time-series': {
    id: 'time-series',
    title: '时间序列分析',
    description: '时间序列分析是预测未来的重要工具，广泛应用于销售预测、股票分析等领域。',
    category: '数据分析',
    difficulty: 'advanced',
    coverImage: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Time series chart with trend line and forecast, stock market style&image_size=landscape_16_9',
    totalLessons: 9,
    duration: 270,
    quizQuestions: [
      {
        id: 'time-series-q1',
        type: 'choice',
        question: '时间序列的四个组成成分不包括？',
        options: [
          '趋势',
          '季节性',
          '相关性',
          '随机性'
        ],
        correctAnswer: 2,
        explanation: '时间序列的四个组成成分是：趋势、季节性、周期性和随机性。'
      },
      {
        id: 'time-series-q2',
        type: 'choice',
        question: 'ADF检验用于检验时间序列的什么性质？',
        options: [
          '季节性',
          '平稳性',
          '趋势性',
          '周期性'
        ],
        correctAnswer: 1,
        explanation: 'ADF检验（Augmented Dickey-Fuller test）用于检验时间序列的平稳性。'
      },
      {
        id: 'time-series-q3',
        type: 'choice',
        question: '移动平均的作用是什么？',
        options: [
          '预测未来值',
          '平滑时间序列',
          '增加波动',
          '检测异常'
        ],
        correctAnswer: 1,
        explanation: '移动平均可以消除短期波动，使时间序列更加平滑，便于观察趋势。'
      },
      {
        id: 'time-series-q4',
        type: 'practical',
        question: '写出使用pandas将字符串日期列"date"转换为datetime类型的代码。',
        correctAnswer: 'pd.to_datetime(df["date"])',
        explanation: '使用pd.to_datetime()函数将字符串转换为datetime类型。'
      }
    ],
    chapters: [
      {
        id: 'ch1',
        title: '时间序列基础',
        lessons: [
          { id: 'l1', title: '时间序列概述', type: 'article', duration: 20, content: '# 时间序列概述\n\n## 定义\n\n时间序列是按时间顺序排列的数据点序列。\n\n## 组成成分\n\n- **趋势**：长期上升或下降\n- **季节性**：周期性重复的模式\n- **周期性**：非固定周期的波动\n- **随机性**：不可预测的波动\n\n## 应用场景\n\n- 销售预测\n- 股票价格分析\n- 需求预测\n- 异常检测' },
          { id: 'l2', title: '时间序列处理', type: 'article', duration: 25, content: '# 时间序列处理\n\n## 创建时间序列\n\n```python\nimport pandas as pd\n\n# 创建日期范围\ndates = pd.date_range(start=\'2023-01-01\', periods=365, freq=\'D\')\n\n# 创建时间序列\nts = pd.Series(np.random.randn(365), index=dates)\n\n# 设置日期为索引\ndf[\'date\'] = pd.to_datetime(df[\'date\'])\ndf.set_index(\'date\', inplace=True)\n```\n\n## 重采样\n\n```python\n# 日数据转月数据\nmonthly = ts.resample(\'M\').sum()\n\n# 日数据转周数据\nweekly = ts.resample(\'W\').mean()\n```' },
        ],
      },
      {
        id: 'ch2',
        title: '时间序列分析',
        lessons: [
          { id: 'l3', title: '趋势分析', type: 'article', duration: 25, content: '# 趋势分析\n\n## 移动平均\n\n```python\nimport pandas as pd\n\n# 简单移动平均\nma_7 = ts.rolling(window=7).mean()\nma_30 = ts.rolling(window=30).mean()\n\n# 可视化\nimport matplotlib.pyplot as plt\n\nplt.figure(figsize=(12, 6))\nplt.plot(ts, label=\'原始数据\')\nplt.plot(ma_7, label=\'7日移动平均\')\nplt.plot(ma_30, label=\'30日移动平均\')\nplt.legend()\nplt.show()\n```\n\n## 趋势分解\n\n```python\nfrom statsmodels.tsa.seasonal import seasonal_decompose\n\n# 加法模型分解\ndecomposition = seasonal_decompose(ts, model=\'additive\', period=12)\n\n# 获取各成分\ntrend = decomposition.trend\nseasonal = decomposition.seasonal\nresidual = decomposition.resid\n```' },
          { id: 'l4', title: '季节性分析', type: 'article', duration: 25, content: '# 季节性分析\n\n## 季节性分解\n\n```python\nfrom statsmodels.tsa.seasonal import seasonal_decompose\n\n# 分解时间序列\nresult = seasonal_decompose(ts, model=\'multiplicative\', period=12)\n\n# 可视化\nfig, axes = plt.subplots(4, 1, figsize=(12, 10))\nresult.observed.plot(ax=axes[0], title=\'原始数据\')\nresult.trend.plot(ax=axes[1], title=\'趋势\')\nresult.seasonal.plot(ax=axes[2], title=\'季节性\')\nresult.resid.plot(ax=axes[3], title=\'残差\')\nplt.tight_layout()\n```\n\n## 季节性指数\n\n```python\n# 计算各月份的季节性指数\nseasonal_index = result.seasonal.groupby(result.seasonal.index.month).mean()\nprint(seasonal_index)\n```' },
          { id: 'l5', title: '平稳性检验', type: 'article', duration: 25, content: '# 平稳性检验\n\n## ADF检验\n\n```python\nfrom statsmodels.tsa.stattools import adfuller\n\n# ADF检验\nresult = adfuller(ts)\n\nprint(f\'ADF统计量: {result[0]:.4f}\')\nprint(f\'P值: {result[1]:.4f}\')\nprint(\'临界值:\')\nfor key, value in result[4].items():\n    print(f\'  {key}: {value:.4f}\')\n\nif result[1] < 0.05:\n    print(\'结论: 序列平稳\')\nelse:\n    print(\'结论: 序列非平稳，需要差分\')\n```\n\n## 差分处理\n\n```python\n# 一阶差分\nts_diff = ts.diff().dropna()\n\n# 二阶差分\nts_diff2 = ts.diff().diff().dropna()\n```' },
        ],
      },
    ],
  },
  'feature-engineering': {
    id: 'feature-engineering',
    title: '特征工程',
    description: '特征工程是机器学习的核心环节，好的特征可以显著提升模型性能。',
    category: '机器学习',
    difficulty: 'advanced',
    coverImage: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Feature engineering pipeline with gears and data transformation&image_size=landscape_16_9',
    totalLessons: 8,
    duration: 240,
    quizQuestions: [
      {
        id: 'feature-engineering-q1',
        type: 'choice',
        question: 'StandardScaler的作用是什么？',
        options: [
          '归一化到[0,1]',
          '标准化为均值0方差1',
          '对数变换',
          '分箱处理'
        ],
        correctAnswer: 1,
        explanation: 'StandardScaler将特征转换为均值为0，标准差为1的标准正态分布。'
      },
      {
        id: 'feature-engineering-q2',
        type: 'choice',
        question: '对类别特征进行独热编码应该使用哪个工具？',
        options: [
          'LabelEncoder',
          'OneHotEncoder',
          'StandardScaler',
          'MinMaxScaler'
        ],
        correctAnswer: 1,
        explanation: 'OneHotEncoder将类别特征转换为独热编码形式，适合处理非有序类别。'
      },
      {
        id: 'feature-engineering-q3',
        type: 'choice',
        question: 'KNNImputer的作用是什么？',
        options: [
          '删除缺失值',
          '用K近邻填充缺失值',
          '标准化特征',
          '编码类别特征'
        ],
        correctAnswer: 1,
        explanation: 'KNNImputer使用K近邻算法来估计和填充缺失值。'
      },
      {
        id: 'feature-engineering-q4',
        type: 'practical',
        question: '写出使用sklearn对特征矩阵X进行标准化的代码。',
        correctAnswer: 'StandardScaler().fit_transform(X)',
        explanation: '创建StandardScaler实例并调用fit_transform方法对数据进行标准化。'
      }
    ],
    chapters: [
      {
        id: 'ch1',
        title: '特征工程基础',
        lessons: [
          { id: 'l1', title: '特征工程概述', type: 'article', duration: 20, content: '# 特征工程概述\n\n## 什么是特征工程\n\n特征工程是利用领域知识从原始数据中创建新特征的过程。\n\n## 为什么重要\n\n- 更好的特征 = 更好的模型\n- 可以弥补简单模型的不足\n- 是数据科学家最重要的技能之一\n\n## 特征类型\n\n- **数值特征**：连续数值\n- **类别特征**：离散类别\n- **文本特征**：文本数据\n- **时间特征**：时间相关\n- **空间特征**：地理位置' },
          { id: 'l2', title: '缺失值处理', type: 'article', duration: 25, content: '# 缺失值处理\n\n## 删除法\n\n```python\n# 删除含缺失值的行\ndf.dropna()\n\n# 删除含缺失值的列\ndf.dropna(axis=1)\n```\n\n## 填充法\n\n```python\nfrom sklearn.impute import SimpleImputer\n\n# 均值填充\nimputer = SimpleImputer(strategy=\'mean\')\ndf_filled = imputer.fit_transform(df)\n\n# 中位数填充\nimputer = SimpleImputer(strategy=\'median\')\n\n# 众数填充\nimputer = SimpleImputer(strategy=\'most_frequent\')\n```\n\n## KNN填充\n\n```python\nfrom sklearn.impute import KNNImputer\n\nimputer = KNNImputer(n_neighbors=5)\ndf_filled = imputer.fit_transform(df)\n```' },
        ],
      },
      {
        id: 'ch2',
        title: '特征变换',
        lessons: [
          { id: 'l3', title: '数值特征变换', type: 'article', duration: 25, content: '# 数值特征变换\n\n## 标准化\n\n```python\nfrom sklearn.preprocessing import StandardScaler\n\nscaler = StandardScaler()\ndf_scaled = scaler.fit_transform(df)\n```\n\n## 归一化\n\n```python\nfrom sklearn.preprocessing import MinMaxScaler\n\nscaler = MinMaxScaler()\ndf_normalized = scaler.fit_transform(df)\n```\n\n## 对数变换\n\n```python\nimport numpy as np\n\ndf[\'log_feature\'] = np.log1p(df[\'feature\'])\n```\n\n## 分箱\n\n```python\nfrom sklearn.preprocessing import KBinsDiscretizer\n\ndiscretizer = KBinsDiscretizer(n_bins=5, encode=\'onehot\')\ndf_binned = discretizer.fit_transform(df)\n```' },
          { id: 'l4', title: '类别特征编码', type: 'article', duration: 25, content: '# 类别特征编码\n\n## 标签编码\n\n```python\nfrom sklearn.preprocessing import LabelEncoder\n\nle = LabelEncoder()\ndf[\'category_encoded\'] = le.fit_transform(df[\'category\'])\n```\n\n## 独热编码\n\n```python\nfrom sklearn.preprocessing import OneHotEncoder\n\nencoder = OneHotEncoder(sparse=False, handle_unknown=\'ignore\')\nencoded = encoder.fit_transform(df[[\'category\']])\n```\n\n## 目标编码\n\n```python\nimport pandas as pd\n\n# 计算每个类别的目标均值\ntarget_mean = df.groupby(\'category\')[\'target\'].mean()\ndf[\'category_target\'] = df[\'category\'].map(target_mean)\n```' },
          { id: 'l5', title: '特征选择', type: 'article', duration: 25, content: '# 特征选择\n\n## 过滤法\n\n```python\nfrom sklearn.feature_selection import SelectKBest, f_classif\n\n# 选择K个最佳特征\nselector = SelectKBest(f_classif, k=10)\nX_selected = selector.fit_transform(X, y)\n\n# 查看选中的特征\nselected_features = X.columns[selector.get_support()]\n```\n\n## 包装法\n\n```python\nfrom sklearn.feature_selection import RFE\nfrom sklearn.ensemble import RandomForestClassifier\n\n# 递归特征消除\nestimator = RandomForestClassifier()\nselector = RFE(estimator, n_features_to_select=10)\nX_selected = selector.fit_transform(X, y)\n```\n\n## 嵌入法\n\n```python\nfrom sklearn.ensemble import RandomForestClassifier\n\n# 使用随机森林特征重要性\nmodel = RandomForestClassifier()\nmodel.fit(X, y)\nimportance = pd.Series(model.feature_importances_, index=X.columns)\nimportance.sort_values(ascending=False).head(10)\n```' },
        ],
      },
    ],
  },
  'anomaly-detection': {
    id: 'anomaly-detection',
    title: '异常值检测',
    description: '异常值检测是识别数据中异常模式的重要技术，广泛应用于欺诈检测、故障预警等领域。',
    category: '数据挖掘',
    difficulty: 'intermediate',
    coverImage: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Anomaly detection with red dots among blue dots, outlier visualization&image_size=landscape_16_9',
    totalLessons: 6,
    duration: 180,
    quizQuestions: [
      {
        id: 'anomaly-detection-q1',
        type: 'choice',
        question: 'Z-score方法中，通常将Z值的绝对值大于多少视为异常值？',
        options: [
          '1',
          '2',
          '3',
          '4'
        ],
        correctAnswer: 2,
        explanation: '通常将Z值绝对值大于3的数据点视为异常值。'
      },
      {
        id: 'anomaly-detection-q2',
        type: 'choice',
        question: 'IQR方法中，正常数据的下界是多少？',
        options: [
          'Q1 - IQR',
          'Q1 - 1.5*IQR',
          'Q3 - 1.5*IQR',
          'mean - 2*std'
        ],
        correctAnswer: 1,
        explanation: 'IQR方法中，下界 = Q1 - 1.5*IQR，上界 = Q3 + 1.5*IQR。'
      },
      {
        id: 'anomaly-detection-q3',
        type: 'choice',
        question: 'Isolation Forest算法的核心思想是什么？',
        options: [
          '通过随机分割隔离异常点',
          '计算数据点的密度',
          '拟合回归模型',
          '计算距离矩阵'
        ],
        correctAnswer: 0,
        explanation: 'Isolation Forest通过随机分割来隔离异常点，异常点更容易被孤立。'
      },
      {
        id: 'anomaly-detection-q4',
        type: 'practical',
        question: '计算数据集[1, 2, 3, 4, 5, 100]的IQR值（结果为整数）。',
        correctAnswer: '3',
        explanation: 'Q1=2, Q3=4.5, IQR=Q3-Q1=2.5，取整为3。'
      }
    ],
    chapters: [
      {
        id: 'ch1',
        title: '异常检测基础',
        lessons: [
          { id: 'l1', title: '异常检测概述', type: 'article', duration: 20, content: '# 异常检测概述\n\n## 什么是异常值\n\n异常值是与其他数据点显著不同的数据点。\n\n## 应用场景\n\n- **欺诈检测**：识别可疑交易\n- **故障预警**：设备异常监测\n- **网络入侵**：安全威胁检测\n- **数据清洗**：识别错误数据\n\n## 异常类型\n\n- **点异常**：单个数据点异常\n- **上下文异常**：在特定上下文中异常\n- **集体异常**：一组数据点异常' },
          { id: 'l2', title: '统计方法', type: 'article', duration: 25, content: '# 统计方法\n\n## Z-Score方法\n\n```python\nimport numpy as np\nfrom scipy import stats\n\n# 计算Z分数\nz_scores = np.abs(stats.zscore(data))\n\n# 标记异常值\nthreshold = 3\noutliers = np.where(z_scores > threshold)\n```\n\n## IQR方法\n\n```python\n# 计算四分位数\nQ1 = data.quantile(0.25)\nQ3 = data.quantile(0.75)\nIQR = Q3 - Q1\n\n# 定义异常值边界\nlower_bound = Q1 - 1.5 * IQR\nupper_bound = Q3 + 1.5 * IQR\n\n# 识别异常值\noutliers = data[(data < lower_bound) | (data > upper_bound)]\n```' },
        ],
      },
      {
        id: 'ch2',
        title: '机器学习方法',
        lessons: [
          { id: 'l3', title: 'Isolation Forest', type: 'article', duration: 25, content: '# Isolation Forest\n\n## 原理\n\n通过随机分割隔离异常点，异常点更容易被隔离。\n\n## 实现\n\n```python\nfrom sklearn.ensemble import IsolationForest\nimport numpy as np\n\n# 训练模型\nmodel = IsolationForest(contamination=0.1, random_state=42)\nmodel.fit(X)\n\n# 预测\npredictions = model.predict(X)\n\n# -1表示异常值\noutliers = X[predictions == -1]\n```\n\n## 参数调优\n\n```python\n# contamination: 异常值比例\nmodel = IsolationForest(contamination=0.05)\n\n# n_estimators: 树的数量\nmodel = IsolationForest(n_estimators=200)\n```' },
          { id: 'l4', title: 'LOF局部异常因子', type: 'article', duration: 25, content: '# LOF局部异常因子\n\n## 原理\n\n比较数据点与其邻居的局部密度。\n\n## 实现\n\n```python\nfrom sklearn.neighbors import LocalOutlierFactor\n\n# 训练模型\nmodel = LocalOutlierFactor(n_neighbors=20, contamination=0.1)\n\n# 预测\npredictions = model.fit_predict(X)\n\n# 获取异常分数\nscores = model.negative_outlier_factor_\n\n# 标记异常值\noutliers = X[predictions == -1]\n```\n\n## 可视化\n\n```python\nimport matplotlib.pyplot as plt\n\nplt.scatter(X[:, 0], X[:, 1], c=predictions, cmap=\'viridis\')\nplt.title(\'LOF Anomaly Detection\')\nplt.show()\n```' },
          { id: 'l5', title: '实战案例：信用卡欺诈检测', type: 'article', duration: 30, content: '# 实战案例：信用卡欺诈检测\n\n```python\nimport pandas as pd\nfrom sklearn.ensemble import IsolationForest\nfrom sklearn.preprocessing import StandardScaler\nfrom sklearn.metrics import classification_report\n\n# 加载数据\ndf = pd.read_csv(\'credit_card_transactions.csv\')\n\n# 特征标准化\nscaler = StandardScaler()\nX = scaler.fit_transform(df.drop(\'Class\', axis=1))\n\n# 训练Isolation Forest\nmodel = IsolationForest(contamination=0.01, random_state=42)\npredictions = model.fit_predict(X)\n\n# 转换预测结果\npredictions = [1 if p == -1 else 0 for p in predictions]\n\n# 评估结果\nprint(classification_report(df[\'Class\'], predictions))\n\n# 统计检测到的欺诈交易\nfraud_detected = sum(predictions)\nprint(f"检测到的可疑交易数: {fraud_detected}")\n```' },
        ],
      },
    ],
  },
  'data-merging': {
    id: 'data-merging',
    title: '多数据集合并',
    description: '多数据集合并是数据分析的常见需求，掌握数据合并技巧可以整合多个数据源的信息。',
    category: '数据处理',
    difficulty: 'beginner',
    coverImage: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Multiple data tables merging into one, database join visualization&image_size=landscape_16_9',
    totalLessons: 7,
    duration: 210,
    quizQuestions: [
      {
        id: 'data-merging-q1',
        type: 'choice',
        question: '在pandas中，用于合并两个DataFrame的函数是？',
        options: [
          'concat()',
          'merge()',
          'join()',
          'combine()'
        ],
        correctAnswer: 1,
        explanation: 'merge()是pandas中用于数据库风格连接的主要函数，支持多种连接方式。'
      },
      {
        id: 'data-merging-q2',
        type: 'choice',
        question: '哪种连接方式会保留左表的所有行？',
        options: [
          '内连接',
          '左连接',
          '外连接',
          '交叉连接'
        ],
        correctAnswer: 1,
        explanation: '左连接（left join）会保留左表的所有行，右表中没有匹配的行用NaN填充。'
      },
      {
        id: 'data-merging-q3',
        type: 'choice',
        question: 'concat()函数的默认轴方向是？',
        options: [
          'axis=0（按行合并）',
          'axis=1（按列合并）',
          'axis=2（按深度合并）',
          '需要手动指定'
        ],
        correctAnswer: 0,
        explanation: 'concat()默认按行合并（axis=0），即将多个DataFrame上下堆叠。'
      },
      {
        id: 'data-merging-q4',
        type: 'practical',
        question: '写出将DataFrame df1和df2按"user_id"列进行内连接的代码。',
        correctAnswer: 'pd.merge(df1, df2, on="user_id")',
        explanation: '使用pd.merge()进行内连接，on参数指定连接键。'
      }
    ],
    chapters: [
      {
        id: 'ch1',
        title: '数据合并基础',
        lessons: [
          { id: 'l1', title: '数据合并概述', type: 'article', duration: 15, content: '# 数据合并概述\n\n## 为什么需要合并数据\n\n- 数据分散在多个表中\n- 需要整合不同来源的信息\n- 构建完整的数据视图\n\n## 合并类型\n\n- **内连接**：只保留匹配的记录\n- **左连接**：保留左表所有记录\n- **右连接**：保留右表所有记录\n- **外连接**：保留所有记录\n- **拼接**：纵向或横向合并' },
          { id: 'l2', title: 'concat拼接', type: 'article', duration: 25, content: '# concat拼接\n\n## 纵向拼接\n\n```python\nimport pandas as pd\n\n# 纵向拼接多个DataFrame\nresult = pd.concat([df1, df2, df3], axis=0)\n\n# 忽略索引\nresult = pd.concat([df1, df2], ignore_index=True)\n```\n\n## 横向拼接\n\n```python\n# 横向拼接\nresult = pd.concat([df1, df2], axis=1)\n```\n\n## 处理重复列\n\n```python\nresult = pd.concat([df1, df2], axis=1).loc[:, ~pd.concat([df1, df2], axis=1).columns.duplicated()]\n```' },
        ],
      },
      {
        id: 'ch2',
        title: 'merge连接',
        lessons: [
          { id: 'l3', title: 'merge基础', type: 'article', duration: 25, content: '# merge基础\n\n## 内连接\n\n```python\nimport pandas as pd\n\n# 内连接\nresult = pd.merge(df1, df2, on=\'key\')\n\n# 指定不同列名\nresult = pd.merge(df1, df2, left_on=\'key1\', right_on=\'key2\')\n```\n\n## 左连接\n\n```python\nresult = pd.merge(df1, df2, on=\'key\', how=\'left\')\n```\n\n## 右连接\n\n```python\nresult = pd.merge(df1, df2, on=\'key\', how=\'right\')\n```\n\n## 外连接\n\n```python\nresult = pd.merge(df1, df2, on=\'key\', how=\'outer\')\n```' },
          { id: 'l4', title: '多键连接', type: 'article', duration: 25, content: '# 多键连接\n\n## 多列连接\n\n```python\n# 使用多个列进行连接\nresult = pd.merge(df1, df2, on=[\'key1\', \'key2\'])\n```\n\n## 处理重复列名\n\n```python\n# 自动添加后缀\nresult = pd.merge(df1, df2, on=\'key\', suffixes=(\'_left\', \'_right\'))\n```\n\n## 验证连接\n\n```python\n# 检查连接是否正确\nresult = pd.merge(df1, df2, on=\'key\', validate=\'one_to_one\')\n# 可选: one_to_one, one_to_many, many_to_one, many_to_many\n```' },
          { id: 'l5', title: 'join方法', type: 'article', duration: 20, content: '# join方法\n\n## 基本用法\n\n```python\n# 基于索引连接\nresult = df1.join(df2)\n\n# 指定列\nresult = df1.join(df2, on=\'key\')\n\n# 指定连接方式\nresult = df1.join(df2, how=\'left\')\n```\n\n## 多表连接\n\n```python\n# 连接多个DataFrame\nresult = df1.join([df2, df3, df4])\n```' },
          { id: 'l6', title: '实战案例：电商数据整合', type: 'article', duration: 30, content: '# 实战案例：电商数据整合\n\n```python\nimport pandas as pd\n\n# 加载多个数据表\norders = pd.read_csv(\'orders.csv\')\ncustomers = pd.read_csv(\'customers.csv\')\nproducts = pd.read_csv(\'products.csv\')\n\n# 1. 合并订单和客户信息\norder_customer = pd.merge(\n    orders,\n    customers,\n    on=\'customer_id\',\n    how=\'left\'\n)\n\n# 2. 合并产品信息\nfull_data = pd.merge(\n    order_customer,\n    products,\n    on=\'product_id\',\n    how=\'left\'\n)\n\n# 3. 添加分类信息\ncategories = pd.read_csv(\'categories.csv\')\nfull_data = pd.merge(\n    full_data,\n    categories,\n    on=\'category_id\',\n    how=\'left\'\n)\n\n# 4. 分析结果\nprint("整合后的数据维度:", full_data.shape)\nprint("\\n各城市销售情况:")\ncity_sales = full_data.groupby(\'city\')[\'amount\'].sum().sort_values(ascending=False)\nprint(city_sales.head(10))\n```' },
        ],
      },
    ],
  },
};

export const mockPractices: Practice[] = [
  {
    id: 'p1',
    title: '缺失值处理练习',
    difficulty: 'beginner',
    category: '数据清洗',
    completed: false,
  },
  {
    id: 'p2',
    title: '重复值检测与处理',
    difficulty: 'beginner',
    category: '数据清洗',
    completed: false,
  },
  {
    id: 'p3',
    title: '分组聚合统计',
    difficulty: 'intermediate',
    category: '分组聚合',
    completed: false,
  },
  {
    id: 'p4',
    title: '关联规则挖掘',
    difficulty: 'intermediate',
    category: '购物篮分析',
    completed: false,
  },
  {
    id: 'p5',
    title: 'K-Means聚类',
    difficulty: 'intermediate',
    category: '客户聚类',
    completed: false,
  },
  {
    id: 'p6',
    title: '绑定可视化图表',
    difficulty: 'beginner',
    category: '数据可视化',
    completed: false,
  },
  {
    id: 'p7',
    title: 'A/B测试显著性检验',
    difficulty: 'intermediate',
    category: 'A/B测试',
    completed: false,
  },
  {
    id: 'p8',
    title: '时间序列分解',
    difficulty: 'advanced',
    category: '时间序列',
    completed: false,
  },
  {
    id: 'p9',
    title: '特征编码练习',
    difficulty: 'intermediate',
    category: '特征工程',
    completed: false,
  },
  {
    id: 'p10',
    title: '异常值检测',
    difficulty: 'intermediate',
    category: '异常检测',
    completed: false,
  },
];

export const mockPracticeDetails: Record<string, PracticeDetail> = {
  p1: {
    id: 'p1',
    title: '缺失值处理练习',
    difficulty: 'beginner',
    category: '数据清洗',
    completed: false,
    description: '编写代码处理DataFrame中的缺失值，使用均值填充数值列，使用众数填充分类列',
    initialCode: 'import pandas as pd\nimport numpy as np\n\n# 创建含有缺失值的数据\ndf = pd.DataFrame({\n    \'A\': [1, 2, np.nan, 4, 5],\n    \'B\': [\'x\', \'y\', np.nan, \'x\', np.nan],\n    \'C\': [1.1, np.nan, 3.3, 4.4, 5.5]\n})\n\n# TODO: 用均值填充A列的缺失值\n# TODO: 用众数填充B列的缺失值\n# TODO: 输出处理后的DataFrame\nprint(df)\n',
    testCases: [
      { input: '', expectedOutput: '' },
    ],
    hints: ['使用fillna()方法填充缺失值', '使用mean()计算均值', '使用mode()获取众数'],
  },
  p2: {
    id: 'p2',
    title: '重复值检测与处理',
    difficulty: 'beginner',
    category: '数据清洗',
    completed: false,
    description: '检测DataFrame中的重复行，并删除重复项保留最后一个',
    initialCode: 'import pandas as pd\n\n# 创建含有重复值的数据\ndf = pd.DataFrame({\n    \'A\': [1, 2, 2, 3, 3, 3],\n    \'B\': [\'a\', \'b\', \'b\', \'c\', \'c\', \'c\']\n})\n\n# TODO: 检测重复行数量\n# TODO: 删除重复行，保留最后一个\n# TODO: 输出结果\nprint(df)\n',
    testCases: [
      { input: '', expectedOutput: '' },
    ],
    hints: ['使用duplicated()检测重复', '使用drop_duplicates()删除重复'],
  },
  p3: {
    id: 'p3',
    title: '分组聚合统计',
    difficulty: 'intermediate',
    category: '分组聚合',
    completed: false,
    description: '对销售数据按产品类别分组，计算每组的总销售额和平均销售额',
    initialCode: 'import pandas as pd\n\n# 销售数据\ndf = pd.DataFrame({\n    \'category\': [\'A\', \'B\', \'A\', \'B\', \'A\', \'C\'],\n    \'sales\': [100, 200, 150, 250, 180, 300]\n})\n\n# TODO: 按category分组\n# TODO: 计算每组的总销售额和平均销售额\n# TODO: 输出结果\n',
    testCases: [
      { input: '', expectedOutput: '' },
    ],
    hints: ['使用groupby()分组', '使用agg()计算多个统计量'],
  },
};

export const mockQuizzes: Quiz[] = [
  {
    id: 'q1',
    title: '数据清洗测验',
    questionCount: 5,
    duration: 10,
    completed: false,
  },
  {
    id: 'q2',
    title: '分组聚合测验',
    questionCount: 5,
    duration: 10,
    completed: false,
  },
  {
    id: 'q3',
    title: '数据可视化测验',
    questionCount: 5,
    duration: 10,
    completed: false,
  },
  {
    id: 'q4',
    title: '时间序列测验',
    questionCount: 5,
    duration: 10,
    completed: false,
  },
  {
    id: 'q5',
    title: '特征工程测验',
    questionCount: 5,
    duration: 10,
    completed: false,
  },
];

export const mockQuizDetails: Record<string, QuizDetail> = {
  q1: {
    id: 'q1',
    title: '数据清洗测验',
    questionCount: 5,
    duration: 10,
    completed: false,
    questions: [
      {
        id: 'q1-1',
        type: 'choice',
        question: '在Pandas中，哪个方法可以检测缺失值？',
        options: ['isnull()', 'isna()', '两者都可以', 'none()'],
      },
      {
        id: 'q1-2',
        type: 'choice',
        question: '使用fillna()方法时，inplace=True参数的作用是？',
        options: ['返回新DataFrame', '直接修改原DataFrame', '忽略缺失值', '删除缺失值'],
      },
      {
        id: 'q1-3',
        type: 'choice',
        question: '检测重复行应该使用哪个方法？',
        options: ['duplicate()', 'duplicated()', 'is_duplicate()', 'has_duplicate()'],
      },
      {
        id: 'q1-4',
        type: 'choice',
        question: 'IQR方法中，异常值的下界是？',
        options: ['Q1 - 1.5*IQR', 'Q1 - 3*IQR', 'Q3 - 1.5*IQR', 'mean - 2*std'],
      },
      {
        id: 'q1-5',
        type: 'choice',
        question: '处理异常值时，clip()方法的作用是？',
        options: ['删除异常值', '用边界值替换异常值', '标记异常值', '计算异常值数量'],
      },
    ],
  },
  q2: {
    id: 'q2',
    title: '分组聚合测验',
    questionCount: 5,
    duration: 10,
    completed: false,
    questions: [
      {
        id: 'q2-1',
        type: 'choice',
        question: 'groupby()方法返回的是什么类型？',
        options: ['DataFrame', 'Series', 'DataFrameGroupBy对象', 'list'],
      },
      {
        id: 'q2-2',
        type: 'choice',
        question: '以下哪个不是Pandas的聚合函数？',
        options: ['sum()', 'mean()', 'group()', 'count()'],
      },
      {
        id: 'q2-3',
        type: 'choice',
        question: 'transform()方法的特点是？',
        options: ['返回聚合结果', '返回与原数据相同形状的结果', '只返回分组键', '删除缺失值'],
      },
      {
        id: 'q2-4',
        type: 'choice',
        question: 'pivot_table()函数的默认聚合函数是？',
        options: ['sum', 'mean', 'count', 'median'],
      },
      {
        id: 'q2-5',
        type: 'choice',
        question: '要对不同列应用不同的聚合函数，应该使用？',
        options: ['agg()传入字典', 'apply()', 'transform()', 'map()'],
      },
    ],
  },
  q3: {
    id: 'q3',
    title: '数据可视化测验',
    questionCount: 5,
    duration: 10,
    completed: false,
    questions: [
      {
        id: 'q3-1',
        type: 'choice',
        question: 'Matplotlib中，创建图形的函数是？',
        options: ['plt.plot()', 'plt.figure()', 'plt.show()', 'plt.create()'],
      },
      {
        id: 'q3-2',
        type: 'choice',
        question: 'Seaborn是基于哪个库构建的？',
        options: ['NumPy', 'Pandas', 'Matplotlib', 'SciPy'],
      },
      {
        id: 'q3-3',
        type: 'choice',
        question: '绘制柱状图应该使用哪个函数？',
        options: ['plt.line()', 'plt.bar()', 'plt.scatter()', 'plt.pie()'],
      },
      {
        id: 'q3-4',
        type: 'choice',
        question: 'Seaborn中绘制热力图的函数是？',
        options: ['heatmap()', 'hotmap()', 'colormap()', 'matrix()'],
      },
      {
        id: 'q3-5',
        type: 'choice',
        question: '保存图片应该使用哪个函数？',
        options: ['plt.save()', 'plt.savefig()', 'plt.export()', 'plt.write()'],
      },
    ],
  },
  q4: {
    id: 'q4',
    title: '时间序列测验',
    questionCount: 5,
    duration: 10,
    completed: false,
    questions: [
      {
        id: 'q4-1',
        type: 'choice',
        question: '时间序列的四个组成成分不包括？',
        options: ['趋势', '季节性', '相关性', '随机性'],
      },
      {
        id: 'q4-2',
        type: 'choice',
        question: 'Pandas中将日数据重采样为月数据应该使用？',
        options: ['resample("M")', 'groupby("M")', 'to_month()', 'convert("M")'],
      },
      {
        id: 'q4-3',
        type: 'choice',
        question: 'ADF检验用于检验时间序列的？',
        options: ['季节性', '平稳性', '趋势性', '周期性'],
      },
      {
        id: 'q4-4',
        type: 'choice',
        question: '移动平均可以用于？',
        options: ['预测未来值', '平滑时间序列', '增加波动', '检测异常'],
      },
      {
        id: 'q4-5',
        type: 'choice',
        question: 'seasonal_decompose()函数用于？',
        options: ['预测时间序列', '分解时间序列成分', '绘制时间序列', '差分时间序列'],
      },
    ],
  },
  q5: {
    id: 'q5',
    title: '特征工程测验',
    questionCount: 5,
    duration: 10,
    completed: false,
    questions: [
      {
        id: 'q5-1',
        type: 'choice',
        question: 'StandardScaler的作用是？',
        options: ['归一化到[0,1]', '标准化为均值0方差1', '对数变换', '分箱处理'],
      },
      {
        id: 'q5-2',
        type: 'choice',
        question: '对类别特征进行独热编码应该使用？',
        options: ['LabelEncoder', 'OneHotEncoder', 'StandardScaler', 'MinMaxScaler'],
      },
      {
        id: 'q5-3',
        type: 'choice',
        question: '特征选择的过滤法是？',
        options: ['使用模型选择特征', '基于统计指标选择特征', '递归删除特征', '随机选择特征'],
      },
      {
        id: 'q5-4',
        type: 'choice',
        question: 'KNNImputer的作用是？',
        options: ['删除缺失值', '用K近邻填充缺失值', '标准化特征', '编码类别特征'],
      },
      {
        id: 'q5-5',
        type: 'choice',
        question: '随机森林可以用于特征选择是因为？',
        options: ['训练速度快', '可以计算特征重要性', '支持多分类', '不需要调参'],
      },
    ],
  },
};

export const mockQuizAnswers: Record<string, Record<string, { correctAnswer: string; explanation: string }>> = {
  q1: {
    'q1-1': { correctAnswer: '两者都可以', explanation: 'isnull()和isna()功能相同，都可以检测缺失值。' },
    'q1-2': { correctAnswer: '直接修改原DataFrame', explanation: 'inplace=True参数会直接修改原DataFrame，而不是返回新的DataFrame。' },
    'q1-3': { correctAnswer: 'duplicated()', explanation: 'duplicated()方法返回一个布尔Series，标识每行是否为重复行。' },
    'q1-4': { correctAnswer: 'Q1 - 1.5*IQR', explanation: 'IQR方法中，异常值下界为Q1 - 1.5*IQR，上界为Q3 + 1.5*IQR。' },
    'q1-5': { correctAnswer: '用边界值替换异常值', explanation: 'clip()方法会将超出边界的值替换为边界值。' },
  },
  q2: {
    'q2-1': { correctAnswer: 'DataFrameGroupBy对象', explanation: 'groupby()返回一个分组对象，需要进一步调用聚合函数才能得到结果。' },
    'q2-2': { correctAnswer: 'group()', explanation: 'group()不是聚合函数，sum()、mean()、count()都是聚合函数。' },
    'q2-3': { correctAnswer: '返回与原数据相同形状的结果', explanation: 'transform()会对每个元素进行变换，返回与原数据相同形状的结果。' },
    'q2-4': { correctAnswer: 'mean', explanation: 'pivot_table()的默认聚合函数是mean（平均值）。' },
    'q2-5': { correctAnswer: 'agg()传入字典', explanation: 'agg()方法可以接受字典，为不同列指定不同的聚合函数。' },
  },
  q3: {
    'q3-1': { correctAnswer: 'plt.figure()', explanation: 'plt.figure()用于创建新的图形窗口。' },
    'q3-2': { correctAnswer: 'Matplotlib', explanation: 'Seaborn是基于Matplotlib构建的高级绘图库。' },
    'q3-3': { correctAnswer: 'plt.bar()', explanation: 'plt.bar()用于绘制柱状图，plt.plot()用于折线图。' },
    'q3-4': { correctAnswer: 'heatmap()', explanation: 'seaborn.heatmap()用于绘制热力图。' },
    'q3-5': { correctAnswer: 'plt.savefig()', explanation: 'plt.savefig()用于将图形保存为文件。' },
  },
  q4: {
    'q4-1': { correctAnswer: '相关性', explanation: '时间序列的四个组成成分是：趋势、季节性、周期性、随机性。' },
    'q4-2': { correctAnswer: 'resample("M")', explanation: 'resample()方法用于时间序列重采样，"M"表示月。' },
    'q4-3': { correctAnswer: '平稳性', explanation: 'ADF检验（Augmented Dickey-Fuller test）用于检验时间序列的平稳性。' },
    'q4-4': { correctAnswer: '平滑时间序列', explanation: '移动平均可以消除短期波动，使时间序列更加平滑。' },
    'q4-5': { correctAnswer: '分解时间序列成分', explanation: 'seasonal_decompose()可以将时间序列分解为趋势、季节性和残差成分。' },
  },
  q5: {
    'q5-1': { correctAnswer: '标准化为均值0方差1', explanation: 'StandardScaler将特征转换为均值为0，标准差为1的分布。' },
    'q5-2': { correctAnswer: 'OneHotEncoder', explanation: 'OneHotEncoder将类别特征转换为独热编码形式。' },
    'q5-3': { correctAnswer: '基于统计指标选择特征', explanation: '过滤法根据统计指标（如相关系数、卡方检验等）选择特征。' },
    'q5-4': { correctAnswer: '用K近邻填充缺失值', explanation: 'KNNImputer使用K近邻算法来估计和填充缺失值。' },
    'q5-5': { correctAnswer: '可以计算特征重要性', explanation: '随机森林可以计算每个特征的重要性分数，用于特征选择。' },
  },
};

export const mockLeaderboard: LeaderboardEntry[] = [
  { rank: 1, userId: 'u1', name: '张三', points: 2580 },
  { rank: 2, userId: 'u2', name: '李四', points: 2340 },
  { rank: 3, userId: 'u3', name: '王五', points: 2100 },
  { rank: 4, userId: 'u4', name: '赵六', points: 1890 },
  { rank: 5, userId: 'u5', name: '钱七', points: 1650 },
];

export const mockAchievements: Achievement[] = [
  { id: 'first-lesson', name: '初学者', description: '完成第一节课', icon: '🎯', unlocked: false },
  { id: 'first-course', name: '课程达人', description: '完成第一个课程', icon: '📚', unlocked: false },
  { id: 'first-practice', name: '动手实践', description: '完成第一个练习', icon: '💻', unlocked: false },
  { id: 'first-quiz', name: '测验新手', description: '完成第一次测评', icon: '📝', unlocked: false },
  { id: 'perfect-quiz', name: '满分达人', description: '测评获得满分', icon: '🏆', unlocked: false },
  { id: 'streak-7', name: '坚持一周', description: '连续学习7天', icon: '🔥', unlocked: false },
  { id: 'points-100', name: '积分新手', description: '获得100积分', icon: '⭐', unlocked: false },
  { id: 'points-500', name: '积分达人', description: '获得500积分', icon: '🌟', unlocked: false },
];

export const courseCategories = [
  { id: 'data-processing', name: '数据处理', icon: '📊' },
  { id: 'data-analysis', name: '数据分析', icon: '📈' },
  { id: 'data-mining', name: '数据挖掘', icon: '⛏️' },
  { id: 'visualization', name: '数据可视化', icon: '📉' },
  { id: 'machine-learning', name: '机器学习', icon: '🤖' },
];
