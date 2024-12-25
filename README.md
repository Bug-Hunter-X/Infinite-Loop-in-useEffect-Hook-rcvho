# React useEffect Infinite Loop Bug

This repository demonstrates a common error in React's `useEffect` hook: creating an infinite loop by incorrectly specifying the dependency array. 

The `bug.js` file contains the buggy code, while `bugSolution.js` provides the corrected version.  The bug arises from calling `setCount` within the `useEffect` without any dependencies, leading to continuous updates and a loop.