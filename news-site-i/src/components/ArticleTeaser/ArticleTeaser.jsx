
function ArticleTeaser(props) {
  
  return (
    <div className="container text-center">
      <h3 className="m-0 text-capitalize">
        <a href="" onClick={() => props.handleTitleClick(props.id)}>
          {props.title.replace('.','')}
        </a>
      </h3>
      <p className="m-0 text-muted">
        Created: {props.created_date.substring(0,10)}
      </p>
    </div>
  )
}

export default ArticleTeaser;



// id = {article.id}
// title = {article.title}
// created_date = {article.created_date}
// handleTitleClick = {handleTitleClick}