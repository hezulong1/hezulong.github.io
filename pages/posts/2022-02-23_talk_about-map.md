---
title: 做了几个月的地图，吐槽发泄下
date: 2022-02-23
duration: 5分钟
subtitle: 文章首发于 2021/06/15，这里只是迁移
tag: 旧
type: talk
---

> 不知道怎么排版布局了，凑合着看吧，主要自己用

研究地图有一段时间了，资料看了一堆一堆的，各家也都有自己的风格。因为需要找适合公司的地图服务，以往的百度/高德地图完全不合适，所以需要另寻出路。

公司要求：

- 兼容天地图（首要）
- 加载一些 3D 模型（次要）
- 最好兼容倾斜摄影

其实研究过地图的都知道，基本非 [`cesium`](https://cesium.com/platform/cesiumjs/) 莫属，但是研究2个月，demo 例子也做了一些，除了一些简单的，但凡需要酷炫的效果，着实无从下手。加之 cesium 文档实在是耐不住性子看下去，最终我是放弃了。

但是公司的业务是要进行下去的，退而求其次，我打算重新找一款地图处理方案：

- **天地图自身**：基础使用还行，但是一旦深入了解，真的不知道怎么办，源码被压缩加密，文档写的也是随心所欲，样式主题少的可怜，
- **Mapbox**：看到介绍，真的非常炫酷，加之 api 简单，且定制化特别高，与`three.js`，`d3.js`可以很好的结合，唯一尴尬的就是坐标系仅仅支持墨卡托。其实，我也找到了相关的解决方案。即兼容各类坐标系，[`cgcs2000/mapbox-gl-js`](https://github.com/cgcs2000/mapbox-gl-js)，但是感觉那只是披着`mapbox`的另一个gis 处理工具。
- **Leaflet**：和 **Mapbox** 一家子的，api 也高度类似，里面的插件很多，目前我找到2个，`leaflet.chinatmsproviders` 和 `esri-leaflet`，但是对我来说并没有啥用，代码看了下，感觉很厉害的样子。

毕竟不是专业 GIS 人士，而这玩意要想玩的溜，还得要花大量的时间在上面，目前我也是在不停的摸索中

## Leaflet 加载经纬度投影的天地图

> 这里记录经纬度投影的天地图代码，以便以后使用
> 墨卡托投影的网上一大堆，自己找，但是我还是建议直接使用 mapbox，因为那是真的好看啊😄

```javascript
import L from 'leaflet'

function object2params(o) {
  let ret = ''
  for (const k in o) {
    if (typeof o[k] === 'string') {
      ret += `&${ k }=${ o[k] }`
    }
  }
  return ret.replace(/&/, '?')
}

const generateTDBaseConfig = layer => object2params({
  SERVICE: 'WMTS',
  REQUEST: 'GetTile',
  VERSION: '1.0.0',
  STYLE: 'default',
  FORMAT: 'tiles',
  TILEMATRIXSET: 'c', // 注意这里调整为 c，不是 w
  TILEMATRIX: '{z}',
  TILEROW: '{y}',
  TILECOL: '{x}',
  LAYER: layer,
  tk: 'you token'
})

const tdtVectorMap = 'http://t{s}.tianditu.gov.cn/vec_c/wmts' + generateTDBaseConfig('vec')
const tdtVectorLabel = 'http://t{s}.tianditu.gov.cn/cva_c/wmts' + generateTDBaseConfig('cva')

const layerOptions = {
  maxZoom: 18,
  minZoom: 1,
  zoomOffset: 1,
  subdomains: [ '0', '1', '2', '3', '4', '5', '6', '7' ]
}

const normalm = L.tileLayer(tdtVectorMap, layerOptions)
const normala = L.tileLayer(tdtVectorLabel, layerOptions)

const thirdLayer = L.tileLayer('you EPSG4326 server url', {
  zoomOffset: 1 // 注意这里和上面的 layerOptions 保持一致，又是个坑的地方
})

const normal = L.layerGroup([ normalm, thirdLayer, normala ]) // 注意这里的排序，越靠前越在地图底层

const map = L.map('you dom', {
  center: [0, 0], // 调整成自己需要的中心点
  zoom: 9,
  layers: [ normal ],
  crs: L.CRS.EPSG4326 // 一定要设置
})
```

---

2021-06-15: 后续在补充吧
