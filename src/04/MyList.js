import MyListData from './MyListData.json' ;
import MyListItem from './MyListItem';
export default function MyList() {
  console.log(MyListData)
  const tags = MyListData.map( item => <MyListItem 
                                        imgUrl = {item.imgUrl}
                                        key = {item.title}
                                        content = {item.content}
                                        title = {item.title} /> ) ;

  return (
    <div className='w-10/12 grid grid-cols-1 lg:grid-cols-2 gap-4'>
      {tags}
    </div>
  )
}