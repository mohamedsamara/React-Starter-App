/**
 *
 * app.js
 * This is the application component. setup and boilerplate
 */

import React from 'react';
import { hot } from 'react-hot-loader';

// Import application sass styles
import './styles/sass/style.scss';

// Import application less styles
import './styles/less/style.less';

// Import application css styles
import './styles/css/style.css';

// Import Font Awesome Icons Set
import 'font-awesome/css/font-awesome.min.css';

// Import Simple Line Icons Set
import 'simple-line-icons/css/simple-line-icons.css';

// CSS library that corrects broken and missing styles in all browsers
import 'sanitize.css/sanitize.css';

// react-redux-toastr Notifications
import 'react-redux-toastr/lib/css/react-redux-toastr.min.css';

const app = () => <div>React JS Works!</div>;

export default hot(module)(app);