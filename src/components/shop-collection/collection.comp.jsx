import React from 'react'
import { connect } from "react-redux";
import { selectCollection } from "../../redux/shops/shop.selectors";
import  PreviewComp from "../shop-preview/preview.comp";

import { Items, Title } from "./collection.styled";
const CollectionComp = ({ collection }) => {
  const { title, items } = collection;
  return (
    <div>
      <Title>{title}</Title>
      <Items>
        {items.map((item) => (
          <PreviewComp mb={30} key={item.id} item={item} />
        ))}
      </Items>
    </div>
  );
};
const mapStateToProps = (state, ownProps) => {
  return {
  collection: selectCollection(ownProps.match.params.collectionId)(state),
}};

export default connect(mapStateToProps)(CollectionComp);

