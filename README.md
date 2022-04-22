# 實作 Web Component 簡易範例並使用 vite 打包
```zsh
yarn install
yarn build
yarn dev
```

# [來源](https://www.youtube.com/watch?v=pN7fC2vb1Ig)

# 檔案結構
```
├── A.html
├── B.html
├── C.html
├── dist
│  ├── custom-element.es.js      // 打包後產出的模組檔     
│  ├── custom-element.umd.js     // 打包後產出的模組檔
│  └── favicon.ico
├── index.html
── src
│  ├── App.vue
│  ├── assets
│  │  ├── base.css
│  │  └── logo.svg
│  ├── components
│  │  └── HelloWorld.vue
│  ├── elements
│  │  └── MyCustomElement.ce.vue // 自定義 Component
│  ├── main.ce.js // 註冊 Component 到 Windows
│  └── main.js  
├── vite.config.js // 改寫 entry 地址及名稱、動態路徑
└── yarn.lock
```

