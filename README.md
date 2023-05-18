# vue3-vite-remote-component

vite 打包 vue3 组件并远程加载展示

## 项目安装

```sh
npm install
```

## 修改远程组件

- 组件源文件位置：/src/components/remote

## 打包异步组件

- 打包配置文件位置：/vite.config.js
- 打包后输出的位置：/dist-lib

执行命令打包

```sh
npm run buildRC
```

## 部署远程组件资源服务

1. 在项目根目录创建一个 static 文件夹，将 dist-lib 中的 js 文件复制进来
2. 用 vscode 的 Go Live 插件启动一个 web 服务，确保在浏览器中可正常访问到 static 下的 js 文件

## 更新远程组件加载地址

在/src/views/Layout.vue 中修改按钮点击事件中的地址为 web 服务的 js 文件地址

```sh
npm run buildRC
```

## 开发环境本地调试

启动开发环境，测试远程组件显示效果

```sh
npm run dev
```

## 打包主站项目

- 打包后输出的位置：/dist

```sh
npm run build
```

## 部署主站生产环境

将 dist 文件夹启动一个 web 服务，然后查看组件显示效果
