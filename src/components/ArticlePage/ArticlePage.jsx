import React from 'react'
import ArticleHeader from '../ArticleHeader/ArticleHeader'
import { ArticlePopular } from '../ArticlePopular/ArticlePopular'
import Top3 from '../Top3/Top3'
import ArticlePargraph from '../ArticlePargraph/ArticlePargraph'
import WhatStyleArticle from '../WhatStyleArticle/WhatStyleArticle'

function ArticlePage() {
  return (
    <div>


      <ArticleHeader/>
      <ArticlePopular/>
      <Top3/>
      <WhatStyleArticle/>
    </div>
  )
}

export default ArticlePage