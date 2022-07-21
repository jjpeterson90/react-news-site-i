function Article(props) {

  const getPropByLine = () => {
    if (props.byline === null) return ''
    return props.byline
  }
 
  return (
    <div className="container">
      <div className="d-flex">
        { props.image ?
          <img src={props.image} className="rounded portrait me-3 align-self-center"/>
          : '' }
        <div className="">
          <h1 className="m-0 mb-2"><b>{props.title.replace('.','')}</b></h1>
          <p className="m-0 text-muted">Created: {props.created_date.substring(0,10)}</p>
          { props.byline ?
            <h3 className="m-0">{getPropByLine()}</h3>
            : ''
          }
          <p className="m-0">{props.abstract}</p>
        </div>
      </div>
    </div>
  )
}

export default Article;


// id: randomArticleIndex
// title: randomArticle.title
// abstract: randomArticle.abstract
// byline: randomArticle.byline
// image: randomArticle.multimedia.length ? randomArticle.multimedia[0].url : null
// created_date: randomArticle.created_date