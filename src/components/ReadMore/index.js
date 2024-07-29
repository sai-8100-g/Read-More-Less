import {useState} from 'react'
import {MainContainer, Heading, Img, Para, Button} from './styledComponents'

const ReadMore = props => {
  const {reactHooksDescription} = props
  const [isShowMore, showMore] = useState(false)
  const toggleLength = () => {
    showMore(prevState => !prevState)
  }
  console.log(reactHooksDescription.slice(0, 170).length)
  const newPara = reactHooksDescription.slice(0, 170)
  return (
    <MainContainer>
      <Heading>React Hooks</Heading>
      <Para>Hooks are a new addition to React</Para>
      <Img
        src="https://assets.ccbp.in/frontend/hooks/react-hooks-img.png"
        alt="react hooks"
      />
      <div
        style={{
          width: '40%',
        }}
      >
        {isShowMore ? (
          <Para>{reactHooksDescription}</Para>
        ) : (
          <Para>{newPara}</Para>
        )}
      </div>
      <Button type="button" onClick={toggleLength}>
        {isShowMore ? 'Read Less' : 'Read More'}
      </Button>
    </MainContainer>
  )
}

export default ReadMore
