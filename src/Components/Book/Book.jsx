import React from 'react';
import { Link } from 'react-router-dom';

const Book = ({ book }) => {
    const { bookId,bookName, author, image, tags, category } = book;

    return (
       <Link to={`/books/${bookId}`}>
             <div className="card bg-base-100 w-96 shadow-xl p-6">
            <figure>
                <img
                    src={image}
                    className='h-52 p-4'
                    alt={author} />
            </figure>
            <div className="card-body">
                <div className='flex gap-5'>
                    {
                        tags.map(tag => <button className='px-5 text-green-400 rounded-full border btn py-1'>{tag}</button>)
                    }
                </div>
                <h1 className='text-2xl font-bold '>{bookName}</h1>
                <p>By : {author}</p>

                <div className='border-t-2 border-dashed'></div>

                <div className="card-actions justify-between">
                    <div className="badge badge-outline">{category}</div>
                    <div className=" badge-outline">

                        <div className="rating">
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" defaultChecked />
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-100" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
       </Link>
    );
};

export default Book;