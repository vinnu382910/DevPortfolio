import {Component} from 'react'
import CertificatesItem from '../CertificatesItem'
import './index.css'

const imagesList = [
  {
    id: 0,
    imageUrl:
      'https://media-content.ccbp.in/certificates/share/CFBFHVESXG.png',
    thumbnailUrl:
      'https://media-content.ccbp.in/certificates/share/CFBFHVESXG.png',
    imageAltText: 'Certificate Of Identity',
    thumbnailAltText: 'nature mountain with pond thumbnail',
  },
  {
    id: 1,
    imageUrl: 'https://media-content.ccbp.in/certificates/share/FIOKQMBSFZ.png',
    thumbnailUrl:
      'https://media-content.ccbp.in/certificates/share/FIOKQMBSFZ.png',
    imageAltText: 'Certificate Of Devloper Foundation',
    thumbnailAltText: 'nature sunset thumbnail',
  },
  {
    id: 2,
    imageUrl:
      'https://media-content.ccbp.in/certificates/share/YZVMOICWYD.png',
    thumbnailUrl:
      'https://media-content.ccbp.in/certificates/share/YZVMOICWYD.png',
    imageAltText: 'Certificate Of Javascript Essentials',
    thumbnailAltText: 'nature mountain with ocean thumbnail',
  },
  {
    id: 3,
    imageUrl:
      'https://media-content.ccbp.in/certificates/share/IKDLFWAUBP.png',
    thumbnailUrl:
      'https://media-content.ccbp.in/certificates/share/IKDLFWAUBP.png',
    imageAltText: 'Certificate Of Python',
    thumbnailAltText: 'nature mountain with forest thumbnail',
  },
  {
    id: 4,
    imageUrl: 'https://media-content.ccbp.in/certificates/share/ZWEAJAIDDJ.png',
    thumbnailUrl:
      'https://media-content.ccbp.in/certificates/share/ZWEAJAIDDJ.png',
    imageAltText: 'Certificate Of Static Website',
    thumbnailAltText: 'nature leaves thumbnail',
  },
  {
    id: 5,
    imageUrl: 'https://media-content.ccbp.in/certificates/share/HQETMNXPMN.png',
    thumbnailUrl:
      'https://media-content.ccbp.in/certificates/share/HQETMNXPMN.png',
    imageAltText: 'Certificate Of SQL',
    thumbnailAltText: 'nature tree thumbnail',
  },
  {
    id: 6,
    imageUrl:
      'https://media-content.ccbp.in/certificates/share/XUEDNFZMLU.png',
    thumbnailUrl:
      'https://media-content.ccbp.in/certificates/share/XUEDNFZMLU.png',
    imageAltText: 'Certificate Of Bootstrap',
    thumbnailAltText: 'nature waterfall thumbnail',
  },
  {
    id: 7,
    imageUrl: 'https://media-content.ccbp.in/certificates/share/FFLGZTZLLT.png',
    thumbnailUrl:
      'https://media-content.ccbp.in/certificates/share/FFLGZTZLLT.png',
    imageAltText: 'Certificate Of Dynamic Web Applications',
    thumbnailAltText: 'nature river thumbnail',
  },
  {
    id: 8,
    imageUrl: 'https://media-content.ccbp.in/certificates/share/CBDWZQVFKL.png',
    thumbnailUrl:
      'https://media-content.ccbp.in/certificates/share/CBDWZQVFKL.png',
    imageAltText: 'Certificate Of Flexbox',
    thumbnailAltText: 'nature river thumbnail',
  },
]

// Write your code here.

class Certificates extends Component {
  state = {
    activeThumbNailId: imagesList[0].id,
  }

  onChangeImg = id => {
    this.setState({activeThumbNailId: id})
  }

  render() {
    const {activeThumbNailId} = this.state
    const {imageUrl, imageAltText} = imagesList[activeThumbNailId]
    return (
      <div className="Photography-cont" id="certificate">
        <h1 className="main-heading">Certificates</h1>
        <div>
          <img src={imageUrl} alt={imageAltText} className="main-image" />
          <div className="desc-cont">
            <p className="para">{imageAltText}</p>
            <ul className="thumnails-cont">
              {imagesList.map(eachImgDetails => (
                <CertificatesItem
                  imageDetails={eachImgDetails}
                  key={eachImgDetails.id}
                  onChangeImg={this.onChangeImg}
                  isActive={activeThumbNailId === eachImgDetails.id}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Certificates
