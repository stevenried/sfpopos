import POPOSSpace from './POPOSSpace'
import data from '../sfpopsos-data.json'
import './POPOSList.css'

function POPOSList() {
  const spaces = data.map(({ title, address, images, likes, hours }) => {
    return (
      <POPOSSpace
        key={title}
        name={title}
        address={address}
        image={images[0]}
        likes={likes}
        hours={hours}
      />
    )
  })

  return <div className="list">{spaces}</div>
}

export default POPOSList
