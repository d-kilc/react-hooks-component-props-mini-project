export default function Article({id, minutes, preview, title, date}) {
    
    const readingMeter = []
    const readingMeterCaption = minutes + ' min read'

    const emojiCount = Math.ceil( minutes / 5 )

    //build the reading meter
    if(minutes < 30) {
        for (let i=0; i < emojiCount; i++) {
            readingMeter.push('☕️')
        }
    } else {
        for (let i=0; i < emojiCount; i++) {
            readingMeter.push('🍱')
        }
    }    
    
    return(
        <article>
            <h3>{title}</h3>
            <small>{date ? date : 'January 1, 1970'}</small>
            <br/>
            <small>{readingMeter} - {readingMeterCaption}</small>
            <p>{preview}</p>
        </article>
    )
}