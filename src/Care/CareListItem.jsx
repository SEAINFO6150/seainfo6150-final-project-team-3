import React from "react";
import style from './styles/CareListItem.css'


const CareListItem = ({article, enterDetail}) => {
  // 把值解构出来，就不用重复写 props.article
  const { title, image, slug, shortText, pubDate, pubYear, author} = article;

return (
  // onClick 函数将 title 传递给父组件，一般进入详情页都是传 id，因为详情页可以根据 id 去向后端请求获取详情页数据
  <div className="article-container" onClick={() => enterDetail(title)}>
        <img className="article-img" src={image._url} alt={title} />
        <div className="article-content">
          <h3 className="article-title">{title}</h3>
          <p className="article-text">{shortText}</p>
        </div>
        <div className="left-button">
        </div>
    </div>
  );
};

export default CareListItem;
