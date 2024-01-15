# Private folders

A private folder indicates that it is a private implementation detail and should not be considered by the routing system.

The folder and all its subfolders are excluded from routing.

Prefix the folder name with an uderscore.

## Private folders contd.

For separating UI logic from routing logic.

For consistently organizing internal files across a project.

For sorting and grouping files in code editors.

And finally, for avoiding potential naming conflicts with future Next.js file conventions.

If you want to include an underscore in URL segments, you can prefix the folder name with "%5F", which is the URL-encoded form of an underscore.
