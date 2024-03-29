# Custom-Jupyter-Setup
[![GitHub license](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/clissa/custom-jupyter-setup/blob/main/LICENSE)
[![GitHub commit](https://img.shields.io/github/last-commit/clissa/custom-jupyter-setup)](https://github.com/clissa/custom-jupyter-setup/commits/master)

## Introduction
This repository sets up jupyter with useful extensions and custom format and rendering for new notebooks at startup.

In particular, this enables:
 - execute_time
 - autopep8
 - toc
 - line_numbers
 - custom_setup
 
The latter is a custom extension configurable by editing the *main.js* file in the `custom_setup` folder.
 
Also, the *custom.css* file is used for customised rendering of notebook markdown cells. 

## Installation
```
# clone
git clone git@github.com:clissa/custom-jupyter-setup.git

# move in the repository folder
cd custom-jupyter-setup

# run configuration script
bash configure.sh
```

## Update
In order to update the startup setting with your own version you need to:
 - modify the *main.js* file in the `custom_setup` folder; in case you don't know how, please check this [blog post](https://towardsdatascience.com/how-to-write-a-jupyter-notebook-extension-a63f9578a38c)
 - re-install the modified version of **custom_setup** extension by running *update_extension.sh* script, e.g. on linux `bash update_extension.sh` 

## Acknowledgements
This repository was inspired by [WillKoehrsen/Data-Analysis/setup](https://github.com/WillKoehrsen/Data-Analysis). 
Please check his [Towards Data Science Medium page](https://medium.com/@williamkoehrsen) for other interesting contents.
