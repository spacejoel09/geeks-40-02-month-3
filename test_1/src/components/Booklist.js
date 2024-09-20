import React from 'react';
import './Booklist.css';

const BookList = ({ books, onDelete }) => {
    return (
        <div className="book-list">
            <h3 className="h2-eshkere">Название</h3>
            {books.map((book, index) => (
                <div >
                    <div key={index} className="book-item">
                        <div className="book-title">{book}</div>

                        <div>
                            <button className="delete-button" onClick={() => onDelete(index)}>Удалить</button>
                        </div>
                    </div>
                    <hr className="separator" />


                </div>

            ))}

        </div>
    );
};

export default BookList;
