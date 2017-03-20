## Introduction
Single page app that displays top ten news videos from AJ+ API, and links to a detailed show page with embedded video player.

## How to Run Locally
Download files
```run npm install```
```run npm start```
Navigate to ```localhost:8080```

## Architecture

###  Components
-  Video Index Container
-  Video Index Component
-  Video Index Item
-  Video Show Container
-  Video Show
-  Root
-  App
-  Entry
-  Loader

### Redux State Shape
```
state: {
  videos: [...],
  current_video: {},
  current_emotions: {}
}
```
### API HTTP Requests
-  ```fetchAllVideos()```
-  ```fetchVideo(id)```
-  ```fetchEmotions(id)```
-  ```postEmotion(emotion)```

### Dispatched Actions
-  ```receiveAllVideos()```
-  ```receiveVideo(id) ```
-  ```receiveEmotions(id)```
-  ```requestAllVideos()```
-  ```requestVideo(id)```
-  ```requestEmotions(id)```
-  ```postReaction(emotion)```
