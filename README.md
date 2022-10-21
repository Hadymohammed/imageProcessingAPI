# imageProcessingAPI
imageProcessingAPI project build as a task for Advanced Web Development track by Udacity.
##Task
Building an API that processes images by resizing it.
##Scripts
-"build": "npx tsc",
-"prettier": "prettier --config .prettierrc.json \"src/**/*.ts\" --write",
-"lint": "eslint . --ext .ts",
-"jasmine": "jasmine",
-"test": "npm run build && npm run jasmine"
##endpoints
- /api/image?filename=test.jpg&width=500&height=500 
- /api/image?filename=test.jpg&width=400&height=400
