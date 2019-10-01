# Project Details Extension
Generates project details of a screen. This extension might be beneficial for you to find out the project details easily when a teammate shared a screen link with you — especially if you're working with a lot projects. 🕵️‍♀️

## Options

#### Display as JSON or Text

Sample JSON output
```
{
  "name": "I Scream, You Scream",
  "type": "ios",
  "density": "1x"
}
```

Sample text output:
```
Name: I Scream, You Scream
Type: ios
Density: 1x
```

#### Project properties
The extension displays **Project Name**, **Type** and **Density** by default. You can toggle the **Length Unit** and **Linked Styleguide** options as needed. All of these project details are optional.

## Development
React Native extension is developed using [zem](https://github.com/zeplin/zem), Zeplin Extension Manager. zem is a command line tool that lets you quickly create and test extensions.

To learn more about zem, [see documentation](https://github.com/zeplin/zem).