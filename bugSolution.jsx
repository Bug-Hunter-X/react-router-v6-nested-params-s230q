The solution involves ensuring that the parent route's parameter is either passed down explicitly to the child component or that the child route's path definition is adjusted to account for the parent parameter.

Method 1: Explicitly passing the parent parameter down to the child route
```jsx
// Parent Route
<Route path=':parentParam' element={<ParentComponent/>}>
</Route>

function ParentComponent(){
  const { parentParam } = useParams();
  return (
    <Route path=':childParam' element={<ChildComponent parentParam={parentParam}/>}/>
  );
}

// Child Component
function ChildComponent({parentParam}){
  const { childParam } = useParams();
  console.log(parentParam, childParam); // Both parameters will be correctly accessed.
}
```

Method 2: Adjusting the child route's path
```jsx
// Parent Route
<Route path=':parentParam'>
  <Route path=':childParam' element={<ChildComponent/>}>
  </Route>
</Route>

// Child Component
function ChildComponent(){
  const { parentParam, childParam } = useParams();
  console.log(parentParam, childParam); // Both parameters will be correctly accessed.
}
```
By either method, both the parent and child parameters will be correctly available in the child component.