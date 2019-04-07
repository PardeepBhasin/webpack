import asyncComponent from './asyncComponent';

export const HomePage = asyncComponent(() => import('./components/HomePage/HomePage')
  .then(module => module.default), { name: 'HomePage' });

export const UsersDetail = asyncComponent(() => import('./components/Users/UsersDetail.js')
  .then(module => module.default), { name: 'UsersDetail' });
