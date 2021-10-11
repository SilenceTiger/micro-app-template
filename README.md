## 1 路由设计

### 1.1 数据源管理（Data Source Management）-xiaoai

- 数据源列表：/app/datasource/list
- 某一个数据源：/app/datasource/{:id}

### 1.2 仪表盘管理（Dashboard Management）-lucong

- 仪表盘列表：/app/dashboard/list
- 某一个仪表盘：/app/dashboard/{:id}
- 某一个数据源的变量列表：/app/dashboard/variable/{:id}
- 某一个数据源的某一个变量配置：/app/dashboard/variable-config/{:id}?vid=1
- 某一个数据源的 panel 配置：/app/dashboard/panel-config/{:id}?pid=2

### 1.3 页面管理（Page Management）-lucong

- 页面列表： /app/page/list
- 某一个页面： /app/page/{:id}

### 1.4 预览页（Preview）-lucong

- 预览页：/preview/{:id}

### 1.5 首页（Home Page）——暂时不做

### 1.6 权限认证页（Auth Page）——暂时不做

<br>

## 2 文件管理

- src/modules --- 模块组件 Line Pie Bar 等
- src/component --- 通用组件 icons 等
- src/utils --- 通用函数
- src/pages --- 页面分组 app preview auth 等
- src/theme --- 主题配置
- src/editor --- 自定义表单

## 3 module （todo）

line - lucong
bar - xiaoai
other - ahao

| 组件       | 说明     | 备注     |
| :--------- | :------- | :------- |
| Line       | 折线图   |          |
| Bar        | 柱状图   |          |
| Pie        | 饼状图   |          |
| RichText   | 富文本   |          |
| Image      | 图片     |          |
| CountUp    | 动态数字 |          |
| Text       | 普通文字 |          |
| Carousel   | 轮播图   |          |
| Input      | 输入查询 | variable |
| Select     | 选择查询 | variable |
| TimePicker | 时间查询 | variable |
| TimeRange  | 时间查询 | variable |

TODO：尽量集成 echarts 支持的图表、后续可支持 three.js babalon.js d3.js

## 4 editor 自定义表单（todo）-ningning

| 组件           | 说明            | 类型     |
| :------------- | :-------------- | :------- |
| InputEditor    | 输入框编辑器    | input    |
| SelectEditor   | 选择编辑器      | select   |
| CheckBoxEditor | checkbox 编辑器 | checkbox |
| ColorEditor    | 颜色选择器      | color    |
| ImageEditor    | 图片选择器      | image    |
| JsonEditor     | json 编辑器     | json     |
| NumberEditor   | 数字编辑器      | number   |
| TabEditor      | tab 切换        | tab      |
| SwitchEditor   | switch 编辑器   | switch   |
| RadioEditor    | radio 编辑器    | radio    |
| RichTextEditor | 富文本编辑器    | richtext |

TODO：编辑器都有 onChange 事件（后面可加 debounce 函数），将变化吐出到最外层

`<Editor config={config} onChange={onChange} />`

## 4 theme （todo）

- 统一使用.scss
- 建议使用 scss module
- js 使用 scss 变量 使用:export 导出
- 定义主题（light、dark）初始支持两个

## 5 国际化支持（todo）暂时不做

## 6 单元测试 ahao

## 7 打包 Preview 与 module 按需引入（todo）

两种引入方式
yarn install our-preview

`<Preview config={config}>`

`<iframe src="url?id=1"></iframe>`
