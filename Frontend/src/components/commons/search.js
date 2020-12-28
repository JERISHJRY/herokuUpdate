import history from 'components/history';
import queryString from 'query-string';
export const searchProduct=(val)=>{
    let obj = {image_name : val }
    const stringified = queryString.stringify(obj);
    
    history.push({
        pathname: '/home',
        search: stringified,
      })	
  }