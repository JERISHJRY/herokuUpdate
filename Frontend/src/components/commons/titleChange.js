import React from 'react';
import {Helmet} from 'react-helmet';

export const  Title=(props)=> {
    const mainTilte = 'E-Shopper';
    const subTitle = props.title;
    const description = props.description;
    const keyword = props.keyword;
    console.log(keyword,'de')
    return (
        <div>
            {/* <Helmet>
                <title> {subTitle?mainTilte+" | "+subTitle:mainTilte} </title>
                <meta name='description' content={description?description:'E-shopper for buying quality product'} />
            </Helmet> */}
            <Helmet htmlAttributes={{ lang: 'en' }} title={subTitle?mainTilte+" | "+subTitle:mainTilte} meta={[
        {
          name: 'description',
          content: description?description:'E-shopper for buying quality product',
        },
        {
            name: 'keyword',
            content: keyword?keyword+'E-shopper,e-shop_by/vj, Amazon ,vegetable,organic,fruit,Groceries,House holds,Bakery and beverages,Health and beauty,Stationery,Fish, chicken and meat,':'E-shopper,e-shop_by/vj, Amazon ,vegetable,organic,fruit,Groceries,House holds,Bakery and beverages,Health and beauty,Stationery,Fish, chicken and meat,',
          },
		]}
    />
        </div>
    )
}
