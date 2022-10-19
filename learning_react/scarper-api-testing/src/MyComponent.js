import {useEffect, useState} from 'react';

function MyComponent() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
  
    // Note: the empty deps array [] means
    // this useEffect will run once
    // similar to componentDidMount()
    useEffect(() => {
        let username = "user24";
        let password = "user24";
        let headers = new Headers();
        headers.set('Authorization', 'Basic ' + btoa(username + ":" + password));
      fetch("/api/auth/login/",
        {
            method:"POST",
            headers: headers,
        })
        .then(res => res.json())
        .then(
          (result) => {
            setIsLoaded(true);
            setItems(result);
          },
          // Note: it's important to handle errors here
          // instead of a catch() block so that we don't swallow
          // exceptions from actual bugs in components.
          (error) => {
            setIsLoaded(true);
            setError(error);
          }
        )
    }, [])
  
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <ul>
            <li>
              {items.expiry} {items.token}
            </li>
        </ul>
      );
    }
  }

export default MyComponent