/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Button } from 'react-bootstrap';
import { useAuth } from '../utils/context/authContext';
import { getAuthors } from '../api/authorData';
import AuthorCard from '../components/AuthorCard';

export default function Authors() {
  const [authors, setAuthors] = useState([]);
  const { user } = useAuth();
  const getAllTheArthors = () => {
    getAuthors(user.uid).then(setAuthors);
  };

  useEffect(() => {
    getAllTheArthors();
  }, []);

  return (
    <div className="text-center my-4">
      <Link href="/author/new" passHref>
        <Button>Add A Author</Button>
      </Link>
      <div className="d-flex flex-wrap">
        {authors.map((author) => (
          <AuthorCard key={author.firebaseKey} authorObj={author} onUpdate={getAllTheArthors} />
        ))}
      </div>
    </div>
  );
}
