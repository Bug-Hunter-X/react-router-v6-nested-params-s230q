# React Router v6 Nested Routes: `useParams` Hook Issue

This repository demonstrates a common issue encountered when using nested routes and the `useParams` hook in React Router v6.  The problem occurs when a child route attempts to access its own parameter, but the parent route also has a parameter, causing the child parameter to be unexpectedly undefined.

The `bug.jsx` file shows the flawed implementation, resulting in the issue.  The solution, found in `bugSolution.jsx`, corrects this by correctly handling both parent and child parameters.