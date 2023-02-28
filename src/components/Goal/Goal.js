import './Goal.css'

function Goal(props) {
  const { text, img, link } = props
  return (
    <div className='goal'>

      <p className="goals">{text}</p>
      <a href={link} target='blank_'>
        <img src={img} className="goals-img" alt="image" />
      </a>

    </div>
  )
}
export default Goal

