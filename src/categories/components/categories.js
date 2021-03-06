import React from 'react';
import Category from './category';

function Categories(props) {
  return (
    <div className="Categories">
      {
        props.categories.map((item) =>{
          return (
            <Category
              key={item.id}
              {...item}
              handleOpenModal={props.handleOpenModal}
            />
          )
        })
      }
    </div>
  )
}

export default Categories