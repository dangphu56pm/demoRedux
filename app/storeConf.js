var redux = require('redux');
var reducer = require('./reducers/reducer.js')

var store = redux.createStore(reducer, redux.compose(
  window.devToolsExtension?window.devToolsExtension():f=>f
));
// store.subscribe(()=> {
//   var str = store.getState();
//   document.getElementById('p-detail').innerHTML = JSON.stringify(str);
// });
// store.dispatch({type:'TOGGLE_IS_ADDING'});
// store.dispatch({
//   type:'ADD_ITEM',
//   item:'Unity'
// });
// store.dispatch({
//   type:'REMOVE_ITEM',
//   index: 1
// });

module.exports = store;
