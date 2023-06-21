import styled from '@emotion/styled'
import '../styles/spiner.css'

const Div = styled.div`
    margin: 20px auto;
`

const Spinner = () => {
  return (
    <Div className="sk-chase">
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
    </Div>
  )
}

export default Spinner