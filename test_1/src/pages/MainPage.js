import React, { useState } from 'react';
import Button from '../components/Button';
import Input from '../components/Input';
import BookList from '../components/Booklist';
import './MainPage.css';

const MainPage = () => {
    const [bookTitle, setBookTitle] = useState('');
    const [books, setBooks] = useState([]);

    const handleAddBook = (event) => {
        event.preventDefault()
        if (bookTitle.trim() !== '') {
            setBooks([...books, bookTitle]);
            setBookTitle('');
        }
    };

    const handleDeleteBook = (index) => {
        setBooks(books.filter((_, i) => i !== index));
    };

    return (
        <div>
            <h1>Добавить книгу</h1>
            <form>
                <label htmlFor="bookInput">Название:</label>
                <Input
                    value={bookTitle}
                    placeholder="Введите название"
                    onChange={(e) => setBookTitle(e.target.value)}
                />
                <Button onClick={handleAddBook} label="Добавить" />
            </form>
            <BookList books={books} onDelete={handleDeleteBook} />
        </div>
    );
};

export default MainPage;
