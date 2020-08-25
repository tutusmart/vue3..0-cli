1.初始化项目, 在工作空间打开终端窗口，对于window用户即cmd，然后执行下面命令

```js
yarn create vite-app my-vue3

yarn

yarn dev
```

#### 2.初始化完项目，通过*cd my-vue3*进行到项目里面，然后再执行yarn安装依赖（此处建议使用淘宝镜像，比较快）

#### 3.依赖安装完需要通过yarn dev启动项目

是不是瞬间体验到了秒启项目的感觉，启动之后就可以通过 *http://localhost:3000* 来访问项目了

#### 4.额外配置

配置 vuex
与vue-router一样，新的vuex当前也处于beta版本，当前版本是4.0.0-beta.4

安装vuex
```js
yarn add vuex@4.0.0-beta.4
```

#### 5.配置 vue-router

在Vue2.0中我们路由一般会选择使用vue-router,在Vue3.0依然可以使用vue-router,不过和Vue3.0一样当前vue-router的版本也是beta版本，在本文撰写的时候，版本是4.0.0-beta7
安装vue-router
因为当前vue-router针对vue3.0的版本还是beta版本，所以不能直接通过yarn add vue-router进行安装，而是需要带上版本号

```js
yarn add vue-router@4.0.0-beta.7
```

#### 6.配置typescript
1.typescript现在已经成为了前端必备技能之一，大量的项目也开始基于typescript进行开发。在使用Vue2.0的时候，因为Vue2.0没有对typescript进行支持，所以使用ts开发功能显示有些别扭。但到了Vue3，其自身源码便是基于ts开发的，所以对ts天生有着很好的支持。使用vite配置typescript很简单，只需要进行以下几步操作.


2.安装 typescript
```js
yarn add typescript -D
```


3.初始化tsconfig.json
# 然后在控制台执行下面命令
```js
npx tsc --init
```

