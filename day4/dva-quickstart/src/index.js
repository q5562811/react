import dva from 'dva';
import 'antd/dist/antd.css';
import './index.css';

// 1. Initialize
const app = dva({
  initialState: {
    products: {
      author: "wscats eno yao"
    }
  }
});

// 2. Plugins
// app.use({});

// 3. Model Redux
// app.model(require('./models/example').default);
app.model(require('./models/products').default);

// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');
