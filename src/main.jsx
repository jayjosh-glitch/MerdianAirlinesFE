import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import AuthProvider from './context/AuthProvider.jsx'
import { Provider } from 'react-redux'
import { store } from './redux/Store.js'

createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <Provider store={store}>
      <App />
    </Provider>
  </AuthProvider>

)
