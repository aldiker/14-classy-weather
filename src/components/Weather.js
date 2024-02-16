import React from 'react'
import Day from './Day'

// function getToday(dateStr) {
//     const today = new Date()
//     const year = today.getFullYear()
//     let month = today.getMonth() + 1
//     month = month < 10 ? '0' + month : month
//     let day = today.getDate()
//     day = day < 10 ? '0' + day : day

//     const todayFormated = `${year}-${month}-${day}`

//     return todayFormated === dateStr
// }

export default class Weather extends React.Component {
    componentWillUnmount() {
        console.log('Weather is unmounted')
    }
    render() {
        // console.log('rendered')
        // console.log(this.props)
        const {
            temperature_2m_max: max,
            temperature_2m_min: min,
            time: date,
            weathercode: codes,
        } = this.props.weather

        const today = new Date()
        const year = today.getFullYear()
        let month = today.getMonth() + 1
        month = month < 10 ? '0' + month : month
        let day = today.getDate()
        day = day < 10 ? '0' + day : day

        const todayFormated = `${year}-${month}-${day}`

        return (
            <div>
                <h2>
                    Weather - {this.props.location} - {date.at(0)}
                </h2>
                <ul className='weather'>
                    {max.map((el, idx) => (
                        <Day
                            max={max[idx]}
                            min={min[idx]}
                            date={date[idx]}
                            code={codes[idx]}
                            key={idx}
                            isToday={todayFormated === date[idx]}
                        />
                    ))}
                </ul>
            </div>
        )
    }
}
