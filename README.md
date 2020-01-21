## 有什么用？ 
为了刷题方便，贡献一个可创建任意维度的数组的函数
## 使用方法
+ `createDimensionsArray(nums,...layerCounts)`
+ 跟c语言二维数组一致,第一个参数是维度,必须指定二维后的所有维度,若不指定,默认创建正方形数组(即`nums*nums*nums...`)
```
ex:createDimensionsArray(2,2,2,2)
┌─────────┬──────────────────────┬──────────────────────┐
│ (index) │          0           │          1           │
├─────────┼──────────────────────┼──────────────────────┤
│    0    │ [ [Array], [Array] ] │ [ [Array], [Array] ] │
│    1    │ [ [Array], [Array] ] │ [ [Array], [Array] ] │
└─────────┴──────────────────────┴──────────────────────┘

ex:createDimension(3)
┌─────────┬────────────────┬────────────────┬────────────────┐
│ (index) │       0        │       1        │       2        │
├─────────┼────────────────┼────────────────┼────────────────┤
│    0    │ [ [], [], [] ] │ [ [], [], [] ] │ [ [], [], [] ] │
│    1    │ [ [], [], [] ] │ [ [], [], [] ] │ [ [], [], [] ] │
│    2    │ [ [], [], [] ] │ [ [], [], [] ] │ [ [], [], [] ] │
└─────────┴────────────────┴────────────────┴────────────────┘
```