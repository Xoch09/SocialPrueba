import paths from "./routes";

// Navigate to a specific path and update the history
class ROUTER {
  constructor() {
    this.paths = paths;
    this.initRouter();
  }

  initRouter() {
    const {
      location: { pathname = '/' },
    } = window;
    const URL = pathname === '/' ? 'home' : pathname.replace('/', '');
    this.load(URL);
  }

  load(page = 'home') {
    const { paths } = this;
    const { path, template } = paths[page] || paths.error;
    const $CONTAINER = document.getElementById('root');
    $CONTAINER.innerHTML = template;
    window.history.pushState({}, 'done', path);
  }

  loadBody(page = 'home') {
    const { paths } = this;
    const { path, template } = paths[page] || paths.error;
    const $CONTAINER = document.getElementById('base');
    $CONTAINER.innerHTML = template;
    window.history.pushState({}, 'done', path);
  }
}

const routerO = new ROUTER(paths);

export default routerO;