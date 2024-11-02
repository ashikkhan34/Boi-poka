import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const BookDetail = () => {

    const { bookId } = useParams();
    const id = parseInt(bookId)

    const data = useLoaderData();

    const book = data.find(b => b.bookId === id)
    console.log(book, id)

    const { bookId: currentBookId, image ,author,tags,bookName,review,rating,category,publisher,yearOfPublishing,totalPages} = book;

    return (
        <div className=" bg-base-200 ">
            <div className="flex ">
                <img
                    src={image}
                    className="max-w-lg rounded-lg shadow-2xl p-10" />
                <div className='p-5 ml-9 mb-3 space-y-3'>
                    <h1 className="text-5xl font-bold">{bookName}</h1>
                    <p>By : {author}</p>
                    <hr />
                    <p>{category}</p>
                    <hr />
                    <p>Review : {review}</p>
                    <div className='flex items-center'> Tag :
                    {
                            tags.map(tag => <p className='bg-slate-700 rounded-full px-5 text-green-600 ml-3'>{tag}</p>)
                        }
                    </div>  
                    <hr />
                    <p>Number of Pages : {totalPages}</p>
                    <p>Publisher : {publisher}</p>
                    <p>Years of publishing : {yearOfPublishing}</p>
                    <p>Rating : {rating}</p>
                    <div>
                        <button className='btn btn-success btn-outline'>Read</button>
                        <button className='btn btn-success ml-5 '>wishlist</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookDetail;