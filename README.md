# Overview
A NPM package for getting basic file information like name, size, last modified and type.

[![Build Status](https://dev.azure.com/dv-github-repos/get-file-info/_apis/build/status/deanilvincent.get-file-info?branchName=master)](https://dev.azure.com/dv-github-repos/get-file-info/_build/latest?definitionId=2&branchName=master)

# Installation

`npm i get-file-info --save`

# Setup & Basic Usage
Put the method `fileInfo.get()` inside the file input function `onchange` (or any equivalent depending on your framework or library) to get the `attach.target.files`

```
const fileInfo = require('get-file-info')

fileInputChange(attach){
    console.log(fileInfo.get(attach.target.files))
    // will show
    {
        name: "TestImage.png",
        size: "1.2 MB",
        type: "image/png",
        lastModifiedDate: "Fri Aug 28 2020 05:44:02 GMT+0000 (Coordinated Universal Time)",
    }
}
```
Note: This only works for single attachment in a input file type (for now).

# Additional info

How it works? When the user put a file inside the input, then the method `fileInfo.get()` will return the following basic info:

| Info | Example | 
| - | - |
| name | TestImage.png |
| size | 1KB, 1MB, 1GB and 1TB (depending on the size from bytes) |
| type | "image/png" <i>(If unrecognized file type, then it will return 'Unrecognized file.')</i> |
| lastModifiedDate | Fri Aug 28 2020 05:44:02 GMT+0000 (Coordinated Universal Time) |

### Contribute

Feel free to clone or fork this project:  `https://github.com/deanilvincent/get-file-info.git`

Contributions & pull requests are welcome!

I'll be glad if you give this project a ★ on [Github](https://github.com/deanilvincent/get-file-info) :))

### License

This project is licensed under the MIT License - see the  [LICENSE.md](https://github.com/deanilvincent/get-file-info/blob/master/LICENSE) file for details.