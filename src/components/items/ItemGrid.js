import Item from './Item'
import Spinner from '../ui/Spinner'

const ItemGrid = ({ items, isLoading}) => {
    return isLoading ? (
        <Spinner />
      ) : (
        <section className='cards'>
          {items?.map((item) => (
            <Item key={item.imdbID} item={item}></Item>
          ))}
        </section>
      )
    }

export default ItemGrid
