import history from 'components/history';
import queryString from 'query-string';
export const productclick=(id)=>{
    const stringified = queryString.stringify({id});
    history.push({
        pathname: '/product',
        search: stringified,
      })	
}