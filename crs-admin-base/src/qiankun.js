import { registerMicroApps, addGlobalUncaughtErrorHandler, setDefaultMountApp, runAfterFirstMounted, start } from 'qiankun';

function genActiveRule(routerPrefix) {
    return location => location.pathname.startsWith(routerPrefix);
}

/**
 * 注册子应用
 * 第一个参数 - 子应用的注册信息
 * 第二个参数 - 全局生命周期钩子
 */
registerMicroApps([
    // {
    //   name: 'base',
    //   entry: '//localhost:8888',
    //   container: '#base',
    //   activeRule: '/base',
    // },
    {
      name: 'store',
      entry: '//localhost:9999/store/',
      container: '#main',
      activeRule: genActiveRule('/store'),
    },
    {
      name: 'shop',
      entry: '//localhost:7777/shop/',
      container: '#main',
      activeRule: genActiveRule('/shop'),
    },
],{
    // 加载前
    beforeLoad: (app) => {
      console.log("before load", app.name);
    //   return Promise.resolve();
    },
    // 挂载前回调
    beforeMount: [
      (app) => {
        console.log('before mount', app);
      },
    ],
    // qiankun 生命周期钩子 - 挂载后
    afterMount: (app) => {
      console.log("after mount", app.name);
    //   return Promise.resolve();
    },
});

// 设置默认子应用
setDefaultMountApp('/base');

// 第一个子应用加载完毕回调
runAfterFirstMounted(() => {
    console.log("第一个应用加载完成")
});

/**
 * 添加全局的未捕获异常处理器
 */
addGlobalUncaughtErrorHandler((event) => {
    console.error("addGlobal", event);
    const { message: msg } = event;
    // 加载失败时提示
    if (msg && msg.includes("died in status LOADING_SOURCE_CODE")) {
      console.error("子应用加载失败，请检查应用是否可运行");
    }
});


export default start;