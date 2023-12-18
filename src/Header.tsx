import classes from './Header.module.scss'
import clsx from 'clsx'

type HeaderType = {
    title: string
	num?: number
}

const Header = ({ title, num }: HeaderType) => {
    return (
        <>
            <h1
                className={clsx(`${classes.test}`, {
                    [classes.red]: num === 10,
                })}
            >
                Hello world,{title} {num} 
            </h1>
        </>
    )
}

export default Header
