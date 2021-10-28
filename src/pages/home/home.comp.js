import React  from 'react'
import { connect } from 'react-redux'
import { selectDirectorySections } from "../../redux/product/product.selectors";
import { createStructuredSelector } from "reselect";
import {
  Container,
  ImageContainer,
  ImageContent,
  TitleDiv,
  Titleh1,
  SubtitleSpan,
} from "./home.style";

class HomeComp extends React.Component {
  render() {
    
    return (
      <Container>
        {this.props.sections.map((section) => (
          <ImageContainer
            key={section.id}
            className={`${section.size ? section.size : ""}`}
            onClick={() =>
              this.props.history.push(
                `${this.props.match.url}${section.linkUrl}`
              )
            }
          >
            <ImageContent
              style={{
                backgroundImage: `url(${section.imageUrl})`,
              }}
            />
            <TitleDiv>
              <Titleh1>{section.title.toUpperCase()}</Titleh1>
              <SubtitleSpan>SHOP NOW</SubtitleSpan>
            </TitleDiv>
          </ImageContainer>
        ))}
      </Container>
    );
  }
}
const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections,
});

export default connect(mapStateToProps)(HomeComp);
