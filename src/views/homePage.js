import { useSelector } from 'react-redux';

export const Homepage = () => {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  return (
    <>
      <div className="Homepage">
        {' '}
        {isLoggedIn ? (
          <h2>Nice to see you again</h2>
        ) : (
          <h2>Welcome, stranger</h2>
        )}
      </div>
    </>
  );
};
