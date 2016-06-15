import React from 'react'

const Utility = {

  formatStory: function(item, type) {
      item.classname = item.type ? 'element newsItem is-' + item.type : 'element newsItem';
      item.classname = item.theme == 'light' ? item.classname + ' is-light' : item.classname;

      switch(type) {
        case 'featured' :
          return (
            <div className={item.classname}>
              <div className="newsItem__img"></div>
              <div className="newsItem__column">{item.column}</div>
              <div className="newsItem__title">{item.title}</div>
              <div className="newsItem__author">By {item.author}</div>
              <div className="newsItem__preview">{item.preview}</div>
            </div>
          );
          break; 

        case 'featured2':
          return (
            <div className={item.classname}>
              <div className="newsItem__column">{item.column}</div>
              <div className="newsItem__title">{item.title}</div>
              <div className="newsItem__author">By {item.author}</div>
              <div className="newsItem__preview">{item.preview}</div>
              <div className="newsItem__img"></div>
            </div>
          );
          break; 

        case 'featuredAuthor':
          return (
            <div className={item.classname}>
              <div className="newsItem__authorimg"></div>
              <div className="newsItem__column">{item.column}</div>
              <div className="newsItem__author">By {item.author}</div>
              <div className="newsItem__title">{item.title}</div>
            </div>
          );
          break;

        case 'sponsored':
          return (
            <div className={item.classname}>
              <div className="newsItem__column">{item.column}</div>
              <div className="newsItem__title">{item.title}</div>
              <div className="newsItem__img"></div>
              <div className="newsItem__preview">{item.preview}</div>
            </div>
          );
          break;

        case 'noimg':
          return (
            <div className={item.classname}>
              <div className="newsItem__column">{item.column}</div>
              <div className="newsItem__author">By {item.author}</div>
              <div className="newsItem__title">
                {item.title}
                <span className="newsItem__timestamp">{item.timestamp}</span>
              </div>
              
            </div>
          );
          break;

        case 'thumb':
        default:
          return (
            <div className={item.classname}>
              <div className="newsItem__column">{item.column}</div>
              <div className="newsItem__title">{item.title}</div>
              <div className="newsItem__author">By {item.author}</div>
              <div className="newsItem__img"></div>
              <div className="newsItem__preview">{item.preview}</div>
            </div>
          );
      }
  }
} 


export default (Utility);