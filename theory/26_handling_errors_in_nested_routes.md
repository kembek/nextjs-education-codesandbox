# Handling Errors in Nested Routes

Errors buble up to the closest parent error boundary.

An `error.tsx` file will cater to errors for all its nested child segments.

By positioning `error.tsx` files at different levels in the nested folders of a route, you can achieve a more granular level of error handling.