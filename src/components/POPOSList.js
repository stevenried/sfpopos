import POPOSSpace from './POPOSSpace'
import './POPOSList.css'

function POPOSList() {
  return (
    <div className="list">
      <POPOSSpace
        name="50 California Street"
        address="50 California St."
        image="50-california-st.jpg"
        likes={845}
      />
      <POPOSSpace
        name="101 California Street"
        address="101 California St."
        image="101-california.jpg"
        likes={2267}
      />
      <POPOSSpace
        name="343 Sansome Roof"
        address="343 Sansome St."
        image="343-sansome-roof-garden.jpg"
        likes={1345}
      />
      <POPOSSpace
        name="525 Market Street Plaza"
        address="525 Market St."
        image="525-market-street-plaza.jpg"
        likes={3826}
      />
      <POPOSSpace
        name="555 California Street"
        address="555 California St."
        image="555-california.jpg"
        likes={4237}
      />
      <POPOSSpace
        name="100 Pine Street"
        address="100 Pine St."
        image="100-pine.jpg"
        likes={928}
      />
    </div>
  )
}

export default POPOSList
