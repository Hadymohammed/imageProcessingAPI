# imageProcessingAPI
imageProcessingAPI project build as a task for Advanced Web Development track by Udacity.
## Task
Building an API that processes images by resizing it.
## Scripts
- "build": "npx tsc"
- "prettier": "prettier --config .prettierrc.json \"src/**/*.ts\" --write"
- "lint": "eslint . --ext .ts"
- "jasmine": "jasmine"
- "test": "npm run build && npm run jasmine"
- "start": "npm run lint && npm run build && npm run jasmine && node build/server.js"
## Modules
- createHTML.ts --> contains(createPage(),createError(err)) used to return HTML structure to render it in the endpoint
- findImg.ts --> contains(findProcessedImg(filename),findRawImg(filename)) returns details about if the file is found or not
- logger.ts --> middleware build to log the endpoint params
- imgResize.ts --> contains(validTransform(filename,width,height),transform(filename,width,height)) to validate the endpoint query and produce the resized image
## endpoints
- /api/image?filename=test.jpg&width=500&height=500 
- /api/image?filename=test.jpg&width=400&height=400
