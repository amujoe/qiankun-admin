import Vue from "vue";
import App from "./App.vue";
import Router from "vue-router";
import routes from "./routes";

Vue.config.productionTip = false;

declare var window: Window & { __POWERED_BY_QIANKUN__: any };

let instance:any = null;
let router:any = null;
function render() {
  // 在 render 中创建 VueRouter，可以保证在卸载微应用时，移除 location 事件监听，防止事件污染
  
  router = new Router({
    base: window.__POWERED_BY_QIANKUN__ ? "/store" : "/",
    mode: "history",
    routes,
  });

  // 挂载应用
  instance = new Vue({
    router,
    render: (h) => h(App),
  }).$mount("#store");
}

if (!window.__POWERED_BY_QIANKUN__) {
	render();
}

/**
 * bootstrap 只会在微应用初始化的时候调用一次，下次微应用重新进入时会直接调用 mount 钩子，不会再重复触发 bootstrap。
 * 通常我们可以在这里做一些全局变量的初始化，比如不会在 unmount 阶段被销毁的应用级别的缓存等。
 */
export async function bootstrap() {
  console.log('vue app bootstraped');
}
/**
 * 应用每次进入都会调用 mount 方法，通常我们在这里触发应用的渲染方法
 */
export async function mount(props:any) {
  console.log("vue mount");
  render();
  // ReactDOM.render(<App />, document.getElementById('react15Root'));
}
/**
 * 应用每次 切出/卸载 会调用的方法，通常在这里我们会卸载微应用的应用实例
 */
export async function unmount() {
  console.log("vue unmount");
  instance.$destroy();
  instance = null;
  router=null;
  // ReactDOM.unmountComponentAtNode(document.getElementById('react15Root'));
}
/**
 * 可选生命周期钩子，仅使用 loadMicroApp 方式加载微应用时生效
 */
export async function update(props:any) {
  console.log('update props', props);
}