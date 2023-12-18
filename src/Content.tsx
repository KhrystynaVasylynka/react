import classes from './Content.module.scss'

type ContentType = {
	p1: string
	p2: string

bgColor:string
}


const Content = ({p1,p2,bgColor}: ContentType) => {
  return (
		<div
			// style={{
			// backgroundColor:bgColor,
			// }}
		>
			<p className={classes.red}>{p1}</p>
			<p className={classes.test}>{p2}</p>
      </div>
  )
}


export default Content