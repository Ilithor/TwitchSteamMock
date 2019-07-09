# Video Streaming App

> ## Note: 
> This project assumes use of Yarn, you can use NPM but some of the automation features may break.

## Running for the first time
### Installing application
Once the project has been pulled from the repository, install the necessary packages by using the install command in the main directory, which should install all necessary packages in all the sub-directories.

```
yarn install
```

### Starting application
The root project directory is set up to launch all the microservices from a single package.json script:
```
yarn start
```

#### Details for nerds:
The root project uses concurrently to install or launch all the microservices from one command.

### How to Setup and Run a Stream
To stream to the application, use a platform, such as OBS. 

In the settings menu, navigate to the Stream tab, and input into the URL section: rtmp://localhost/live. 

For the stream key, it will require the created stream's id key, which can be found in the address bar when the stream is selected in 
the Steam List (ex: http://localhost:3000/streams/1, the 1 is the id key). 

Create a new scene, then create 2 sources, an Audio Input Capture and a Display Capture. 

For the Audio Input Capture, set the device to your preferred microphone.

For the Display Capture, set the display to your current main monitor. 

To go live, just click the Go Live button.

When finished, click the End Stream button.
