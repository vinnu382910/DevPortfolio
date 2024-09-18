// Write your code here.
import './index.css'

const CertificatesItem = props => {
  const {imageDetails, onChangeImg, isActive} = props
  const {id, thumbnailUrl, thumbnailAltText} = imageDetails

  const onClickImg = () => {
    onChangeImg(id)
  }

  const activeClassName = isActive ? '' : 'thumbnail-img'

  return (
    <li>
      <button type="button" className="img-btn">
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          className={activeClassName}
          onClick={onClickImg}
        />
      </button>
    </li>
  )
}

export default CertificatesItem
