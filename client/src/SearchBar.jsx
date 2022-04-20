import React, { useRef } from 'react';
import axios from 'axios';
import Form from 'react-bootstrap/Form';

const SearchBar = ({ setPosts, setLoading }) => {
    const searchValue = useRef('');
    const debounce = useRef();

    const handleChange = () => {
        if (debounce.current) {
            clearTimeout(debounce.current);
        }
        const pastValue = searchValue.current.value;
        if (pastValue === '') return;
        debounce.current = setTimeout(async () => {
            const currentValue = searchValue.current.value;
            if (pastValue === currentValue) {
                try {
                    setLoading(true);
                    const response = await axios.get(
                        `http://localhost:8080/posts/search/${currentValue}`
                    );
                    setPosts(response.data);
                    setLoading(false);
                } catch (error) {
                    setPosts([]);
                }
            }
        }, 1500);
    };
    return (
        <Form className="d-flex">
            <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                onChange={handleChange}
                ref={searchValue}
            />
        </Form>
    );
};

export default SearchBar;
