import Article from './Article'

export default function ArticleList({posts}) {
    const articles = posts.map((post) => {
        return <Article key={post.id} 
            id={post.id}
            minutes={post.minutes}
            preview={post.preview}
            title={post.title}
            date={post.date}/>
    })

    return(
        <main>{articles}</main>
    )
}