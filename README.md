# Jupyter-Setup
[![GitHub license](https://img.shields.io/badge/License-MIT%20-blue)](https://github.com/clissa/jupyter-setup/blob/main/LICENSE)
[![GitHub commit](https://img.shields.io/github/last-commit/clissa/jupyter-setup)](https://github.com/clissa/cell-segmentation/commits/master)

## Introduction
This repository sets up jupyter with useful extensions and custom format and rendering for new notebooks at startup.

In particular, this enables:
 - execute_time
 - autopep8
 - toc
 - line_numbers
 - custom_setup
 
The latter is a custom extension configurable by editing the `main.js` file in the *custom_setup* folder.
**Note:** after editing you have to re-install the extension with `jupyter contrib nbextension install --user`
 
Also, the *custom.css* file is used for customised rendering of notebook markdown cells. 

## Installation
```
git clone
cd <repo>
bash configure.sh
```

## Acknowledgements
This repository was inspired by [WillKoehrsen/Data-Analysis/setup](https://github.com/WillKoehrsen/Data-Analysis). 
Please check his [Towards Data Science Medium page](https://medium.com/@williamkoehrsen) for other interesting contents.
