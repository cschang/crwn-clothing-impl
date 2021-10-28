import React from 'react'

import { Route } from "react-router-dom";
import OverviewComp from "../../components/shop-overview/overview.comp";
import CollectionPage from "../../components/shop-collection/collection.comp"
const ShopComp = ({ match }) => {
  return (
    <div>
      <Route path={"/shop"} exact component={OverviewComp} />
      <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
    </div>
  );
};

export default ShopComp
