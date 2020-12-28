import history from 'components/history';
import queryString from 'query-string';

export const filter=(obj)=>{
    const stringified = queryString.stringify(obj);
    
    history.push({
        pathname: '/home',
        search: stringified,
      })	
}

export const filterPrice=(val)=>{
  let obj = {price : val }
  const stringified = queryString.stringify(obj);
  
  history.push({
      pathname: '/home',
      search: stringified,
    })	
}
