import React from 'react'
import { connect } from "react-redux";
import { addItem } from "../../redux/cart/cart.actions";
import {
  CollectionItem,
  CollectionFooter,
  CollectionImage, 
} from "./preview.styled";
import CustomButton from '../button/custom-button.comp.js'
const PreviewComp = ({ item, addItem, mb }) => {
  return (
    <CollectionItem mb={mb}>
      <CollectionImage
        style={{
          backgroundImage: `url(${item.imageUrl})`,
        }}
      />
      <CollectionFooter>
        <span>{item.name}</span>
        <span>{item.price}</span>
      </CollectionFooter>
      <CustomButton
        onClick={ () => addItem(item) }
        inverted
      >
        Add to cart
      </CustomButton>
    </CollectionItem>
  );
};
const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
});

export default connect(
  null,
  mapDispatchToProps
)(PreviewComp);

// export default PreviewComp;
