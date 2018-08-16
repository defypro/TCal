# 中国传统历法工具类

获取农历和年月日干支，支持从1901年到2100年。

## 用法

```javascript
TCal.get("2000/1/1");

// 返回
{ y: 1999, 
  m: 11, 
  d: 25, 
  yn: "一九九九年", 
  mn: "冬月",
  dn: "廿五",
  ygz: "己卯",
  mgz: "丁丑",
  dgz: "戊午",
  jq: ""， //节气
  leap: false ，//是否闰月
  wd: 6，    //周几， 从1开始
  wdn: "周六"}

```

