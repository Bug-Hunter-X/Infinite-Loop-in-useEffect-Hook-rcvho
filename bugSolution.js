```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Correct: Adding an empty dependency array ensures the effect runs only once after the initial render
    // Alternatively, you could specify dependencies that would trigger the useEffect to run again.
    console.log('Effect ran!');
  }, []);

  return <div>Count: {count}</div>;
}
```