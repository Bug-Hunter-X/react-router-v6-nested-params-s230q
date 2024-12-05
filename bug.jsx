In React Router Dom v6, a common issue arises when working with nested routes and the `useParams` hook.  If a parent route has a parameter, and a child route also has a parameter, the child route might not correctly access its own parameter if the parent parameter isn't handled properly.  This typically results in the child route's parameter being `undefined`.

Example:

```jsx
// Parent Route
<Route path=':parentParam'>
  <Route path=':childParam'>
    <ChildComponent />
  </Route>
</Route>
```

```jsx
// Child Component
function ChildComponent(){
  const { childParam } = useParams();
  console.log(childParam); // Might be undefined
}
```