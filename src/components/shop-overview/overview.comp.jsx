import React from 'react'
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import { selectCollectionsForPreview } from "../../redux/shops/shop.selectors";
import  PreviewComp  from '../shop-preview/preview.comp'
import { Preview, Title } from "./overview.styled";

const OverviewComp = ({ collections, ...otherProps }) => {
  const {history, match} = otherProps;
  return (
    <div>
      {collections.map((collection) => (
        <div>
          <Title
            onClick={() =>
              history.push(
                `${match.path}/${collection.routeName.toLowerCase()}`
              )
            }
          >
            {collection.routeName.toUpperCase()}
          </Title>
          <Preview>
            {collection.items
              .filter((item, idx) => {
                return idx < 4;
              })
              .map((item) => (
                <PreviewComp item={item} />
              ))}
          </Preview>
        </div>
      ))}
    </div>
  );
};
const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview,
});

export default connect(mapStateToProps)(OverviewComp);
